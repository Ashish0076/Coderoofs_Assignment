import './CardBox.css';

function CardBox() {
    return (
        <div className="card-main">
            <div className="card-box1">
                {btnData.map((label, index) => (
                    <button key={index} className="btn1">{label}</button>
                ))}
            </div>
            <div className="card-box2">
                {cardData.map((link, index)=>(
                    <img src={link} alt="#" />
                ))}
            </div>
            <div className="card-box3">
                {lastBtnData.map((label, index)=>(
                    <button key={index} className="btn2" >{label}</button>
                ))}
            </div>
        </div>
    );
}

export default CardBox;


var btnData = ['AVATAR', 'STYLE', 'CHARACTER', 'WRITE', 'ILLUSTRATE', 'PUBLISH'];


var cardData =[
    "https://s3-alpha-sig.figma.com/img/4819/f81b/71acd24a3a2685792a890a01e1589eb0?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEYpjETvtjmS18AAhzsT3p-pk6Wc1JoFsosEPZMsoa1K4MZGn4TGjG7uONRlB0zXPTKZA8ub9M8rGUG6BQb7Tet~86KxdhFEhh2frzdqhH3g16Kc-~tUzDfMC5xaJPuQNcYBS8umD6sUB~l0RlV473s5Q3~v0l7kubtQU0TvDK0eJkwJqR86z0VT7ptB2OcZ9G6OdoAQXXrmng9zTYAUbzjO0h5m3de5i4CKVdEtJ8tNf~-SBhPwjfQKJg4iyyxghuHQRuivymDta1mcs40NVXRdXtu809i4JFUTf0cAExikIY~0VVRlthbPaoWQbbpDpblc5etuBKZqKG~SsDSwAg__",
    "https://s3-alpha-sig.figma.com/img/86d5/6a1c/99d78c6f2c7d5cebd6d7a3de63a08653?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MjJq2KBohzy6DKhtfIvXvv989BalWHVmv63NefSLnv7bnRP3nvcz49tYWAzmetLkV80DPYdUtpIQjqwNDKuWXTZVaw8PNTQuWr-ykl9viY1Q6lrScR11BkzrDMTrYOXqhE6Ma2ulGUG10g2v9Rn~AKHTOovfbMxUfmmKdV-G~6t0clkic3-yi1r-KIL7sQ2DfmRyNQ~tC2TZ4p-clxdgsdX63cGmaMrMNUdrZ40u498nFUc596c9OkYB8ZlEx~3IvIHW5o-T1h3F5KXlXV6aQ8oAmNO7mXQwQSwMtua4B70AM2dP1jm~C5ojXLN2KAeGL28-iVqc07FVBm46jSqe1A__",
    "https://s3-alpha-sig.figma.com/img/4ec5/2ffd/c9233f0b12bf82bf45f7415d45f91e84?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=np5sT7mYLBJu8MSyewQ3N41OSbVOZNn7HrZja9NrVKEcvgLU7j7VJY1rL1qIy3vcwbNtBG6NWLWLJrkI23SFHxb4cfnsD5Y2OTYWuFPbEw6bC4BrJU~8KdGSraSAyDnDkmX6UU8HrNmzRiBROfAL34MuXgZ1EyzHVk0l9yoygkeaImLJy~il4K1phb73AXD2ed2tJgDroW47qY2YVUIgHa751qKEk7LSwVk73ayHYKAUUKmsxjNQnoBw062nfykUe8QoTtsk6wFBh5ZGb8~BGz2NJqqUeb4X2~ywR2cdzCk-DkZQrDosJlFj2WuaLR1Rc~lMESrVCD8eeHCjQQUO6w__",
    "https://s3-alpha-sig.figma.com/img/d687/a759/2b032fffa308c1d805fbd3cd10357f95?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jxb6I5USEXgZnYRaqndrAkqt9969ctoUlrDAaxzDOi7HaerHSe-tiFizJ9bFM-tT627~b6xodzM6TYJr6X0NEHPmkl8EnESwR-yjKZPui8MWXOS17QTnWW1Ml7uZYRLgDzclx8bstSF0Mt-0SNrAqcIC8O8088DVr204BHZB~Tp1X7KSkiwV3n6RyFqz9dmQfQaXs-a9pJBqYyNoZC8Tiw4~sREUzbEQlyXblb1K8GMmVwTiE4gk-WIXVvUrY7WUnqfs04QToMpYUk4~o3YVEkhQpqCwjqkipStTXCEmP9pjIGDzW~Wx3rLnHCBWFfDzqnnX~wYWHoRsnun4h5uOJw__",
    "https://s3-alpha-sig.figma.com/img/d678/ba7c/3330b67a2f5f06ee256f7a67f3dd63c7?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SAZpb08V-LRbjexJBRi3DmICGIXsdZPl56zFBlKS9Cy5TywKL7XQxKH-OsuiHpaLiFWggLEQgVLQpl3saejg0ZjJE7rRUrZkxOVhYa5fJ6GVbzZGi80fUh0luYI90IX3ZCAjDq5L8g81hENyshqZLzM85bVet4qvlxxEOwbIlXmjMcoNr1bBPzn8Wu77fMYPM6d2NAAwllDaVz7yXZ~s181Hyg2uHRqPS-uvBWM~gaFI9IYUV~lgMNT~bafnt7QQ~YeMf2uBdPcDzPSuf9C3qT3moo21AdLJl4LsLx3sQ1hSzWv5BPKcFiJ007pc-LNkoNpQI~ZYQquf7AbhpS1yVA__",
    "https://s3-alpha-sig.figma.com/img/d094/ef68/c1051e202f3a079bd4174ae37077c2a9?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OSpj~GOKjSby2UxWDIQS7IEGSut01aq2aEU9upQj9kCKdavQ2PiQU2868JcIawnnFim~MPBLiTQ3H0uw2HbUOFQAoIvPmDwfVN4wOhbwzs-Qa6TfX4cTwCwD2v4j7QJGeEukNBeCWLkpnLX-rUudxROQtlRfoej5Y9mDNgtOy3sYGowIlltw8UvOK2xhIPKzOapKcqvwSPvHpCgM~8eKhw3ZlnXCK~SlpYqV2L9QRKPcxrWJ7LXofsXPvDLK8FdzUv1XFY-7K2MC0yvxdoXrN8aw6Y4GYtWee7TKHG27y2KhHPw9ibAwoCf77rjFWxn1whOVFke2y-lfozfCTCtCqw__",
    "https://s3-alpha-sig.figma.com/img/8dd9/3777/5434788fa3bbb4452dcbc88c496cd67c?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EF7jiexJ4l2LPeA0Vj5zsXAfvBbT~bGajBZocjw9~2ynfGLHWcuN2YVwX5WK0-xdNb5RgkOYZQoB~Qcm4e~~cisXXKtSXMMtYJrb5f4beGuPqNSTrMKmNon~qZm42SsynPDJnOebnvVgOt78OwxXF4uaeM4EYFM~FBuqE7J0NH~T-gAN8PL4Ibqq4gBu0JDfEII0vnwjS6VZZCQEZoEaOhUdsV9ZJMrhy1U~lY8T9HDfirFcADpj9ZSLAskKhIYuIkUhv-T8c5O-V1tp5d9uyxebQRdMfwZMGHKZfXlyq5PpYlLFCQ1fLnuvw8~9Hvy4NbXh9JTmywTi2z56i6OcDg__",
    "https://s3-alpha-sig.figma.com/img/ec6d/e61f/f88c59e527de231c30a1702ab78d40c3?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KsTZZdWkuyYBZvASfUeXi7uSi6oiFiCjTWBfcHY3ixOkRgEKTjEc-5tkamVp8evBy0zTKawykYhTOs0hXYnrqJl3qdvp06oxtpBY-FbS11uZgTUhiUDkDsNF36JykkiZsxXwg9VNLP04aoaj4u~rqzokWgqpzQIWmKknJG~E6jCAf4GC4aORrGWnyzZIIsqkJu05feRq~-wCd8LOmjOcQ7ySdLny~jIEYcTuO91iV0o8D4wdYu9ZqINJHP8p3PtxhE7F7H09~XtleFk4D39Bcm4BdYhW7riRIGxzq9t4G-Il7n2L7w~tFf1wUc6I4h2UhpdqwTBCEz9wDON-XjkFaw__",
    "https://s3-alpha-sig.figma.com/img/1914/01b6/87a869102680961f84ea8fb5aa482e33?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SDz9qDtBZX5mE4cmISJr6Twj9~GyOIimTYGahK0OPrZNkV9nVaharbNcIOiU1j2jcCvogxjKBj10lbj6Occhfak9Tnr6WNM8nz2oU-W-~oNonsd4hN0cqgXsMb-IKS5m0q8XPcvYAbhqGtIZ~Jnhl9ch~ILqxtucGuS3heuLoPGR3AE-Owe8EpM4RyALHilz1t-ltVRE7JRBq3~6-mcop6uSp1KhRpHXvbKSrHBv5FLN0M-RrSW26-smJooqV0P9e6MOgkDYO-fK2aEm80QoqzcHN2~zum9hJXiWSNjGdTGyBoHvZ9ZMoUgIErBjB7D6WdAwWQlbmknZmaKu5MD9Nw__",
];

var lastBtnData = ["Sunday Morning", "Golden Age", "Bronze Age", "Dark Age", "Modern Age", "Photo-realistic", "Anime", "Chibi", "Fairy Tale"];