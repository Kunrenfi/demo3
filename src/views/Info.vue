<template>

    <div class="weui-cells weui-cells_form">
        <div> <h1 >这是介绍XXXXXXXXXXXXXX</h1>
            <h2>ssssss</h2>
            <h2>ddddddd</h2>
            <h2>ssssss</h2>
            <h2>ddddddd</h2>
            <h2>ssssss</h2>
            <h2>ddddddd</h2>


        </div>

        <div class="weui-cell">
            <div class="weui-cell__bd">
                <div class="weui-uploader">
                    <div class="weui-uploader__hd">
                        <p class="weui-uploader__title">





                        </p>
                        <div class="weui-uploader__info">0/2</div>
                    </div>
                    <div class="weui-uploader__bd">
                        <ul class="weui-uploader__files" id="uploaderFiles">
                            <li class="weui-uploader__file" style="background-image:url(/images/123.jpg)"></li>
                            <li class="weui-uploader__file" style="background-image:url(/images/123.jpg)"></li>
                            <li class="weui-uploader__file" style="background-image:url(/images/123.jpg)"></li>
                            <li class="weui-uploader__file weui-uploader__file_status" style="background-image:url(/images/123.jpg)">
                                <div class="weui-uploader__file-content">
                                    <i class="weui-icon-warn"></i>
                                </div>
                            </li>
                            <li class="weui-uploader__file weui-uploader__file_status" style="background-image:url(/images/123.jpg)">
                                <div class="weui-uploader__file-content">50%</div>
                            </li>
                        </ul>
                        <div class="weui-uploader__input-box">
                            <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Info"
    }
</script>

<style>

</style>