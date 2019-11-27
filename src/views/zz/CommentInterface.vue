<template>
    <div id="container">
        <div class="comment-header">
            <div class="comment-header-left">
                <img src="@/assets/zz/back-black.png" alt="">
                <p>评论</p>
            </div>
            <img src="@/assets/zz/share-black.png" alt="">
        </div>
        <div class="comment-title">
            <div class="comment-title-left">
                <img src="@/assets/zz/aimer.jpg" alt="">
                <div>
                    <p class="song-name">倒带</p>
                    <a class="singer">蔡依林</a>
                </div>
            </div>
            <div class="comment-title-right">></div>
        </div>
        <p class="comment-content-title">精彩评论</p>
        <div class="comment-content" v-for="(item,index) in comments" :key="index">
            <div class="brilliant-comment">
                <div class="brilliant-comment-left">
                    <img src="@/assets/zz/aimer.jpg" alt="">
                    <div>
                        <p class="user-name">末班车</p>
                        <p class="comment-date">2015年11月2日</p>
                    </div>
                </div>
                <div class="brilliant-comment-right">
                    <span class="up-number">43.9万</span>
                    <img src="@/assets/zz/up.png" alt="">
                </div>
            </div>
            <div class="user-comment">
                <p class="user-comment-content">{{item.content}}</p>
                <p href="" class="user-reply" @click="reply">1024条回复 ></p>
                <p v-if="abc" class="reply">别回复了,我太难了</p>
            </div>
            <hr class="comment-underline">
        </div>

        <div>
            <div class="brilliant-comment">
                <div class="brilliant-comment-left">
                    <img src="@/assets/zz/aimer.jpg" alt="">
                    <div>
                        <p class="user-name">末班车</p>
                        <p class="comment-date">2015年11月2日</p>
                    </div>
                </div>
                <div class="brilliant-comment-right">
                    <span class="up-number">43.9万</span>
                    <img src="@/assets/zz/up.png" alt="">
                </div>
            </div>
            <div class="user-comment">
                <p class="user-comment-content">人在蒙古,刚下航母</p>
                <p href="" class="user-reply" @click="reply">1024条回复 ></p>
                <p v-if="abc" class="reply">别回复了,我太难了</p>
            </div>
            <hr class="comment-underline">
            <div class="brilliant-comment">
                <div class="brilliant-comment-left">
                    <img src="@/assets/zz/aimer.jpg" alt="">
                    <div>
                        <p class="user-name">末班车</p>
                        <p class="comment-date">2015年11月2日</p>
                    </div>
                </div>
                <div class="brilliant-comment-right">
                    <span class="up-number">43.9万</span>
                    <img src="@/assets/zz/up.png" alt="">
                </div>
            </div>
            <div class="user-comment">
                <p class="user-comment-content">人在蒙古,刚下航母</p>
                <p href="" class="user-reply">1024条回复 ></p>
            </div>
            <hr class="comment-underline">
            <div class="brilliant-comment">
                <div class="brilliant-comment-left">
                    <img src="@/assets/zz/aimer.jpg" alt="">
                    <div>
                        <p class="user-name">末班车</p>
                        <p class="comment-date">2015年11月2日</p>
                    </div>
                </div>
                <div class="brilliant-comment-right">
                    <span class="up-number">43.9万</span>
                    <img src="@/assets/zz/up.png" alt="">
                </div>
            </div>
            <div class="user-comment">
                <p class="user-comment-content">人在蒙古,刚下航母</p>
                <p href="" class="user-reply">1024条回复 ></p>
            </div>
            <hr class="comment-underline">
            <p id="lookforMore">全部精彩评论 ></p>
            <hr class="big-underline">
            
            
            
            <p class="comment-content-title">最新评论</p>
            <div class="brilliant-comment">
                <div class="brilliant-comment-left">
                    <img src="@/assets/zz/aimer.jpg" alt="">
                    <div>
                        <p class="user-name">末班车</p>
                        <p class="comment-date">2015年11月2日</p>
                    </div>
                </div>
                <div class="brilliant-comment-right">
                    <span class="up-number">43.9万</span>
                    <img src="@/assets/zz/up.png" alt="">
                </div>
            </div>
            <div class="user-comment">
                <p class="user-comment-content">人在蒙古,刚下航母</p>
                <p href="" class="user-reply">1024条回复 ></p>
            </div>
            <hr class="comment-underline">
            <div class="brilliant-comment">
                <div class="brilliant-comment-left">
                    <img src="@/assets/zz/aimer.jpg" alt="">
                    <div>
                        <p class="user-name">末班车</p>
                        <p class="comment-date">2015年11月2日</p>
                    </div>
                </div>
                <div class="brilliant-comment-right">
                    <span class="up-number">43.9万</span>
                    <img src="@/assets/zz/up.png" alt="">
                </div>
            </div>
            <div class="user-comment">
                <p class="user-comment-content">人在蒙古,刚下航母</p>
                <p href="" class="user-reply">1024条回复 ></p>
            </div>
            <hr class="comment-underline">
            <div class="brilliant-comment">
                <div class="brilliant-comment-left">
                    <img src="@/assets/zz/aimer.jpg" alt="">
                    <div>
                        <p class="user-name">末班车</p>
                        <p class="comment-date">2015年11月2日</p>
                    </div>
                </div>
                <div class="brilliant-comment-right">
                    <span class="up-number">43.9万</span>
                    <img src="@/assets/zz/up.png" alt="">
                </div>
            </div>
            <div class="user-comment">
                <p class="user-comment-content">人在蒙古,刚下航母</p>
                <p href="" class="user-reply">1024条回复 ></p>
            </div>
            <hr class="comment-underline">
        </div>
        <div class="blank-area"></div>
        <SendMsg></SendMsg>
    </div>
</template>

<script>
import SendMsg from '@/components/tz/SendMsg.vue'
export default {
    name:'CommentInterface',
    data(){
        return{
            comments:[],
            abc:''
        }
    },
    components:{
        SendMsg
    },
    methods:{
        reply(){
            this.abc=!this.abc;
        },
        // getComments(){

        // }
    },
    mounted(){
    this.axios.get("http://localhost:3000/comment").then(res=>{
        var $comments=res.data;
        this.comments=$comments;
        console.log(comments);
    })
  }
}
</script>
<style scoped>
#container{
  width:100%;
  height:100%;
}
.comment-header{
  display:flex;
  justify-content: space-between;
  align-items:center;
  padding:0.5rem;
}
.comment-header-left{
  display:flex;
  align-items:center;
}
.comment-header-left>p{
  display:flex;
  align-items:center;
  margin-left:1rem;
}
.comment-header img{
  width:2rem;
  height:2rem;
}
.comment-title{
  display:flex;
  justify-content: space-between;
  margin-bottom:0.5rem;
}
.comment-title-left{
  display:flex;
  align-items:center;
  margin-left:0.5rem;
}
.comment-title-left>div{
  margin-left:1rem;
}
.singer{
  margin-top:0.5rem;
  font-size:0.8rem;
}
.comment-title-left>img{
  width:5rem;
  height:5rem;
}
.comment-title-right{
  display:flex;
  align-items:center;
  margin-right:0.8rem;
  color:#444;
}
.comment-content{
  margin-left:0.5rem;
}
.comment-content>p{
  font-size:1rem;
  font-weight:bold;
}
.brilliant-comment{
  display:flex;
  justify-content: space-between;
  align-items:center;
}
.brilliant-comment-left>img{
  display:block;
  width:2.4rem;
  height:2.4rem;
  border-radius:1.2rem;
}
.brilliant-comment-left{
  display:flex;
  margin-top:1rem;
  align-items:center;
}
.brilliant-comment-left>div{
  margin-left:0.5rem;
}
.user-name{
  font-size:0.8rem;
  color:#444;
}
.comment-date{
  font-size:0.8rem;
  color:#777;
}
.brilliant-comment-right{
  display:flex;
  margin-top:1rem;
}
.up-number{
  font-size:0.8rem;
  color:#444;
  margin-top:0.3rem;
}
.brilliant-comment-right>img{
  width:1.5rem;
  height:1.5rem;
  margin:0 0.5rem;
}
.user-comment{
  margin-left:2.9rem;
  margin-top:0.5rem;
}
.user-comment-content{
  font-size:0.9rem;
}
.user-reply{
  font-size:0.8rem;
}
.comment-underline{
  background-color:#555;
  border:none;
  height:1px;
  margin-left:2.9rem;
  margin-top:0.5rem;
}
#lookforMore{
  width:35%;
  margin:0 30%;
  font-size:0.9rem;
  text-align:center;
  margin-top:0.7rem;
  border:solid 1px black;
  border-radius:5rem;
  padding:0.2rem 0;
  margin-bottom:0.7rem;
}
.comment-content-title{
  margin-top:1rem;
}
.big-underline{
  background-color:#555;
  border:none;
  height:1px;
}
.blank-area{
  height:2rem;
}
</style>