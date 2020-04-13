$(document).ready(function () {

    $('.clickImg').on('click', function() {
        console.log(this.src)
        let json={
            "title": "", //相册标题
            "id": 123, //相册id
            "start": 0, //初始显示的图片序号，默认0
            "data": [   //相册包含的图片，数组格式
                {
                    "alt": "图片名",
                    "pid": 666, //图片id
                    "src": this.src, //原图地址
                    "thumb": "" //缩略图地址
                }
            ]
        };


        layer.photos({
            photos: json
            ,anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
        });
    });
});