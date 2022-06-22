$(function(){
    let body = $('body');
    let stage = $('#stage');
    let back = $('#backBtn');

    //Schritt 1 - Ver-/Entschlüsselung auswählen

    $('#step1 .encrypt').click(function(){
        $(back).show();
        body.attr('class', 'encrypt');
        $('#step1').hide();
        $('#step2 .if-encrypt').show();
    });

    $('#step1 .decrypt').click(function(){ 
        $(back).show();       
        body.attr('class', 'decrypt');
        $('#step1').hide();
        $('#step2 .if-decrypt').show();  
    });

    //Schritt 2 - Datei zum Ver-/Entschlüsseln auswählen

    var file = null;

    $('#step2').on('change', '#encrypt-input', function(e){
        //Prüfen ob file ausgewählt wurde
        if(e.target.files.length!=1){
            M.toast({html: 'Wählen Sie eine Datei aus!'})
            return false;
        }

        file = e.target.files[0];
        console.log(file);

        if(file.size > 1024*1024){
            M.toast({html: 'Wählen Sie eine kleinere Datei aus!'})
            return;
        }
        $('#step2').hide();
        $('#step3 .if-encrypt').show();  
    });

    $('#step2').on('change', '#decrypt-input', function(e){
        //Prüfen ob file ausgewählt wurde
        if(e.target.files.length!=1){
            M.toast({html: 'Wählen Sie eine Datei aus!'})
            return false;
        }
        file = e.target.files[0];
        if(file.size > 1024*1024){
            M.toast({html: 'Wählen Sie eine kleinere Datei aus!'})
            return;
        }
        $('#step2').hide();
        $('#step3 .if-decrypt').show();  
    });

    //Schritt 3 - Ver-/Entschlüsseln Knopf betätigen
    
    $('a.process').click(function(){
        var input = $(this).parent().find('input[type=password]')
        let a = $('#step4 a.download')
        let password = input.val();
        input.val('');
        //Mit FileReader kann Inhalt einer Datei gelesen werden
        var reader = new FileReader();

        if(body.hasClass('encrypt')){
            //Datei soll verschlüsselt werden
            if(password.length<12){
                alert('Wählen Sie bitte ein längeres Passwort!');
                return;
            }
            //Enkodiert den Inhalt der Datei in eine data-uri & triggered den onload handler mit dem Resultat
            reader.readAsDataURL(file);
            reader.onload = function(e){
                console.log(e.target.result);
                let encrypted = CryptoJS.AES.encrypt(e.target.result, password);

                //Download URL erstellen mit encrypted Datei-Inhalt
                a.attr('href', 'data:application/octet-stream,' + encrypted);
                a.attr('download', file.name + '.encrypted');

                $('#step3').hide();
                $('#step4').show();
            };
        }
        else {
            reader.readAsText(file);

            //Datei soll entschlüsselt werden
            reader.onload = function(e){
                
                let decrypted = CryptoJS.AES.decrypt(e.target.result, password).toString(CryptoJS.enc.Latin1);
                console.log("Decrypted File content: " + decrypted);

                if(!/^data:/.test(decrypted)){
                    alert("Passwort ist falsch. Bitte versuchen Sie es erneut!");
                    return false;
                }

                a.attr('href', decrypted); 
                a.attr('download', file.name.replace('.encrypted',''));

                $('#step3').hide();
                $('#step4').show();
            };

            
        }
    });

    back.click(function(){   
        location.reload(true);
    });
   
});

