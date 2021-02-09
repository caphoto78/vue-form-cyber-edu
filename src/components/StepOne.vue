<template>
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
            @input="takeValue($event)"
            required
          />
          <p> {{ this.eventName }} </p>
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
            v-model="eventDescription"
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
            v-model="eventSubdomain"
            required
          />
          <small for="subdomain" class="form-text text-danger d-none">error</small>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventName: '',
      eventDescription: '',
      eventSubdomain: '',
    }
  },
  methods: {
    takeValue(event){
      if (event) {
        event.preventDefault()
      }
      this.eventName = event.target.value;
      console.log(this.eventName);
    }
  },
}
</script>

<style>

</style>