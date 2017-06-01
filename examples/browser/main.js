var s3Key = '/3f995099-d624-4c8e-ab6b-1fd5e3799173/170420-1105-7yb890/8db476b3-7eb7-45a7-a09b-03e965f12685.gz.data3d.buffer'

var s3Prefix = 'https://dnvf9esa6v418.cloudfront.net'
var url = s3Prefix + s3Key

// send request
fetch(url).then(function(res) {
  return res.arrayBuffer()
}).then(BASE.data3d.decodeBuffer).then(function(data3d){
  console.log('Data3d has '+Object.keys(data3d.materials).length+' materials.')
})