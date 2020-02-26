
var banners = ["https://media.gettyimages.com/vectors/black-friday-design-for-advertising-banners-leaflets-and-flyers-vector-id1060912976?k=6&m=1060912976&s=612x612&w=0&h=kZpPDpgo-34V2Sxrun9jQFuRX7MaxP4xFj_M8qWRn0w=", "https://media.gettyimages.com/vectors/everyday-low-price-sale-tag-vector-id610584574?k=6&m=610584574&s=612x612&w=0&h=C9r2Rbs3IqBD2yzWrv7wlhLlSmtMpZKFLVnn1cZ8YhE="];
var bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.banner-destaques img').src = banners[bannerAtual];
}

var timer = setInterval(trocaBanner, 4000);
var controle = document.querySelector('.pause');

controle.onclick = function() {
    if (controle.className == 'pause') {
        cleanInterval(timer);
        controle.className = 'play';
    } else {
        timer = setInterval(trocaBanner, 1000);
        controle.className = 'pause';
    }
    
    return false;
}