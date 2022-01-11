const { sayHelloTo } = require('./send-messages/say-hello-to')
const { giveMessageToMrsPotato } = require('./send-messages/give-message-to-mrs-potato')
const {message1: msg1, message2: msg2, message3: msg3 } = require('./messages')

// If you are pulling in files from the same folder you can use ('./ ) aka a single dot slash
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);
