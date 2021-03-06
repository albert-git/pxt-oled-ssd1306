//% icon="\uf26c"
//% color="255" weight="90"
namespace OLED {

    /**
     * initialises the i2c OLED display
     * @param height height (in pixels)
     * @param width width (in pixels)
     */
    //% blockId=oled_init_terminal
    //% block="initialize OLED with height %height|width %width"
    //% icon="\uf1ec" 
    //% shim=OLED::init_terminal
    export function init(height: number, width: number): void {
        return;
    }

    /**
     *Prints Next Line
     */
    //% blockId=oled_next_line
    //% block="new line"
    //% async
    //% shim=OLED::NextLine
    export function Next_Line(): void {
        return;
    }

    /**
     *Shows a Loading Screen
     */
    //% blockId=oled_loading_screen
    //% block="loading screen"
    //% async
    //% shim=OLED::LoadingScreen
    export function Loading_Screen(): void {
        return;
    }



    /**
     * clears the screen.
     */
    //% blockId=oled_clear_screen
    //% block="clear OLED display"
    //% icon="\uf1ec" 
    //% shim=OLED::clearDisplay
    export function clear(): void {
        return;
    }

    /**
     * prints a string on the OLED display
     * @param text text to display
     */
    //% block="show (without automatic new line) |string  %text" 
    //% async
    //% blockId=oled_print_string
    //% icon="\uf1ec"
    //% shim=OLED::showStringWithoutNewLine
    export function showString1(text: string): void {
        console.log("display: " + text);
        return;
    }
    /**
     * prints a string on the OLED display
     * @param text text to display
     */
    //% block="show (with automatic new line) |string  %text" 
    //% async
    //% blockId=oled_print_string1
    //% icon="\uf1ec"
    //% shim=OLED::showStringWithNewLine
    export function showString2(text: string): void {
        console.log("display: " + text);
        return;
    }

    /**
     * prints a number on the OLED display
     * @param number number to display 
     */
    //% weight=96
    //% blockId=oled_print_number
    //% block="show (without automatic new line)|number %number" blockGap=8
    //% async 
    //% shim=OLED::showNumberWithoutNewLine
    export function showNumber1(number: number): void {
        console.log("display: " + number);
        return;
    }
    /**
     * prints a number on the OLED display
     * @param number number to display 
     */
    //% weight=96
    //% blockId=oled_print_number1
    //% block="show (with automatic new line)|number %number" blockGap=8
    //% async 
    //% shim=OLED::showNumberWithNewLine
    export function showNumber2(number: number): void {
        console.log("display: " + number);
        return;
    }
    /**
     * @param x number of pixels
     * @param y number of pixels
     * @param w number of pixels
     * @param h number of pixels
     * displays a white box
     * why does this not work lol
     * whoever works on this after me help me figure out why you need to show a string to get the box to display.
     * haha nevermind I got it to work. The people before me didnt update the oled every time this function was run in SSD1306_OLED.cpp
     */
    //% blockId=oled_fill_rect
    //% block="fill box on OLED with coordinates |x %x|y %y|w %w|h %h"
    //% async 
    //% shim=OLED::fillRect
    export function fillRectangle(x:number,y:number, w:number, h:number): void {
        return;
    }
    /**
     * @param x number of pixels
     * @param y number of pixels
     * @param w number of pixels
     * @param h number of pixels
     */
    //% blockId=oled_draw_rect
    //% block="draw box on OLED with coordinates |x %x|y %y|w %w|h %h"
    //% async 
    //% shim=OLED::drawRect
    export function drawRectangle(x:number,y:number, w:number, h:number): void {
        return;
    }
    /**
     * @param x number of pixels
     * @param y number of pixels
     * @param r number of pixels
     * I named the function fillCirclar cus I don't know if it will conflict with the cpp function. Probably not, but whoever wants to can test this.
     */
    //% blockId=oled_fill_circle
    //% block="fill circle on OLED with coordinates |x %x|y %y|r %r"
    //% async 
    //% shim=OLED::fillCircle
    export function fillCircular(x:number,y:number, r:number): void {
        return;
    }
    /**
     * @param x number of pixels
     * @param y number of pixels
     * @param r number of pixels
     * I named the function drawCirclar cus I don't know if it will conflict with the cpp function. Probably not, but whoever wants to can test this.
     */
    //% blockId=oled_draw_circle
    //% block="draw circle on OLED with coordinates |x %x|y %y|r %r"
    //% async 
    //% shim=OLED::drawCircle
    export function drawCircular(x:number,y:number, r:number): void {
        return;
    }
    /**
     * @param x1 coordinate of x1
     * @param y1 coordinate of y1
     * @param x2 coordinate of x2
     * @param y2 coordinate of y2
     * named it drawLinear for the same reason as drawCircular
     */
    //% blockId=oled_draw_line
    //% block="draw line OLED with coordinates |x1 %x1|y1 %y1|x2 %x2|y2 %y2"
    //% async 
    //% shim=OLED::drawLine
    export function drawLinear(x1:number,y1:number, x2:number, y2:number): void {
        return;
    }



}
