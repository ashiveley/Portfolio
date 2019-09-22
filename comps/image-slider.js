Vue.component('image-slider', {
    props: {
        images: Array
    },
    data: function () {
        return {           
            currentNumber: 0,
            timer: null
        }
    },
    mounted: function () {
        this.startRotation();
    },
    methods: {
        startRotation: function() {
            if(this.timer==null)
            this.timer = setInterval(this.next, 5000);
        },

        stopRotation: function() {
            clearTimeout(this.timer);
            this.timer = null;
        },

        next: function() {
            this.currentNumber += 1
        },
        prev: function() {
            this.currentNumber -= 1
        }
    },    
    computed: {
    	currentImage: function() {
      	return this.images[Math.abs(this.currentNumber) % this.images.length];
      }
    },
    template:
        `<div
        v-on:mouseover="stopRotation"
        v-on:mouseout="startRotation">
        <transition-group name='fade' tag='div'>
          <div
           v-for="number in [currentNumber]"
           :key='number'
           >
             <img
                 :src="currentImage"
                 />
        </div>
      </transition-group>
    </div>
        `
})