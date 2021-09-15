<template>
  <b-navbar toggleable="md" variant="light">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/">
      <b-img :src="$withBase('/assets/images/base-token.png')" height="24"/>
      WatchToken
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item :href="$withBase('/create/')">Create ERC20 Widget</b-nav-item>
        <b-nav-item :href="$withBase('/create/?network=bsc_mainnet')">Create BEP20 Widget</b-nav-item>
        <b-nav-item :href="$withBase('/create/?network=olympus')">Create OLY20 Widget</b-nav-item>
        <b-nav-item
            :href="$withBase('/page/?hash=0x7b2261646472657373223a22307865663544633261353437614234303763374542643732416465423645343436393538633738373045222c226c6f676f223a2268747470733a2f2f7532302e706c707374617469632e72752f732f333168396966303036312f64336435393133313565393037353164616230366562626337306164666333382f62303766656237363439613338613638346139356333373465613263613265362e706e67227d&network=sparta')">
          <small>Example</small>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: 'Header',
  };
</script>
