db.users.aggregate([{$match:{isActive:true}}]);
db.users.aggregate([{$match:{name:"blake"}}]);
db.users.aggregate([{$match:{gender:"male"}}]);
db.users.aggregate([{$match:{isActive:true,gender:"male"}}]);
db.users.aggregate([{$match:{isActive:true,gender:"female",age:{$gte:25}}}]);
db.users.aggregate([{$match:{gender:"male",eyeColor:'green',age:{$gte:40}}}]);
db.users.aggregate([{$match:{gender:"male",eyeColor:'green',age:{$gte:40}}}]);
db.users.aggregate([{$match:{'company.location.country':'USA',gender:"male",eyeColor:'blue'}}]).pretty();
db.users.aggregate([{$match:{'company.location.country':'Germany',gender:"female",eyeColor:'green',favoriteFruit:'apple'}}]).pretty();
db.users.aggregate([{$match:{eyeColor:'green'}},{$group:{_id:"gender",count:{$sum:1}}}]).pretty();
db.users.aggregate([{$match:{eyeColor:'brown',age:{$gte:20},gender:"female"}},{$group:{_id:"gender",count:{$sum:1}}}]).pretty();
db.users.aggregate([{$match:{tags:'amet'}},{$group:{_id:'gender',count:{$sum:1}}}]).pretty();
db.users.aggregate([{$group:{_id:null,avg_age:{$avg:"$age"}}}]).pretty();
db.users.aggregate([{$match:{gender:"male"}},{$group:{_id:null,avg_age:{$avg:"$age"}}}]).pretty();
db.users.aggregate([{$match:{gender:"female"}},{$group:{_id:null,avg_age:{$avg:"$age"}}}]).pretty();
db.users.aggregate([{$group:{_id:'name',max_number:{$max:"$age"}}}]).pretty();
db.users.aggregate([{$group:{_id:'gender',max_number:{$sum:"$age"}}}]).pretty();
db.users.aggregate([{$match:{gender:'male',eyeColor:"blue"}}]).pretty();
db.users.aggregate([{$match:{gender:'female',age:{$gt:30}}}]).pretty();
db.users.aggregate([{$match:{gender:'male'}},{$group:{_id:'$eyeColor',count:{$sum:1}}}])
db.users.aggregate([{$match:{gender:'female',age:{$gte:30}}},{$group:{_id:'$gender',count:{$sum:1}}}])
db.users.aggregate([{$match:{gender:'male',age:{$gte:23},'company.location.country':'Germany'}},{$group:{_id:'$gender',count:{$sum:1}}}])
db.users.aggregate([{$unwind:"$tags"}]).pretty()
db.users.aggregate([{$match:{gender:'male',favoriteFruit:'banana'}}])










