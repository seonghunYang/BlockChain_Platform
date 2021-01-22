// require("../../../node_modules/buffer");
require("buffer");
window.addEventListener("load", async () => {
  if (typeof ipfs === 'undefined') {
    const ipfs = await Ipfs.create({ repo: 'ipfs-' + Math.random() })
    console.log(ipfs)
    console.log(Ipfs)
    console.log(Buffer.from("asd"))
  }else {
    console.log("이미 있음")
  }
})