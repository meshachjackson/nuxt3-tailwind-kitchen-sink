<script>
import venuesData from '~/app/data/venues_yelp.json'

export default {
  data() {
    return {
      venues: venuesData.data.search.business,
    }
  },
}
</script>

<template>
  <div>
    <h1>venues in New Orleans</h1>
    <ul>
      <li v-for="venue in venues" :key="venue.name">
        <ListingSimple
          :name="venue.name"
          :address="venue.location.address1"
          :city="venue.location.city"
          :phone="venue.phone"
          :rating="venue.rating"
          :reviews="venue.review_count"
          :price="venue.price"
        />
      </li>
    </ul>
  </div>
</template>
