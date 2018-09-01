function getHeightData(img,scale) {
  
		 if (scale == undefined) scale=1;
  
		    var canvas = document.createElement( 'canvas' );
		    canvas.width = img.width;
		    canvas.height = img.height;
		    var context = canvas.getContext( '2d' );
 
		    var size = img.width * img.height;
		    var data = new Float32Array( size );
 
		    context.drawImage(img,0,0);
 
		    for ( var i = 0; i < size; i ++ ) {
		        data[i] = 0
		    }
 
		    var imgd = context.getImageData(0, 0, img.width, img.height);
		    var pix = imgd.data;
 
		    var j=0;
		    for (var i = 0; i<pix.length; i +=4) {
		        var all = pix[i]+pix[i+1]+pix[i+2];  // all is in range 0 - 255*3
		        data[j++] = scale*all/3;   
		    }
     
		    return data;
		}


		function createBodyRocket(posX, posY, posZ, width, height, pivot, material, flag) {
			if(flag) {
				createCubePlane(posX, posY+0.5, posZ, width, height, pivot, material);
			} else {
				createVerticalPlane(posX-0.5, posY, posZ, width, 1, height, pivot, material, "x");
			}
			createColumn(posX-0.5, posY, posZ-1.5, 2, 2, height, pivot, material);
			createColumn(posX+width-0.5, posY, posZ-1.5, 2, 2, height, pivot, material);
			createVerticalPlane(posX-2, posY, posZ-1.5, 1, width, height, pivot, material, "z");
			createVerticalPlane(posX+width+1, posY, posZ-1.5, 1, width, height, pivot, material, "z");
			createColumn(posX-0.5, posY, posZ-1.5-width, 2, 2, height, pivot, material);
			createColumn(posX+width-0.5, posY, posZ-1.5-width, 2, 2, height, pivot, material);
			createVerticalPlane(posX-0.5, posY, posZ-width-3, width, 1, height, pivot, material, "x");
		}


		function createVerticalPlane(posX, posY, posZ, factorX, factorZ, height, pivot, material, flag) {
			var c; 
			c = new THREE.Mesh(geometry, material);
			if(flag == "z") {
				c.position.set(posX, posY+height/2, posZ-factorZ/2);
			} else if(flag == "x"){
				c.position.set(posX+factorX/2, posY+height/2, posZ);
			} else {
				c.position.set(posX, posY+height/2, posZ);	
			}
			c.scale.x = factorX;
			c.scale.z = factorZ;
			c.scale.y = height;
			c.castShadow = true;
			pivot.add(c);
			posY++;
		}


		function createColumn(posX, posY, posZ, factorX, factorZ, height, pivot, material) {
			var c; 
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX, posY+height/2, posZ);
			c.scale.x = factorX;
			c.scale.z = factorZ;
			c.scale.y = height;
			c.castShadow = true;
			pivot.add(c);
			posY++;
		}


		function createCubePlane(posX, posY, posZ, width, height, pivot, material) {
			var c; 
			var valX = posX; 
			for(var i = 0; i < height; i++) {
				for(var j = 0; j < width; j++) {
					c = new THREE.Mesh(geometry, material);
					c.position.x = valX; 
					c.position.y = posY;
					c.position.z = posZ;
					c.castShadow = true;
					pivot.add(c);
					valX++;
				}
				valX = posX;
				posY++;
			}
		}


		function createHeadRocket(posX, posY, posZ, width, height, pivot, times, material) {
			createBodyRocket(posX, posY, posZ, width, height, pivot, material, false);
			posY += width;
			for(var i = 0; i < times; i++) {
				posX++;
				posZ--;
				width -= 2;
				createBodyRocket(posX, posY, posZ, width, 1, pivot, material, false);
				posY++;
			}
		}


		function createRing(posX, posY, posZ, material, pivot, flag) {
			//posX, posY, posZ are coordinates of the center of the plane
			var c = new THREE.Mesh(geometry, material);
			c.position.set(posX, posY, posZ - 5);
			c.scale.x = 7;
			pivot.add(c);
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX + 3, posY, posZ - 4);
			pivot.add(c);
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX + 4, posY, posZ - 4);
			pivot.add(c);
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX + 4, posY, posZ - 3);
			pivot.add(c);
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX + 4, posY, posZ + 3);
			pivot.add(c);
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX + 4, posY, posZ + 4);
			pivot.add(c);
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX + 3, posY, posZ + 4);
			pivot.add(c);
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX, posY, posZ + 5);
			c.scale.x = 7;
			pivot.add(c);
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX - 3, posY, posZ + 4);
			pivot.add(c);
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX - 4, posY, posZ + 4);
			pivot.add(c);
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX - 4, posY, posZ + 3);
			pivot.add(c);
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX - 4, posY, posZ - 3);
			pivot.add(c);
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX - 4, posY, posZ - 4);
			pivot.add(c);
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX - 3, posY, posZ - 4);
			pivot.add(c);
			if(!flag) { //true = central rocket
				c = new THREE.Mesh(geometry, material);
				c.position.set(posX + 5, posY, posZ);
				c.scale.z = 7;
				pivot.add(c);
				c = new THREE.Mesh(geometry, material);
				c.position.set(posX - 5, posY, posZ);
				c.scale.z = 7;
				pivot.add(c);
			}
		}


		function writeSpaceX(central_rocket) { //change color material to write "spacex" on central rocket
			var material_blue = new THREE.MeshPhongMaterial({color: 0x196993});
			var spaceX = [
				//'S'
				central_rocket.children[176],
				central_rocket.children[177],
				central_rocket.children[178],
				central_rocket.children[171],
				central_rocket.children[166],
				central_rocket.children[167],
				central_rocket.children[168],
				central_rocket.children[163],
				central_rocket.children[156],
				central_rocket.children[157],
				central_rocket.children[158],

				//'P'
				central_rocket.children[146],
				central_rocket.children[147],
				central_rocket.children[148],
				central_rocket.children[141],
				central_rocket.children[143],
				central_rocket.children[136],
				central_rocket.children[137],
				central_rocket.children[138],
				central_rocket.children[131],
				central_rocket.children[126],

				//'A'
				central_rocket.children[116], 
				central_rocket.children[117], 
				central_rocket.children[118], 
				central_rocket.children[111], 
				central_rocket.children[113], 
				central_rocket.children[106], 
				central_rocket.children[107],
				central_rocket.children[108],
				central_rocket.children[101], 
				central_rocket.children[103],
				central_rocket.children[96],
				central_rocket.children[98],

				//'C'
				central_rocket.children[86],
				central_rocket.children[87], 
				central_rocket.children[88],
				central_rocket.children[81],
				central_rocket.children[76], 
				central_rocket.children[71], 
				central_rocket.children[66], 
				central_rocket.children[67], 
				central_rocket.children[68],

				//'E'
				central_rocket.children[56], 
				central_rocket.children[57], 
				central_rocket.children[58],
				central_rocket.children[51],
				central_rocket.children[46], 
				central_rocket.children[47], 
				central_rocket.children[48],
				central_rocket.children[41],
				central_rocket.children[36], 
				central_rocket.children[37], 
				central_rocket.children[38],

				//'X'
				central_rocket.children[6], 
				central_rocket.children[8],
				central_rocket.children[11],
				central_rocket.children[12],
				central_rocket.children[13],
				central_rocket.children[17],
				central_rocket.children[21],
				central_rocket.children[22],
				central_rocket.children[23],
				central_rocket.children[26],
				central_rocket.children[28]
			];
			
			for(var i = 0; i < spaceX.length; i++) {
				spaceX[i].material = material_blue;
			}
		}


		function createPlane(posX, posY, posZ, width, height, pivot, material) {
			var c;
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX, posY, posZ);
			c.scale.set(width, height, width);
			c.castShadow = true;
			c.receiveShadow = true;
			pivot.add(c);
		}

		function createBlackBase(pivot, posX, posY, posZ, width, height) {
			var material = new THREE.MeshPhongMaterial({color: 0x000000});
			var valZ = posZ;
			createPlane(posX, posY, posZ, width, 2, pivot, material);
			
			//near-left angle
			createColumn(posX-3, posY+1, posZ+4, 1, 1, height, pivot, material);
			createColumn(posX-4, posY+1, posZ+4, 1, 1, height, pivot, material);
			createColumn(posX-4, posY+1, posZ+3, 1, 1, height, pivot, material);
			
			//near-right angle
			createColumn(posX+3, posY+1, posZ+4, 1, 1, height, pivot, material);
			createColumn(posX+4, posY+1, posZ+4, 1, 1, height, pivot, material);
			createColumn(posX+4, posY+1, posZ+3, 1, 1, height, pivot, material);

			//far-right angle
			createColumn(posX+3, posY+1, posZ-4, 1, 1, height, pivot, material);
			createColumn(posX+4, posY+1, posZ-4, 1, 1, height, pivot, material);
			createColumn(posX+4, posY+1, posZ-3, 1, 1, height, pivot, material);

			//far-left angle
			createColumn(posX-3, posY+1, posZ-4, 1, 1, height, pivot, material);
			createColumn(posX-4, posY+1, posZ-4, 1, 1, height, pivot, material);
			createColumn(posX-4, posY+1, posZ-3, 1, 1, height, pivot, material);
		}

		function createEngines(pivot, posX, posY, posZ){
			//posX, posY, posZ are at the center of the rocket
			var c;
			var material = new THREE.MeshPhongMaterial({color: 0x808080});

			//big engine near-left
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX - 3.5, posY, posZ + 3.5)
			c.scale.x = 2;
			c.scale.z = 2;
			c.castShadow = true;
			c.receiveShadow = true;
			pivot.add(c);

			//big engine far-left
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX - 3.5, posY, posZ - 3.5)
			c.scale.x = 2;
			c.scale.z = 2;
			c.castShadow = true;
			c.receiveShadow = true;
			pivot.add(c);

			//big engine far-right
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX + 3.5, posY, posZ - 3.5)
			c.scale.x = 2;
			c.scale.z = 2;
			c.castShadow = true;
			c.receiveShadow = true;
			pivot.add(c);

			//big engine near-right
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX + 3.5, posY, posZ + 3.5)
			c.scale.x = 2;
			c.scale.z = 2;
			c.castShadow = true;
			c.receiveShadow = true;
			pivot.add(c);

			//big engine left
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX - 3.5, posY, posZ)
			c.scale.x = 2;
			c.scale.z = 2;
			c.castShadow = true;
			c.receiveShadow = true;
			pivot.add(c);

			//big engine near
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX, posY, posZ + 3.5)
			c.scale.x = 2;
			c.scale.z = 2;
			c.castShadow = true;
			c.receiveShadow = true;
			pivot.add(c);

			//big engine right
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX + 3.5, posY, posZ)
			c.scale.x = 2;
			c.scale.z = 2;
			c.castShadow = true;
			c.receiveShadow = true;
			pivot.add(c);

			//big engine far
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX, posY, posZ - 3.5)
			c.scale.x = 2;
			c.scale.z = 2;
			c.castShadow = true;
			c.receiveShadow = true;
			pivot.add(c);

			//big engine centered
			c = new THREE.Mesh(geometry, material);
			c.position.set(posX, posY, posZ)
			c.scale.x = 2;
			c.scale.z = 2;
			c.castShadow = true;
			c.receiveShadow = true;
			pivot.add(c);
		}


		function createSmokeFire(posX, posY, posZ, pivot, a) {
			a = Array(200);
			var materialSmokeColor = [	new THREE.MeshPhongMaterial( { color: 0x111111 } ),
										new THREE.MeshPhongMaterial( { color: 0xffc82a }),
										new THREE.MeshPhongMaterial( { color: 0x222222} ),
										new THREE.MeshPhongMaterial( { color: 0xfff44c } ),
										new THREE.MeshPhongMaterial( { color: 0x333333 } ),
										new THREE.MeshPhongMaterial( { color: 0xff6821} ),
										new THREE.MeshPhongMaterial( { color: 0x444444 } ),
										new THREE.MeshPhongMaterial( { color: 0xff2d0a } )];

			direction = Array(a.length); //store smoke and fire directions 
			for(var i = 0; i < direction.length; i++) {
				var v = new THREE.Vector3();
				v.x = Math.random() * 0.2 * (Math.floor(Math.random()*2) == 1 ? 1 : -1);
				v.z = Math.random() * 0.2 * (Math.floor(Math.random()*2) == 1 ? 1 : -1); 
				direction[i] = v;
			}

			for(var i = 0; i < a.length; i++) {
				var c = new THREE.Mesh(geometry, materialSmokeColor[i%4]);
				c.position.set(posX, posY, posZ);
				c.material.transparent = true;
				c.material.opacity = 0.6;
		 		c.castShadow = true;
				a[i] = c;
				pivot.add(a[i]);
			}

			setTimeout(function(){ //fire start through y axis after 7 seconds
				for(var i = 0; i < direction.length; i++){
					direction[i].y = Math.random() * 0.2 * -1;
				} }, 7000);

			return a;
		}


		function makeAnimationSmokeFire(flag, name) {
			var limit = 8;
			var posX;
			if(flag === "central") {
					posX = 0; 
				} else if(flag === "right") {
					posX = 10;
				} else if(flag === "left") {
					posX = -10;
				}

			for(var i = 0; i < name.length; i++){
				name[i].position.x += direction[i].x;
				name[i].position.y += direction[i].y;
				name[i].position.z += direction[i].z;

				if( name[i].position.x > posX + limit || name[i].position.x < posX - limit || name[i].position.z > limit || name[i].position.z < -limit ||
					name[i].position.y < -limit ){
					name[i].position.set(posX, 0.5, 0);
				}
			}
		}