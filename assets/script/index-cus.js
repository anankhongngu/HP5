const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'APP-HP5'

const app = {
    currentIndex: 0,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    songs: [{
        name: 'Bùa yêu 1',
        singer: 'Bich Phuong',
        path: './assets/music/song1.mp3',
        image: './assets/img/song1.jpg'
    }, {
        name: 'Để mị nói cho mà nghe 2',
        singer: 'Bích Phương',
        path: './assets/music/song2.mp3',
        image: './assets/img/song2.png'
    }],
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return ` 
                <div class="song ${index == this.currentIndex ? 'active' : '' }" data-index=${index}>
                <div class="thumb" style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                <i class="fas fa-ellipsis-h"></i>
                </div>
                </div>`
        })
        playlist.innerHTML = htmls.join('');
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },
    handleEvents: function() {
        const _this = this;
    },
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },
    loadConfig: function() {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
    },

    start: function() {
        // gan cau hinh tu config vao app
        this.loadConfig();
        // dinh nghia cac thuoc tinh cho object
        this.defineProperties();

        //lang nghe,xu ly su kien
        this.handleEvents();

        //load currentSong dau tien vao UI khi chay
        this.loadCurrentSong();

        // render playlist
        this.render();
    }
}
app.start()
