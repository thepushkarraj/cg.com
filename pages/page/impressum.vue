<template>
  <div class="container mb-5">
    <div class="row mb-10">
      <div class="col-12">
        <h1 class="text-center mt-5">
          {{ $t('ImpressumHeading') }}
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 pa-5">
        <h3 class="text-dark">
          {{ $t('EUDisputeResolution') }}
        </h3>
        <p class="f125">
          {{ $t('TheEuropeanCommission') }} <br>
          <a
            href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage"
          >https://ec.europa.eu/consumers/odr.
          </a><br>
          {{ $t('OurEmail') }}
        </p>
        <h4 class="text-dark">
          {{ $t('ConsumerDisputeResolution') }}
        </h4>
        <p class="f125">
          {{ $t('ConsumerDisputeResolutionp1') }}
          <a
            href="https://www.verbraucher-schlichter.de/"
          >
            ( https://www.verbraucher-schlichter.de )
          </a>
          .
        </p>
        <h4 class="text-dark">
          {{ $t('LiabilityForContents') }}
        </h4>
        <p class="f125">
          {{ $t('LiabilityForContentsp1') }} <br><br>
          {{ $t('LiabilityForContentsp2') }}
        </p>
      </div>
      <div class="col-md-6 pa-5">
        <div class="row primary lighten-2 rounded">
          <div class="col-md-12">
            <h3 class="golden-text">
              {{ $t('InformationAccordingTo') }} § 5 TMG
            </h3>
          </div>
          <div class="col-md-6">
            <h5>
              CamperGold GmbH
            </h5>
            <h5>
              Neuer Wall 50
            </h5>
            <h5>
              20354 Hamburg
            </h5>
          </div>
          <div class="col-md-6">
            <h5>
              Übergabestation Wohnmobile
            </h5>
            <h5>
              CamperGold GmbH
            </h5>
            <h5>
              Billbrookdeich 184
            </h5>
            <h5>
              22113 Hamburg
            </h5>
          </div>
          <div class="col-md-12">
            <h5>
              Commercial Register: HRB 167609
            </h5>
            <h5>
              Register Court: Amtsgericht Hamburg
            </h5>
          </div>
          <div class="col-md-12">
            <h3 class="golden-text">
              {{ $t('RepresentedBy') }}:
            </h3>
            <h5>
              Patrick Willemer
            </h5>
          </div>
          <div class="col-md-12">
            <h3 class="golden-text">
              {{ $t('Contact') }}
            </h3>
            <h5>
              Phone: +49 40-23969530
            </h5>
            <h5>
              E-Mail: kontakt@campergold.com
            </h5>
          </div>
          <div class="col-md-12">
            <h3 class="golden-text">
              VAT ID
            </h3>
            <h5>
              VAT identification number according to § 27 a
            </h5>
            <h5>
              Umsatzsteuergesetz: DE340890139
            </h5>
          </div>
          <div class="col-md-12">
            <h3 class="golden-text">
              {{ $t('EditorInCharge') }}
            </h3>
            <h5>
              Patrick Willemer
            </h5>
            <h5>Neuer Wall 50</h5>
            <h5>20354 Hamburg</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 pa-5">
        <h4 class="text-dark">
          {{ $t('LiabilityForLinks') }}
        </h4>
        <p class="f125">
          {{ $t('LiabilityForLinksp1') }}
          <br><br>
          {{ $t('LiabilityForLinksp2') }}
        </p>
        <h4 class="text-dark">
          {{ $t('Copyright') }}
        </h4>
        <p class="f125">
          {{ $t('Copyrightp1') }}
          <br><br>
          {{ $t('Copyrightp2') }}
        </p>
        <p class="f125">
          {{ $t('Source') }} :
        </p>
        <a class="mb-5" href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [],
      meta: ''
    }
  },
  mounted () {
    this.$api('/pagecontent/51').then((res) => {
      if (res.data.status) {
        this.data = this.$psJSON(res.data.data)
      } else {
        this.$router.path({ push: '/' })
      }
    })
  },
  head () {
    return {
      title: this.$lang(this.data.meta_title),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$lang(this.data.meta_description)
        }
      ]
    }
  }
}
</script>

<style scoped>
span {
  font-family: "Poppins", sans-serif !important;
}
.golden-text {
  color: #fff !important;
}
.f125 {
  font-size: 1rem;
}
.bggolden {
  background: linear-gradient(15deg, #c18d2b, #e7c548, #ce9f35) !important;
  border-radius: 20px;
  padding: 20px;
}
</style>
