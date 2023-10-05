<?php
// Ricevi i dati JSON dalla richiesta POST$input = file_get_contents("php://input");
$data = json_decode($input);


if ($data === null) {

    die("Errore nella decodifica dei dati JSON.");
}
else{
  $nome = $data->nome;
$proprietario = $data->proprietario;
$dataN = $data->dataN;
$visita = $data->visita;

$conn = new mysqli("localhost", "root", "", "5a_Ospedale");
if ($conn->connect_error) {
  die("Connessione al database fallita: " . $conn->connect_error);
}
// Preparo la query
$query = "INSERT INTO pazienti (nome_paziente, cognome_proprietario, data_nascita, visite) VALUES ('$nome', '$proprietario', '$dataN', '$visita')";
// Eseguo la query
$result = $conn->query($query);
if (!$result) {
  die("Errore nell'esecuzione della query: " . $conn->error);
}
else{
    
}


$conn->close();
  
}





?>