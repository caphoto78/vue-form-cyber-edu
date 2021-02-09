<template>
  <div class="col-sm-7">
    <!------------ DATES ------------>
    <div>
      <label>Dates</label>
      <div 
        class="input-daterange input-group"
        data-provide="datepicker">
        <input
          type="text"
          class="input-sm form-control"
          name="start">
        <span class="input-group-addon range-to">to</span>
        <input type="text" class="input-sm form-control" name="end">
      </div>
    </div>

    <!------------ SLIDER ------------>
    <div>
      <label class="col-sm-3">Players</label>
      <br>
      <div id="nouislider_basic_example"></div>
      <div class="m-t-20 font-12"><b>Choose: </b><span class="js-nouislider-value"></span></div>
    </div>

  </div>
</template>

<script>
export default {
  updated() {
    // const scriptTag = function(url) {
    //   let externalScript = document.createElement('script')
    //   externalScript.setAttribute('src', url)
    //   document.head.appendChild(externalScript)
    // }
    // scriptTag('/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js');
    // scriptTag('/vendor/nouislider/nouislider.min.js');
    // scriptTag('/js/pages/forms/advanced-form-elements.js');
  },
  mounted() {
    
  },
}
</script>

<style lang="css" scoped>
  /* @import '../assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.min.css';
  @import '../assets/vendor/nouislider/nouislider.min.css'; */
</style>