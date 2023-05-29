// Replaces Google Maps links with Apple Maps links on iOS

const pittLink = document.getElementById('pitt-link');
const gavleLink = document.getElementById('gavle-link');

// ios
if (navigator.userAgent.toLowerCase().includes('ios') ||
    navigator.userAgent.toLowerCase().includes('iphone') || 
    navigator.userAgent.toLowerCase().includes('ipad')) {
    pittLink.setAttribute('href', 
        'https://maps.apple.com/?address=Pittsburgh,%20PA,%20United%20States&auid=6545431064342190575&ll=40.437860,-79.996257&lsp=7618&q=Pittsburgh');
    gavleLink.setAttribute('href', 
        'https://maps.apple.com/?address=G%C3%A4vle,%20Sweden&auid=17696208056759799364&ll=60.785093,17.275947&lsp=6489&q=G%C3%A4vle');
}