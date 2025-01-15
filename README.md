# js-simon
Esercizio: Simon Says

DESCRIZIONE:
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi. 
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

NOTA:
non è importante l’ordine con cui l’utente inserisce i numeri, basta che ne indovini il più possibile.

BONUS:
Inseriamo la validazione: se l’utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

LOGICA:
-Faccio apparire 5 numeri random dentro gli input che vadano da 1 a 50.
-Dalla comparsa dei numeri random si avvierà un timer (countdown).
-Dopo il countdown i numeri scompariranno lasciando uno spazio vuoto che l'utente andrà a compilare.
-La compilazione prevede solo l'inserimento di numeri scelti dall'utente.
<!-- devo impedire all'utente di mettere 2 volte lo stesso numero o inserire caratteri che non siano numeri, se l'utente ha inserito qualcosa di non valido vado a visualizzarlo con un disclaimer nel form -->
-La macchina andrà a verificare (anche se l'ordine di inserimento non è identico a quello precedentemente visualizzato) se i numeri inseriti dal'utente siano giusti o meno.
<!-- Lo scopo sarà quello di indovinare i numeri precedentemente visualizzati. -->
-Come output andrò a indicare sulla pagina quali e quanti numeri ha inserito correttamente l'utente.


