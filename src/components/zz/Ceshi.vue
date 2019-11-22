<template>
    <div class="container">
        <div class="card-item" v-for="(item,index) in cardArrs"
             :class="[item.bgColor ,'z'+item.zIndex, 't'+item.zIndex*30]"
             @click.stop="changeArrIndex(index)">
            {{item.text}}
        </div>
    </div>
</template>

<script>
    export default {
//        props: [],
        data() {
            return {
                cardArrs: [
                    {
                        text: "card-1",
                        zIndex: 1,
                        bgColor: "red"
                    },
                    {
                        text: "card-2",
                        zIndex: 2,
                        bgColor: "blue"
                    },
                    {
                        text: "card-3",
                        zIndex: 3,
                        bgColor: "yellow"
                    },
                    {
                        text: "card-4",
                        zIndex: 4,
                        bgColor: "green"
                    },
                    {
                        text: "card-5",
                        zIndex: 5,
                        bgColor: "black"
                    }
                ],
                maxLength: 5
            }
        },
        methods: {
            changeArrIndex(index){
//                if(index == this.maxLength - 1) {
//                    return;
//                }
                let _zIndex = "";
                let _newArr = [];
                this.cardArrs.forEach((item,idx)=> {
                    let _obj = {};
                    if(idx == index) {
                        _zIndex = item.zIndex;
                        _obj.zIndex = this.maxLength;
                        _obj.bgColor = item.bgColor;
                        _obj.text = item.text;
                        _obj.flag = true;
                        _newArr.push(_obj)
                    }else {
                        _newArr.push(item)
                    }
                });
                _newArr.forEach((obj)=>{
                   if(obj.zIndex == this.maxLength && !obj.flag) {
                       obj.zIndex = _zIndex;
                   }
                });
                _newArr.map((item)=>{
                    delete item.flag;
                });
                this.cardArrs = _newArr;
            }
        }
    }
</script>