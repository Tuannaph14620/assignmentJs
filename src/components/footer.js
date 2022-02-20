const footerIndex = {
    render() {
        return /*html*/ `
        <footer class = "pt-10">
<div class=" bg-blue-500">
    <div class = "flex justify-between px-10 py-5 align-center">
        <div class="">
            <ul class = "flex">
                <li><a class = "pr-10" href="#">FAQ & CONTACT</a></li>
                <li><a class = "pr-10" href="#">DELIVERY & SHIPPING</a></li>
                <li><a class = "pr-10" href="#">MY ACCOUNT</a></li>
            </ul>
        </div>
        <div class="icon_social">
            <a style="color: black;" href="https://www.facebook.com/mancity"><i class="fab fa-facebook-square text-3xl"></i></a>
            <a style="color: black;" href="https://www.youtube.com/user/mcfcofficial"><i class="fab fa-youtube-square text-3xl"></i></a>
            <a style="color: black;" href="https://www.instagram.com/mancity/"><i class="fab fa-instagram-square text-3xl"></i></a>
            <a style="color: black;" href="https://mobile.twitter.com/ManCity"><i class="fab fa-twitter-square text-3xl"></i></a>
        </div>
    </div>
</div>
<div class="bg-blue-400 py-3">
    <div class="">
        <p class = "">© Bản quyền thuộc về MANCITYSHOP</p>
    </div>
</div>
</footer>
`
    }
}

export default footerIndex