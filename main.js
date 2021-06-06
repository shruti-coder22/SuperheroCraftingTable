var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_img_width = 30;
block_img_height = 30;

block_object = "";
player_object = "";

function player_update () {
    fabric.Image.fromURL("Pencil.png",function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        
        player_object.set ( {
            top : player_y,
            left : player_x
        } );

        canvas.add(player_object);

    } );
}

function new_block (get_image) {
    fabric.Image.fromURL(get_image,function(Img) {
        block_object = Img;

        block_object.scaleToWidth(block_img_width);
        block_object.scaleToHeight(block_img_height);
        
        block_object.set ( {
            top : player_y,
            left : player_x
        } );

        canvas.add(block_object);

    } );
}

