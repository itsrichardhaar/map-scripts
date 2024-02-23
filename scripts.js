document.addEventListener('DOMContentLoaded', function() {
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 34.04036781882561, lng: -77.88998945876496},
            zoom: 14,
            disableDefaultUI: true, // Disable default UI controls
            styles: [
                { featureType: 'poi', stylers: [{ visibility: 'off' }] }, // Hide points of interest
                { featureType: 'transit', stylers: [{ visibility: 'off' }] }, // Hide transit
                { featureType: 'road', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] }, // Hide road icons
                { featureType: 'road', elementType: 'labels.text', stylers: [{ visibility: 'on' }] } // Show road labels
            ],
            gestureHandling: 'greedy', // Enable smooth zoom
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL, // Set zoom control style
                position: google.maps.ControlPosition.TOP_LEFT, // Set zoom control position
                animation: google.maps.Animation.SMALL // Set zoom animation
            }
        });

        var markers = [
            {
                position: {lat: 34.04036781882561, lng: -77.88998945876496},
                title: 'Carolina Beach House',
                content: '<div class="info-window">' +
                        '<img src="https://lark-cdn.com/wp-content/img_dyn/80/5219/f/200x160/undefined/noname.jpg">' +
                        '<h3>Carolina Beach House</h3>' +
                        '<a href="https://www.google.com/maps/place/The+Beach+House/@34.0386529,-77.8900757,17z/data=!3m1!4b1!4m9!3m8!1s0x89a9f8f8e6709b55:0xdd75d409326c7e8d!5m2!4m1!1i2!8m2!3d34.0386529!4d-77.8900757!16s%2Fg%2F1tj_62p0?entry=ttu">412 Carolina Beach Avenue, North, Carolina Beach, NC 28428</a>' +
                        '<a href="https://www.carolinabeachhouse.com">Visit Website</a>' +
                        '<a href="tel:9109887636">(910)988-7636</a>' +
                      '</div>',
                tags: ['all', 'hotel']
            },
            {
                position: {lat: 34.23668378687421, lng: -77.94740160329766},
                title: 'Bespoke Coffee & Dry Goods',
                content: '<div class="info-window">' +
                        '<img src="https://lark-cdn.com/wp-content/img_dyn/80/5219/f/200x160/undefined/noname.jpg">' +
                        '<h3>Bespoke Coffee & Dry Goods</h3>' +
                        '<p>Classic coffee shop beverages & baked goods with mid-century interior details & natural light.</p>' +
                        '<a href="https://www.google.com/maps/dir/?api=1&origin=412%20Carolina%20Beach%20Avenue%20North,%20Carolina%20Beach,%20NC%2028428&destination=202%20Princess%20Street,%20Wilmington%20North%20Carolina%2028401&destination_place_id=ChIJkZLp78YfqokRY2DF_g1GJYw">Visit Route</a>' +
                      '</div>',
                tags: ['all', 'coffee_sweets']
            },
            {
                position: {lat: 34.03339594878995, lng: -77.89308148981041}, 
                title: 'Carolina Beach Boardwalk',
                content: '<div class="info-window">' +
                        '<img src="https://lark-cdn.com/wp-content/img_dyn/80/5219/f/200x160/undefined/noname.jpg">' +
                        '<h3>Carolina Beach Boardwalk</h3>' +
                        '<p>A classic American boardwalk hugging the sandy beach with kid-friendly rides & snack bars, plus concerts & fireworks.</p>' +
                        '<a href="https://www.google.com/maps/dir/?api=1&origin=412%20Carolina%20Beach%20Avenue%20North,%20Carolina%20Beach,%20NC%2028428&destination=%20Carolina%20Beach%20Avenue%20South,%20Carolina%20Beach%20North%20Carolina%2028428&destination_place_id=ChIJe_XAWPr4qYkR87EbANZR5Xs">Visit Route</a>' +
                      '</div>',
                tags: ['all', 'to_do_see']
            },
            {
                position: {lat: 34.060282482023176, lng: -77.88072299222898},
                title: 'Freeman Park',
                content: '<div class="info-window">' +
                        '<img src="https://lark-cdn.com/wp-content/img_dyn/80/5219/f/200x160/undefined/noname.jpg">' +
                        '<h3>Freeman Park</h3>' +
                        '<p>Popular seaside park for tent camping & bonfires, plus fishing, swimming & boating.</p>' +
                        '<a href="https://www.google.com/maps/dir/?api=1&origin=412%20Carolina%20Beach%20Avenue%20North,%20Carolina%20Beach,%20NC%2028428&destination=1800%20Canal%20Drive,%20Carolina%20Beach%20North%20Carolina%2028428&destination_place_id=ChIJERQYQMz5qYkRXPIQzNXdBbI">Visit Route</a>' +
                      '</div>',
                tags: ['all', 'to_do_see']
            },
            {
                position: {lat: 34.04075883479514, lng: -77.89556069780788}, 
                title: 'Lazy Pirate',
                content: '<div class="info-window">' +
                        '<img src="https://lark-cdn.com/wp-content/img_dyn/80/5219/f/200x160/undefined/noname.jpg">' +
                        '<h3>Lazy Pirate</h3>' +
                        '<p>Beachfront bar & grill with seafood, tropical cocktails, sand volleyball courts, corn hole boards, axe throwing, & live bands.</p>' +
                        '<a href="https://www.google.com/maps/dir/412+Carolina+Beach+Ave+N,+Carolina+Beach,+NC+28428/701+North+Lake+Park+Boulevard,+Carolina+Beach+North+Carolina+28428/@34.0371263,-77.8978151,16z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x89a9f8f8e6715305:0x4753bc1d0bd6eb87!2m2!1d-77.8899829!2d34.0386504!1m5!1m1!1s0x89a9f8f7bd7a74e5:0x348ecebfc8b3ce98!2m2!1d-77.8953986!2d34.039825?entry=ttu">Visit Route</a>' +
                      '</div>',
                tags: ['all', 'local_eats', 'to_do_see']
            },
            {
                position: {lat: 33.96269515509115, lng: -77.92640748906013}, 
                title: 'North Carolina Aquarium',
                content: '<div class="info-window">' +
                        '<img src="https://lark-cdn.com/wp-content/img_dyn/80/5219/f/200x160/undefined/noname.jpg">' +
                        '<h3>North Carolina Aquarium</h3>' +
                        '<p>Make connections with the natural world at the North Carolina Aquarium at Fort Fisher. Feel the smooth skin of a gliding stingray, look an albino alligator in the eye, and delight in a family of otters playing in a waterfall.</p>' +
                        '<a href="https://www.google.com/maps/dir/412+Carolina+Beach+Ave+N,+Carolina+Beach,+NC+28428/900+Loggerhead+Road,+Kure+Beach+North+Carolina+28449/@34.000587,-77.9498027,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x89a9f8f8e6715305:0x4753bc1d0bd6eb87!2m2!1d-77.8899829!2d34.0386504!1m5!1m1!1s0x89a9ff7def5bbab1:0xcb898b94e2c2d3a!2m2!1d-77.9261189!2d33.9626558?entry=ttu">Visit Route</a>' +
                      '</div>',
                tags: ['all', 'to_do_see']
            },
            {
                position: {lat: 33.96866473907825, lng: -77.9191438946328},
                title: 'Fort Fisher',
                content: '<div class="info-window">' +
                        '<img src="https://lark-cdn.com/wp-content/img_dyn/80/5219/f/200x160/undefined/noname.jpg">' +
                        '<h3>Fort Fisher</h3>' +
                        '<p>Site of Civil War’s largest Amphibious Battle, Fort Fisher has a scenic trail that leads around the fort remains. Also, guests will have access to a video on the history of Fort Fisher, exhibits, and artifacts recovered from sunken ships.</p>' +
                        '<a href="https://www.google.com/maps/dir/?api=1&origin=412%20Carolina%20Beach%20Avenue%20North,%20Carolina%20Beach,%20NC%2028428&destination=1610%20Fort%20Fisher%20Boulevard%20South,%20Kure%20Beach%20North%20Carolina%2028449&destination_place_id=ChIJr-zRoWX_qYkRFx_oqpPzXV8">Visit Route</a>' +
                      '</div>',
                tags: ['all', 'to_do_see']
            },
            {
                position: {lat: 34.23449179288499, lng: -77.948317130287},
                title: 'Yosake',
                content: '<div class="info-window">' +
                        '<img src="https://lark-cdn.com/wp-content/img_dyn/80/5219/f/200x160/undefined/noname.jpg">' +
                        '<h3>Yosake</h3>' +
                        '<p>Fashionable Pan-Asian spot serving sushi & craft cocktails on the 2nd floor of a historic building.</p>' +
                        '<a href="https://www.google.com/maps/dir/?api=1&origin=412%20Carolina%20Beach%20Avenue%20North,%20Carolina%20Beach,%20NC%2028428&destination=33%20South%20Front%20Street,%20Wilmington%20North%20Carolina%2028401&destination_place_id=ChIJp9oDyscfqokRedV7zvpn24w">Visit Route</a>' +
                      '</div>',
                tags: ['all', 'local_eats']
            },
            {
                position: {lat: 34.237106237085456, lng: -77.94780901863807}, 
                title: 'Quanto Basta',
                content: '<div class="info-window">' +
                        '<img src="https://lark-cdn.com/wp-content/img_dyn/80/5219/f/200x160/undefined/noname.jpg">' +
                        '<h3>Quanto Basta</h3>' +
                        '<p>The concept of Quanto Basta–QB for short–is true to its simple Italian culinary definition: “as much as you like; as much as you need.” This family-owned and operated establishment is known for heaping platefuls of freshly prepared pastas with rustic sauces, hand-crafted pizzette, and rotisserie fire-roasted poultry.</p>' +
                        '<a href="https://www.google.com/maps/dir/?api=1&origin=412%20Carolina%20Beach%20Avenue%20North,%20Carolina%20Beach,%20NC%2028428&destination=107%20North%202nd%20Street,%20Wilmington%20North%20Carolina%2028401&destination_place_id=ChIJa_OE7zAfqokR0pzdSfZ7b2o">Visit Route</a>' +
                      '</div>',
                tags: ['all', 'local_eats']
            },
            {
                position: {lat: 34.02774919909995, lng: -77.8954333302945}, 
                title: 'Veggie Wagon',
                content: '<div class="info-window">' +
                        '<img src="https://lark-cdn.com/wp-content/img_dyn/80/5219/f/200x160/undefined/noname.jpg">' +
                        '<h3>Veggie Wagon</h3>' +
                        '<p>The Veggie Wagon is a locally family owned produce company located that specializes in the delivery of fresh local North Carolina fruits, vegetables, and homemade products to the local area beaches.</p>' +
                        '<a href="https://www.google.com/maps/dir/?api=1&origin=412%20Carolina%20Beach%20Avenue%20North,%20Carolina%20Beach,%20NC%2028428&destination=608%20Lake%20Park%20Boulevard%20South,%20Carolina%20Beach%20North%20Carolina%2028428&destination_place_id=ChIJe1cUCu_4qYkRJ3EJUaLRH2s">Visit Route</a>' +
                      '</div>',
                tags: ['all', 'local_eats']
            },
            {
                position: {lat: 34.033785879023156, lng: -77.89363829243982}, 
                title: 'Malama Cafe',
                content: '<div class="info-window">' +
                        '<img src="https://lark-cdn.com/wp-content/img_dyn/80/5219/f/200x160/undefined/noname.jpg">' +
                        '<h3>Malama Cafe</h3>' +
                        '<p>Malama Cafe is a locally owned coffee shop with a focus on delicious drinks and fresh and healthy breakfast and lunch.</p>' +
                        '<a href="https://www.google.com/maps/dir/?api=1&origin=412%20Carolina%20Beach%20Avenue%20North,%20Carolina%20Beach,%20NC%2028428&destination=108%20Cape%20Fear%20Boulevard,%20Carolina%20Beach%20North%20Carolina%2028428&destination_place_id=ChIJc59eDlT5qYkRregv1Z7iSBo">Visit Route</a>' +
                      '</div>',
                tags: ['all', 'local_eats']
            },
            {
                position: {lat: 34.03350022197622, lng: -77.8920975167997}, 
                title: 'Buzz Roost',
                content: '<div class="info-window">' +
                        '<img src="https://lark-cdn.com/wp-content/img_dyn/80/5219/f/200x160/undefined/noname.jpg">' +
                        '<h3>Buzz Roost</h3>' +
                        '<p>Easygoing stop for seafood & tacos with a full bar amid shabby beach decor with outdoor seating.</p>' +
                        '<a href="https://www.google.com/maps/dir/?api=1&origin=412%20Carolina%20Beach%20Avenue%20North,%20Carolina%20Beach,%20NC%2028428&destination=8%20Pavilion%20Avenue%20South,%20Carolina%20Beach%20North%20Carolina%2028428&destination_place_id=ChIJfxOTXPr4qYkRQnvyp_eXTfE">Visit Route</a>' +
                      '</div>',
                tags: ['all', 'local_eats']
            },
            {
                position: {lat: 34.03613460595417, lng: -77.89137313398597}, 
                title: 'Seawitch Cafe & Tiki Bar',
                content: '<div class="info-window">' +
                        '<img src="https://lark-cdn.com/wp-content/img_dyn/80/5219/f/200x160/undefined/noname.jpg">' +
                        '<h3>Seawitch Cafe & Tiki Bar</h3>' +
                        '<p>Casual seafood joint & bar with lively outdoor patio, tropical drinks & frequent live entertainment.</p>' +
                        '<a href="https://www.google.com/maps/dir/?api=1&origin=412%20Carolina%20Beach%20Avenue%20North,%20Carolina%20Beach,%20NC%2028428&destination=227%20Carolina%20Beach%20Avenue%20North,%20Carolina%20Beach%20North%20Carolina%2028428&destination_place_id=ChIJqX5ygPn4qYkRqydUORgQSKY">Visit Route</a>' +
                      '</div>',
                tags: ['all', 'bars_booze']
            },
            {
                position: {lat: 34.235680870850146, lng: -77.94834604417677},
                title: 'The Pour House',
                content: '<div class="info-window">' +
                        '<img src="https://lark-cdn.com/wp-content/img_dyn/80/5219/f/200x160/undefined/noname.jpg">' +
                        '<h3>The Pour House</h3>' +
                        '<p>A true locals bar, when you arrive at The Pour House, you will be issued a wristband that allows you to pour your own beverage from a wall of taps where you pay by the ounce!</p>' +
                        '<a href="https://www.google.com/maps/dir/?api=1&origin=412%20Carolina%20Beach%20Avenue%20North,%20Carolina%20Beach,%20NC%2028428&destination=103%20Market%20Street,%20Wilmington%20North%20Carolina%2028401&destination_place_id=ChIJ9R8lr8cfqokRIHOw7Hklx0k">Visit Route</a>' +
                      '</div>',
                tags: ['all', 'bars_booze']
            },
            {
                position: {lat: 34.235415401024305, lng: -77.94789560329777}, 
                title: 'The Fork N Cork',
                content: '<div class="info-window">' +
                        '<img src="https://lark-cdn.com/wp-content/img_dyn/80/5219/f/200x160/undefined/noname.jpg">' +
                        '<h3>The Fork N Cork</h3>' +
                        '<p>Gourmet burgers, sandwiches & appetizers are offered at this quaint, brick-walled bar with TVs.</p>' +
                        '<a href="https://www.google.com/maps/dir/?api=1&origin=412%20Carolina%20Beach%20Avenue%20North,%20Carolina%20Beach,%20NC%2028428&destination=122%20Market%20Street,%20Wilmington%20North%20Carolina%2028401&destination_place_id=ChIJvQdMUsYfqokRHSqnz8g0vMQ">Visit Route</a>' +
                      '</div>',
                tags: ['all', 'local_eats', 'bars_booze']
            },
            {
                position: {lat: 34.03397970325232, lng: -77.89260597446989},
                title: 'Britts Donuts',
                content: '<div class="info-window">' +
                        '<img src="https://lark-cdn.com/wp-content/img_dyn/80/5219/f/200x160/undefined/noname.jpg">' +
                        '<h3>Britts Donuts</h3>' +
                        '<p>Britt’s first opened in 1939 and has become famous for their homemade glazed donuts. It can be the perfect place to end your morning run or the spot to cap off your evening beachside with a late night treat.</p>' +
                        '<a href="https://www.google.com/maps/dir/412+Carolina+Beach+Ave+N,+Carolina+Beach,+NC+28428/11+Carolina+Beach+Avenue+North,+Carolina+Beach+North+Carolina+28428/@34.036236,-77.8938779,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x89a9f8f8e6715305:0x4753bc1d0bd6eb87!2m2!1d-77.8899829!2d34.0386504!1m5!1m1!1s0x89a9f8fa446d8897:0xd969b3009d844113!2m2!1d-77.8926167!2d34.0338108?entry=ttu">Visit Route</a>' +
                      '</div>',
                tags: ['all', 'coffee_sweets', 'local_eats']
            },

            // Add more markers as needed
        ];
        var icons = {

            local_eats: {
                url: 'https://springercdn.s3.amazonaws.com/assets/carolina-beach-house/Food.png', // Fork and knife icon
                scaledSize: new google.maps.Size(32, 32) // Adjust the size as needed
            },
            bars_booze: {
                url: 'https://springercdn.s3.amazonaws.com/assets/carolina-beach-house/Drinks.png', // Beer mug icon
                scaledSize: new google.maps.Size(32, 32) // Adjust the size as needed
            },
            coffee_sweets: {
                url: 'https://springercdn.s3.amazonaws.com/assets/carolina-beach-house/Coffee.png', // Coffee cup icon
                scaledSize: new google.maps.Size(32, 32) // Adjust the size as needed
            },
            to_do_see: {
                url: 'https://springercdn.s3.amazonaws.com/assets/carolina-beach-house/Attractions.png', // Star icon
                scaledSize: new google.maps.Size(32, 32) // Adjust the size as needed
            },
            hotel: {
                url: 'https://springercdn.s3.amazonaws.com/assets/carolina-beach-house/Hotel.png', // Star icon
                scaledSize: new google.maps.Size(32, 32) // Adjust the size as needed
            }
        };

         var currentInfoWindow = null;
        var filteredMarkers = markers.map(function(markerInfo) {
            var icon = icons['all']; // Default icon
            if (markerInfo.tags.length > 1) {
                icon = icons[markerInfo.tags[1]]; // Use specific icon if available
            }

            var marker = new google.maps.Marker({
                position: markerInfo.position,
                map: null, // Initially hide all markers
                title: markerInfo.title,
                icon: icon
            });

            var infowindow = new google.maps.InfoWindow({
                content: markerInfo.content
            });

            marker.addListener('click', function() {
                // Close the currently open info window, if any
                if (currentInfoWindow) {
                    currentInfoWindow.close();
                }
                // Open the info window for this marker
                infowindow.open(map, marker);
                // Set this info window as the current one
                currentInfoWindow = infowindow;

                // Zoom in on the marker location
                map.setZoom(15);
                map.panTo(marker.getPosition());
            });

            return { marker: marker, tags: markerInfo.tags };
        });

        function updateMarkers(filter) {
            filteredMarkers.forEach(function(marker) {
                if (marker.tags.includes(filter) || filter === 'all') {
                    marker.marker.setMap(map); // Show marker if it matches the filter or if 'all' is selected
                } else {
                    marker.marker.setMap(null); // Hide marker if it doesn't match the filter
                }
            });
        }

        document.getElementById('filter').addEventListener('change', function() {
            var selectedFilter = this.value;
            updateMarkers(selectedFilter);
        });

        // Initially show all markers
        updateMarkers('all');
    }
});
