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
                                required
                              />
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
                            <div class="col-sm-9">
                              <label class="fancy-radio custom-color-green"><input name="access" value="dynamic" type="radio" checked><span><i></i>Public</span></label>
                              <label class="fancy-radio custom-color-green"><input name="access" value="flat" type="radio"><span><i></i>Restricted</span></label>
                            </div>
                          </div>
                          

                        </div>
                      </div>
                    </fieldset>

                    <h3>Choose your Exercises</h3>
                    <fieldset>
                      <div class="row clearfix">
                        <div class="col-lg-12 col-md-12">

                          <div class="col-lg-4 col-md-12">
                                    <label>Filter Enabled</label>
                                    <div class="multiselect_div">
                                        <select
                                          id="multiselect4-filter"
                                          name="multiselect4[]"
                                          class="multiselect multiselect-custom" multiple="multiple"
                                        >
                                          <option value="">Choose</option>
                                          <option 
                                              v-for="(title, index) in titles"
                                              :key="index"
                                              :value="title"
                                            >{{ title }}</option>
                                        </select>
                                    </div>
                                </div>
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

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      titles: ['Amintiri din Copilarie', 'Punguta cu doi bani' ],
      selectedOptions:[]
    }
  },
  mounted() {
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

    // Bootstrap Colorpicker Js
    scriptTag('/vendor/bootstrap-colorpicker/js/bootstrap-colorpicker.js');

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
  created() {
    axios
      .get('https://api.cyberedu.ro/v1/challenge')
      .then(response => (response.data.forEach(element => {
        const myTitles = []
        myTitles.push(element.title)
        this.titles = myTitles
      })))
      .catch(error => console.error(error));
  },
  methods: {
  
  },

  
}
</script>