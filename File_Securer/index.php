<!DOCTYPE html>
<html>

    <head>
        <meta charset="utf-8"/>
        <title>JavaScript File Encryption App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Mat fonts -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet">

        <!-- Compiled and minified Mat CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

        <!-- Compiled and minified Mat JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        
        <!-- UO Stylesheet -->
        <link href="./css/style.css" rel="stylesheet" />
    </head>

    <body>
    <div id="backBtn" class="center">
        <a class="btn-floating btn-large waves-effect waves-light red back"><i class="material-icons md-48">arrow_back</i></a>
    </div>
   

        <div class="container" id="stage">

            <div id="step1">
                <div class="content">
                    <h1>Was möchten Sie tun?</h1>
                    <a class="btn-large encrypt green">Datei verschlüsseln</a>
                    <a class="btn-large decrypt magenta">Datei entschlüsseln</a>
                </div>
            </div>

            <div id="step2">
                <div class="content if-encrypt">
                    <h1>Wählen Sie die zu verschlüsselnde Datei!</h1>
                    <input type="file" id="encrypt-input" />
                </div>

                <div class="content if-decrypt">
                    <h1>Wählen Sie die zu entschlüsselnde Datei!</h1>
                    <input type="file" id="decrypt-input" />
                </div>
            </div>

            <div id="step3">
                <div class="content if-encrypt">
                    <h1>Geben Sie ein Passwort ein</h1>
                    <h2>Dieses Passwort wird als Encryption-Key verwendet.</h2>

                    <input placeholder="Mindestens 12 Zeichen" type="password"/>
                    
                    <a class="btn-large process red">Verschlüsseln!</a>
                </div>

                <div class="content if-decrypt">
                    <h1>Geben Sie Ihr Passwort ein</h1>
                    <h2>Sie müssen das Passwort, welches für die Verschlüsselung der Datei verwendet wurde, verwenden.</h2>

                    <input type="password"/>
                    <a class="btn-large process red">Entschlüsseln</a>
                </div>

            </div>

            <div id="step4">

                <div class="content">   
                    <h1>Ihre Datei ist bereit!</h1>
                    <a class="btn-large download green">Download</a>
                    
                </div>

            </div>
        </div>

    </body>

    <script src="./js/aes.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="./js/script.js"></script>

</html>