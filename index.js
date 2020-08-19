const slider12 = {
    scrollingIntervalTimeout: 3000,
    scrollTimer: null,
    pauseScrollTimer: null,
    image: null,
    images: null,
    currentImageIndex: 0,
    scrollLeftButton: {},
    scrollRightButton: {},
    initial :  function(imageNumber = 0, scrollingIntervalTimeout = this.scrollingIntervalTimeout) {
        let that = this;
        this.image = document.getElementById("image")

        this.images = ["images/Desert.jpg" , "images/Penguins.jpg" , "images/Koala.jpg"]

        this.image.src = this.images[imageNumber]

        this.scrollLeftButton = document.getElementById("scrollingLeft")
        this.scrollRightButton = document.getElementById("scrollingRight")
        this.scrollLeftButton.addEventListener("click", function(e) {that.onScrollLeft(e)})
        this.scrollRightButton.addEventListener("click", function(e) {that.onScrollRight(e)})

        this.scrollTimer = setInterval(function() {that.onScrollRight()}, scrollingIntervalTimeout)
        this.scrollingIntervalTimeout = scrollingIntervalTimeout
    },
    pauseInterval: function() {
        let that = this
        clearInterval(this.scrollTimer)
        clearInterval(this.pauseScrollTimer)
        this.pauseScrollTimer = setTimeout(
            function(){that.scrollTimer = setInterval(
                function() {that.onScrollRight()},
                that.scrollingIntervalTimeout
            )},30000)
    },
    onScrollRight: function(e) {
        if (this.currentImageIndex === this.images.length - 1){
            this.image.src = this.images[0]
            this.currentImageIndex = 0
        } else {
            this.image.src = this.images[this.currentImageIndex + 1]
            this.currentImageIndex++
        }
        if(e) this.pauseInterval()
    },
    onScrollLeft: function(e) {
        if (this.currentImageIndex === 0){
            this.image.src = this.images[this.images.length-1]
            this.currentImageIndex = this.images.length-1
        } else {
            this.image.src = this.images[this.currentImageIndex - 1]
            this.currentImageIndex--
        }
        if(e) this.pauseInterval()
    }
}

slider12.initial(1,5000)

