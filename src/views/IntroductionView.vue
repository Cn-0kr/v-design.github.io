<template>
<div>
    <headComponentWithQuote textColor="#000"></headComponentWithQuote>
    <div class="isolation"></div>
    <div class="contentBox">
        <div class="companyIntro">
            <div class="introText">
                <h3>About Us</h3>
                <p>VincDesign, an acclaimed Hong Kong-based branding and design studio, excels in crafting award-winning branding and packaging solutions acknowledged in prestigious competitions like DFA Awards, Topawards Asia, HKDA Global Design Awards, Communication Arts, International Design Award, Creativity International Awards, and Muse Creative Awards. Clients trust us for design solutions that transcend conventional boundaries.</p>
                <p>Vince Cheung is a design enthusiast who believes in the transformative power of branding and design for the future. He is dedicated to creating brand identities that authentically reflect the passion of businesses and individuals. Emphasizing an inside-out approach, Vince ensures a meaningful and unique design that withstands market dynamics. Our process involves infusing brands with commercial, cultural, and creative elements, imparting a captivating spirit that resonates with audiences.</p>
                <p>At VincDesign, we perceive a brand as more than just a logo or tagline; it’s a holistic representation of a company’s values, mission, and personality. Our approach revolves around a profound understanding of our clients’ business goals, values, and aspirations. Through close collaboration, we tailor bespoke branding solutions to meet specific needs.</p>
                <p>Whether you’re a startup establishing your brand or an established company refreshing your brand image, VincDesign possesses the expertise and experience to help you achieve your goals. Contact us today to discover how we can assist you in creating a meaningful, impactful brand.</p>
                <p>Vince Cheung is a design enthusiast who believes in the transformative power of branding and design for the future. He is dedicated to creating brand identities that authentically reflect the passion of businesses and individuals. Emphasizing an inside-out approach, Vince ensures a meaningful and unique design that withstands market dynamics. Our process involves infusing brands with commercial, cultural, and creative elements, imparting a captivating spirit that resonates with audiences.</p>
            </div>
            <div class="bossInfo">
                <img src="https://www.vincdesign.com/wp-content/uploads/2024/05/IMG_6532.jpg" alt="bosspic">
                <div class="bossInfoText">
                    <div>Vince Cheung</div>
                    <div>Founder of VincDesign Branding Co.</div>
                    <div>Member of Hong Kong Design Association</div>
                </div>
            </div>
        </div>
        <div class="clients">
            <p>Here’s some case studies:</p>
            <p>DAMA | WOOM | Énorme | theClinic | Airsparks | XieXieNong | Hashtag B</p>
            <br>
            <p>Client list:</p>
            <p>The Peninsula Hotel, Regent Hotel, Hong Kong Exchanges and Clearing Limited, Zeiss, Chinese University of Hong Kong,<br> Tong Ren Tang, Chen Chunlan, Wong Chun Chun, Xie Xie Nong, DAMA, PMQ, YOOV, YourHealth, Farmacy, Garmin, Green<br> Peace, Mr.Right, YWCA, Hashtag B</p>
            <br>
        </div>    
        <div class="awards">
            <h3>Awards Received</h3>
            <ul>
                <li>2 Winner Awards in ASIA DESIGN PRIZE 2024</li>
                <li>Best Design in Online Design Awards 2023</li>
                <li>Grand Award of the Year at the HKDA Hong Kong Designers Association Brand Design Awards 2023</li>
                <li>Awarded silver at the World Brand Design Society Awards 22/23 (Category: Packaging Design Creation)</li>
                <li>Winner of The DFA Design for Asia Awards 2022 (Category: Communicaiton)</li>
                <li>Winner of TOPAWARDS ASIA 2021 (Category: beverage)</li>
                <li>2 Excellence Awards in HKDA Global Design Awards 2021 (Category: Graphics)</li>
                <li>Platinum & Gold Awards (Branding & Logo Design) Muse Creative Awards 2019</li>
                <li>Winner – Communication Arts Typography Competition 2018</li>
                <li>Honorable Mention (Trademark Design) – International Design Award 2018</li>
            </ul>
            <br>
        </div>
        <div class="association">
            <p>Member of Hong Kong Design Association</p>
            <p>#vince design #vinc design #vincedesign #VVeBrand</p>
            <br>
            <br>
        </div>  
    </div>

</div>
</template>

<script>
import headComponentWithQuote from "../components/headComponentWithQuote.vue";
export default{
    name: 'IntroductionView',

    data(){
        return{

        }
    },
    components:{headComponentWithQuote},
    methods:{

    },
}
</script>

<style scoped>
.isolation{
    height: 100px;
}
.contentBox{
    padding: 20px 198px;
}
.companyIntro{
    display: flex;

}
.introText{
    flex:2;
    margin-right: 60px;
    text-align: left;
}
.introText p{
    line-height: 40px;
}
.clients{
    text-align: left;
}
.clients p{
    line-height: 40px;
}
.awards{
    text-align: left;
}
.awards li{
    list-style:armenian;
    line-height:  40px;
}
.association{
    text-align: left;
    line-height: 10px;
    font-size: 15px;
}
.bossInfo{
    flex:1;
}
.bossInfoText{
    margin-top:20px;
    line-height: 30px;
}
.bossInfo img{
    height: 635px;
}
</style>