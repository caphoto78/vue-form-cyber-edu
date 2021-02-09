<template>
  <div id="app">
    <div id="wrapper">
      <div id="main-content">
        <div class="container-fluid">
          <div class="row clearfix justify-content-center">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="card">
                <div class="header">
                  <h2>Advanced Form Example With Validation</h2>
                </div>
                <div class="body wizard_validation">
                  <form id="wizard_with_validation">

                    <h3>About Event</h3>
                    <fieldset>
                      <div class="row clearfix">
                        <div class="col-lg-12 col-md-12">

                          <div class="form-group row">
                            <label for="eventName" class="col-sm-3">Event Name</label>
                            <div class="col-sm-9">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Ex. Need for Speed"
                                name="eventName"
                                v-model="formOutputData.eventName"
                                required
                              />
                              <p> {{ this.formOutputData.eventName }} </p>
                              <small for="eventName" class="form-text text-danger d-none">error</small>
                            </div>
                          </div>
                          <div class="form-group row">
                            <label for="description" class="col-sm-3">Event Description</label>
                            <div class="col-sm-9">
                              <textarea
                                name="description"
                                cols="30"
                                rows="3"
                                placeholder="Short description"
                                class="form-control no-resize"
                                v-model="formOutputData.eventDescription"
                                required
                              ></textarea>
                              <small for="description" class="form-text text-danger d-none">error</small>
                            </div>
                          </div>

                          <div class="form-group row">
                            <label for="subdomain" class="col-sm-3">Event Subdomain</label>
                            <div class="col-sm-9">
                              <input
                                type="url"
                                class="form-control"
                                placeholder="https://www..."
                                name="subdomain"
                                v-model="formOutputData.eventSubdomain"
                                required
                              />
                              <small for="subdomain" class="form-text text-danger d-none">error</small>
                            </div>
                          </div>

                        </div>
                      </div>
                    </fieldset>

                    <h3>Event Options</h3>
                    <fieldset>
                      <div class="row clearfix">
                        <div class="col-lg-12 col-md-12">

                          <div class="form-group row">
                            <div class="col-sm-5">
                              <div>


                                <p>Gameplay Mode</p>
                                  <label class="fancy-radio custom-color-green"><input name="gameplay" value="team" type="radio" checked><span><i></i>Team</span></label>
                                  <label class="fancy-radio custom-color-green"><input name="gameplay" value="single" type="radio"><span><i></i>Single</span></label>
                                
                              
                              </div>
                              <div>
                                <p>Score Options</p>
                                <label class="fancy-radio custom-color-green"><input name="score" value="dinamic" type="radio" checked><span><i></i>Dynamic</span></label>
                                <label class="fancy-radio custom-color-green"><input name="score" value="flat" type="radio"><span><i></i>Flat</span></label>
                              </div>
                            </div>
                            
                            <div class="col-sm-7">
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
                              <div>
                                <label class="col-sm-3">Players</label>
                                <br>
                                <div id="nouislider_basic_example"></div>
                                <div class="m-t-20 font-12"><b>Choose: </b><span class="js-nouislider-value"></span></div>
                              </div>

                            </div>
                          </div>

                          
                          <div class="form-group row">
                            
                          </div>

                          <div class="form-group row">
                            <p class="col-sm-3">Access Type</p>
                            <div class="col-sm-9 row">
                              <div>
                                <label class="fancy-radio custom-color-green">
                                  <input name="access" value="dynamic" type="radio" checked><span><i></i>Public</span>
                                </label>
                              </div>
                              <div>
                                <label class="tic fancy-radio custom-color-green">
                                  <input id="access" name="access" value="flat" type="radio"><span><i></i>Restricted</span>
                                </label>
                                <div class="reveal-if-active">
                                  <label for="passw">Set Your Password:</label>
                                  <input type="password" id="passw" name="passw" class="input-sm form-control require-if-active" data-require-pair="#access">
                                </div>
                              </div>
                              
                            </div>
                          </div>
                          

                        </div>
                      </div>
                    </fieldset>

                    <h3>Choose your Exercises</h3>
                    <fieldset>
                      <div class="row clearfix">
                            <div class="col-lg-4 col-md-12">
                            <label>Select 5 events</label>
                            <div class="multiselect_div">
                                <select
                                  id="multiselect4-filter"
                                  name="multiselect4[]"
                                  class="multiselect multiselect-custom" multiple="multiple"
                                >
                                  <option value="" disabled>Choose</option>
                                  <option 
                                      v-for="(title, index) in formInputData.titles"
                                      :key="index"
                                      :value="title"
                                    >{{ title }}</option>
                                </select>
                              </div>
                    

                        </div>
                      </div>
                    </fieldset>

                    <h3>Your Selection</h3>
                    <fieldset>
                      <div class="row clearfix">
                        <div class="col-lg-4 col-md-12">
                        <p>Event Name: {{ formOutputData.eventName }}</p>
                        <p>Event Description: {{ formOutputData.eventDescription }}</p>
                        <p>Event Subdomain: {{ formOutputData.eventSubdomain }}</p>
                    

                        </div>
                      </div>
                    </fieldset>




                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import $ from '../assets/vendor/jquery/jquery';
import axios from 'axios';
// import RadioBtn from '../components/RadioBtn.vue';

export default {
  name: 'Home',
  components: {
    // RadioBtn,
  },
  data() {
    return {
      formOutputData: {
        eventName: '',
        eventDescription: '',
        eventSubdomain: '',
        gameplay: '',
        score: '',
        dates: '',
        players: 0,
        accessType: '',
        exercises: []
      },
      formInputData: {
        titles: [],
        values: []
      }
      
    }
  },
  created() {
    axios
      .get('https://api.cyberedu.ro/v1/challenge')
      .then(response => {
        const events = []
        response.data.forEach(item => {
        events.push(item)
      })
      events.forEach(event => {
        this.formInputData.titles.push((event.title.charAt(0).toUpperCase() + event.title.slice(1)).replace("-", " "));
        this.formInputData.values.push(event.title);
      })
      console.log(this.titles);
      })
      .catch(error => console.error(error));
  },
  mounted() {
    var FormStuff = {
  
    init: function() {
      // kick it off once, in case the radio is already checked when the page loads
      this.applyConditionalRequired();
      this.bindUIActions();
    },
    
    bindUIActions: function() {
      // when a radio or checkbox changes value, click or otherwise
      $("label.tic > input[type='radio']").on("change", this.applyConditionalRequired);
    },
    
    applyConditionalRequired: function() {
      // find each input that may be hidden or not
      $(".require-if-active").each(function() {
        var el = $(this);
        // find the pairing radio or checkbox
        if ($(el.data("require-pair")).is(":checked")) {
          // if its checked, the field should be required
          el.prop("required", true);
        } else {
          // otherwise it should not
          el.prop("required", false);
        }
      });
    }

  };

    FormStuff.init();
  },
  updated() {
    
      const scriptTag = function(url) {
        let externalScript = document.createElement('script')
        externalScript.setAttribute('src', url)
        document.head.appendChild(externalScript)
      }
      // Javascript
      scriptTag('/vendor/jquery/jquery-3.3.1.min.js');
      scriptTag('/vendor/bootstrap/js/bootstrap.js');
      scriptTag('/vendor/bootstrap/js/bootstrap.js');
      scriptTag('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js');

      // Input Mask Plugin Js
      scriptTag('/vendor/jquery-inputmask/jquery.inputmask.bundle.js');
      scriptTag('/vendor/jquery.maskedinput/jquery.maskedinput.min.js');

      // Multi Select Plugin Js
      scriptTag('/vendor/multi-select/js/jquery.multi-select.js');
      scriptTag('/vendor/bootstrap-multiselect/bootstrap-multiselect.js');

      scriptTag('/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js');
      // Bootstrap Tags Input Plugin Js
      scriptTag('/vendor/bootstrap-tagsinput/bootstrap-tagsinput.js');

      // noUISlider Plugin Js
      scriptTag('/vendor/nouislider/nouislider.min.js');
      scriptTag('/vendor/jquery-validation/jquery.validate.js');
      scriptTag('/vendor/sweetalert/sweetalert.min.js');
      scriptTag('/js/pages/ui/dialogs.js');
      scriptTag('/js/pages/forms/form-wizard.js');
      scriptTag('/vendor/jquery-steps/jquery.steps.js');
      scriptTag('/js/pages/forms/advanced-form-elements.js');
  },

  
}
</script>

<style lang="scss" scoped>
  .reveal-if-active {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    font-size: 16px;
    transform: scale(0.8);
    transition: .5s;

    label {
    display: block;
    margin: 0 0 3px 0;
    }
  
    input[type=password] {
      width: 100%;
    }
    input[type="radio"]:checked ~ & {
      opacity: 1;
      max-height: 100px;
      padding: 10px 20px;
      transform: scale(1);
      overflow: visible;
    }
  }

</style>