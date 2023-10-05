<?php


$conn = new mysqli("localhost", "root", "", "5a_Ospedale");
if ($conn->connect_error) {
  die("Connessione al database fallita: " . $conn->connect_error);
}

$query = "SELECT * FROM pazienti";

$result = $conn->query($query);
if (!$result) {
  die("Errore nell'esecuzione della query: " . $conn->error);
}
else{
    $pazienti = array();
while ($row = $result->fetch_assoc()) {
  $paziente = array(
    "id" => $row["id"],
    "np" => $row["nome_paziente"],
    "cp" => $row["cognome_proprietario"],
    "dn" => $row["data_nascita"],
    "vis" => $row["visite"]
  );
  array_push($pazienti, $paziente);
}
}
// Chiudo la connessione al database
$conn->close();

// Ritorno i dati in formato JSON
header('Content-Type: application/json');
echo json_encode($pazienti);


?>