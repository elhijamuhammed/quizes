document.addEventListener("DOMContentLoaded", function () {
  const adContainer = document.getElementById("ad-container");

  if (!adContainer) return;

  adContainer.innerHTML = `
    <!-- BEGIN AADS AD UNIT 2452213 -->

    <div id="frame"
         style="width:100%; margin:25px auto; position:relative; z-index:99998;">

      <iframe
        data-aa="2452213"
        src="https://acceptable.a-ads.com/2452213/?size=Adaptive"
        style="
          border:0;
          padding:0;
          width:70%;
          height:90px;
          overflow:hidden;
          display:block;
          margin:auto;
        ">
      </iframe>

      <div style="
        width:70%;
        margin:auto;
        position:absolute;
        left:0;
        right:0;
      ">
        <a
          target="_blank"
          id="frame-link"
          href="https://aads.com/campaigns/new/?source_id=2452213&source_type=ad_unit&partner=2452213"
          style="
            display:inline-block;
            font-size:13px;
            color:#263238;
            padding:4px 10px;
            background:#F8F8F9;
            text-decoration:none;
            border-radius:0 0 4px 4px;
          ">
          Advertise here
        </a>
      </div>

    </div>

    <!-- END AADS AD UNIT 2452213 -->
  `;
});
