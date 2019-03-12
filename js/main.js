let elem = document.getElementById('box-sm');
        let elem2 = document.getElementById('box-sm2');
        let elem3 = document.getElementById('box-sm3');
        let elem4 = document.getElementById('box-sm4');
        let position;
        let time;

        function move(){
            position = 0;
            time = setInterval(right, 2);

            function right() {
                if(position == 750) {
                    document.getElementById("box-bg").style.opacity = 1;
                    clearInterval(time);
                    down();
                } else {
                    position+=5;
                    elem.style.left = position + 'px';
                    elem2.style.left = position + 'px';
                    elem3.style.left = position + 'px';
                    elem4.style.left = position + 'px';
                }
            }
            
            function down() {
                position = 0;
                time = setInterval(downward, 2);

                function downward() {
                    if(position == 350) {
                        document.getElementById("box-bg").style.opacity = 0;
                        clearInterval(time);
                        left();
                    } else {
                        position+=2;
                        elem.style.top = position + 'px';
                        elem2.style.top = position + 'px';
                        elem3.style.top = position + 'px';
                    }
                }
        

            function left() {
                position = 750;
                time = setInterval(leftward, 2);

                function leftward() {
                    if(position == 0) {
                        document.getElementById("box-bg").style.opacity = 1;
                        clearInterval(time);
                        up();
                    } else {
                        position-=3;
                        elem.style.left = position + 'px';
                        elem2.style.left = position + 'px';
                    }
                }

            function up() {
                position = 350;
                time = setInterval(upward, 2);

                function upward() {
                    if(position == 0) {
                        document.getElementById("box-bg").style.opacity = 0.9;
                        clearInterval(time);
                        move();
                    } else {
                        position-=1;
                        elem.style.top = position + 'px';
                    }
                }
            }
            }
            }
        }

        function stop() {
            clearInterval(time);
        }