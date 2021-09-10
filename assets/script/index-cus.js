$(function(){
    if (localStorage.getItem("template") === null) {
        localStorage.setItem('template', 'vi');
    }
    const url = window.location.href;
    $('.lang__vi').on('click', function(){
        window.location = url;
        localStorage.setItem('template', 'vi');
    })
    $('.lang__en').on('click', function(){
        window.location = url;
        localStorage.setItem('template', 'en');
    });
    const menuleft = $('.menu-left-pc');
    const menuright = $('.menu-right-pc');
    const app = {
        menuvileft: [{
            menu: 'Giới thiệu',
            link: '/'
        },{
            menu: 'Vị trí',
            link: '/'
        },{
            menu: 'Tiện ích',
            link: '/'
        },{
            menu: 'Mặt bằng',
            link: '/'
        }],
        menuviright: [{
            menu: 'Căn hộ',
            link: '/'
        },{
            menu: 'Cơ hội đầu tư',
            link: '/'
        },{
            menu: 'Tin tức',
            link: '/'
        },{
            menu: 'Liên hệ',
            link: '/'
        }],
        introduce: [{
            title: 'Liệu pháp không gian sống "Thời đại lo âu',
            desc: 'Green Star Sky Garden không đơn thuần của một căn hộ để ở, đây được xem như tuyệt tác độc bản là nơi khởi nguồn đặc quyền về một cuộc sống: Thanh lọc cơ thể - Bảo vệ sức khoẻ - Khơi nguồn năng lượng thể chất lẫn tinh thần'
        }],
        ecological: [{
            titleimg: './assets/images/banner/titi-sinhthai.png'
        }],
        ecologicalcontent: [{
            image: './assets/images/banner/group1.jpg',
            link:'/',
            title: 'Cư dân dự án được thoả sức hoà mình trong hệ thống mảng xanh nội khu theo phương đứng đẳng cấp, giúp điều hoà nhiệt độ toàn khu với Công viên Luna park hơn 6.000m2, hồ thiên đường lãng mạn hơn 3.000m2 và hệ thống vườn treo thác nước len lõi trong mỗi toà nhà.',
            number: './assets/images/banner/1.png'
        },{
            image: './assets/images/banner/group2.png',
            link:'/',
            title: 'Mỗi căn hộ đều được tối ưu hoá mặt thoáng với nhiều cửa sổ mở rộng tầm view thoáng đãng giúp đón ánh sáng và không khí trong lành vào ngôi nhà của bạn.',
            number: './assets/images/banner/2.png'
        },{
            image: './assets/images/banner/group3.png',
            link:'/',
            title: 'Cư dân dự án được thoả sức hoà mình trong hệ thống mảng xanh nội khu theo phương đứng đẳng cấp, giúp điều hoà nhiệt độ toàn khu với Công viên Luna park hơn 6.000m2, hồ thiên đường lãng mạn hơn 3.000m2 và hệ thống vườn treo thác nước len lõi trong mỗi toà nhà. ',
            number: './assets/images/banner/3.png'
        },{
            image: './assets/images/banner/group4.png',
            link:'/',
            title: 'Với góc nhìn từ các căn hộ trên cao, cư dân được chiêm ngưỡng vẻ đẹp bình yên và thư thái của cỏ cây sông nước bao bọc xung quanh bởi KĐT Phú Mỹ Hưng được quy hoạch tiêu chuẩn và bài bản bậc nhất.',
            number: './assets/images/banner/4.png'
        }],
        locationOne: [{
            imglocation: './assets/images/banner/vi-tri.png',
            titletext: 'Kết nối thông suốt',
            content1: 'Toạ lạc tại vị trí đắt giá trên 2 trục đường huyết mạch Nguyễn Lương Bằng nối dài. Đây là cung đường thương mại, tài chính “triệu đô” sầm uất bậc nhất NSG, liền kề Phú Mỹ Hưng.',
            content2: 'Tại Green Star Sky Garden vừa đủ gần để 1 bước chân xuống phố, vừa đủ cách biệt để cư dân tận hưởng sự yên bình đặc quyền.',
            map: './assets/images/banner/map.png'
        }],
        locationTwo: [{
            imglocation2: './assets/images/banner/tien-ich.png',
            title: 'Đặc quyền giá trị'
        }],
        video: [{
            imgvideo: './assets/images/banner/thiet-ke.png',
            title: 'Trọn vẹn từng khoảng khắc'
        }],
        timeline1: [{
            time: '0 - 5 phút',
            content1: 'Đại lộ Nguyễn Văn Linh',
            content2: 'BV Pháp Việt',
            content3: 'BV Tâm Đức',
            content4: 'UBND Quận 7',
            content5: 'TTTM Crescent mall',
            content6: 'Tuyến Metro số 4',
            content7: 'Trung tâm SECC',
            content8: 'Bưu điện Quận 7'
        }],
        timeline2: [{
            time: '5 - 10 phút',
            content1: 'ĐH RMIT',
            content2: 'ĐH Tôn Đức Thắng',
            content3: 'Cầu Phú Mỹ',
            content4: 'TTTM Lotte Mart',
            content5: 'TTTM SC VIVO'
        }],
        timeline3: [{
            time: '10 - 20 phút',
            content1: 'Chợ Bến Thành',
            content2: 'TTTM Bitexco',
            content3: 'Cao tốc Long Thành – Dầu Giây',
            content4: 'Cao tốc Bến Lức - Long Thành'
        }],
        renderMenuLeftVi: function() {
            const htmlmenu = this.menuvileft.map(menuitem => {
                return `<li><a href="${menuitem.link}">${menuitem.menu}</a></li>`
            })
            menuleft.html(htmlmenu.join(''));
        },
        renderMenuRightVi: function() {
            const htmls = this.menuvileft.map(menuitem => {
                return `<li><a href="${menuitem.link}">${menuitem.menu}</a></li>`
            })
            menuright.html(htmls.join(''));
        },
        renderAllVi: function() {
            const htmlintro = this.introduce.map(intro => {
                return `<div class="banner_title title-introduce">
                            <h4>${intro.title}</h4>
                        </div>
                        <div class="banner_subtitle">
                            <p>${intro.desc}</p>
                        </div>`
            })
            //sinh thai
            const htmlsttt = this.ecological.map(sttt => {
                return `<a>
                            <img class="lazyload" width="582" height="140" data-src="${sttt.titleimg}" alt="icon title" />
                        </a>`
            })
            const htmlstcontent = this.ecologicalcontent.map(stct => {
                return `<div class="item_content col-xs-100">
                            <div class="item_content--banner">
                                <a href="${stct.link}">
                                    <img class="lazyload" width="488" height="255" data-src="${stct.image}" alt="banner">
                                </a>
                            </div>
                            <div class="item_content--text">
                                <div class="c-text-img">
                                    <a href="${stct.link}">
                                        <img class="lazyload" width="75" height="163" data-src="${stct.number}" alt="">
                                    </a>
                                </div>
                                <span>${stct.title}</span>
                            </div>
                        </div>`
            })

            //locationOne: locationOne
            const htmllocationOne = this.locationOne.map(location => {
                return `<div class="col-md-4 col-sm-12 col-xs-12">
                            <div class="grid_lct__content">
                                <div class="lct_title">
                                    <a>
                                        <img class="lazyload" width="398" height="89" data-src="${location.imglocation}" alt="icon title" />
                                    </a>
                                </div>
                                <div class="lct_item-content">
                                    <div class="lct_item_title">
                                        <h4>${location.titletext}</h4>
                                    </div>
                                    <div class="lct_item_text">
                                        <p>${location.content1}</p>
                                        <p>${location.content2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 col-sm-12 col-xs-12">
                            <div class="wrapper-map">
                                <img class="lazyload" width="827" height="590" data-src="${location.map}" alt="map">
                                <div class="dot-ani">
                                    <div class="suntory-alo-ph-circle"></div>
                                    <div class="suntory-alo-ph-circle-fill"></div>
                                    <div class="suntory-alo-ph-img-circle hide"></div>

                                </div>
                            </div>
                        </div>`
            })
            //locationTwo
            const htmllocationTwo = this.locationTwo.map(location2 => {
                return `<a>
                            <img class="lazyload" width="534" height="120" data-src="${location2.imglocation2}" alt="icon title" />
                        </a>
                        <h4>${location2.title}</h4>`
            })
            //video
            const htmlvideo = this.video.map(itemvid => {
                return `<a>
                            <img class="lazyload" width="501" height="120" data-src="${itemvid.imgvideo}" alt="icon title" />
                        </a>
                        <h4>${itemvid.title}</h4>`
            })
            //timeline
            const htmltimeline1 = this.timeline1.map(item => {
                return `<div class="timestamp">
                            <span class="date">${item.time}<span>
                        </div>
                        <div class="status">
                            <ul>
                                <li>${item.content1}</li>
                                <li>${item.content2}</li>
                                <li>${item.content3}</li>
                                <li>${item.content4}</li>
                                <li>${item.content5}</li>
                                <li>${item.content6}</li>
                                <li>${item.content7}</li>
                                <li>${item.content8}</li>
                            </ul>
                        </div>`
            });
            //timeline 2
            const htmltimeline2 = this.timeline2.map(item => {
                return `<div class="timestamp">
                            <span class="date">${item.time}<span>
                        </div>
                        <div class="status">
                            <ul>
                                <li>${item.content1}</li>
                                <li>${item.content2}</li>
                                <li>${item.content3}</li>
                                <li>${item.content4}</li>
                                <li>${item.content5}</li>
                            </ul>
                        </div>`
            });
            //timeline
            const htmltimeline3 = this.timeline3.map(item => {
                return `<div class="timestamp">
                            <span class="date">${item.time}<span>
                        </div>
                        <div class="status">
                            <ul>
                                <li>${item.content1}</li>
                                <li>${item.content2}</li>
                                <li>${item.content3}</li>
                                <li>${item.content4}</li>
                            </ul>
                        </div>`
            });



            //render
            $('.item-banner-content').html(htmlintro.join(''));
            $('.sth_title').html(htmlsttt.join(''));
            $('.sth_item-content').html(htmlstcontent.join(''));
            $('.wrapper-section-location').html(htmllocationOne.join(''));
            $('.ultili_title').html(htmllocationTwo.join(''));
            $('.video_title').html(htmlvideo.join(''));
            $('.slide-timeline-1').html(htmltimeline1.join(''));
            $('.slide-timeline-2').html(htmltimeline2.join(''));
            $('.slide-timeline-3').html(htmltimeline3.join(''));
        },
        start: function() {
            this.renderMenuLeftVi();
            this.renderMenuRightVi();
            this.renderAllVi();
        }
    }
/*=========================== NỘI DUNG TIẾNG ANH ===================================== */
    const appen = {
        menuvileft: [{
            menu: 'About us',
            link: '/'
        },{
            menu: 'Location',
            link: '/'
        },{
            menu: 'Utilities',
            link: '/'
        },{
            menu: 'Plane',
            link: '/'
        }],
        menuviright: [{
            menu: 'Apartment',
            link: '/'
        },{
            menu: 'Investment Opportunities',
            link: '/'
        },{
            menu: 'News',
            link: '/'
        },{
            menu: 'Contacts',
            link: '/'
        }],
        introduce: [{
            title: 'Spatial Therapy "Anxiety Age"',
            desc: 'The Peak Garden is not just an apartment to live in, this is considered as a unique masterpiece and the originate of privileged: Purifying Body - Protecting Health - Unleashing Physical and Mental Energy '
        }],
        ecological: [{
            titleimg: './assets/images/title-en/2.png'
        }],
        ecologicalcontent: [{
            image: './assets/images/banner/group1.jpg',
            link:'/',
            title: 'Inside each Wellness Apartment is equipped with an air purifier system, infrared heating lamp, antibacterial paint, etc. to help purify and perfectly protect the health of the owner.',
            number: './assets/images/banner/1.png'
        },{
            image: './assets/images/banner/group2.png',
            link:'/',
            title: 'Each apartment has many windows to widen the view for catching shining and fresh air into the house.',
            number: './assets/images/banner/2.png'
        },{
            image: './assets/images/banner/group3.png',
            link:'/',
            title: 'Residents can freely immerse themselves in the high-class vertical internal green system, helping to regulate the temperature of the whole area with Luna park over 6,000m2, romantic paradise lake over 3,000m2, and hanging waterfall garden system in each building.',
            number: './assets/images/banner/3.png'
        },{
            image: './assets/images/banner/group4.png',
            link:'/',
            title: 'With the view from the high floor apartments, residents can admire the peaceful sightseeings with trees and rivers surrounded by the most standard living urban - Phu My Hung area.',
            number: './assets/images/banner/4.png'
        }],
        locationOne: [{
            imglocation: './assets/images/title-en/3.png',
            //titletext: 'Kết nối thông suốt',
            content1: 'Located in an expensive location on two extended arterial Nguyen Luong Bang roads. This is the busiest "million-dollar" commercial and financial street in Nam Sai Gon, adjacent to Phu My Hung area.',
            content2: "At The Peak Garden, it's close to being one step down the street and far enough away barely to enjoy the privileged peace.",
            map: './assets/images/banner/map.png'
         }],
         locationTwo: [{
            imglocation2: './assets/images/title-en/4.png',
            title: 'Đặc quyền giá trị'
        }],
        video: [{
            imgvideo: './assets/images/title-en/6.png',
            title: 'Trọn vẹn từng khoảng khắc'
        }],
        timeline1: [{
            time: '0 - 5 Minute',
            content1: 'Nguyen Van Linh Avenue',
            content2: 'FV Hospital',
            content3: 'Tam Duc Hospital',
            content4: "People's Committee of District 7",   
            content5: 'Crescent Mall Shopping Center',
            content6: 'Metro 4',
            content7: 'Saigon Exhibition and Convention Center / SECC',
            content8: 'Post Office District 7'
        }],
        timeline2: [{
            time: '5 - 10 Minute',
            content1: 'RMIT University',
            content2: 'Ton Duc Thang University',
            content3: 'Phu My Bridge',
            content4: 'Lotte Mart',
            content5: 'SC VivoCity mall'
        }],
        timeline3: [{
            time: '10 - 20 Minute',
            content1: 'Ben Thanh Market',
            content2: 'Bitexco Tower',
            content3: 'Long Thanh – Dau Giay Expressway',
            content4: 'Ben Luc - Long Thanh Expressway'
        }],
        renderMenuLeftEn: function() {
            const htmls = this.menuvileft.map(menuitem => {
                return `<li><a href="${menuitem.link}">${menuitem.menu}</a></li>`
            })
            menuleft.html(htmls.join(''));
        },
        renderMenuRightEn: function() {
            const htmls = this.menuvileft.map(menuitem => {
                return `<li><a href="${menuitem.link}">${menuitem.menu}</a></li>`
            })
            menuright.html(htmls.join(''));
        },
        renderAllEn: function() {
            const htmlintro = this.introduce.map(intro => {
                return `<div class="banner_title title-introduce">
                            <h4>${intro.title}</h4>
                        </div>
                        <div class="banner_subtitle">
                            <p>${intro.desc}</p>
                        </div>`
            })
            //sinh thai
            const htmlsttt = this.ecological.map(sttt => {
                return `<a>
                            <img class="lazyload" width="582" height="140" data-src="${sttt.titleimg}" alt="icon title" />
                        </a>`
            })
            const htmlstcontent = this.ecologicalcontent.map(stct => {
                return `<div class="item_content col-xs-100">
                            <div class="item_content--banner">
                                <a href="${stct.link}">
                                    <img class="lazyload" width="488" height="255" data-src="${stct.image}" alt="banner">
                                </a>
                            </div>
                            <div class="item_content--text">
                                <div class="c-text-img">
                                    <a href="${stct.link}">
                                        <img class="lazyload" width="75" height="163" data-src="${stct.number}" alt="">
                                    </a>
                                </div>
                                <span>${stct.title}</span>
                            </div>
                        </div>`
            })
            //locationOne: locationOne
                const htmllocationOne = this.locationOne.map(location => {
                return `<div class="col-md-4 col-sm-12 col-xs-12">
                            <div class="grid_lct__content">
                                <div class="lct_title">
                                    <a>
                                        <img class="lazyload" width="398" height="89" data-src="${location.imglocation}" alt="icon title" />
                                    </a>
                                </div>
                                <div class="lct_item-content">
                                    <div class="hide lct_item_title">
                                        <h4>${location.titletext}</h4>
                                    </div>
                                    <div class="lct_item_text">
                                        <p>${location.content1}</p>
                                        <p>${location.content2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 col-sm-12 col-xs-12">
                            <div class="wrapper-map">
                                <img class="lazyload" width="827" height="590" data-src="${location.map}" alt="map">
                                <div class="dot-ani">
                                    <div class="suntory-alo-ph-circle"></div>
                                    <div class="suntory-alo-ph-circle-fill"></div>
                                    <div class="suntory-alo-ph-img-circle hide"></div>

                                </div>
                            </div>
                        </div>`
            })

            //
            //locationTwo
            const htmllocationTwo = this.locationTwo.map(location2 => {
                return `<a>
                            <img class="lazyload" width="534" height="120" data-src="${location2.imglocation2}" alt="icon title" />
                        </a>
                        <h4 class="hide">${location2.title}</h4>`
            })
            //video
            const htmlvideo = this.video.map(itemvid => {
                return `<a>
                            <img class="lazyload" width="501" height="120" data-src="${itemvid.imgvideo}" alt="icon title" />
                        </a>
                        <h4 class="hide">${itemvid.title}</h4>`
            })
            //timeline
            const htmltimeline1 = this.timeline1.map(item => {
                return `<div class="timestamp">
                            <span class="date">${item.time}<span>
                        </div>
                        <div class="status">
                            <ul>
                                <li>${item.content1}</li>
                                <li>${item.content2}</li>
                                <li>${item.content3}</li>
                                <li>${item.content4}</li>
                                <li>${item.content5}</li>
                                <li>${item.content6}</li>
                                <li>${item.content7}</li>
                                <li>${item.content8}</li>
                            </ul>
                        </div>`
            });
            //timeline 2
            const htmltimeline2 = this.timeline2.map(item => {
                return `<div class="timestamp">
                            <span class="date">${item.time}<span>
                        </div>
                        <div class="status">
                            <ul>
                                <li>${item.content1}</li>
                                <li>${item.content2}</li>
                                <li>${item.content3}</li>
                                <li>${item.content4}</li>
                                <li>${item.content5}</li>
                            </ul>
                        </div>`
            });
            //timeline
            const htmltimeline3 = this.timeline3.map(item => {
                return `<div class="timestamp">
                            <span class="date">${item.time}<span>
                        </div>
                        <div class="status">
                            <ul>
                                <li>${item.content1}</li>
                                <li>${item.content2}</li>
                                <li>${item.content3}</li>
                                <li>${item.content4}</li>
                            </ul>
                        </div>`
            });
            
            $('.item-banner-content').html(htmlintro.join(''));
            $('.sth_title').html(htmlsttt.join(''));
            $('.sth_item-content').html(htmlstcontent.join(''));
            $('.wrapper-section-location').html(htmllocationOne.join(''));
            $('.ultili_title').html(htmllocationTwo.join(''));
            $('.video_title').html(htmlvideo.join(''));
            $('.slide-timeline-1').html(htmltimeline1.join(''));
            $('.slide-timeline-2').html(htmltimeline2.join(''));
            $('.slide-timeline-3').html(htmltimeline3.join(''));
        },
        start: function() {
            this.renderMenuLeftEn();
            this.renderMenuRightEn();
            this.renderAllEn();
        }
    }

    if(localStorage.getItem('template') == 'vi'){
        app.start();
    }
    if(localStorage.getItem('template') == 'en'){
        appen.start();
    }
   
})