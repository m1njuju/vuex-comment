<template>
    <div>
        <h1>{{$store.state.memo.title}}</h1>
        <p>{{$store.state.memo.memo}}</p>
        <hr>
        <ul>
            <li>
                작성자 : 내용
            </li>
            <li v-for="(comment,i) in $store.state.comments" :key="i">
                {{comment.writer}} : {{comment.comment}}
            </li>
        </ul>
        <hr>
        <input type="text" v-model="comment">
        <button @click="addcomment">추가</button>

    </div>
</template>

<script>

export default {
    data() {
        return {
            comment: ''
        }
    },
    created() {
        // 라우터 파람 안에 있는 memo.id를 전달
        this.$store.dispatch('getmemo', this.$route.params.id);
        this.$store.dispatch('getcomment', this.$route.params.id);
    },
    methods: {
        addcomment() {
            const comment = {
                memoid: this.$route.params.id,
                writer: this.$store.state.user,
                comment: this.comment
            }
            this.$store.dispatch('postcomment', comment);
            this.comment = '';
            this.$router.go(this.$router.currentRoute);
        }
    }
}
</script>