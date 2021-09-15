<template>
  <b-row class="p-0 pt-4">
    <b-col lg="8" offset-lg="2">
      <b-jumbotron bg-variant="light" header-level="4">
        <template slot="header">
          WatchToken
        </template>
        <template slot="lead">
          {{ $site.title }}
        </template>
        <hr class="my-4">
        <p>Create a Widget for your ERC20, BEP20 or OLY20 Token. Add your Token to DApp browsers or MetaMask.</p>
        <b-button size="lg" variant="info" class="mt-2 text-uppercase p-3" to="/create/">
          Create ERC20 Widget
        </b-button>
        <b-button size="lg" variant="warning" class="mt-2 text-uppercase p-3" to="/create/?network=bsc_mainnet">
          Create BEP20 Widget
        </b-button>
        <b-button size="lg" variant="warning" class="mt-2 text-uppercase p-3" to="/create/?network=olympus">
          Create OLY20 Widget
        </b-button>
        <b-button size="lg"
                  variant="outline-info"
                  class="mt-2 text-uppercase p-3"
                  to="/page/?hash=0x7b2261646472657373223a22307842356336346337643662333734614437333865333134654161376243433037414563313934423762222c226c6f676f223a2268747470733a2f2f766974746f6d696e61636f72692e6769746875622e696f2f77617463682d746f6b656e2f6173736574732f696d616765732f626173652d746f6b656e2e706e67227d">
          Example
        </b-button>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    name: 'Home',
  };
</script>
