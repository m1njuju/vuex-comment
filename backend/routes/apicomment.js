var express = require('express');
var router = express.Router();
const comments = require('../comment.json');
let count = comments.length;

/* memo.id값에 맞는 코멘트 배열을 전달 */
router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    // 값을 여러 개 찾기 위해서 filter 사용
    const comment = comments.filter((c) => c.memoid == id);
    console.log(comment);
    res.send(comment);
});

router.post('/', function(req, res, next) {
    const comment = req.body.data.comment;
    // 새로 추가할 코멘트의 id값
    count++;
    // 자바스크립트 객체 comment에다가 id객체 추가
    comment.id = count;

    console.log(comment);
    //전체 코멘트에 추가
    comments.push(comment);
    // 특정 메모(id)의 코멘트에만 필터
    const commentmemo = comments.filter((c) => c.memoid == comment.id);
    res.send(commentmemo);
})

module.exports = router;