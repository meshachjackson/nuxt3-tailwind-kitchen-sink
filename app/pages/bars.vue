<script>
import barsData from '~/app/data/bars_yelp.json'

export default {
  data() {
    return {
      bars: barsData.data.search.business,
    }
  },
}
</script>

<template>
  <div>
    <h1>Bars in New Orleans</h1>
    <ul>
      <li v-for="bar in bars" :key="bar.name">
        <ListingSimple
          :name="bar.name"
          :address="bar.location.address1"
          :city="bar.location.city"
          :phone="bar.phone"
          :rating="bar.rating"
          :reviews="bar.review_count"
          :price="bar.price"
        />
      </li>
    </ul>
  </div>
</template>
