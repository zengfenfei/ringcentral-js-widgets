'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _messageSenderMessage;

var _messageSenderMessages = require('ringcentral-integration/modules/MessageSender/messageSenderMessages');

var _messageSenderMessages2 = _interopRequireDefault(_messageSenderMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_messageSenderMessage = {}, (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sendSuccess, 'Envoi réussi.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sendError, 'Une erreur s\'est produite lors de l\'envoi du message.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.numberValidateError, 'Erreur de validation du numéro de téléphone.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.textEmpty, 'Veuillez saisir le texte à envoyer.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noPermission, 'Vous n\'êtes pas autorisé à envoyer des messages.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderEmpty, 'Vous devez sélectionner un numéro parmi les numéros de téléphone pour envoyer'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noToNumber, 'Veuillez saisir un numéro de téléphone valide.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.recipientsEmpty, 'Veuillez saisir un numéro de destinataire valide.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.textTooLong, 'Le texte est trop long, limite : 1 000'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.recipientNumberInvalids, 'Le numéro du destinataire n\'est pas valide'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noAreaCode, 'Veuillez paramétrer {areaCodeLink} pour utiliser des numéros de téléphone locaux à 7 chiffres.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.specialNumber, 'La composition de numéros d\'urgence ou renvoyant à des services spéciaux n\'est pas prise en charge.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.connectFailed, 'Échec de la connexion. Veuillez réessayer plus tard.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.internalError, 'Connexion impossible en raison d\'erreurs internes. Veuillez réessayer plus tard.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.notAnExtension, 'Le numéro de l\'extension n\'existe pas.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.networkError, 'Connexion impossible en raison de problèmes de réseau. Veuillez réessayer plus tard.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.notSmsToExtension, 'Impossible d\'envoyer au num\xE9ro d\'extension avec le num\xE9ro de t\xE9l\xE9phone principal.\n    Si vous souhaitez envoyer \xE0 un num\xE9ro d\'extension,\n    veuillez simplement saisir ce num\xE9ro.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderNumberInvalids, 'Vous ne pouvez pas envoyer de SMS\n    depuis votre num\xE9ro de t\xE9l\xE9phone. Veuillez contacter votre administrateur de compte.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.internationalSMSNotSupported, 'L\'envoi de SMS vers un num\xE9ro de t\xE9l\xE9phone international n\'est pas\n    pris en charge.'), (0, _defineProperty3.default)(_messageSenderMessage, 'areaCode', 'indicatif régional'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderNumberInvalid, 'Un num\xE9ro de t\xE9l\xE9phone valide est requis pour envoyer\n    un texto \xE0 des destinataires en dehors de votre entreprise. Veuillez contacter votre administrateur\n    pour ajouter un num\xE9ro direct \xE0 votre compte.'), _messageSenderMessage);
//# sourceMappingURL=fr-FR.js.map
