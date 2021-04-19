<template>
  <div class="home row">
    <div class="col">
      <h1 class="display-4 my-4">Micro Frontend Architecture</h1>
      <p>Simply put, Micro Frontend Application is a piece of code for a portion of a webpage that can be maintained and deployed indepedently.
        Micro Frontend Architecture is bringing several such Micro Frondend Applictions together to form a complete webpage.
      </p>
      <img src="../assets/mfa.gif" alt="Micro Frontend Architecture"/>
      <h2 class="display-6 my-4">Pros</h2>
      <div class="row">
        <div class="col-sm-4">
          <div class="card min-height">
            <div class="card-body">
              <h5 class="card-title">Strategic &amp; Tactical Focus</h5>
              <p class="card-text">Separation of concerns; Header/footer microfrontend takes care of tagging, analytics, performance etc while the other customer centric application focus on improving customer/user experience.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card min-height">
            <div class="card-body">
              <h5 class="card-title">Scalability</h5>
              <p class="card-text">More team members can work independently from the host page. Independent deployments, Faster deployments</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card min-height">
            <div class="card-body">
              <h5 class="card-title">Reusability</h5>
              <p class="card-text">MFA alone can be reused / updated with latest technologies without having to change entire application code</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row py-4">
        <div class="col-sm-4">
          <div class="card min-height">
            <div class="card-body">
              <h5 class="card-title">Technology Agnostic</h5>
              <p class="card-text">Host application can run MF applications build using any javascript frameworks like Angular, React, Vue etc.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card min-height">
            <div class="card-body">
              <h5 class="card-title">Improved Developer Experience</h5>
              <p class="card-text">Yes you heard it right. With the advent of in-browser module imports, developers experience can be greatly improved. Happy codding === Happy application.</p>
            </div>
          </div>
        </div>
      </div>
      
      <h2 class="display-6 my-4">Cons</h2>
      <div class="row py-4">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Complex</h5>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Patterns are vague &amp; no standards</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
});
</script>
<style scoped>
.card.min-height {
  min-height: 12.4rem;
}
</style>
