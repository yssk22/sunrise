/**
 * Quick hack to enable phpjs in node.js
 * Set the window object and DOM node on the exports object.
 */
var dummy = '<html><head></head><body>hello world</body></html>';
exports.window = require('jsdom').jsdom(dummy).createWindow();

/*
 * More info at: http://phpjs.org
 *
 * This is version: 3.18
 * php.js is copyright 2010 Kevin van Zonneveld.
 *
 * Portions copyright Brett Zamir (http://brett-zamir.me), Kevin van Zonneveld
 * (http://kevin.vanzonneveld.net), Onno Marsman, Theriault, Michael White
 * (http://getsprink.com), Waldo Malqui Silva, Paulo Freitas, Jonas Raoni
 * Soares Silva (http://www.jsfromhell.com), Jack, Philip Peterson, Ates Goral
 * (http://magnetiq.com), Legaev Andrey, Ratheous, Alex, Martijn Wieringa,
 * Nate, lmeyrick (https://sourceforge.net/projects/bcmath-js/), Philippe
 * Baumann, Enrique Gonzalez, Webtoolkit.info (http://www.webtoolkit.info/),
 * Ash Searle (http://hexmen.com/blog/), travc, Jani Hartikainen, Carlos R. L.
 * Rodrigues (http://www.jsfromhell.com), Ole Vrijenhoek, WebDevHobo
 * (http://webdevhobo.blogspot.com/), T.Wild,
 * http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript,
 * pilus, GeekFG (http://geekfg.blogspot.com), Rafał Kukawski
 * (http://blog.kukawski.pl), Johnny Mast (http://www.phpvrouwen.nl), Michael
 * Grier, Erkekjetter, d3x, marrtins, Andrea Giammarchi
 * (http://webreflection.blogspot.com), stag019, mdsjack
 * (http://www.mdsjack.bo.it), Chris, Steven Levithan
 * (http://blog.stevenlevithan.com), Arpad Ray (mailto:arpad@php.net), David,
 * Joris, Tim de Koning (http://www.kingsquare.nl), Marc Palau, Michael White,
 * Public Domain (http://www.json.org/json2.js), gettimeofday, felix, Aman
 * Gupta, Pellentesque Malesuada, Thunder.m, Tyler Akins (http://rumkin.com),
 * Karol Kowalski, Felix Geisendoerfer (http://www.debuggable.com/felix),
 * Alfonso Jimenez (http://www.alfonsojimenez.com), Diplom@t
 * (http://difane.com/), majak, Mirek Slugen, Mailfaker
 * (http://www.weedem.fr/), Breaking Par Consulting Inc
 * (http://www.breakingpar.com/bkp/home.nsf/0/87256B280015193F87256CFB006C45F7),
 * Josh Fraser
 * (http://onlineaspect.com/2007/06/08/auto-detect-a-time-zone-with-javascript/),
 * Martin (http://www.erlenwiese.de/), Paul Smith, KELAN, Robin, saulius, AJ,
 * Oleg Eremeev, Steve Hilder, gorthaur, Kankrelune
 * (http://www.webfaktory.info/), Caio Ariede (http://caioariede.com), Lars
 * Fischer, Sakimori, Imgen Tata (http://www.myipdf.com/), uestla, Artur
 * Tchernychev, Wagner B. Soares, Christoph, nord_ua, class_exists, Der Simon
 * (http://innerdom.sourceforge.net/), echo is bad, XoraX
 * (http://www.xorax.info), Ozh, Alan C, Taras Bogach, Brad Touesnard, MeEtc
 * (http://yass.meetcweb.com), Peter-Paul Koch
 * (http://www.quirksmode.org/js/beat.html), T0bsn, Tim Wiel, Bryan Elliott,
 * jpfle, JT, Thomas Beaucourt (http://www.webapp.fr), David Randall, Frank
 * Forte, Eugene Bulkin (http://doubleaw.com/), noname, kenneth, Hyam Singer
 * (http://www.impact-computing.com/), Marco, Raphael (Ao RUDLER), Ole
 * Vrijenhoek (http://www.nervous.nl/), David James, Steve Clay, Jason Wong
 * (http://carrot.org/), T. Wild, Paul, J A R, LH, strcasecmp, strcmp, JB,
 * Daniel Esteban, strftime, madipta, Valentina De Rosa, Marc Jansen,
 * Francesco, Stoyan Kyosev (http://www.svest.org/), metjay, Soren Hansen,
 * 0m3r, Sanjoy Roy, Shingo, sankai, sowberry, hitwork, Rob, Norman "zEh"
 * Fuchs, Subhasis Deb, josh, Yves Sucaet, Ulrich, Scott Baker, ejsanders,
 * Nick Callen, Steven Levithan (stevenlevithan.com), Aidan Lister
 * (http://aidanlister.com/), Philippe Jausions
 * (http://pear.php.net/user/jausions), Zahlii, Denny Wardhana, Oskar Larsson
 * Högfeldt (http://oskar-lh.name/), Brian Tafoya
 * (http://www.premasolutions.com/), johnrembo, Gilbert, duncan, Thiago Mata
 * (http://thiagomata.blog.com), Alexander Ermolaev
 * (http://snippets.dzone.com/user/AlexanderErmolaev), Linuxworld, lmeyrick
 * (https://sourceforge.net/projects/bcmath-js/this.), Jon Hohle, Pyerre,
 * merabi, Saulo Vallory, HKM, ChaosNo1, djmix, Lincoln Ramsay, Adam Wallner
 * (http://web2.bitbaro.hu/), paulo kuong, jmweb, Orlando, kilops, dptr1988,
 * DxGx, Pedro Tainha (http://www.pedrotainha.com), Bayron Guevara, Le Torbi,
 * James, Douglas Crockford (http://javascript.crockford.com), Devan
 * Penner-Woelk, Jay Klehr, Kheang Hok Chin (http://www.distantia.ca/), Luke
 * Smith (http://lucassmith.name), Rival, Amir Habibi
 * (http://www.residence-mixte.com/), Blues (http://tech.bluesmoon.info/), Ben
 * Bryan, booeyOH, Dreamer, Cagri Ekin, Diogo Resende, Howard Yeend, Pul,
 * 3D-GRAF, jakes, Yannoo, Luke Godfrey, daniel airton wermann
 * (http://wermann.com.br), Allan Jensen (http://www.winternet.no), Benjamin
 * Lupton, davook, Atli Þór, Maximusya, Leslie Hoare, Bug?, setcookie, YUI
 * Library: http://developer.yahoo.com/yui/docs/YAHOO.util.DateLocale.html,
 * Blues at http://hacks.bluesmoon.info/strftime/strftime.js, Andreas,
 * Michael, Christian Doebler, Gabriel Paderni, Marco van Oort, Philipp
 * Lenssen, Arnout Kazemier (http://www.3rd-Eden.com), penutbutterjelly, Anton
 * Ongson, DtTvB (http://dt.in.th/2008-09-16.string-length-in-bytes.html),
 * meo, Greenseed, Yen-Wei Liu, mk.keck, William, rem, Jamie Beck
 * (http://www.terabit.ca/), Russell Walker (http://www.nbill.co.uk/),
 * Garagoth, Dino, Andrej Pavlovic, gabriel paderni, FGFEmperor, Scott Cariss,
 * Slawomir Kaniecki, ReverseSyntax, Mateusz "loonquawl" Zalega, Francois,
 * Kirk Strobeck, Billy, vlado houba, Jalal Berrami, date, Itsacon
 * (http://www.itsacon.net/), Martin Pool, Pierre-Luc Paour, ger, john
 * (http://www.jd-tech.net), mktime, Simon Willison
 * (http://simonwillison.net), Nick Kolosov (http://sammy.ru), marc andreu,
 * Arno, Nathan, Kristof Coomans (SCK-CEN Belgian Nucleair Research Centre),
 * Fox, nobbler, stensi, Matteo, Riddler (http://www.frontierwebdev.com/),
 * Tomasz Wesolowski, T.J. Leahy, rezna, Eric Nagel, Alexander M Beedie, baris
 * ozdil, Greg Frazier, Bobby Drake, Ryan W Tenney (http://ryan.10e.us), Tod
 * Gentille, Rafał Kukawski, FremyCompany, Manish, Cord, fearphage
 * (http://http/my.opera.com/fearphage/), Victor, Brant Messenger
 * (http://www.brantmessenger.com/), Matt Bradley, Luis Salazar
 * (http://www.freaky-media.com/), Tim de Koning, taith, Rick Waldron, Mick@el
 *
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL KEVIN VAN ZONNEVELD BE LIABLE FOR ANY CLAIM, DAMAGES
 * OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */


// jslint.com configuration options. See: http://wiki.github.com/kvz/phpjs/jslint-options
/* global window */
/* jslint adsafe: false, bitwise: false, browser: false, cap: false, css: false, debug: false, devel: false, eqeqeq: true, evil: false, forin: false, fragment: false, immed: true, indent: 4, laxbreak: false, maxerr: 100, maxlen: 80, newcap: true, nomen: false, on: true, onevar: false, passfail: false, plusplus: false, regexp: false, rhino: false, safe: false, sidebar: false, strict: false, sub: false, undef: true, white: false, widget: false */

// Our idea with CommonJS is that you can do the following:
// var php = require('php');
// php.md5('test');

exports._phpjs_shared_bc = function () {
    // !No description available for _phpjs_shared_bc. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/_phpjs_shared_bc
    // +   original by: lmeyrick (https://sourceforge.net/projects/bcmath-js/)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: _phpjs_shared_bc();
    // *     returns 1: {}
    /**
     * BC Math Library for Javascript
     * Ported from the PHP5 bcmath extension source code,
     * which uses the libbcmath package...
     *    Copyright (C) 1991, 1992, 1993, 1994, 1997 Free Software Foundation, Inc.
     *    Copyright (C) 2000 Philip A. Nelson
     *     The Free Software Foundation, Inc.
     *     59 Temple Place, Suite 330
     *     Boston, MA 02111-1307 USA.
     *      e-mail:  philnelson@acm.org
     *     us-mail:  Philip A. Nelson
     *               Computer Science Department, 9062
     *               Western Washington University
     *               Bellingham, WA 98226-9062
     *
     * bcmath-js homepage:
     *
     * This code is covered under the LGPL licence, and can be used however you want :)
     * Be kind and share any decent code changes.
     */

    /**
     * Binary Calculator (BC) Arbitrary Precision Mathematics Lib v0.10  (LGPL)
     * Copy of libbcmath included in PHP5 src
     *
     * Note: this is just the shared library file and does not include the php-style functions.
     *       use bcmath{-min}.js for functions like bcadd, bcsub etc.
     *
     * Feel free to use how-ever you want, just email any bug-fixes/improvements to the sourceforge project:
     *
     *
     * Ported from the PHP5 bcmath extension source code,
     * which uses the libbcmath package...
     *    Copyright (C) 1991, 1992, 1993, 1994, 1997 Free Software Foundation, Inc.
     *    Copyright (C) 2000 Philip A. Nelson
     *     The Free Software Foundation, Inc.
     *     59 Temple Place, Suite 330
     *     Boston, MA 02111-1307 USA.
     *      e-mail:  philnelson@acm.org
     *     us-mail:  Philip A. Nelson
     *               Computer Science Department, 9062
     *               Western Washington University
     *               Bellingham, WA 98226-9062
     */

    var libbcmath = {
        PLUS: '+',
        MINUS: '-',
        BASE: 10,           // must be 10 (for now)
        scale: 0,           // default scale

        /**
         * Basic number structure
         */
        bc_num() {
            this.n_sign = null; // sign
            this.n_len = null;  /* (int) The number of digits before the decimal point. */
            this.n_scale = null; /* (int) The number of digits after the decimal point. */
            //this.n_refs = null; /* (int) The number of pointers to this number. */
            //this.n_text = null; /* ?? Linked list for available list. */
            this.n_value = null;  /* array as value, where 1.23 = [1,2,3] */
            this.toString = function() {
                var r;
                var tmp;
                tmp=this.n_value.join('');

                // add minus sign (if applicable) then add the integer part
                r = ((this.n_sign == libbcmath.PLUS) ? '' : this.n_sign) + tmp.substr(0, this.n_len);

                // if decimal places, add a . and the decimal part
                if (this.n_scale > 0) {
                    r += '.' + tmp.substr(this.n_len, this.n_scale);
                }
                return r;
            };
        },

        /**
         * Base add function
         *
         //  Here is the full add routine that takes care of negative numbers.
         //  N1 is added to N2 and the result placed into RESULT.  SCALE_MIN
         //  is the minimum scale for the result.
         *
         * @param {bc_num} n1
         * @param {bc_num} n2
         * @param {int} scale_min
         * @return bc_num
         */
        bc_add(n1, n2, scale_min) {
            var sum;
            var cmp_res;
            var res_scale;

            if (n1.n_sign === n2.n_sign) {
                sum = libbcmath._bc_do_add(n1, n2, scale_min);
                sum.n_sign = n1.n_sign;
            } else {
                /* subtraction must be done. */
                cmp_res = libbcmath._bc_do_compare(n1, n2, false, false); /* Compare magnitudes. */
                switch (cmp_res) {
                    case -1:
                        /* n1 is less than n2, subtract n1 from n2. */
                        sum = libbcmath._bc_do_sub(n2, n1, scale_min);
                        sum.n_sign = n2.n_sign;
                        break;

                    case  0:
                        /* They are equal! return zero with the correct scale! */
                        res_scale = libbcmath.MAX(scale_min, libbcmath.MAX(n1.n_scale, n2.n_scale));
                        sum = libbcmath.bc_new_num(1, res_scale);
                        libbcmath.memset(sum.n_value, 0, 0, res_scale+1);
                        break;

                    case  1:
                        /* n2 is less than n1, subtract n2 from n1. */
                        sum = libbcmath._bc_do_sub(n1, n2, scale_min);
                        sum.n_sign = n1.n_sign;
                }
            }
            return sum;
        },

        /**
 * This is the "user callable" routine to compare numbers N1 and N2.
 * @param {bc_num} n1
 * @param {bc_num} n2
 * @return int -1, 0, 1  (n1 < n2, ==, n1 > n2)
 */
        bc_compare(n1, n2) {
            return libbcmath._bc_do_compare (n1, n2, true, false);
        },

        _one_mult(num, n_ptr, size, digit, result, r_ptr) {
            var carry; // int
            var value;
            var nptr; // int pointers
            var rptr;

            if (digit === 0) {
                libbcmath.memset(result, 0, 0, size);   //memset (result, 0, size);
            } else {
                if (digit == 1) {
                    libbcmath.memcpy(result, r_ptr, num, n_ptr, size); //memcpy (result, num, size);
                } else {
                    /*  Initialize */
                    nptr = n_ptr+size-1; //nptr = (unsigned char *) (num+size-1);
                    rptr = r_ptr+size-1; //rptr = (unsigned char *) (result+size-1);
                    carry = 0;

                    while (size-- > 0) {
                        value = num[nptr--] * digit + carry; //value = *nptr-- * digit + carry;
                        //result[rptr--] = libbcmath.cint(value % libbcmath.BASE); // @CHECK cint //*rptr-- = value % BASE;
                        result[rptr--] = value % libbcmath.BASE; // @CHECK cint //*rptr-- = value % BASE;
                        //carry = libbcmath.cint(value / libbcmath.BASE);   // @CHECK cint //carry = value / BASE;
                        carry = Math.floor(value / libbcmath.BASE);   // @CHECK cint //carry = value / BASE;
                    }

                    if (carry !== 0) {
                        result[rptr] = carry;
                    }
                }
            }
        },

        bc_divide(n1, n2, scale) {
            var quot;   // bc_num return
            var qval; // bc_num
            var num1; // string
            var num2;
            var ptr1; // int pointers
            var ptr2;
            var n2ptr;
            var qptr;
            var scale1; // int
            var val;
            var len1; // int
            var len2;
            var scale2;
            var qdigits;
            var extra;
            var count;
            var qdig; // int
            var qguess;
            var borrow;
            var carry;
            var mval; // string
            var zero; // char
            var norm; // int
            var ptrs; // return object from one_mul

            /* Test for divide by zero. (return failure) */
            if (libbcmath.bc_is_zero(n2)) {
                return -1;
            }

            /* Test for zero divide by anything (return zero) */
            if (libbcmath.bc_is_zero(n1)) {
                return libbcmath.bc_new_num(1, scale);
            }

            /* Test for n1 equals n2 (return 1 as n1 nor n2 are zero)
    if (libbcmath.bc_compare(n1, n2, libbcmath.MAX(n1.n_scale, n2.n_scale)) === 0) {
        quot=libbcmath.bc_new_num(1, scale);
        quot.n_value[0] = 1;
        return quot;
    }
    */

            /* Test for divide by 1.  If it is we must truncate. */
            // todo: check where scale > 0 too.. can't see why not (ie bc_is_zero - add bc_is_one function)
            if (n2.n_scale === 0) {
                if (n2.n_len === 1 && n2.n_value[0] === 1) {
                    qval = libbcmath.bc_new_num(n1.n_len, scale);       //qval = bc_new_num (n1->n_len, scale);
                    qval.n_sign = (n1.n_sign == n2.n_sign ? libbcmath.PLUS : libbcmath.MINUS);
                    libbcmath.memset(qval.n_value, n1.n_len, 0, scale); //memset (&qval->n_value[n1->n_len],0,scale);
                    libbcmath.memcpy(qval.n_value, 0, n1.n_value, 0, n1.n_len + libbcmath.MIN(n1.n_scale, scale)); //memcpy (qval->n_value, n1->n_value, n1->n_len + MIN(n1->n_scale,scale));
                // can we return here? not in c src, but can't see why-not.
                // return qval;
                }
            }

            /* Set up the divide.  Move the decimal point on n1 by n2's scale.
     Remember, zeros on the end of num2 are wasted effort for dividing. */
            scale2 = n2.n_scale;    //scale2 = n2->n_scale;
            n2ptr = n2.n_len + scale2 - 1;  //n2ptr = (unsigned char *) n2.n_value+n2.n_len+scale2-1;
            while ((scale2 > 0) && (n2.n_value[n2ptr--] === 0)) {
                scale2--;
            }

            len1 = n1.n_len + scale2;
            scale1 = n1.n_scale - scale2;
            if (scale1 < scale) {
                extra = scale - scale1;
            } else {
                extra = 0;
            }

            num1 = libbcmath.safe_emalloc(1, n1.n_len + n1.n_scale, extra + 2); //num1 = (unsigned char *) safe_emalloc (1, n1.n_len+n1.n_scale, extra+2);
            if (num1 === null) {
                libbcmath.bc_out_of_memory();
            }
            libbcmath.memset(num1, 0, 0, n1.n_len+n1.n_scale+extra+2); //memset (num1, 0, n1->n_len+n1->n_scale+extra+2);
            libbcmath.memcpy(num1, 1, n1.n_value, 0, n1.n_len+n1.n_scale); //memcpy (num1+1, n1.n_value, n1.n_len+n1.n_scale);

            len2 = n2.n_len + scale2;  // len2 = n2->n_len + scale2;
            num2 = libbcmath.safe_emalloc(1, len2, 1);//num2 = (unsigned char *) safe_emalloc (1, len2, 1);
            if (num2 === null) {
                libbcmath.bc_out_of_memory();
            }
            libbcmath.memcpy(num2, 0, n2.n_value, 0, len2);  //memcpy (num2, n2.n_value, len2);
            num2[len2] = 0;   // *(num2+len2) = 0;
            n2ptr = 0; //n2ptr = num2;

            while (num2[n2ptr] === 0) {   // while (*n2ptr == 0)
                n2ptr++;
                len2--;
            }

            /* Calculate the number of quotient digits. */
            if (len2 > len1+scale) {
                qdigits = scale+1;
                zero = true;
            } else {
                zero = false;
                if (len2>len1) {
                    qdigits = scale+1;      /* One for the zero integer part. */
                } else {
                    qdigits = len1-len2+scale+1;
                }
            }

            /* Allocate and zero the storage for the quotient. */
            qval = libbcmath.bc_new_num(qdigits-scale,scale);   //qval = bc_new_num (qdigits-scale,scale);
            libbcmath.memset(qval.n_value, 0, 0, qdigits); //memset (qval->n_value, 0, qdigits);

            /* Allocate storage for the temporary storage mval. */
            mval = libbcmath.safe_emalloc(1, len2, 1); //mval = (unsigned char *) safe_emalloc (1, len2, 1);
            if (mval === null) {
                libbcmath.bc_out_of_memory();
            }

            /* Now for the full divide algorithm. */
            if (!zero) {
                /* Normalize */
                //norm = libbcmath.cint(10 / (libbcmath.cint(n2.n_value[n2ptr]) + 1)); //norm =  10 / ((int)*n2ptr + 1);
                norm = Math.floor(10 / (n2.n_value[n2ptr] + 1)); //norm =  10 / ((int)*n2ptr + 1);
                if (norm != 1) {
                    libbcmath._one_mult(num1, 0, len1+scale1+extra+1, norm, num1, 0); //libbcmath._one_mult(num1, len1+scale1+extra+1, norm, num1);
                    libbcmath._one_mult(n2.n_value, n2ptr, len2, norm, n2.n_value, n2ptr); //libbcmath._one_mult(n2ptr, len2, norm, n2ptr);

                // @CHECK Is the pointer affected by the call? if so, maybe need to adjust points on return?

                }

                /* Initialize divide loop. */
                qdig = 0;
                if (len2 > len1) {
                    qptr = len2-len1; //qptr = (unsigned char *) qval.n_value+len2-len1;
                }  else {
                    qptr = 0; //qptr = (unsigned char *) qval.n_value;
                }

                /* Loop */
                while (qdig <= len1+scale-len2) {
                    /* Calculate the quotient digit guess. */
                    if (n2.n_value[n2ptr] == num1[qdig]) {
                        qguess = 9;
                    } else {
                        qguess = Math.floor((num1[qdig]*10 + num1[qdig+1]) / n2.n_value[n2ptr]);
                    }
                    /* Test qguess. */

                    if (n2.n_value[n2ptr+1]*qguess > (num1[qdig]*10 + num1[qdig+1] - n2.n_value[n2ptr]*qguess)*10 + num1[qdig+2]) { //if (n2ptr[1]*qguess > (num1[qdig]*10 + num1[qdig+1] - *n2ptr*qguess)*10 + num1[qdig+2]) {
                        qguess--;
                        /* And again. */
                        if (n2.n_value[n2ptr+1]*qguess > (num1[qdig]*10 + num1[qdig+1] - n2.n_value[n2ptr]*qguess)*10 + num1[qdig+2]) { //if (n2ptr[1]*qguess > (num1[qdig]*10 + num1[qdig+1] - *n2ptr*qguess)*10 + num1[qdig+2])
                            qguess--;
                        }
                    }

                    /* Multiply and subtract. */
                    borrow = 0;
                    if (qguess !== 0) {
                        mval[0] = 0; //*mval = 0; // @CHECK is this to fix ptr2 < 0?
                        libbcmath._one_mult(n2.n_value, n2ptr, len2, qguess, mval, 1); //_one_mult (n2ptr, len2, qguess, mval+1); // @CHECK

                        ptr1 = qdig+len2; //(unsigned char *) num1+qdig+len2;
                        ptr2 = len2; //(unsigned char *) mval+len2;

                        // @CHECK: Does a negative pointer return null?
                        //         ptr2 can be < 0 here as ptr1 = len2, thus count < len2+1 will always fail ?
                        for (count = 0; count < len2+1; count++) {
                            if (ptr2 < 0) {
                                //val = libbcmath.cint(num1[ptr1]) - 0 - borrow;    //val = (int) *ptr1 - (int) *ptr2-- - borrow;
                                val = num1[ptr1] - 0 - borrow;    //val = (int) *ptr1 - (int) *ptr2-- - borrow;
                            } else {
                                //val = libbcmath.cint(num1[ptr1]) - libbcmath.cint(mval[ptr2--]) - borrow;    //val = (int) *ptr1 - (int) *ptr2-- - borrow;
                                val = num1[ptr1] - mval[ptr2--] - borrow;    //val = (int) *ptr1 - (int) *ptr2-- - borrow;
                            }
                            if (val < 0) {
                                val += 10;
                                borrow = 1;
                            } else {
                                borrow = 0;
                            }
                            num1[ptr1--] = val;
                        }
                    }

                    /* Test for negative result. */
                    if (borrow == 1) {
                        qguess--;
                        ptr1 = qdig+len2; //(unsigned char *) num1+qdig+len2;
                        ptr2 = len2-1; //(unsigned char *) n2ptr+len2-1;
                        carry = 0;
                        for (count = 0; count < len2; count++) {
                            if (ptr2 < 0) {
                                //val = libbcmath.cint(num1[ptr1]) + 0 + carry; //val = (int) *ptr1 + (int) *ptr2-- + carry;
                                val = num1[ptr1] + 0 + carry; //val = (int) *ptr1 + (int) *ptr2-- + carry;
                            } else {
                                //val = libbcmath.cint(num1[ptr1]) + libbcmath.cint(n2.n_value[ptr2--]) + carry; //val = (int) *ptr1 + (int) *ptr2-- + carry;
                                val = num1[ptr1] + n2.n_value[ptr2--] + carry; //val = (int) *ptr1 + (int) *ptr2-- + carry;
                            }
                            if (val > 9) {
                                val -= 10;
                                carry = 1;
                            } else {
                                carry = 0;
                            }
                            num1[ptr1--] = val; //*ptr1-- = val;
                        }
                        if (carry == 1) {
                            //num1[ptr1] = libbcmath.cint((num1[ptr1] + 1) % 10);  // *ptr1 = (*ptr1 + 1) % 10; // @CHECK
                            num1[ptr1] = (num1[ptr1] + 1) % 10;  // *ptr1 = (*ptr1 + 1) % 10; // @CHECK
                        }
                    }

                    /* We now know the quotient digit. */
                    qval.n_value[qptr++] =  qguess;  //*qptr++ =  qguess;
                    qdig++;
                }
            }

            /* Clean up and return the number. */
            qval.n_sign = ( n1.n_sign == n2.n_sign ? libbcmath.PLUS : libbcmath.MINUS );
            if (libbcmath.bc_is_zero(qval)) {
                qval.n_sign = libbcmath.PLUS;
            }
            libbcmath._bc_rm_leading_zeros(qval);

            return qval;

            //return 0;    /* Everything is OK. */
        },



        MUL_BASE_DIGITS: 80,
        MUL_SMALL_DIGITS: (this.MUL_BASE_DIGITS / 4), //#define MUL_SMALL_DIGITS mul_base_digits/4


        /* The multiply routine.  N2 times N1 is put int PROD with the scale of
   the result being MIN(N2 scale+N1 scale, MAX (SCALE, N2 scale, N1 scale)).
   */
        /**
         * @param n1 bc_num
         * @param n2 bc_num
         * @param scale [int] optional
         */
        bc_multiply(n1, n2, scale) {
            var pval; // bc_num
            var len1; // int
            var len2;
            var full_scale; // int
            var prod_scale;

            // Initialize things.
            len1 = n1.n_len + n1.n_scale;
            len2 = n2.n_len + n2.n_scale;
            full_scale = n1.n_scale + n2.n_scale;
            prod_scale = libbcmath.MIN(full_scale,libbcmath.MAX(scale,libbcmath.MAX(n1.n_scale, n2.n_scale)));

            //pval = libbcmath.bc_init_num(); // allow pass by ref
            // Do the multiply
            pval = libbcmath._bc_rec_mul (n1, len1, n2, len2, full_scale);

            // Assign to prod and clean up the number.
            pval.n_sign  = ( n1.n_sign == n2.n_sign ? libbcmath.PLUS : libbcmath.MINUS );
            //pval.n_value = pval.n_ptr; // @FIX
            pval.n_len   = len2 + len1 + 1 - full_scale;
            pval.n_scale = prod_scale;
            libbcmath._bc_rm_leading_zeros(pval);
            if (libbcmath.bc_is_zero(pval)) {
                pval.n_sign = libbcmath.PLUS;
            }
            //bc_free_num (prod);
            return pval;
        },

        new_sub_num(length, scale, value) {
            var temp = new libbcmath.bc_num();
            temp.n_sign = libbcmath.PLUS;
            temp.n_len = length;
            temp.n_scale = scale;
            temp.n_value = value;
            return temp;
        },

        _bc_simp_mul(n1, n1len, n2, n2len, full_scale) {
            var prod;   // bc_num
            var n1ptr; // char *n1ptr, *n2ptr, *pvptr;
            var n2ptr;
            var pvptr;
            var n1end; //char *n1end, *n2end;        /* To the end of n1 and n2. */
            var n2end;
            var indx; //int indx, sum, prodlen;
            var sum;
            var prodlen;

            prodlen = n1len+n2len+1;

            prod = libbcmath.bc_new_num(prodlen, 0);

            n1end = n1len-1; //(char *) (n1->n_value + n1len - 1);
            n2end = n2len-1; //(char *) (n2->n_value + n2len - 1);
            pvptr = prodlen-1; //(char *) ((*prod)->n_value + prodlen - 1);
            sum = 0;

            // Here is the loop...
            for (indx = 0; indx < prodlen-1; indx++) {
                n1ptr = n1end - libbcmath.MAX(0, indx-n2len+1); //(char *) (n1end - MAX(0, indx-n2len+1));
                n2ptr = n2end - libbcmath.MIN(indx, n2len-1); //(char *) (n2end - MIN(indx, n2len-1));
                while ((n1ptr >= 0) && (n2ptr <= n2end)) {
                    sum += n1.n_value[n1ptr--] * n2.n_value[n2ptr++];   //sum += *n1ptr-- * *n2ptr++;
                }
                prod.n_value[pvptr--] = Math.floor(sum % libbcmath.BASE); //*pvptr-- = sum % BASE;
                sum = Math.floor(sum / libbcmath.BASE); //sum = sum / BASE;
            }
            prod.n_value[pvptr]=sum; //*pvptr = sum;
            return prod;
        },


        /* A special adder/subtractor for the recursive divide and conquer
           multiply algorithm.  Note: if sub is called, accum must
           be larger that what is being subtracted.  Also, accum and val
           must have n_scale = 0.  (e.g. they must look like integers. *) */
        _bc_shift_addsub(accum, val, shift, sub) {
            var accp; //signed char *accp, *valp;
            var valp;
            var count; //int  count, carry;
            var carry;

            count = val.n_len;
            if (val.n_value[0] === 0) {
                count--;
            }

            //assert (accum->n_len+accum->n_scale >= shift+count);
            if (accum.n_len+accum.n_scale < shift+count) {
                throw new Error("len + scale < shift + count"); // ?? I think that's what assert does :)
            }


            // Set up pointers and others
            accp = accum.n_len + accum.n_scale - shift - 1; // (signed char *)(accum->n_value + accum->n_len + accum->n_scale - shift - 1);
            valp = val.n_len = 1; //(signed char *)(val->n_value + val->n_len - 1);
            carry = 0;
            if (sub) {
                // Subtraction, carry is really borrow.
                while (count--) {
                    accum.n_value[accp] -= val.n_value[valp--] + carry; //*accp -= *valp-- + carry;
                    if (accum.n_value[accp] < 0) {  //if (*accp < 0)
                        carry = 1;
                        accum.n_value[accp--] += libbcmath.BASE; //*accp-- += BASE;
                    } else {
                        carry = 0;
                        accp--;
                    }
                }
                while (carry) {
                    accum.n_value[accp] -= carry; //*accp -= carry;
                    if (accum.n_value[accp] < 0) { //if (*accp < 0)
                        accum.n_value[accp--] += libbcmath.BASE; //    *accp-- += BASE;
                    } else {
                        carry = 0;
                    }
                }
            } else {
                // Addition
                while (count--) {
                    accum.n_value[accp] += val.n_value[valp--] + carry; //*accp += *valp-- + carry;
                    if (accum.n_value[accp] > (libbcmath.BASE-1)) {//if (*accp > (BASE-1))
                        carry = 1;
                        accum.n_value[accp--] -= libbcmath.BASE; //*accp-- -= BASE;
                    } else {
                        carry = 0;
                        accp--;
                    }
                }
                while (carry) {
                    accum.n_value[accp] += carry; //*accp += carry;
                    if (accum.n_value[accp] > (libbcmath.BASE-1)) { //if (*accp > (BASE-1))
                        accum.n_value[accp--] -= libbcmath.BASE; //*accp-- -= BASE;
                    } else {
                        carry = 0;
                    }
                }
            }
            return true; // accum is the pass-by-reference return
        },

        /* Recursive divide and conquer multiply algorithm.
           Based on
           Let u = u0 + u1*(b^n)
           Let v = v0 + v1*(b^n)
           Then uv = (B^2n+B^n)*u1*v1 + B^n*(u1-u0)*(v0-v1) + (B^n+1)*u0*v0

           B is the base of storage, number of digits in u1,u0 close to equal.
        */
        _bc_rec_mul(u, ulen, v, vlen, full_scale) {
            var prod; // @return
            var u0; //bc_num
            var u1;
            var v0;
            var v1;
            var u0len;   //int
            var v0len;
            var m1; //bc_num
            var m2;
            var m3;
            var d1;
            var d2;
            var n; // int
            var prodlen;
            var m1zero;
            var d1len;   // int
            var d2len;

            // Base case?
            if ( (ulen+vlen) < libbcmath.MUL_BASE_DIGITS || ulen < libbcmath.MUL_SMALL_DIGITS || vlen < libbcmath.MUL_SMALL_DIGITS ) {
                return libbcmath._bc_simp_mul(u, ulen, v, vlen,  full_scale);
            }

            // Calculate n -- the u and v split point in digits.
            n = Math.floor((libbcmath.MAX(ulen, vlen)+1) / 2);

            // Split u and v.
            if (ulen < n) {
                u1 = libbcmath.bc_init_num(); //u1 = bc_copy_num (BCG(_zero_));
                u0 = libbcmath.new_sub_num(ulen,0, u.n_value);
            } else {
                u1 = libbcmath.new_sub_num(ulen-n, 0, u.n_value);
                u0 = libbcmath.new_sub_num(n, 0, u.n_value+ulen-n);
            }
            if (vlen < n) {
                v1 = libbcmath.bc_init_num(); //bc_copy_num (BCG(_zero_));
                v0 = libbcmath.new_sub_num(vlen,0, v.n_value);
            } else {
                v1 = libbcmath.new_sub_num(vlen-n, 0, v.n_value);
                v0 = libbcmath.new_sub_num(n, 0, v.n_value+vlen-n);
            }
            libbcmath._bc_rm_leading_zeros(u1);
            libbcmath._bc_rm_leading_zeros(u0);
            u0len = u0.n_len;
            libbcmath._bc_rm_leading_zeros(v1);
            libbcmath._bc_rm_leading_zeros(v0);
            v0len = v0.n_len;

            m1zero = libbcmath.bc_is_zero(u1) || libbcmath.bc_is_zero(v1);

            // Calculate sub results ...

            d1 = libbcmath.bc_init_num(); // needed?
            d2 = libbcmath.bc_init_num(); // needed?
            d1 = libbcmath.bc_sub(u1, u0, 0);
            d1len = d1.n_len;

            d2 = libbcmath.bc_sub (v0, v1, 0);
            d2len = d2.n_len;

            // Do recursive multiplies and shifted adds.
            if (m1zero) {
                m1 = libbcmath.bc_init_num(); //bc_copy_num (BCG(_zero_));
            } else {
                //m1 = libbcmath.bc_init_num(); //allow pass-by-ref
                m1 = libbcmath._bc_rec_mul (u1, u1.n_len, v1, v1.n_len, 0);
            }
            if (libbcmath.bc_is_zero(d1) || libbcmath.bc_is_zero(d2)) {
                m2 = libbcmath.bc_init_num(); //bc_copy_num (BCG(_zero_));
            } else {
                //m2 = libbcmath.bc_init_num(); //allow pass-by-ref
                m2 = libbcmath._bc_rec_mul (d1, d1len, d2, d2len, 0);
            }

            if (libbcmath.bc_is_zero(u0) || libbcmath.bc_is_zero(v0)) {
                m3 = libbcmath.bc_init_num(); //bc_copy_num (BCG(_zero_));
            } else {
                //m3 = libbcmath.bc_init_num(); //allow pass-by-ref
                m3 = libbcmath._bc_rec_mul(u0, u0.n_len, v0, v0.n_len, 0);
            }

            // Initialize product
            prodlen = ulen+vlen+1;
            prod = libbcmath.bc_new_num(prodlen, 0);

            if (!m1zero) {
                libbcmath._bc_shift_addsub(prod, m1, 2*n, 0);
                libbcmath._bc_shift_addsub(prod, m1, n, 0);
            }
            libbcmath._bc_shift_addsub(prod, m3, n, 0);
            libbcmath._bc_shift_addsub(prod, m3, 0, 0);
            libbcmath._bc_shift_addsub(prod, m2, n, d1.n_sign != d2.n_sign);

            return prod;
            // Now clean up!
            //bc_free_num (&u1);
            //bc_free_num (&u0);
            //bc_free_num (&v1);
            //bc_free_num (&m1);
            //bc_free_num (&v0);
            //bc_free_num (&m2);
            //bc_free_num (&m3);
            //bc_free_num (&d1);
            //bc_free_num (&d2);
        },


        /**
         *
         * @param {bc_num} n1
         * @param {bc_num} n2
         * @param {boolean} use_sign
         * @param {boolean} ignore_last
         * @return -1, 0, 1 (see bc_compare)
         */
        _bc_do_compare(n1, n2, use_sign, ignore_last) {
            var n1ptr; // int
            var n2ptr;
            var count;    // int

            /* First, compare signs. */
            if (use_sign && (n1.n_sign != n2.n_sign)) {
                if (n1.n_sign == libbcmath.PLUS) {
                    return (1);    /* Positive N1 > Negative N2 */
                } else {
                    return (-1);    /* Negative N1 < Positive N1 */
                }
            }

            /* Now compare the magnitude. */
            if (n1.n_len != n2.n_len) {
                if (n1.n_len > n2.n_len) {
                    /* Magnitude of n1 > n2. */
                    if (!use_sign || (n1.n_sign == libbcmath.PLUS)) {
                        return (1);
                    } else {
                        return (-1);
                    }
                } else {
                    /* Magnitude of n1 < n2. */
                    if (!use_sign || (n1.n_sign == libbcmath.PLUS)) {
                        return (-1);
                    } else {
                        return (1);
                    }
                }
            }

            /* If we get here, they have the same number of integer digits.
       check the integer part and the equal length part of the fraction. */
            count = n1.n_len + Math.min(n1.n_scale, n2.n_scale);
            n1ptr = 0;
            n2ptr = 0;

            while ((count > 0) && (n1.n_value[n1ptr] == n2.n_value[n2ptr])) {
                n1ptr++;
                n2ptr++;
                count--;
            }

            if (ignore_last && (count == 1) && (n1.n_scale == n2.n_scale)) {
                return (0);
            }

            if (count !== 0) {
                if (n1.n_value[n1ptr] > n2.n_value[n2ptr])  {
                    /* Magnitude of n1 > n2. */
                    if (!use_sign || n1.n_sign == libbcmath.PLUS) {
                        return (1);
                    } else {
                        return (-1);
                    }
                } else {
                    /* Magnitude of n1 < n2. */
                    if (!use_sign || n1.n_sign == libbcmath.PLUS) {
                        return (-1);
                    } else {
                        return (1);
                    }
                }
            }

            /* They are equal up to the last part of the equal part of the fraction. */
            if (n1.n_scale != n2.n_scale) {
                if (n1.n_scale > n2.n_scale) {
                    for (count =(n1.n_scale - n2.n_scale); count>0; count--) {
                        if (n1.n_value[n1ptr++] !== 0) {
                            /* Magnitude of n1 > n2. */
                            if (!use_sign || n1.n_sign == libbcmath.PLUS) {
                                return (1);
                            } else {
                                return (-1);
                            }
                        }
                    }
                } else {
                    for (count = (n2.n_scale - n1.n_scale); count>0; count--) {
                        if (n2.n_value[n2ptr++] !== 0) {
                            /* Magnitude of n1 < n2. */
                            if (!use_sign || n1.n_sign == libbcmath.PLUS) {
                                return (-1);
                            } else {
                                return (1);
                            }
                        }
                    }
                }
            }

            /* They must be equal! */
            return (0);
        },



        /* Here is the full subtract routine that takes care of negative numbers.
   N2 is subtracted from N1 and the result placed in RESULT.  SCALE_MIN
   is the minimum scale for the result. */
        bc_sub(n1, n2, scale_min) {
            var diff; // bc_num
            var cmp_res; //int
            var res_scale;
            if (n1.n_sign != n2.n_sign) {
                diff = libbcmath._bc_do_add (n1, n2, scale_min);
                diff.n_sign = n1.n_sign;
            } else {
                /* subtraction must be done. */
                /* Compare magnitudes. */
                cmp_res = libbcmath._bc_do_compare(n1, n2, false, false);
                switch (cmp_res) {
                    case -1:
                        /* n1 is less than n2, subtract n1 from n2. */
                        diff = libbcmath._bc_do_sub(n2, n1, scale_min);
                        diff.n_sign = (n2.n_sign == libbcmath.PLUS ? libbcmath.MINUS : libbcmath.PLUS);
                        break;
                    case  0:
                        /* They are equal! return zero! */
                        res_scale = libbcmath.MAX(scale_min, libbcmath.MAX(n1.n_scale, n2.n_scale));
                        diff = libbcmath.bc_new_num(1, res_scale);
                        libbcmath.memset(diff.n_value, 0, 0, res_scale+1);
                        break;
                    case  1:
                        /* n2 is less than n1, subtract n2 from n1. */
                        diff = libbcmath._bc_do_sub(n1, n2, scale_min);
                        diff.n_sign = n1.n_sign;
                        break;
                }
            }

            /* Clean up and return. */
            //bc_free_num (result);
            //*result = diff;
            return diff;
        },


        _bc_do_add(n1, n2, scale_min) {
            var sum;  // bc_num
            var sum_scale; // int
            var sum_digits;
            var n1ptr; // int
            var n2ptr;
            var sumptr;
            var carry; // int
            var n1bytes;
            var n2bytes;
            var tmp; // int


            // Prepare sum.
            sum_scale   = libbcmath.MAX(n1.n_scale, n2.n_scale);
            sum_digits  = libbcmath.MAX(n1.n_len, n2.n_len) + 1;
            sum         = libbcmath.bc_new_num(sum_digits, libbcmath.MAX(sum_scale, scale_min));


            /* Not needed?
        if (scale_min > sum_scale) {
            sumptr = (char *) (sum->n_value + sum_scale + sum_digits);
            for (count = scale_min - sum_scale; count > 0; count--) {
                *sumptr++ = 0;
            }
        }
        */

            // Start with the fraction part.  Initialize the pointers.
            n1bytes = n1.n_scale;
            n2bytes = n2.n_scale;
            n1ptr = (n1.n_len + n1bytes - 1);
            n2ptr = (n2.n_len + n2bytes - 1);
            sumptr = (sum_scale + sum_digits - 1);

            // Add the fraction part.  First copy the longer fraction (ie when adding 1.2345 to 1 we know .2345 is correct already) .
            if (n1bytes != n2bytes) {
                if (n1bytes > n2bytes) {
                    // n1 has more dp then n2
                    while (n1bytes>n2bytes) {
                        sum.n_value[sumptr--] = n1.n_value[n1ptr--];
                        // *sumptr-- = *n1ptr--;
                        n1bytes--;
                    }
                } else {
                    // n2 has more dp then n1
                    while (n2bytes>n1bytes) {
                        sum.n_value[sumptr--] = n2.n_value[n2ptr--];
                        // *sumptr-- = *n2ptr--;
                        n2bytes--;
                    }
                }
            }

            // Now add the remaining fraction part and equal size integer parts.
            n1bytes += n1.n_len;
            n2bytes += n2.n_len;
            carry = 0;
            while ((n1bytes > 0) && (n2bytes > 0)) {

                // add the two numbers together
                tmp = n1.n_value[n1ptr--] + n2.n_value[n2ptr--] + carry;
                // *sumptr = *n1ptr-- + *n2ptr-- + carry;

                // check if they are >= 10 (impossible to be more then 18)
                if (tmp >= libbcmath.BASE) {
                    carry = 1;
                    tmp -= libbcmath.BASE;  // yep, subtract 10, add a carry
                } else {
                    carry = 0;
                }
                sum.n_value[sumptr] = tmp;
                sumptr--;
                n1bytes--;
                n2bytes--;
            }

            // Now add carry the [rest of the] longer integer part.
            if (n1bytes === 0) {
                // n2 is a bigger number then n1
                while (n2bytes-- > 0) {
                    tmp = n2.n_value[n2ptr--] + carry;
                    // *sumptr = *n2ptr-- + carry;

                    if (tmp >= libbcmath.BASE) {
                        carry = 1;
                        tmp -= libbcmath.BASE;
                    } else {
                        carry = 0;
                    }
                    sum.n_value[sumptr--]=tmp;
                }
            } else {
                // n1 is bigger then n2..
                while (n1bytes-- > 0) {
                    tmp = n1.n_value[n1ptr--] + carry;
                    // *sumptr = *n1ptr-- + carry;

                    if (tmp >= libbcmath.BASE) {
                        carry = 1;
                        tmp -= libbcmath.BASE;
                    } else {
                        carry = 0;
                    }
                    sum.n_value[sumptr--]=tmp;
                }
            }

            // Set final carry.
            if (carry == 1) {
                sum.n_value[sumptr] += 1;
            // *sumptr += 1;
            }

            // Adjust sum and return.
            libbcmath._bc_rm_leading_zeros (sum);
            return sum;
        },

        /**
     * Perform a subtraction
     *
     // Perform subtraction: N2 is subtracted from N1 and the value is
     //  returned.  The signs of N1 and N2 are ignored.  Also, N1 is
     //  assumed to be larger than N2.  SCALE_MIN is the minimum scale
     //  of the result.
     *
     * Basic school maths says to subtract 2 numbers..
     * 1. make them the same length, the decimal places, and the integer part
     * 2. start from the right and subtract the two numbers from each other
     * 3. if the sum of the 2 numbers < 0, carry -1 to the next set and add 10 (ie 18 > carry 1 becomes 8). thus 0.9 + 0.9 = 1.8
     *
     * @param {bc_num} n1
     * @param {bc_num} n2
     * @param {int} scale_min
     * @return bc_num
     */
        _bc_do_sub(n1, n2, scale_min) {
            var diff; //bc_num
            var diff_scale; // int
            var diff_len;
            var min_scale; // int
            var min_len;
            var n1ptr; // int
            var n2ptr;
            var diffptr;
            var borrow; // int
            var count;
            var val;

            // Allocate temporary storage.
            diff_len    = libbcmath.MAX(n1.n_len,   n2.n_len);
            diff_scale  = libbcmath.MAX(n1.n_scale, n2.n_scale);
            min_len     = libbcmath.MIN(n1.n_len,   n2.n_len);
            min_scale   = libbcmath.MIN(n1.n_scale, n2.n_scale);
            diff        = libbcmath.bc_new_num(diff_len, libbcmath.MAX(diff_scale, scale_min));

            /* Not needed?
        // Zero extra digits made by scale_min.
        if (scale_min > diff_scale) {
            diffptr = (char *) (diff->n_value + diff_len + diff_scale);
            for (count = scale_min - diff_scale; count > 0; count--) {
                *diffptr++ = 0;
            }
        }
        */

            // Initialize the subtract.
            n1ptr   = (n1.n_len + n1.n_scale -1);
            n2ptr   = (n2.n_len + n2.n_scale -1);
            diffptr = (diff_len + diff_scale -1);

            // Subtract the numbers.
            borrow = 0;

            // Take care of the longer scaled number.
            if (n1.n_scale != min_scale) {
                // n1 has the longer scale
                for (count = n1.n_scale - min_scale; count > 0; count--) {
                    diff.n_value[diffptr--] = n1.n_value[n1ptr--];
                // *diffptr-- = *n1ptr--;
                }
            } else {
                // n2 has the longer scale
                for (count = n2.n_scale - min_scale; count > 0; count--) {
                    val = 0 - n2.n_value[n2ptr--] - borrow;
                    //val = - *n2ptr-- - borrow;
                    if (val < 0) {
                        val += libbcmath.BASE;
                        borrow = 1;
                    } else {
                        borrow = 0;
                        diff.n_value[diffptr--] = val;
                    //*diffptr-- = val;
                    }
                }
            }

            // Now do the equal length scale and integer parts.
            for (count = 0; count < min_len + min_scale; count++) {
                val = n1.n_value[n1ptr--] - n2.n_value[n2ptr--] - borrow;
                //val = *n1ptr-- - *n2ptr-- - borrow;
                if (val < 0) {
                    val += libbcmath.BASE;
                    borrow = 1;
                } else {
                    borrow = 0;
                }
                diff.n_value[diffptr--] = val;
            //*diffptr-- = val;
            }

            // If n1 has more digits then n2, we now do that subtract.
            if (diff_len != min_len) {
                for (count = diff_len - min_len; count > 0; count--) {
                    val = n1.n_value[n1ptr--] - borrow;
                    // val = *n1ptr-- - borrow;
                    if (val < 0) {
                        val += libbcmath.BASE;
                        borrow = 1;
                    } else {
                        borrow = 0;
                    }
                    diff.n_value[diffptr--] = val;
                }
            }

            // Clean up and return.
            libbcmath._bc_rm_leading_zeros(diff);
            return diff;
        },

        /**
         *
         * @param {int} length
         * @param {int} scale
         * @return bc_num
         */
        bc_new_num(length, scale) {
            var temp; // bc_num
            temp            = new libbcmath.bc_num();
            temp.n_sign     = libbcmath.PLUS;
            temp.n_len      = length;
            temp.n_scale    = scale;
            temp.n_value    = libbcmath.safe_emalloc(1, length+scale, 0);
            libbcmath.memset(temp.n_value, 0, 0, length+scale);
            return temp;
        },

        safe_emalloc(size, len, extra) {
            return Array((size * len) + extra);
        },

        /**
         * Create a new number
         */
        bc_init_num() {
            return new libbcmath.bc_new_num(1,0);

        },

        _bc_rm_leading_zeros(num) {
            /* We can move n_value to point to the first non zero digit! */
            while ((num.n_value[0] === 0) && (num.n_len > 1)) {
                num.n_value.shift();
                num.n_len--;
            }
        },

        /**
         * Convert to bc_num detecting scale
         */
        php_str2num(str) {
            var p;
            p = str.indexOf('.');
            if (p==-1) {
                return libbcmath.bc_str2num(str, 0);
            } else {
                return libbcmath.bc_str2num(str, (str.length-p));
            }

        },

        CH_VAL(c) {
            return c - '0'; //??
        },

        BCD_CHAR(d) {
            return d + '0'; // ??
        },

        isdigit(c) {
            return (isNaN(parseInt(c,10)) ? false : true);
        },

        bc_str2num(str_in, scale) {
            var str;
            var num;
            var ptr;
            var digits;
            var strscale;
            var zero_int;
            var nptr;
            // remove any non-expected characters
            /* Check for valid number and count digits. */

            str=str_in.split(''); // convert to array
            ptr = 0;    // str
            digits = 0;
            strscale = 0;
            zero_int = false;
            if ( (str[ptr] === '+') || (str[ptr] === '-'))  {
                ptr++;  /* Sign */
            }
            while (str[ptr] === '0') {
                ptr++;            /* Skip leading zeros. */
            }
            //while (libbcmath.isdigit(str[ptr])) {
            while ((str[ptr]) % 1 === 0) { //libbcmath.isdigit(str[ptr])) {
                ptr++;
                digits++;    /* digits */
            }

            if (str[ptr] === '.') {
                ptr++;            /* decimal point */
            }
            //while (libbcmath.isdigit(str[ptr])) {
            while ((str[ptr]) % 1 === 0) { //libbcmath.isdigit(str[ptr])) {
                ptr++;
                strscale++;    /* digits */
            }

            if ((str[ptr]) || (digits+strscale === 0)) {
                // invalid number, return 0
                return libbcmath.bc_init_num();
            //*num = bc_copy_num (BCG(_zero_));
            }

            /* Adjust numbers and allocate storage and initialize fields. */
            strscale = libbcmath.MIN(strscale, scale);
            if (digits === 0) {
                zero_int = true;
                digits = 1;
            }

            num = libbcmath.bc_new_num(digits, strscale);

            /* Build the whole number. */
            ptr = 0; // str
            if (str[ptr] === '-') {
                num.n_sign = libbcmath.MINUS;
                //(*num)->n_sign = MINUS;
                ptr++;
            } else {
                num.n_sign = libbcmath.PLUS;
                //(*num)->n_sign = PLUS;
                if (str[ptr] === '+') {
                    ptr++;
                }
            }
            while (str[ptr] === '0') {
                ptr++;            /* Skip leading zeros. */
            }

            nptr = 0; //(*num)->n_value;
            if (zero_int) {
                num.n_value[nptr++] = 0;
                digits = 0;
            }
            for (;digits > 0; digits--) {
                num.n_value[nptr++] = libbcmath.CH_VAL(str[ptr++]);
            //*nptr++ = CH_VAL(*ptr++);
            }

            /* Build the fractional part. */
            if (strscale > 0) {
                ptr++;  /* skip the decimal point! */
                for (;strscale > 0; strscale--) {
                    num.n_value[nptr++] = libbcmath.CH_VAL(str[ptr++]);
                }
            }

            return num;
        },

        cint(v) {
            if (typeof(v) == 'undefined') {
                v = 0;
            }
            var x=parseInt(v,10);
            if (isNaN(x)) {
                x = 0;
            }
            return x;
        },

        /**
         * Basic min function
         * @param {int} a
         * @param {int} b
         */
        MIN(a, b) {
            return ((a > b) ? b : a);
        },

        /**
         * Basic max function
         * @param {int} a
         * @param {int} b
         */
        MAX(a, b) {
            return ((a > b) ? a : b);
        },

        /**
         * Basic odd function
         * @param {int} a
         */
        ODD(a) {
            return (a & 1);
        },

        /**
         * replicate c function
         * @param {array} r     return (by reference)
         * @param {int} ptr
         * @param {string} chr    char to fill
         * @param {int} len       length to fill
         */
        memset(r, ptr, chr, len) {
            var i;
            for (i=0;i<len;i++) {
                r[ptr+i] = chr;
            }
        },

        /**
         * Replacement c function
         * Obviously can't work like c does, so we've added an "offset" param so you could do memcpy(dest+1, src, len) as memcpy(dest, 1, src, len)
         * Also only works on arrays
         */
        memcpy(dest, ptr, src, srcptr, len) {
            var i;
            for (i=0;i<len;i++) {
                dest[ptr+i]=src[srcptr+i];
            }
            return true;
        },


        /**
         * Determine if the number specified is zero or not
         * @param {bc_num} num    number to check
         * @return boolean      true when zero, false when not zero.
         */
        bc_is_zero(num) {
            var count; // int
            var nptr; // int

            /* Quick check. */
            //if (num == BCG(_zero_)) return TRUE;

            /* Initialize */
            count = num.n_len + num.n_scale;
            nptr = 0; //num->n_value;

            /* The check */
            while ((count > 0) && (num.n_value[nptr++] === 0)) {
                count--;
            }

            if (count !== 0) {
                return false;
            } else {
                return true;
            }
        },

        bc_out_of_memory() {
            throw new Error("(BC) Out of memory");
        }
    };
    return libbcmath;
};

exports.abs = mixed_number => // Return the absolute value of the number
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/abs
// +   original by: Waldo Malqui Silva
// +   improved by: Karol Kowalski
// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
// +   improved by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
// *     example 1: \php.abs(4.2);
// *     returns 1: 4.2
// *     example 2: \php.abs(-4.2);
// *     returns 2: 4.2
// *     example 3: \php.abs(-5);
// *     returns 3: 5
// *     example 4: \php.abs('_argos');
// *     returns 4: 0
Math.abs(mixed_number) || 0;

exports.acos = arg => // Return the arc cosine of the number in radians
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/acos
// +   original by: Onno Marsman
// *     example 1: \php.acos(0.3);
// *     returns 1: 1.2661036727794992
Math.acos(arg);

exports.acosh = arg => // Returns the inverse hyperbolic cosine of the number, i.e. the value whose hyperbolic cosine is number
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/acosh
// +   original by: Onno Marsman
// *     example 1: \php.acosh(8723321.4);
// *     returns 1: 16.674657798418625
Math.log(arg + Math.sqrt(arg*arg-1));

exports.addcslashes = (str, charlist) => {
    // Escapes all chars mentioned in charlist with backslash. It creates octal representations if asked to backslash characters with 8th bit set or with ASCII<32 (except '\n', '\r', '\t' etc...)
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/addcslashes
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %  note 1: We show double backslashes in the return value example code below because a JavaScript string will not
    // %  note 1: render them as backslashes otherwise
    // *     example 1: \php.addcslashes('foo[ ]', 'A..z'); // Escape all ASCII within capital A to lower z range, including square brackets
    // *     returns 1: "\\f\\o\\o\\[ \\]"
    // *     example 2: \php.addcslashes("zoo['.']", 'z..A'); // Only escape z, period, and A here since not a lower-to-higher range
    // *     returns 2: "\\zoo['\\.']"
    // *     example 3: \php.addcslashes("@a\u0000\u0010\u00A9", "\0..\37!@\177..\377") == '\\@a\\000\\020\\302\\251'); // Escape as octals those specified and less than 32 (0x20) or greater than 126 (0x7E), but not otherwise
    // *     returns 3: true
    // *     example 4: \php.addcslashes("\u0020\u007E", "\40..\175") == '\\ ~'); // Those between 32 (0x20 or 040) and 126 (0x7E or 0176) decimal value will be backslashed if specified (not octalized)
    // *     returns 4: true
    // *     example 5: \php.addcslashes("\r\u0007\n", '\0..\37'); // Recognize C escape sequences if specified
    // *     returns 5: "\\r\\a\\n"
    // *     example 6: \php.addcslashes("\r\u0007\n", '\0'); // Do not recognize C escape sequences if not specified
    // *     returns 7: "\r\u0007\n"
    var target = '';

    var chrs = [];
    var i = 0;
    var j = 0;
    var c = '';
    var next = '';
    var rangeBegin = '';
    var rangeEnd = '';
    var chr = '';
    var begin = 0;
    var end = 0;
    var octalLength = 0;
    var postOctalPos = 0;
    var cca = 0;
    var escHexGrp = [];
    var encoded = '';
    var percentHex = /%([\dA-Fa-f]+)/g;
    var _pad = (n, c) => {
        if ( (n = n + "").length < c ) {
            return new Array(++c - n.length).join("0") + n;
        } else {
            return n;
        }
    };

    for (i=0; i < charlist.length; i++) {
        c = charlist.charAt(i);
        next = charlist.charAt(i+1);
        if (c === '\\' && next && (/\d/).test(next)) { // Octal
            rangeBegin = charlist.slice(i+1).match(/^\d+/)[0];
            octalLength = rangeBegin.length;
            postOctalPos = i+octalLength+1;
            if (charlist.charAt(postOctalPos)+charlist.charAt(postOctalPos+1) === '..' ) { // Octal begins range
                begin = rangeBegin.charCodeAt(0);
                if ((/\\\d/).test(charlist.charAt(postOctalPos+2)+charlist.charAt(postOctalPos+3))) { // Range ends with octal
                    rangeEnd = charlist.slice(postOctalPos+3).match(/^\d+/)[0];
                    i += 1; // Skip range end backslash
                }
                else if (charlist.charAt(postOctalPos+2)) { // Range ends with character
                    rangeEnd = charlist.charAt(postOctalPos+2);
                }
                else {
                    throw 'Range with no end point';
                }
                end = rangeEnd.charCodeAt(0);
                if (end > begin) { // Treat as a range
                    for (j=begin; j <= end; j++) {
                        chrs.push(String.fromCharCode(j));
                    }
                }
                else { // Supposed to treat period, begin and end as individual characters only, not a range
                    chrs.push('.', rangeBegin, rangeEnd);
                }
                i += rangeEnd.length+2; // Skip dots and range end (already skipped range end backslash if present)
            }
            else { // Octal is by itself
                chr = String.fromCharCode(parseInt(rangeBegin, 8));
                chrs.push(chr);
            }
            i += octalLength; // Skip range begin
        }
        else if (next+charlist.charAt(i+2) === '..') { // Character begins range
            rangeBegin = c;
            begin = rangeBegin.charCodeAt(0);
            if ((/\\\d/).test(charlist.charAt(i+3)+charlist.charAt(i+4))) { // Range ends with octal
                rangeEnd = charlist.slice(i+4).match(/^\d+/)[0];
                i += 1; // Skip range end backslash
            }
            else if (charlist.charAt(i+3)) { // Range ends with character
                rangeEnd = charlist.charAt(i+3);
            }
            else {
                throw 'Range with no end point';
            }
            end = rangeEnd.charCodeAt(0);
            if (end > begin) { // Treat as a range
                for (j=begin; j <= end; j++) {
                    chrs.push(String.fromCharCode(j));
                }
            }
            else { // Supposed to treat period, begin and end as individual characters only, not a range
                chrs.push('.', rangeBegin, rangeEnd);
            }
            i += rangeEnd.length+2; // Skip dots and range end (already skipped range end backslash if present)
        }
        else { // Character is by itself
            chrs.push(c);
        }
    }

    for (i = 0; i < str.length; i++) {
        c = str.charAt(i);
        if (chrs.indexOf(c) !== -1) {
            target += '\\';
            cca = c.charCodeAt(0);
            if (cca < 32 || cca > 126) { // Needs special escaping
                switch (c) {
                    case '\n': target += 'n'; break;
                    case '\t': target += 't'; break;
                    case '\u000D': target += 'r'; break;
                    case '\u0007': target += 'a'; break;
                    case '\v': target += 'v'; break;
                    case '\b': target += 'b'; break;
                    case '\f': target += 'f'; break;
                    default:
                        //target += _pad(cca.toString(8), 3);break; // Sufficient for UTF-16

                        encoded = encodeURIComponent(c);

                        // 3-length-padded UTF-8 octets
                        if ((escHexGrp = percentHex.exec(encoded)) !== null) {
                            target += _pad(parseInt(escHexGrp[1], 16).toString(8), 3); // already added a slash above
                        }
                        while ((escHexGrp = percentHex.exec(encoded)) !== null) {
                            target += '\\'+_pad(parseInt(escHexGrp[1], 16).toString(8), 3);
                        }
                        break;
                }
            }
            else { // Perform regular backslashed escaping
                target += c;
            }
        }
        else { // Just add the character unescaped
            target += c;
        }
    }
    return target;
};

exports.addslashes = str => // Escapes single quote, double quotes and backslash characters in a string with backslashes
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/addslashes
// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
// +   improved by: Ates Goral (http://magnetiq.com)
// +   improved by: marrtins
// +   improved by: Nate
// +   improved by: Onno Marsman
// +   input by: Denny Wardhana
// +   improved by: Brett Zamir (http://brett-zamir.me)
// +   improved by: Oskar Larsson Högfeldt (http://oskar-lh.name/)
// *     example 1: \php.addslashes("kevin's birthday");
// *     returns 1: 'kevin\'s birthday'

(str+'').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');

exports.aggregate = function (obj, class_name) {
    // !No description available for aggregate. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/aggregate
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: We can't copy privileged functions or instance properties, as those require instantiation (with potential side-effects when called)
    // %          note 1: We've chosen not to assign to or create a prototype object on the destination object even if the original object had the methods on its prototype
    // *     example 1: \php.var A = function () {};
    // *     example 1: A.prototype.method = function () {};
    // *     example 1: \php.var b = {};
    // *     example 1: \php.aggregate(b, 'A');
    // *     returns 1: undefined

    var p = '';

    var record={};
    var pos=-1;
    var getFuncName = fn => {
         var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
         if (!name) {
             return '(Anonymous)';
         }
         return name[1];
     };
    var indexOf = function (value) {
        for (var i = 0, length=this.length; i < length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    };

    if (typeof class_name === 'string') { // PHP behavior
        class_name = this.window[class_name];
    }

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.aggregateKeys = this.php_js.aggregateKeys || [];
    this.php_js.aggregateRecords = this.php_js.aggregateRecords || []; // Needed to allow deaggregate() and aggregate_info()
    this.php_js.aggregateClasses = this.php_js.aggregateClasses || [];
    // END REDUNDANT
    this.php_js.aggregateClasses.push(getFuncName(class_name));

    for (p in class_name) {
        if (!(p in obj) && p !== 'prototype' && p[0] !== '_') { // Static (non-private) class methods and properties
            obj[p] = class_name[p];
            record[p] = class_name[p];
        }
    }
    for (p in class_name.prototype) {
        if (!(p in obj) && p[0] !== '_') { // Prototype (non-private) instance methods and prototype default properties
            obj[p] = class_name.prototype[p];
            record[p] = class_name.prototype[p];
        }
    }
    if (!this.php_js.aggregateKeys.indexOf) {
        this.php_js.aggregateKeys.indexOf = indexOf;
    }
    pos = this.php_js.aggregateKeys.indexOf(obj);
    if (pos !== -1) {
        this.php_js.aggregateRecords[pos].push(record);
        this.php_js.aggregateClasses[pos].push(getFuncName(class_name));
    } else {
        this.php_js.aggregateKeys.push(obj);
        this.php_js.aggregateRecords.push([record]);
        this.php_js.aggregateClasses[0] = [];
        this.php_js.aggregateClasses[0].push(getFuncName(class_name));
    }
};

exports.aggregate_info = function (obj) {
    // !No description available for aggregate_info. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/aggregate_info
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: aggregate_info
    // *     example 1: \php.var A = function () {};
    // *     example 1: A.prop = 5;
    // *     example 1: A.prototype.someMethod = function () {};
    // *     example 1: \php.var b = {};
    // *     example 1: \php.aggregate(b, 'A');
    // *     example 1: \php.aggregate_info(b);
    // *     returns 1: {'A':{methods:['someMethod'], properties:['prop']}}

    var idx=-1;

    var p='';
    var infoObj={};
    var retObj={};
    var i=0;
    var name='';
    var indexOf = function (value) {
        for (var i = 0, length=this.length; i < length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    };

    if (!this.php_js || !this.php_js.aggregateRecords || !this.php_js.aggregateKeys || !this.php_js.aggregateClasses) {
        return false; // Is this what is returned?
    }

    if (!this.php_js.aggregateKeys.indexOf) {
        this.php_js.aggregateKeys.indexOf = indexOf;
    }
    idx = this.php_js.aggregateKeys.indexOf(obj);
    if (idx === -1) {
        return false;
    }

    for (i=0; i < this.php_js.aggregateClasses[idx].length; i++) {
        name = this.php_js.aggregateClasses[idx][i];
        infoObj={methods:[], properties:[]};
        for (p in this.php_js.aggregateRecords[idx][i]) {
            if (typeof this.php_js.aggregateRecords[idx][i][p] === 'function') {
                infoObj.methods.push(p);
            }
            else {
                infoObj.properties.push(p);
            }
        }
        retObj[name] = infoObj;
    }

    return retObj;
};

exports.aggregate_methods = function (obj, class_name) {
    // !No description available for aggregate_methods. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/aggregate_methods
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: We can't copy privileged functions, as those require instantiation (with potential side-effects when called)
    // %          note 1: We've chosen not to assign to or create a prototype object on the destination object even if the original object had the methods on its prototype
    // *     example 1: \php.var A = function () {};
    // *     example 1: A.prototype.method = function () {};
    // *     example 1: \php.var b = {};
    // *     example 1: \php.aggregate_methods(b, 'A');
    // *     returns 1: undefined

    var p = '';

    var record={};
    var pos=-1;
    var getFuncName = fn => {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
        if (!name) {
            return '(Anonymous)';
        }
        return name[1];
    };
    var indexOf = function (value) {
        for (var i = 0, length=this.length; i < length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    };

    if (typeof class_name === 'string') { // PHP behavior
        class_name = this.window[class_name];
    }

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.aggregateKeys = this.php_js.aggregateKeys || [];
    this.php_js.aggregateRecords = this.php_js.aggregateRecords || []; // Needed to allow deaggregate() and aggregate_info()
    this.php_js.aggregateClasses = this.php_js.aggregateClasses || [];
    // END REDUNDANT
    this.php_js.aggregateClasses.push(getFuncName(class_name));

    for (p in class_name) {
        if (!(p in obj) && typeof class_name[p] === 'function' && p[0] !== '_') { // Static (non-private) class methods
            obj[p] = class_name[p];
            record[p] = class_name[p];
        }
    }
    for (p in class_name.prototype) {
        if (!(p in obj) && typeof class_name.prototype[p] === 'function' && p[0] !== '_') { // Prototype (non-private) instance methods
            obj[p] = class_name.prototype[p];
            record[p] = class_name.prototype[p];
        }
    }
    if (!this.php_js.aggregateKeys.indexOf) {
        this.php_js.aggregateKeys.indexOf = indexOf;
    }
    pos = this.php_js.aggregateKeys.indexOf(obj);
    if (pos !== -1) {
        this.php_js.aggregateRecords[pos].push(record);
        this.php_js.aggregateClasses[pos].push(getFuncName(class_name));
    } else {
        this.php_js.aggregateKeys.push(obj);
        this.php_js.aggregateRecords.push([record]);
        this.php_js.aggregateClasses[0] = [];
        this.php_js.aggregateClasses[0].push(getFuncName(class_name));
    }
};

exports.aggregate_methods_by_list = function (obj, class_name, properties_list, exclude) {
    // !No description available for aggregate_methods_by_list. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/aggregate_methods_by_list
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: We can't copy privileged methods, as those require instantiation (with potential side-effects when called)
    // %          note 1: We've chosen not to assign to or create a prototype object on the destination object even if the original object had the methods on its prototype
    // *     example 1: \php.var A = function () {};
    // *     example 1: A.prototype.method = function () {};
    // *     example 1: \php.var b = {};
    // *     example 1: \php.aggregate_methods_by_list(b, 'A', ['method'], false);
    // *     returns 1: undefined

    var p = '';

    var i=0;
    var record={};
    var pos=-1;
    var indexOf = function (value) {
        for (var i = 0, length=this.length; i < length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    };

    if (typeof class_name === 'string') { // PHP behavior
        class_name = this.window[class_name];
    }

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.aggregateKeys = this.php_js.aggregateKeys || [];
    this.php_js.aggregateRecords = this.php_js.aggregateRecords || []; // Needed to allow deaggregate() and aggregate_info()
    this.php_js.aggregateClasses = this.php_js.aggregateClasses || [];
    var getFuncName = fn => {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
        if (!name) {
            return '(Anonymous)';
        }
        return name[1];
    };
    // END REDUNDANT
    this.php_js.aggregateClasses.push(getFuncName(class_name));

    if (!properties_list.indexOf) {
        properties_list.indexOf = indexOf;
    }

    if (exclude) {
        for (p in class_name) {
            if (!(p in obj) &&
                    typeof class_name[p] === 'function' &&
                        p[0] !== '_' &&
                            properties_list.indexOf(p) === -1) { // Static (non-private) class methods
                obj[p] = class_name[p];
                record[p] = class_name[p];
            }
        }
        for (p in class_name.prototype) {
            if (!(p in obj) &&
                    typeof class_name.prototype[p] === 'function' &&
                        p[0] !== '_' &&
                            properties_list.indexOf(p) === -1) { // Prototype (non-private) instance methods
                obj[p] = class_name.prototype[p];
                record[p] = class_name.prototype[p];
            }
        }
    } else {
        for (i=0; i < properties_list.length; i++) {
            p = properties_list[i];
            if (!(p in obj) &&
                    p in class_name &&
                        p[0] !== '_' &&
                            typeof class_name.prototype[p] === 'function') { // Static (non-private) class methods
                obj[p] = class_name[p];
                record[p] = class_name[p];
            } else if (!(p in obj) &&
                    p in class_name.prototype &&
                        p[0] !== '_' &&
                            typeof class_name.prototype[p] === 'function') { // Prototype (non-private) instance methods
                obj[p] = class_name.prototype[p];
                record[p] = class_name.prototype[p];
            }
        }
    }
    if (!this.php_js.aggregateKeys.indexOf) {
        this.php_js.aggregateKeys.indexOf = indexOf;
    }
    pos = this.php_js.aggregateKeys.indexOf(obj);
    if (pos !== -1) {
        this.php_js.aggregateRecords[pos].push(record);
        this.php_js.aggregateClasses[pos].push(getFuncName(class_name));
    } else {
        this.php_js.aggregateKeys.push(obj);
        this.php_js.aggregateRecords.push([record]);
        this.php_js.aggregateClasses[0] = [];
        this.php_js.aggregateClasses[0].push(getFuncName(class_name));
    }
};

exports.aggregate_methods_by_regexp = function (obj, class_name, regexp, exclude) {
    // !No description available for aggregate_methods_by_regexp. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/aggregate_methods_by_regexp
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: We can't copy privileged methods, as those require instantiation (with potential side-effects when called)
    // %          note 1: We've chosen not to assign to or create a prototype object on the destination object even if the original object had the methods on its prototype
    // *     example 1: \php.var A = function () {};
    // *     example 1: A.prototype.method = function () {};
    // *     example 1: \php.var b = {};
    // *     example 1: \php.aggregate_methods_by_regexp(b, 'A', /^meth/, false);
    // *     returns 1: undefined

    var p = '';

    var test=false;
    var record={};
    var pos=-1;

    var indexOf = function (value) {
        for (var i = 0, length=this.length; i < length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    };

    if (typeof regexp === 'string') { // If passing the regular expression as a string, note that this behavior may change in the future as we seek to implement PHP-style regexp (e.g., delimiteres and modifier flags within the string)
        regexp = eval(regexp);
    }

    if (typeof class_name === 'string') { // PHP behavior
        class_name = this.window[class_name];
    }

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.aggregateKeys = this.php_js.aggregateKeys || [];
    this.php_js.aggregateRecords = this.php_js.aggregateRecords || []; // Needed to allow deaggregate() and aggregate_info()
    this.php_js.aggregateClasses = this.php_js.aggregateClasses || [];
    var getFuncName = fn => {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
        if (!name) {
            return '(Anonymous)';
        }
        return name[1];
    };
    // END REDUNDANT
    this.php_js.aggregateClasses.push(getFuncName(class_name));

    for (p in class_name) {
        test = exclude ? p.search(regexp) === -1 : p.search(regexp) !== -1;
        if (!(p in obj) &&
                typeof class_name[p] === 'function' &&
                    p[0] !== '_' &&
                        test) { // Static (non-private) class methods
            obj[p] = class_name[p];
            record[p] = class_name[p];
        }
    }
    for (p in class_name.prototype) {
        test = exclude ? p.search(regexp) === -1 : p.search(regexp) !== -1;
        if (!(p in obj) &&
                typeof class_name.prototype[p] === 'function' &&
                    p[0] !== '_' &&
                        test) { // Prototype (non-private) instance methods
            obj[p] = class_name.prototype[p];
            record[p] = class_name.prototype[p];
        }
    }
    if (!this.php_js.aggregateKeys.indexOf) {
        this.php_js.aggregateKeys.indexOf = indexOf;
    }
    pos = this.php_js.aggregateKeys.indexOf(obj);
    if (pos !== -1) {
        this.php_js.aggregateRecords[pos].push(record);
        this.php_js.aggregateClasses[pos].push(getFuncName(class_name));
    } else {
        this.php_js.aggregateKeys.push(obj);
        this.php_js.aggregateRecords.push([record]);
        this.php_js.aggregateClasses[0] = [];
        this.php_js.aggregateClasses[0].push(getFuncName(class_name));
    }
};

exports.aggregate_properties = function (obj, class_name) {
    // !No description available for aggregate_properties. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/aggregate_properties
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: We can't copy instance properties, as those require instantiation (with potential side-effects when called)
    // %          note 1: We've chosen not to assign to or create a prototype object on the destination object even if the original object had the properties on its prototype
    // *     example 1: \php.var A = function () {};
    // *     example 1: A.prototype.prop = 10;
    // *     example 1: \php.var b = {};
    // *     example 1: \php.aggregate_properties(b, 'A');
    // *     returns 1: undefined

    var p = '';

    var record={};
    var pos=-1;

    var indexOf = function (value) {
        for (var i = 0, length=this.length; i < length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    };

    if (typeof class_name === 'string') { // PHP behavior
        class_name = this.window[class_name];
    }

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.aggregateKeys = this.php_js.aggregateKeys || [];
    this.php_js.aggregateRecords = this.php_js.aggregateRecords || []; // Needed to allow deaggregate() and aggregate_info()
    this.php_js.aggregateClasses = this.php_js.aggregateClasses || [];
    var getFuncName = fn => {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
        if (!name) {
            return '(Anonymous)';
        }
        return name[1];
    };
    // END REDUNDANT
    this.php_js.aggregateClasses.push(getFuncName(class_name));

    for (p in class_name) {
        if (!(p in obj) && typeof class_name[p] !== 'function' && p[0] !== '_') { // Static (non-private) class properties
            obj[p] = class_name[p];
            record[p] = class_name[p];
        }
    }
    for (p in class_name.prototype) {
        if (!(p in obj) && typeof class_name.prototype[p] !== 'function' && p[0] !== '_') { // Prototype (non-private) default properties
            obj[p] = class_name.prototype[p];
            record[p] = class_name.prototype[p];
        }
    }
    if (!this.php_js.aggregateKeys.indexOf) {
        this.php_js.aggregateKeys.indexOf = indexOf;
    }
    pos = this.php_js.aggregateKeys.indexOf(obj);
    if (pos !== -1) {
        this.php_js.aggregateRecords[pos].push(record);
        this.php_js.aggregateClasses[pos].push(getFuncName(class_name));
    } else {
        this.php_js.aggregateKeys.push(obj);
        this.php_js.aggregateRecords.push([record]);
        this.php_js.aggregateClasses[0] = [];
        this.php_js.aggregateClasses[0].push(getFuncName(class_name));
    }
};

exports.aggregate_properties_by_list = function (obj, class_name, properties_list, exclude) {
    // !No description available for aggregate_properties_by_list. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/aggregate_properties_by_list
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: We can't copy instance properties, as those require instantiation (with potential side-effects when called)
    // %          note 1: We've chosen not to assign to or create a prototype object on the destination object even if the original object had the properties on its prototype
    // *     example 1: \php.var A = function () {};
    // *     example 1: A.prototype.prop = 10;
    // *     example 1: \php.var b = {};
    // *     example 1: \php.aggregate_properties_by_list(b, 'A', ['prop'], false);
    // *     returns 1: undefined

    var p = '';

    var i=0;
    var record={};
    var pos=-1;

    var indexOf = function (value) {
        for (var i = 0, length=this.length; i < length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    };

    if (!properties_list.indexOf) {
        properties_list.indexOf = indexOf;
    }

    if (typeof class_name === 'string') { // PHP behavior
        class_name = this.window[class_name];
    }

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.aggregateKeys = this.php_js.aggregateKeys || [];
    this.php_js.aggregateRecords = this.php_js.aggregateRecords || []; // Needed to allow deaggregate() and aggregate_info()
    this.php_js.aggregateClasses = this.php_js.aggregateClasses || [];
    var getFuncName = fn => {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
        if (!name) {
            return '(Anonymous)';
        }
        return name[1];
    };
    // END REDUNDANT
    this.php_js.aggregateClasses.push(getFuncName(class_name));

    if (exclude) {
        for (p in class_name) {
            if (!(p in obj) &&
                    typeof class_name[p] !== 'function' &&
                        p[0] !== '_' &&
                            properties_list.indexOf(p) === -1) { // Static (non-private) class properties
                obj[p] = class_name[p];
                record[p] = class_name[p];
            }
        }
        for (p in class_name.prototype) {
            if (!(p in obj) &&
                    typeof class_name.prototype[p] !== 'function' &&
                        p[0] !== '_' &&
                            properties_list.indexOf(p) === -1) { // Prototype (non-private) default properties
                obj[p] = class_name.prototype[p];
                record[p] = class_name.prototype[p];
            }
        }
    } else {
        for (i=0; i < properties_list.length; i++) {
            p = properties_list[i];
            if (!(p in obj) &&
                    p in class_name &&
                        p[0] !== '_' &&
                            typeof class_name.prototype[p] !== 'function') { // Static (non-private) class properties
                obj[p] = class_name[p];
                record[p] = class_name[p];
            } else if (!(p in obj) &&
                    p in class_name.prototype &&
                        p[0] !== '_' &&
                            typeof class_name.prototype[p] !== 'function') { // Prototype (non-private) default properties
                obj[p] = class_name.prototype[p];
                record[p] = class_name.prototype[p];
            }
        }
    }
    if (!this.php_js.aggregateKeys.indexOf) {
        this.php_js.aggregateKeys.indexOf = indexOf;
    }
    pos = this.php_js.aggregateKeys.indexOf(obj);
    if (pos !== -1) {
        this.php_js.aggregateRecords[pos].push(record);
        this.php_js.aggregateClasses[pos].push(getFuncName(class_name));
    } else {
        this.php_js.aggregateKeys.push(obj);
        this.php_js.aggregateRecords.push([record]);
        this.php_js.aggregateClasses[0] = [];
        this.php_js.aggregateClasses[0].push(getFuncName(class_name));
    }
};

exports.aggregate_properties_by_regexp = function (obj, class_name, regexp, exclude) {
    // !No description available for aggregate_properties_by_regexp. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/aggregate_properties_by_regexp
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: We can't copy instance properties, as those require instantiation (with potential side-effects when called)
    // %          note 1: We've chosen not to assign to or create a prototype object on the destination object even if the original object had the properties on its prototype
    // *     example 1: \php.var A = function () {};
    // *     example 1: A.prototype.prop = 10;
    // *     example 1: \php.var b = {};
    // *     example 1: \php.aggregate_properties_by_regexp(b, 'A', /^pr/, false);
    // *     returns 1: undefined

    var p = '';

    var test=false;
    var record={};
    var pos=-1;

    var indexOf = function (value) {
        for (var i = 0, length=this.length; i < length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    };

    if (typeof regexp === 'string') { // If passing the regular expression as a string, note that this behavior may change in the future as we seek to implement PHP-style regexp (e.g., delimiteres and modifier flags within the string)
        regexp = eval(regexp);
    }

    if (typeof class_name === 'string') { // PHP behavior
        class_name = this.window[class_name];
    }

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.aggregateKeys = this.php_js.aggregateKeys || [];
    this.php_js.aggregateRecords = this.php_js.aggregateRecords || []; // Needed to allow deaggregate() and aggregate_info()
    this.php_js.aggregateClasses = this.php_js.aggregateClasses || [];
    var getFuncName = fn => {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
        if (!name) {
            return '(Anonymous)';
        }
        return name[1];
    };
    // END REDUNDANT

    for (p in class_name) {
        test = exclude ? p.search(regexp) === -1 : p.search(regexp) !== -1;
        if (!(p in obj) &&
                typeof class_name[p] !== 'function' &&
                    p[0] !== '_' &&
                        test) { // Static (non-private) class properties
            obj[p] = class_name[p];
            record[p] = class_name[p];
        }
    }
    for (p in class_name.prototype) {
        test = exclude ? p.search(regexp) === -1 : p.search(regexp) !== -1;
        if (!(p in obj) &&
                typeof class_name.prototype[p] !== 'function' &&
                    p[0] !== '_' &&
                        test) { // Prototype (non-private) default properties
            obj[p] = class_name.prototype[p];
            record[p] = class_name.prototype[p];
        }
    }
    if (!this.php_js.aggregateKeys.indexOf) {
        this.php_js.aggregateKeys.indexOf = indexOf;
    }
    pos = this.php_js.aggregateKeys.indexOf(obj);
    if (pos !== -1) {
        this.php_js.aggregateRecords[pos].push(record);
        this.php_js.aggregateClasses[pos].push(getFuncName(class_name));
    } else {
        this.php_js.aggregateKeys.push(obj);
        this.php_js.aggregateRecords.push([record]);
        this.php_js.aggregateClasses[0] = [];
        this.php_js.aggregateClasses[0].push(getFuncName(class_name));
    }
};

exports.aggregation_info = function (obj) {
    // !No description available for aggregation_info. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/aggregation_info
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: aggregate_info
    // *     example 1: \php.var A = function () {};
    // *     example 1: A.prop = 5;
    // *     example 1: A.prototype.someMethod = function () {};
    // *     example 1: \php.var b = {};
    // *     example 1: \php.aggregate(b, 'A');
    // *     example 1: \php.aggregation_info(b);
    // *     returns 1: {'A':{methods:['someMethod'], properties:['prop']}}
    
    return this.aggregate_info(obj);
};

exports.array = function(...args) {
    // !No description available for array. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array
    // +   original by: d3x
    // *     example 1: \php.array('Kevin', 'van', 'Zonneveld');
    // *     returns 1: ['Kevin', 'van', 'Zonneveld']
    return Array.prototype.slice.call(args);
};

exports.array_change_key_case = function (array) {
    // Retuns an array with all string keys lowercased [or uppercased]
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_change_key_case
    // +   original by: Ates Goral (http://magnetiq.com)
    // +   improved by: marrtins
    // *     example 1: \php.array_change_key_case(42);
    // *     returns 1: false
    // *     example 2: \php.array_change_key_case([ 3, 5 ]);
    // *     returns 2: {0: 3, 1: 5}
    // *     example 3: \php.array_change_key_case({ FuBaR: 42 });
    // *     returns 3: {"fubar": 42}
    // *     example 4: \php.array_change_key_case({ FuBaR: 42 }, 'CASE_LOWER');
    // *     returns 4: {"fubar": 42}
    // *     example 5: \php.array_change_key_case({ FuBaR: 42 }, 'CASE_UPPER');
    // *     returns 5: {"FUBAR": 42}
    // *     example 6: \php.array_change_key_case({ FuBaR: 42 }, 2);
    // *     returns 6: {"FUBAR": 42}
    var case_fn;

    var tmp_ar = {};
    var argc = arguments.length;
    var argv = arguments;
    var key;

    if (array instanceof Array) {
        return array;
    }

    if (array instanceof Object) {
        if (argc === 1 || argv[1] === 'CASE_LOWER' || argv[1] === 0){
            case_fn = "toLowerCase";
        } else{
            case_fn = "toUpperCase";
        }
        for (key in array) {
            tmp_ar[key[case_fn]()] = array[key];
        }
        return tmp_ar;
    }

    return false;
};

exports.array_chunk = (input, size) => {
    // Split array into chunks
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_chunk
    // +   original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
    // *     example 1: \php.array_chunk(['Kevin', 'van', 'Zonneveld'], 2);
    // *     returns 1: {0 : {0: 'Kevin', 1: 'van'} , 1 : {0: 'Zonneveld'}}

    for (var x, i = 0, c = -1, l = input.length, n = []; i < l; i++){
        (x = i % size) ? n[c][x] = input[i] : n[++c] = [input[i]];
    }

    return n;
};

exports.array_combine = (keys, values) => {
    // Creates an array by using the elements of the first parameter as keys and the elements of the second as the corresponding values
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_combine
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.array_combine([0,1,2], ['kevin','van','zonneveld']);
    // *     returns 1: {0: 'kevin', 1: 'van', 2: 'zonneveld'}

    var new_array = {};

    var keycount = keys && keys.length;
    var i = 0;

    // input sanitation
    if (typeof keys !== 'object' || typeof values !== 'object' || // Only accept arrays or array-like objects
        typeof keycount !== 'number' || typeof values.length !== 'number' ||
        !keycount){ // Require arrays to have a count
        return false;
    }

    // number of elements does not match
    if (keycount != values.length){
        return false;
    }

    for ( i=0; i < keycount; i++ ){
        new_array[keys[i]] = values[i];
    }

    return new_array;
};

exports.array_count_values = array => {
    // Return the value as key and the frequency of that value in input as value
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_count_values
    // +   original by: Ates Goral (http://magnetiq.com)
    // + namespaced by: Michael White (http://getsprink.com)
    // +      input by: sankai
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   input by: Shingo
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.array_count_values([ 3, 5, 3, "foo", "bar", "foo" ]);
    // *     returns 1: {3:2, 5:1, "foo":2, "bar":1}
    // *     example 2: \php.array_count_values({ p1: 3, p2: 5, p3: 3, p4: "foo", p5: "bar", p6: "foo" });
    // *     returns 2: {3:2, 5:1, "foo":2, "bar":1}
    // *     example 3: \php.array_count_values([ true, 4.2, 42, "fubar" ]);
    // *     returns 3: {42:1, "fubar":1}
    var tmp_arr = {};

    var key = '';
    var t = '';

    var __getType = obj => {
        // Objects are php associative arrays.
        var t = typeof obj;
        t = t.toLowerCase();
        if (t === "object") {
            t = "array";
        }
        return t;
    };

    var __countValue = function (value) {
        switch (typeof(value)) {
            case "number":
                if (Math.floor(value) !== value) {
                    return;
                }
                // Fall-through
            case "string":
                if (value in this && this.hasOwnProperty(value)) {
                    ++this[value];
                } else {
                    this[value] = 1;
                }
        }
    };

    t = __getType(array);
    if (t === 'array') {
        for (key in array) {
            if (array.hasOwnProperty(key)) {
                __countValue.call(tmp_arr, array[key]);
            }
        }
    }
    return tmp_arr;
};

exports.array_diff = function(...args) {
    // Returns the entries of arr1 that have values which are not present in any of the others arguments.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_diff
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Sanjoy Roy
    // +    revised by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.array_diff(['Kevin', 'van', 'Zonneveld'], ['van', 'Zonneveld']);
    // *     returns 1: {0:'Kevin'}
    var arr1 = args[0];

    var retArr = {};
    var k1 = '';
    var i = 1;
    var k = '';
    var arr = {};

    arr1keys:
    for (k1 in arr1) {
        for (i = 1; i < args.length; i++) {
            arr = args[i];
            for (k in arr) {
                if (arr[k] === arr1[k1]) {
                    // If it reaches here, it was found in at least one array, so try next value
                    continue arr1keys;
                }
            }
            retArr[k1] = arr1[k1];
        }
    }

    return retArr;
};

exports.array_diff_assoc = function(...args) {
    // Returns the entries of arr1 that have values which are not present in any of the others arguments but do additional checks whether the keys are equal
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_diff_assoc
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: 0m3r
    // +    revised by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.array_diff_assoc({0: 'Kevin', 1: 'van', 2: 'Zonneveld'}, {0: 'Kevin', 4: 'van', 5: 'Zonneveld'});
    // *     returns 1: {1: 'van', 2: 'Zonneveld'}
    var arr1 = args[0];

    var retArr = {};
    var k1 = '';
    var i = 1;
    var k = '';
    var arr = {};

    arr1keys:
    for (k1 in arr1) {
        for (i = 1; i < args.length; i++) {
            arr = args[i];
            for (k in arr) {
                if (arr[k] === arr1[k1] && k === k1) {
                    // If it reaches here, it was found in at least one array, so try next value
                    continue arr1keys;
                }
            }
            retArr[k1] = arr1[k1];
        }
    }

    return retArr;
};

exports.array_diff_key = function(...args) {
    // Returns the entries of arr1 that have keys which are not present in any of the others arguments. This function is like array_diff() but works on the keys instead of the values. The associativity is preserved.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_diff_key
    // +   original by: Ates Goral (http://magnetiq.com)
    // +    revised by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.array_diff_key({red: 1, green: 2, blue: 3, white: 4}, {red: 5});
    // *     returns 1: {"green":2, "blue":3, "white":4}
    // *     example 2: \php.array_diff_key({red: 1, green: 2, blue: 3, white: 4}, {red: 5}, {red: 5});
    // *     returns 2: {"green":2, "blue":3, "white":4}
    var arr1 = args[0];

    var retArr = {};
    var k1 = '';
    var i = 1;
    var k = '';
    var arr = {};

    arr1keys:
    for (k1 in arr1) {
        for (i = 1; i < args.length; i++) {
            arr = args[i];
            for (k in arr) {
                if (k === k1) {
                    // If it reaches here, it was found in at least one array, so try next value
                    continue arr1keys;
                }
            }
            retArr[k1] = arr1[k1];
        }
    }

    return retArr;
};

exports.array_diff_uassoc = function(...args) {
    // Returns the entries of arr1 that have values which are not present in any of the others arguments but do additional checks whether the keys are equal. Elements are compared by user supplied function.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_diff_uassoc
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
    // *     example 1: $array2 = {a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red'}
    // *     example 1: \php.array_diff_uassoc($array1, $array2, function (key1, key2){ return (key1 == key2 ? 0 : (key1 > key2 ? 1 : -1)); });
    // *     returns 1: {b: 'brown', c: 'blue', 0: 'red'}
    var arr1 = args[0];

    var retArr = {};
    var cb = args[args.length-1];
    var arr = {};
    var i = 1;
    var k1 = '';
    var k = '';
    cb = (typeof cb === 'string') ? this.window[cb] : (cb instanceof Array) ? this.window[cb[0]][cb[1]] : cb;

    arr1keys:
    for (k1 in arr1) {
        for (i=1; i < args.length-1; i++) {
            arr = args[i];
            for (k in arr) {
                if (arr[k] === arr1[k1] && cb(k, k1) === 0) {
                    // If it reaches here, it was found in at least one array, so try next value
                    continue arr1keys;
                }
            }
            retArr[k1] = arr1[k1];
        }
    }

    return retArr;
};

exports.array_diff_ukey = function(...args) {
    // Returns the entries of arr1 that have keys which are not present in any of the others arguments. User supplied function is used for comparing the keys. This function is like array_udiff() but works on the keys instead of the values. The associativity is preserved.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_diff_ukey
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: $array1 = {blue: 1, red: 2, green: 3, purple: 4}
    // *     example 1: $array2 = {green: 5, blue: 6, yellow: 7, cyan: 8}
    // *     example 1: \php.array_diff_ukey($array1, $array2, function (key1, key2){ return (key1 == key2 ? 0 : (key1 > key2 ? 1 : -1)); });
    // *     returns 1: {red: 2, purple: 4}
    var arr1 = args[0];

    var retArr = {};
    var cb = args[args.length-1];
    var arr = {};
    var i = 1;
    var k1 = '';
    var k = '';

    cb = (typeof cb === 'string') ? this.window[cb] : (cb instanceof Array) ? this.window[cb[0]][cb[1]] : cb;

    arr1keys:
    for (k1 in arr1) {
        for (i=1; i < args.length-1; i++) {
            arr = args[i];
            for (k in arr) {
                if (cb(k, k1) === 0) {
                    // If it reaches here, it was found in at least one array, so try next value
                    continue arr1keys;
                }
            }
            retArr[k1] = arr1[k1];
        }
    }

    return retArr;
};

exports.array_fill = (start_index, num, mixed_val) => {
    // Create an array containing num elements starting with index start_key each initialized to val
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_fill
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Waldo Malqui Silva
    // *     example 1: \php.array_fill(5, 6, 'banana');
    // *     returns 1: { 5: 'banana', 6: 'banana', 7: 'banana', 8: 'banana', 9: 'banana', 10: 'banana' }
    var key;

    var tmp_arr = {};

    if ( !isNaN( start_index ) && !isNaN( num ) ) {
        for (key = 0; key < num; key++) {
            tmp_arr[(key+start_index)] = mixed_val;
        }
    }

    return tmp_arr;
};

exports.array_fill_keys = (keys, value) => {
    // Create an array using the elements of the first parameter as keys each initialized to val
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_fill_keys
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.keys = {'a': 'foo', 2: 5, 3: 10, 4: 'bar'}
    // *     example 1: \php.array_fill_keys(keys, 'banana')
    // *     returns 1: {"foo": "banana", 5: "banana", 10: "banana", "bar": "banana"}

    var retObj = {};

    var key = '';

    for (key in keys) {
        retObj[keys[key]] = value;
    }

    return retObj;
};

exports.array_filter = (arr, func) => {
    // Filters elements from the array via the callback.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_filter
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Takes a function as an argument, not a function's name
    // *     example 1: \php.var odd = function (num) {return (num & 1);};
    // *     example 1: \php.array_filter({"a": 1, "b": 2, "c": 3, "d": 4, "e": 5}, odd);
    // *     returns 1: {"a": 1, "c": 3, "e": 5}
    // *     example 2: \php.var even = function (num) {return (!(num & 1));}
    // *     example 2: \php.array_filter([6, 7, 8, 9, 10, 11, 12], even);
    // *     returns 2: {0: 6, 2: 8, 4: 10, 6: 12}

    var retObj = {};

    var k;

    for (k in arr) {
        if (func(arr[k])) {
            retObj[k] = arr[k];
        }
    }

    return retObj;
};

exports.array_flip = trans => {
    // Return array with key <-> value flipped
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_flip
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: \php.array_flip( {a: 1, b: 1, c: 2} );
    // *     returns 1: {1: 'b', 2: 'c'}
    var key;

    var tmp_ar = {};

    for (key in trans) {
        tmp_ar[trans[key]] = key;
    }

    return tmp_ar;
};

exports.array_intersect = function(...args) {
    // Returns the entries of arr1 that have values which are present in all the other arguments
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_intersect
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: These only output associative arrays (would need to be
    // %        note 1: all numeric and counting from zero to be numeric)
    // *     example 1: $array1 = {'a' : 'green', 0:'red', 1: 'blue'};
    // *     example 1: $array2 = {'b' : 'green', 0:'yellow', 1:'red'};
    // *     example 1: $array3 = ['green', 'red'];
    // *     example 1: $result = array_intersect($array1, $array2, $array3);
    // *     returns 1: {0: 'red', a: 'green'}
    var arr1 = args[0];

    var retArr = {};
    var k1 = '';
    var arr = {};
    var i = 0;
    var k = '';

    arr1keys:
    for (k1 in arr1) {
        arrs:
        for (i=1; i < args.length; i++) {
            arr = args[i];
            for (k in arr) {
                if (arr[k] === arr1[k1]) {
                    if (i === args.length-1) {
                        retArr[k1] = arr1[k1];
                    }
                    // If the innermost loop always leads at least once to an equal value, continue the loop until done
                    continue arrs;
                }
            }
            // If it reaches here, it wasn't found in at least one array, so try next value
            continue arr1keys;
        }
    }

    return retArr;
};

exports.array_intersect_assoc = function(...args) {
    // Returns the entries of arr1 that have values which are present in all the other arguments. Keys are used to do more restrictive check
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_intersect_assoc
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: These only output associative arrays (would need to be
    // %        note 1: all numeric and counting from zero to be numeric)
    // *     example 1: $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
    // *     example 1: $array2 = {a: 'green', 0: 'yellow', 1: 'red'}
    // *     example 1: \php.array_intersect_assoc($array1, $array2)
    // *     returns 1: {a: 'green'}
    var arr1 = args[0];

    var retArr = {};
    var k1 = '';
    var arr = {};
    var i = 0;
    var k = '';

    arr1keys:
    for (k1 in arr1) {
        arrs:
        for (i=1; i < args.length; i++) {
            arr = args[i];
            for (k in arr) {
                if (arr[k] === arr1[k1] && k === k1) {
                    if (i === args.length-1) {
                        retArr[k1] = arr1[k1];
                    }
                    // If the innermost loop always leads at least once to an equal value, continue the loop until done
                    continue arrs;
                }
            }
            // If it reaches here, it wasn't found in at least one array, so try next value
            continue arr1keys;
        }
    }

    return retArr;
};

exports.array_intersect_key = function(...args) {
    // Returns the entries of arr1 that have keys which are present in all the other arguments. Kind of equivalent to array_diff(array_keys($arr1), array_keys($arr2)[,array_keys(...)]). Equivalent of array_intersect_assoc() but does not do compare of the data.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_intersect_key
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: These only output associative arrays (would need to be
    // %        note 1: all numeric and counting from zero to be numeric)
    // *     example 1: $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
    // *     example 1: $array2 = {a: 'green', 0: 'yellow', 1: 'red'}
    // *     example 1: \php.array_intersect_key($array1, $array2)
    // *     returns 1: {0: 'red', a: 'green'}
    var arr1 = args[0];

    var retArr = {};
    var k1 = '';
    var arr = {};
    var i = 0;
    var k = '';

    arr1keys:
    for (k1 in arr1) {
        arrs:
        for (i=1; i < args.length; i++) {
            arr = args[i];
            for (k in arr) {
                if (k === k1) {
                    if (i === args.length-1) {
                        retArr[k1] = arr1[k1];
                    }
                    // If the innermost loop always leads at least once to an equal value, continue the loop until done
                    continue arrs;
                }
            }
            // If it reaches here, it wasn't found in at least one array, so try next value
            continue arr1keys;
        }
    }

    return retArr;
};

exports.array_intersect_uassoc = function(...args) {
    // Returns the entries of arr1 that have values which are present in all the other arguments. Keys are used to do more restrictive check and they are compared by using an user-supplied callback.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_intersect_uassoc
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
    // *     example 1: $array2 = {a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red'}
    // *     example 1: \php.array_intersect_uassoc($array1, $array2, function (f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 == string2) return 0; return -1;});
    // *     returns 1: {b: 'brown'}
    var arr1 = args[0];

    var retArr = {};
    var cb = args[args.length-1];
    var k1 = '';
    var i = 1;
    var arr = {};
    var k = '';

    cb = (typeof cb === 'string') ? this.window[cb] : (cb instanceof Array) ? this.window[cb[0]][cb[1]] : cb;

    arr1keys:
    for (k1 in arr1) {
        arrs:
        for (i = 1; i < args.length-1; i++) {
            arr = args[i];
            for (k in arr) {
                if (arr[k] === arr1[k1] && cb(k, k1) === 0 ) {
                    if (i === args.length-2) {
                        retArr[k1] = arr1[k1];
                    }
                    // If the innermost loop always leads at least once to an equal value, continue the loop until done
                    continue arrs;
                }
            }
            // If it reaches here, it wasn't found in at least one array, so try next value
            continue arr1keys;
        }
    }

    return retArr;
};

exports.array_intersect_ukey = function(...args) {
    // Returns the entries of arr1 that have keys which are present in all the other arguments. Kind of equivalent to array_diff(array_keys($arr1), array_keys($arr2)[,array_keys(...)]). The comparison of the keys is performed by a user supplied function. Equivalent of array_intersect_uassoc() but does not do compare of the data.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_intersect_ukey
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: $array1 = {blue: 1, red: 2, green: 3, purple: 4}
    // *     example 1: $array2 = {green: 5, blue: 6, yellow: 7, cyan: 8}
    // *     example 1: \php.array_intersect_ukey ($array1, $array2, function (key1, key2){ return (key1 == key2 ? 0 : (key1 > key2 ? 1 : -1)); });
    // *     returns 1: {blue: 1, green: 3}
    var arr1 = args[0];

    var retArr = {};
    var cb = args[args.length-1];
    var k1 = '';
    var i = 1;
    var arr = {};
    var k = '';

    cb = (typeof cb === 'string') ? this.window[cb] : (cb instanceof Array) ? this.window[cb[0]][cb[1]] : cb;

    arr1keys:
    for (k1 in arr1) {
        arrs:
        for (i = 1; i < args.length-1; i++) {
            arr = args[i];
            for (k in arr) {
                if (cb(k, k1) === 0 ) {
                    if (i === args.length-2) {
                        retArr[k1] = arr1[k1];
                    }
                    // If the innermost loop always leads at least once to an equal value, continue the loop until done
                    continue arrs;
                }
            }
            // If it reaches here, it wasn't found in at least one array, so try next value
            continue arr1keys;
        }
    }

    return retArr;
};

exports.array_key_exists = (key, search) => {
    // Checks if the given key or index exists in the array
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_key_exists
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Felix Geisendoerfer (http://www.debuggable.com/felix)
    // *     example 1: \php.array_key_exists('kevin', {'kevin': 'van Zonneveld'});
    // *     returns 1: true
    // input sanitation
    if (!search || (search.constructor !== Array && search.constructor !== Object)){
        return false;
    }

    return key in search;
};

exports.array_keys = (input, search_value, argStrict) => {
    // Return just the keys from the input array, optionally only for the specified search_value
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_keys
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: \php.array_keys( {firstname: 'Kevin', surname: 'van Zonneveld'} );
    // *     returns 1: {0: 'firstname', 1: 'surname'}

    var tmp_arr = {};

    var strict = !!argStrict;
    var include = true;
    var cnt = 0;
    var key = '';

    for (key in input) {
        include = true;
        if (search_value != undefined) {
            if (strict && input[key] !== search_value){
                include = false;
            } else if (input[key] != search_value){
                include = false;
            }
        }

        if (include) {
            tmp_arr[cnt] = key;
            cnt++;
        }
    }

    return tmp_arr;
};

exports.array_map = function (callback) {
    // Applies the callback to the elements in given arrays.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_map
    // +   original by: Andrea Giammarchi (http://webreflection.blogspot.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Takes a function as an argument, not a function's name
    // %        note 2: If the callback is a string, it can only work if the function name is in the global context
    // *     example 1: \php.array_map( function (a){return (a * a * a)}, [1, 2, 3, 4, 5] );
    // *     returns 1: [ 1, 8, 27, 64, 125 ]
    var argc = arguments.length;

    var argv = arguments;
    var j = argv[1].length;
    var i = 0;
    var k = 1;
    var m = 0;
    var tmp = [];
    var tmp_ar = [];

    while (i < j) {
        while (k < argc){
            tmp[m++] = argv[k++][i];
        }

        m = 0;
        k = 1;

        if (callback){
            if (typeof callback === 'string') {
                callback = this.window[callback];
            }
            tmp_ar[i++] = callback(...tmp);
        } else {
            tmp_ar[i++] = tmp;
        }

        tmp = [];
    }

    return tmp_ar;
};

exports.array_merge = function () {
    // Merges elements from passed arrays into one array
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_merge
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Nate
    // +   input by: josh
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.arr1 = {"color": "red", 0: 2, 1: 4}
    // *     example 1: \php.arr2 = {0: "a", 1: "b", "color": "green", "shape": "trapezoid", 2: 4}
    // *     example 1: \php.array_merge(arr1, arr2)
    // *     returns 1: {"color": "green", 0: 2, 1: 4, 2: "a", 3: "b", "shape": "trapezoid", 4: 4}
    // *     example 2: \php.arr1 = []
    // *     example 2: \php.arr2 = {1: "data"}
    // *     example 2: \php.array_merge(arr1, arr2)
    // *     returns 2: {0: "data"}

    var args = Array.prototype.slice.call(arguments);

    var retObj = {};
    var k;
    var j = 0;
    var i = 0;
    var retArr = true;

    for (i=0; i < args.length; i++) {
        if (!(args[i] instanceof Array)) {
            retArr=false;
            break;
        }
    }

    if (retArr) {
        retArr = [];
        for (i=0; i < args.length; i++) {
            retArr = retArr.concat(args[i]);
        }
        return retArr;
    }
    var ct = 0;

    for (i=0, ct=0; i < args.length; i++) {
        if (args[i] instanceof Array) {
            for (j=0; j < args[i].length; j++) {
                retObj[ct++] = args[i][j];
            }
        } else {
            for (k in args[i]) {
                if (args[i].hasOwnProperty(k)) {
                    if (parseInt(k, 10)+'' === k) {
                        retObj[ct++] = args[i][k];
                    } else {
                        retObj[k] = args[i][k];
                    }
                }
            }
        }
    }
    return retObj;
};

exports.array_merge_recursive = function (arr1, arr2){
    // Recursively merges elements from passed arrays into one array
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_merge_recursive
    // +   original by: Subhasis Deb
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: array_merge
    // *     example 1: \php.arr1 = {'color': {'favourite': 'read'}, 0: 5}
    // *     example 1: \php.arr2 = {0: 10, 'color': {'favorite': 'green', 0: 'blue'}}
    // *     example 1: \php.array_merge_recursive(arr1, arr2)
    // *     returns 1: {'color': {'favorite': {0: 'red', 1: 'green'}, 0: 'blue'}, 1: 5, 1: 10}
    var idx = '';

    if ((arr1 && (arr1 instanceof Array)) && (arr2 && (arr2 instanceof Array))) {
        for (idx in arr2) {
            arr1.push(arr2[idx]);
        }
    } else if ((arr1 && (arr1 instanceof Object)) && (arr2 && (arr2 instanceof Object))) {
        for (idx in arr2) {
            if (idx in arr1) {
                if (typeof arr1[idx] == 'object' && typeof arr2 == 'object') {
                    arr1[idx] = this.array_merge(arr1[idx], arr2[idx]);
                } else {
                    arr1[idx] = arr2[idx];
                }
            } else {
                arr1[idx] = arr2[idx];
            }
        }
    }

    return arr1;
};

exports.array_multisort = function (arr) {
    // +   original by: Theriault
    // *     example 1: \php.array_multisort([1, 2, 1, 2, 1, 2], [1, 2, 3, 4, 5, 6]);
    // *     returns 1: true
    // *     example 2: \php.characters = {A: 'Edward', B: 'Locke', C: 'Sabin', D: 'Terra', E: 'Edward'};
    // *     example 2: \php.jobs = {A: 'Warrior', B: 'Thief', C: 'Monk', D: 'Mage', E: 'Knight'};
    // *     example 2: \php.array_multisort(characters, 'SORT_DESC', 'SORT_STRING', jobs, 'SORT_ASC', 'SORT_STRING');
    // *     returns 2: true
    // *     results 2: characters == {D: 'Terra', C: 'Sabin', B: 'Locke', E: 'Edward', A: 'Edward'};
    // *     results 2: jobs == {D: 'Mage', C: 'Monk', B: 'Thief', E: 'Knight', A: 'Warrior'};
    // *     example 3: \php.lastnames = [ 'Carter','Adams','Monroe','Tyler','Madison','Kennedy','Adams'];
    // *     example 3: \php.firstnames = ['James', 'John' ,'James', 'John', 'James',  'John',   'John'];
    // *     example 3: \php.president = [ 39,      6,      5,       10,     4,       35,        2    ];
    // *     example 3: \php.array_multisort(firstnames, 'SORT_DESC', 'SORT_STRING', lastnames, 'SORT_ASC', 'SORT_STRING', president, 'SORT_NUMERIC');
    // *     returns 3: true
    // *     results 3: firstnames == ['John', 'John', 'John',   'John', 'James', 'James',  'James'];
    // *     results 3: lastnames ==  ['Adams','Adams','Kennedy','Tyler','Carter','Madison','Monroe'];
    // *     results 3: president ==  [2,      6,      35,       10,     39,       4,       5];
    // Fix: this function must be fixed like asort(), etc., to return a (shallow) copy by default, since IE does not support!

    // VARIABLE DESCRIPTIONS
    //
    // flags: Translation table for sort arguments. Each argument turns on certain bits in the flag byte through addition.
    //        bits:    HGFE DCBA
    //        bit A: Only turned on if SORT_NUMERIC was an argument.
    //        bit B: Only turned on if SORT_STRING was an argument.
    //        bit C: Reserved bit for SORT_ASC; not turned on.
    //        bit D: Only turned on if SORT_DESC was an argument.
    //        bit E: Turned on if either SORT_REGULAR, SORT_NUMERIC, or SORT_STRING was an argument. If already turned on, function would return FALSE like in PHP.
    //        bit F: Turned on if either SORT_ASC or SORT_DESC was an argument. If already turned on, function would return FALSE like in PHP.
    //        bit G and H: (Unused)
    //
    // sortFlag: Holds sort flag byte of every array argument.
    //
    // sortArrs: Holds the values of array arguments.
    //
    // sortKeys: Holds the keys of object arguments.
    //
    // nLastSort: Holds a copy of the current lastSort so that the lastSort is not destroyed
    //
    // nLastSort: Holds a copy of the current lastSort so that the lastSort is not destroyed
    //
    // args: Holds pointer to arguments for reassignment
    //
    // lastSort: Holds the last Javascript sort pattern to duplicate the sort for the last sortComponent.
    //
    // lastSorts: Holds the lastSort for each sortComponent to duplicate the sort of each component on each array.
    //
    // tmpArray: Holds a copy of the last sortComponent's array elements to reiterate over the array
    //
    // elIndex: Holds the index of the last sortComponent's array elements to reiterate over the array
    //
    // sortDuplicator: Function for duplicating previous sort.
    //
    // sortRegularASC: Function for sorting regular, ascending.
    //
    // sortRegularDESC: Function for sorting regular, descending.
    //
    // thingsToSort: Holds a bit that indicates which indexes in the arrays can be sorted. Updated after every array is sorted.
    var flags = {'SORT_REGULAR': 16, 'SORT_NUMERIC': 17, 'SORT_STRING': 18, 'SORT_ASC': 32, 'SORT_DESC': 40};

    var sortArrs = [[]];
    var sortFlag = [0];
    var sortKeys = [[]];
    var g = 0;
    var i = 0;
    var j = 0;
    var k = '';
    var l = 0;
    var thingsToSort = [];
    var vkey = 0;
    var zlast = null;
    var args = arguments;
    var nLastSort = [];
    var lastSort = [];
    var lastSorts = [];
    var tmpArray = [];
    var elIndex = 0;
    var sortDuplicator = (a, b) => nLastSort.shift();
    var sortFunctions = [[(a, b) => {
        lastSort.push(a > b ? 1 : (a < b ? -1 : 0));
        return a > b ? 1 : (a < b ? -1 : 0);
    }, (a, b) => {
        lastSort.push(b > a ? 1 : (b < a ? -1 : 0));
        return b > a ? 1 : (b < a ? -1 : 0);
    }], [(a, b) => {
        lastSort.push(a - b);
        return a - b;
    }, (a, b) => {
        lastSort.push(b - a);
        return b - a;
    }], [(a, b) => {
        lastSort.push((a + '') > (b + '') ? 1 : ((a + '') < (b + '') ? -1 : 0));
        return (a + '') > (b + '') ? 1 : ((a + '') < (b + '') ? -1 : 0);
    }, (a, b) => {
        lastSort.push((b + '') > (a + '') ? 1 : ((b + '') < (a + '') ? -1 : 0));
        return (b + '') > (a + '') ? 1 : ((b + '') < (a + '') ? -1 : 0);
    }]];

    // Store first argument into sortArrs and sortKeys if an Object.
    // First Argument should be either a Javascript Array or an Object, otherwise function would return FALSE like in PHP
    if (arr instanceof Array) {
        sortArrs[0] = arr;
    }
    else if (arr instanceof Object) {
        for (i in arr) {
            if (arr.hasOwnProperty(i)) {
                sortKeys[0].push(i);
                sortArrs[0].push(arr[i]);
            }
        }
    }
    else {
        return false;
    }


    // arrMainLength: Holds the length of the first array. All other arrays must be of equal length, otherwise function would return FALSE like in PHP
    //
    // sortComponents: Holds 2 indexes per every section of the array that can be sorted. As this is the start, the whole array can be sorted.
    var arrMainLength = sortArrs[0].length;

    var sortComponents = [0, arrMainLength];

    // Loop through all other arguments, checking lengths and sort flags of arrays and adding them to the above variables.
    for (j = 1; j < arguments.length; j++) {
        if (arguments[j] instanceof Array) {
            sortArrs[j] = arguments[j];
            sortFlag[j] = 0;
            if (arguments[j].length !== arrMainLength) {
                return false;
            }
        } else if (arguments[j] instanceof Object) {
            sortKeys[j] = [];
            sortArrs[j] = [];
            sortFlag[j] = 0;
            for (i in arguments[j]) {
                if (arguments[j].hasOwnProperty(i)) {
                    sortKeys[j].push(i);
                    sortArrs[j].push(arguments[j][i]);
                }
            }
            if (sortArrs[j].length !== arrMainLength) {
                return false;
            }
        } else if (typeof arguments[j] === 'string') {
            var lFlag = sortFlag.pop();
            if (typeof flags[arguments[j]] === 'undefined' || ((((flags[arguments[j]]) >>> 4) & (lFlag >>> 4)) > 0)) { // Keep extra parentheses around latter flags check to avoid minimization leading to CDATA closer
                return false;
            }
            sortFlag.push(lFlag + flags[arguments[j]]);
        } else {
            return false;
        }
    }


    for (i = 0; i !== arrMainLength; i++) {
        thingsToSort.push(true);
    }

    // Sort all the arrays....
    for (i in sortArrs) {
        if (sortArrs.hasOwnProperty(i)) {
            lastSorts = [];
            tmpArray = [];
            elIndex = 0;
            nLastSort = [];
            lastSort = [];

            // If ther are no sortComponents, then no more sorting is neeeded. Copy the array back to the argument.
            if (sortComponents.length === 0) {
                if (arguments[i] instanceof Array) {
                    args[i] = sortArrs[i];
                }
                else {
                    for (k in arguments[i]) {
                        if (arguments[i].hasOwnProperty(k)) {
                            delete arguments[i][k];
                        }
                    }
                    for (j = 0, vkey = 0; j < sortArrs[i].length; j++) {
                        vkey = sortKeys[i][j];
                        args[i][vkey] = sortArrs[i][j];
                    }
                }
                delete sortArrs[i];
                delete sortKeys[i];
                continue;
            }

            // Sort function for sorting. Either sorts asc or desc, regular/string or numeric.
            var sFunction = sortFunctions[(sortFlag[i] & 3)][((sortFlag[i] & 8) > 0) ? 1 : 0];

            // Sort current array.
            for (l = 0; l !== sortComponents.length; l += 2) {
                tmpArray = sortArrs[i].slice(sortComponents[l], sortComponents[l + 1] + 1);
                tmpArray.sort(sFunction);
                lastSorts[l] = [].concat(lastSort); // Is there a better way to copy an array in Javascript?
                elIndex = sortComponents[l];
                for (g in tmpArray) {
                    if (tmpArray.hasOwnProperty(g)) {
                        sortArrs[i][elIndex] = tmpArray[g];
                        elIndex++;
                    }
                }
            }

            // Duplicate the sorting of the current array on future arrays.
            sFunction = sortDuplicator;
            for (j in sortArrs) {
                if (sortArrs.hasOwnProperty(j)) {
                    if (sortArrs[j] === sortArrs[i]) {
                        continue;
                    }
                    for (l = 0; l !== sortComponents.length; l += 2) {
                        tmpArray = sortArrs[j].slice(sortComponents[l], sortComponents[l + 1] + 1);
                        nLastSort = [].concat(lastSorts[l]); // alert(l + ':' + nLastSort);
                        tmpArray.sort(sFunction);
                        elIndex = sortComponents[l];
                        for (g in tmpArray) {
                            if (tmpArray.hasOwnProperty(g)) {
                                sortArrs[j][elIndex] = tmpArray[g];
                                elIndex++;
                            }
                        }
                    }
                }
            }

            // Duplicate the sorting of the current array on array keys
            for (j in sortKeys) {
                if (sortKeys.hasOwnProperty(j)) {
                    for (l = 0; l !== sortComponents.length; l += 2) {
                        tmpArray = sortKeys[j].slice(sortComponents[l], sortComponents[l + 1] + 1);
                        nLastSort = [].concat(lastSorts[l]);
                        tmpArray.sort(sFunction);
                        elIndex = sortComponents[l];
                        for (g in tmpArray) {
                            if (tmpArray.hasOwnProperty(g)) {
                                sortKeys[j][elIndex] = tmpArray[g];
                                elIndex++;
                            }
                        }
                    }
                }
            }

            // Generate the next sortComponents
            zlast = null;
            sortComponents = [];
            for (j in sortArrs[i]) {
                if (sortArrs[i].hasOwnProperty(j)) {
                    if (!thingsToSort[j]) {
                        if ((sortComponents.length & 1)) {
                            sortComponents.push(j - 1);
                        }
                        zlast = null;
                        continue;
                    }
                    if (!(sortComponents.length & 1)) {
                        if (zlast !== null) {
                            if (sortArrs[i][j] === zlast) {
                                sortComponents.push(j - 1);
                            }
                            else {
                                thingsToSort[j] = false;
                            }
                        }
                        zlast = sortArrs[i][j];
                    } else {
                        if (sortArrs[i][j] !== zlast) {
                            sortComponents.push(j - 1);
                            zlast = sortArrs[i][j];
                        }
                    }
                }
            }

            if (sortComponents.length & 1) {
                sortComponents.push(j);
            }
            if (arguments[i] instanceof Array) {
                args[i] = sortArrs[i];
            }
            else {
                for (j in arguments[i]) {
                    if (arguments[i].hasOwnProperty(j)) {
                        delete arguments[i][j];
                    }
                }
                for (j = 0, vkey = 0; j < sortArrs[i].length; j++) {
                    vkey = sortKeys[i][j];
                    args[i][vkey] = sortArrs[i][j];
                }

            }
            delete sortArrs[i];
            delete sortKeys[i];
        }
    }
    return true;
};

exports.array_pad = (input, pad_size, pad_value) => {
    // Returns a copy of input array padded with pad_value to size pad_size
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_pad
    // +   original by: Waldo Malqui Silva
    // *     example 1: \php.array_pad([ 7, 8, 9 ], 2, 'a');
    // *     returns 1: [ 7, 8, 9]
    // *     example 2: \php.array_pad([ 7, 8, 9 ], 5, 'a');
    // *     returns 2: [ 7, 8, 9, 'a', 'a']
    // *     example 3: \php.array_pad([ 7, 8, 9 ], 5, 2);
    // *     returns 3: [ 7, 8, 9, 2, 2]
    // *     example 4: \php.array_pad([ 7, 8, 9 ], -5, 'a');
    // *     returns 4: [ 'a', 'a', 7, 8, 9 ]
    var pad = [];

    var newArray = [];
    var newLength;
    var i=0;

    if ( input instanceof Array && !isNaN( pad_size ) ) {
        newLength = ( ( pad_size < 0 ) ? ( pad_size * -1 ) : pad_size );
        if ( newLength > input.length ) {
            for ( i = 0; i < ( newLength - input.length ); i++ ) { newArray [ i ] = pad_value; }
            pad = ( ( pad_size < 0 ) ? newArray.concat( input ) : input.concat( newArray ) );
        } else {
            pad = input;
        }
    }

    return pad;
};

exports.array_pop = inputArr => {
    // Pops an element off the end of the array
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_pop
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +   input by: Theriault
    // %        note 1: While IE (and other browsers) support iterating an object's
    // %        note 1: own properties in order, if one attempts to add back properties
    // %        note 1: in IE, they may end up in their former position due to their position
    // %        note 1: being retained. So use of this function with "associative arrays"
    // %        note 1: (objects) may lead to unexpected behavior in an IE environment if
    // %        note 1: you add back properties with the same keys that you removed
    // *     example 1: \php.array_pop([0,1,2]);
    // *     returns 1: 2
    // *     example 2: \php.data = {firstName: 'Kevin', surName: 'van Zonneveld'};
    // *     example 2: \php.lastElem = array_pop(data);
    // *     returns 2: 'van Zonneveld'
    // *     results 2: data == {firstName: 'Kevin'}
    var key = '';

    var lastKey = '';

    if (inputArr.hasOwnProperty('length')) {
        // Indexed
        if (!inputArr.length){
            // Done popping, are we?
            return null;
        }
        return inputArr.pop();
    } else {
        // Associative
        for (key in inputArr) {
            if (inputArr.hasOwnProperty(key)) {
                lastKey = key;
            }
        }
        if (lastKey) {
            var tmp = inputArr[lastKey];
            delete(inputArr[lastKey]);
            return tmp;
        } else {
            return null;
        }
    }
};

exports.array_product = input => {
    // Returns the product of the array entries
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_product
    // +   original by: Waldo Malqui Silva
    // *     example 1: \php.array_product([ 2, 4, 6, 8 ]);
    // *     returns 1: 384
    var Index = 0;

    var product = 1;
    if ( input instanceof Array ) {
        while ( Index < input.length ) {
            product *= ( !isNaN( input [ Index ] ) ? input [ Index ] : 0 );
            Index++;
        }
    } else {
        product = null;
    }

    return product;
};

exports.array_push = function ( inputArr ) {
    // Pushes elements onto the end of the array
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_push
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Note also that IE retains information about property position even
    // %        note 1: after being supposedly deleted, so if you delete properties and then
    // %        note 1: add back properties with the same keys (including numeric) that had
    // %        note 1: been deleted, the order will be as before; thus, this function is not
    // %        note 1: really recommended with associative arrays (objects) in IE environments
    // *     example 1: \php.array_push(['kevin','van'], 'zonneveld');
    // *     returns 1: 3
    var i=0;

    var pr = '';
    var argv = arguments;
    var argc = argv.length;
    var allDigits = /^\d$/;
    var size = 0;
    var highestIdx = 0;
    var len = 0;
    if (inputArr.hasOwnProperty('length')) {
        for (i=1; i < argc; i++){
            inputArr[inputArr.length] = argv[i];
        }
        return inputArr.length;
    }

    // Associative (object)
    for (pr in inputArr) {
        if (inputArr.hasOwnProperty(pr)) {
            ++len;
            if (pr.search(allDigits) !== -1) {
                size = parseInt(pr, 10);
                highestIdx = size > highestIdx ? size : highestIdx;
            }
        }
    }
    for (i=1; i < argc; i++){
        inputArr[++highestIdx] = argv[i];
    }
    return len + i - 1;
};

exports.array_rand = (input, num_req) => {
    // Return key/keys for random entry/entries in the array
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_rand
    // +   original by: Waldo Malqui Silva
    // *     example 1: \php.array_rand( ['Kevin'], 1 );
    // *     returns 1: 0
    var indexes = [];
    var ticks = num_req || 1;
    var checkDuplicate = (input, value) => {
        var exist = false;
        var index = 0;
        while ( index < input.length ) {
            if ( input [ index ] === value ) {
                exist = true;
                break;
            }
            index++;
        }
        return exist;
    };

    if ( input instanceof Array && ticks <= input.length ) {
        while ( true ) {
            var rand = Math.floor( ( Math.random( ) * input.length ) );
            if ( indexes.length === ticks ) { break; }
            if ( !checkDuplicate( indexes, rand ) ) { indexes.push( rand ); }
        }
    } else {
        indexes = null;
    }

    return ( ( ticks == 1 ) ? indexes.join( ) : indexes );
};

exports.array_reduce = (a_input, callback) => {
    // Iteratively reduce the array to a single value via the callback.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_reduce
    // +   original by: Alfonso Jimenez (http://www.alfonsojimenez.com)
    // %        note 1: Takes a function as an argument, not a function's name
    // *     example 1: \php.array_reduce([1, 2, 3, 4, 5], function (v, w){v += w;return v;});
    // *     returns 1: 15

    var lon = a_input.length;
    var res = 0;
    var i = 0;
    var tmp = [];


    for (i = 0; i < lon; i+=2) {
        tmp[0] = a_input[i];
        if (a_input[(i+1)]) {
            tmp[1] = a_input[(i+1)];
        } else {
            tmp[1] = 0;
        }
        res+= callback(...tmp);
        tmp = [];
    }

    return res;
};

exports.array_replace = function (arr) {
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.array_replace(["orange", "banana", "apple", "raspberry"], {0 : "pineapple", 4 : "cherry"}, {0:"grape"});
    // *     returns 1: {0: 'grape', 1: 'banana', 2: 'apple', 3: 'raspberry', 4: 'cherry'}

    if (arguments.length < 2) {
        throw new Error('There should be at least 2 arguments passed to array_replace()');
    }

    // Although docs state that the arguments are passed in by reference, it seems they are not altered, but rather the copy that is returned (just guessing), so we make a copy here, instead of acting on arr itself
    var retObj = {};
    for (var prop in arr) {
        retObj[prop] = arr[prop];
    }

    for (var i = 1; i < arguments.length; i++) {
        for (var p in arguments[i]) {
            retObj[p] = arguments[i][p];
        }
    }
    return retObj;
};

exports.array_replace_recursive = function (arr) {
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.array_replace_recursive({'citrus' : ["orange"], 'berries' : ["blackberry", "raspberry"]}, {'citrus' : ['pineapple'], 'berries' : ['blueberry']});
    // *     returns 1: {citrus : ['pineapple'], berries : ['blueberry', 'raspberry']}

    if (arguments.length < 2) {
        throw new Error('There should be at least 2 arguments passed to array_replace_recursive()');
    }

    // Although docs state that the arguments are passed in by reference, it seems they are not altered, but rather the copy that is returned (just guessing), so we make a copy here, instead of acting on arr itself
    var retObj = {};
    for (var prop in arr) {
        retObj[prop] = arr[prop];
    }

    for (var i = 1; i < arguments.length; i++) {
        for (var p in arguments[i]) {
            if (typeof retObj[p] === 'object' && retObj[p] !== null) {
                retObj[p] = this.array_replace_recursive(retObj[p], arguments[i][p]);
            }
            else {
                retObj[p] = arguments[i][p];
            }
        }
    }
    return retObj;
};

exports.array_reverse = (array, preserve_keys) => {
    // Return input as a new array with the order of the entries reversed
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_reverse
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Karol Kowalski
    // *     example 1: \php.array_reverse( [ 'php', '4.0', ['green', 'red'] ], true);
    // *     returns 1: { 2: ['green', 'red'], 1: 4, 0: 'php'}
    var arr_len = array.length;

    var newkey = 0;
    var tmp_arr = {};
    var key = '';
    preserve_keys = !!preserve_keys;

    for (key in array) {
        newkey = arr_len - key - 1;
        tmp_arr[preserve_keys ? key : newkey] = array[key];
    }

    return tmp_arr;
};

exports.array_search = (needle, haystack, argStrict) => {
    // Searches the array for a given value and returns the corresponding key if successful
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_search
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: \php.array_search('zonneveld', {firstname: 'kevin', middle: 'van', surname: 'zonneveld'});
    // *     returns 1: 'surname'

    var strict = !!argStrict;
    var key = '';

    for (key in haystack) {
        if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
            return key;
        }
    }

    return false;
};

exports.array_shift = inputArr => {
    // Pops an element off the beginning of the array
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_shift
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Martijn Wieringa
    // %        note 1: Currently does not handle objects
    // *     example 1: \php.array_shift(['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: 'Kevin'
    var props = false;

    var shift = undefined;
    var pr = '';
    var allDigits = /^\d$/;
    var int_ct=-1;

    var _checkToUpIndices = (arr, ct, key) => {
        // Deal with situation, e.g., if encounter index 4 and try to set it to 0, but 0 exists later in loop (need to
        // increment all subsequent (skipping current key, since we need its value below) until find unused)
        if (arr[ct] !== undefined) {
            var tmp = ct;
            ct += 1;
            if (ct === key) {
                ct += 1;
            }
            ct = _checkToUpIndices(arr, ct, key);
            arr[ct] = arr[tmp];
            delete arr[tmp];
        }
        return ct;
    };


    if (inputArr.length === 0) {
        return null;
    }
    if (inputArr.length > 0) {
        return inputArr.shift();
    }

    /*
    UNFINISHED FOR HANDLING OBJECTS
    for (pr in inputArr) {
        if (inputArr.hasOwnProperty(pr)) {
            props = true;
            shift = inputArr[pr];
            delete inputArr[pr];
            break;
        }
    }
    for (pr in inputArr) {
        if (inputArr.hasOwnProperty(pr)) {
            if (pr.search(allDigits) !== -1) {
                int_ct += 1;
                if (parseInt(pr, 10) === int_ct) { // Key is already numbered ok, so don't need to change key for value
                    continue;
                }
                _checkToUpIndices(inputArr, int_ct, pr);
                arr[int_ct] = arr[pr];
                delete arr[pr];
            }
        }
    }
    if (!props) {
        return null;
    }
    return shift;
    */
};

exports.array_slice = function (arr, offst, lgth, preserve_keys) {
    // Returns elements specified by offset and length
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_slice
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: is_int
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // %          note: Relies on is_int because !isNaN accepts floats
    // *     example 1: \php.array_slice(["a", "b", "c", "d", "e"], 2, -1);
    // *     returns 1: {0: 'c', 1: 'd'}
    // *     example 2: \php.array_slice(["a", "b", "c", "d", "e"], 2, -1, true);
    // *     returns 2: {2: 'c', 3: 'd'}
    /*
    if ('callee' in arr && 'length' in arr) {
        arr = Array.prototype.slice.call(arr);
    }
    */

    var key = '';

    if (!(arr instanceof Array) || (preserve_keys && offst !== 0)) {
        // Assoc. array as input or if required as output
        var lgt =0;

        var newAssoc = {};
        for (key in arr) {
            //if (key !== 'length') {
            lgt += 1;
            newAssoc[key] = arr[key];
            //}
        }
        arr = newAssoc;

        offst = (offst < 0) ? lgt + offst : offst;
        lgth  = lgth === undefined ? lgt : (lgth < 0) ? lgt + lgth - offst : lgth;

        var assoc = {};
        var start = false;
        var it=-1;
        var arrlgth=0;
        var no_pk_idx=0;
        for (key in arr) {
            ++it;
            if (arrlgth >= lgth) {
                break;
            }
            if (it == offst){
                start = true;
            }
            if (!start) {
                continue;
            }
            ++arrlgth;
            if (this.is_int(key) && !preserve_keys) {
                assoc[no_pk_idx++] = arr[key];
            } else {
                assoc[key] = arr[key];
            }
        }
        //assoc.length = arrlgth; // Make as array-like object (though length will not be dynamic)
        return assoc;
    }

    if (lgth === undefined) {
        return arr.slice(offst);
    } else if (lgth >= 0) {
        return arr.slice(offst, offst + lgth);
    } else {
        return arr.slice(offst, lgth);
    }
};

exports.array_splice = function (arr, offst, lgth, replacement) {
    // Removes the elements designated by offset and length and replace them with supplied array
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_splice
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   input by: Theriault
    // %        note 1: Order does get shifted in associative array input with numeric indices,
    // %        note 1: since PHP behavior doesn't preserve keys, but I understand order is
    // %        note 1: not reliable anyways
    // %        note 2: Note also that IE retains information about property position even
    // %        note 2: after being supposedly deleted, so use of this function may produce
    // %        note 2: unexpected results in IE if you later attempt to add back properties
    // %        note 2: with the same keys that had been deleted
    // -    depends on: is_int
    // *     example 1: \php.input = {4: "red", 'abc': "green", 2: "blue", 'dud': "yellow"};
    // *     example 1: \php.array_splice(input, 2);
    // *     returns 1: {0: "blue", 'dud': "yellow"}
    // *     results 1: input == {'abc':"green", 0:"red"}
    // *     example 2: \php.input = ["red", "green", "blue", "yellow"];
    // *     example 2: \php.array_splice(input, 3, 0, "purple");
    // *     returns 2: []
    // *     results 2: input == ["red", "green", "blue", "purple", "yellow"]
    // *     example 3: \php.input = ["red", "green", "blue", "yellow"]
    // *     example 3: \php.array_splice(input, -1, 1, ["black", "maroon"]);
    // *     returns 3: ["yellow"]
    // *     results 3: input == ["red", "green", "blue", "black", "maroon"]

    var _checkToUpIndices = (arr, ct, key) => {
        // Deal with situation, e.g., if encounter index 4 and try to set it to 0, but 0 exists later in loop (need to
        // increment all subsequent (skipping current key, since we need its value below) until find unused)
        if (arr[ct] !== undefined) {
            var tmp = ct;
            ct += 1;
            if (ct === key) {
                ct += 1;
            }
            ct = _checkToUpIndices(arr, ct, key);
            arr[ct] = arr[tmp];
            delete arr[tmp];
        }
        return ct;
    };

    if (replacement && typeof replacement !== 'object') {
        replacement = [replacement];
    }
    if (lgth === undefined) {
        lgth = offst >= 0 ? arr.length - offst : -offst;
    } else if (lgth < 0) {
        lgth = (offst >= 0 ? arr.length - offst : -offst)  + lgth;
    }

    if (!(arr instanceof Array)) {
        /*if (arr.length !== undefined) { // Deal with array-like objects as input
        delete arr.length;
        }*/
        var lgt = 0;

        var ct = -1;
        var rmvd = [];
        var rmvdObj = {};
        var repl_ct=-1;
        var int_ct=-1;
        var returnArr = true;
        var rmvd_ct = 0;
        var rmvd_lgth = 0;
        var key = '';
        // rmvdObj.length = 0;
        for (key in arr) { // Can do arr.__count__ in some browsers
            lgt += 1;
        }
        offst = (offst >= 0) ? offst : lgt + offst;
        for (key in arr) {
            ct += 1;
            if (ct < offst) {
                if (this.is_int(key)) {
                    int_ct += 1;
                    if (parseInt(key, 10) === int_ct) { // Key is already numbered ok, so don't need to change key for value
                        continue;
                    }
                    _checkToUpIndices(arr, int_ct, key); // Deal with situation, e.g.,
                    // if encounter index 4 and try to set it to 0, but 0 exists later in loop
                    arr[int_ct] = arr[key];
                    delete arr[key];
                }
                continue;
            }
            if (returnArr && this.is_int(key)) {
                rmvd.push(arr[key]);
                rmvdObj[rmvd_ct++] = arr[key]; // PHP starts over here too
            } else {
                rmvdObj[key] = arr[key];
                returnArr    = false;
            }
            rmvd_lgth += 1;
            // rmvdObj.length += 1;

            if (replacement && replacement[++repl_ct]) {
                arr[key] = replacement[repl_ct];
            } else {
                delete arr[key];
            }
        }
        // arr.length = lgt - rmvd_lgth + (replacement ? replacement.length : 0); // Make (back) into an array-like object
        return returnArr ? rmvd : rmvdObj;
    }

    if (replacement) {
        replacement.unshift(offst, lgth);
        return Array.prototype.splice.apply(arr, replacement);
    }
    return arr.splice(offst, lgth);
};

exports.array_sum = array => {
    // Returns the sum of the array entries
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_sum
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Nate
    // +   bugfixed by: Gilbert
    // *     example 1: \php.array_sum([4, 9, 182.6]);
    // *     returns 1: 195.6
    // *     example 2: \php.total = []; index = 0.1; for (y=0; y < 12; y++){total[y] = y + index;}
    // *     example 2: \php.array_sum(total);
    // *     returns 2: 67.2
    var key;

    var sum = 0;

    // input sanitation
    if (typeof array !== 'object') {
        return null;
    }

    for (key in array) {
        //tester_print_r(typeof sum);
        sum += (array[key] * 1);
    }

    return sum;
};

exports.array_udiff = function(...args) {
    // Returns the entries of arr1 that have values which are not present in any of the others arguments. Elements are compared by user supplied function.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_udiff
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
    // *     example 1: $array2 = {a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red'}
    // *     example 1: \php.array_udiff($array1, $array2, function (f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 == string2) return 0; return -1;});
    // *     returns 1: {c: 'blue'}
    var arr1 = args[0];

    var retArr = {};
    var cb = args[args.length-1];
    var arr = '';
    var i = 1;
    var k1 = '';
    var k = '';
    cb = (typeof cb === 'string') ? this.window[cb] : (cb instanceof Array) ? this.window[cb[0]][cb[1]] : cb;

    arr1keys:
    for (k1 in arr1) {
        for (i=1; i < args.length-1; i++) {
            arr = args[i];
            for (k in arr) {
                if (cb(arr[k], arr1[k1]) === 0) {
                    // If it reaches here, it was found in at least one array, so try next value
                    continue arr1keys;
                }
            }
            retArr[k1] = arr1[k1];
        }
    }

    return retArr;
};

exports.array_udiff_assoc = function(...args) {
    // Returns the entries of arr1 that have values which are not present in any of the others arguments but do additional checks whether the keys are equal. Entries are compared by user supplied function.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_udiff_assoc
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.array_udiff_assoc({0: 'kevin', 1: 'van', 2: 'Zonneveld'}, {0: 'Kevin', 4: 'van', 5: 'Zonneveld'}, function (f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 == string2) return 0; return -1;});
    // *     returns 1: {1: 'van', 2: 'Zonneveld'}
    var arr1 = args[0];

    var retArr = {};
    var cb = args[args.length-1];
    var arr = {};
    var i = 1;
    var k1 = '';
    var k = '';
    cb = (typeof cb === 'string') ? this.window[cb] : (cb instanceof Array) ? this.window[cb[0]][cb[1]] : cb;

    arr1keys:
    for (k1 in arr1) {
        for (i=1; i < args.length-1; i++) {
            arr = args[i];
            for (k in arr) {
                if (cb(arr[k], arr1[k1]) === 0 && k === k1) {
                    // If it reaches here, it was found in at least one array, so try next value
                    continue arr1keys;
                }
            }
            retArr[k1] = arr1[k1];
        }
    }

    return retArr;
};

exports.array_udiff_uassoc = function(...args) {
    // Returns the entries of arr1 that have values which are not present in any of the others arguments but do additional checks whether the keys are equal. Keys and elements are compared by user supplied functions.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_udiff_uassoc
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
    // *     example 1: $array2 = {a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red'}
    // *     example 1: \php.array_udiff_uassoc($array1, $array2, function (f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 == string2) return 0; return -1;}, function (f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 == string2) return 0; return -1;});
    // *     returns 1: {0: 'red', c: 'blue'}
    var arr1 = args[0];

    var retArr = {};
    var cb = args[args.length-1];
    var cb0 = args[args.length-2];
    var k1 = '';
    var i = 1;
    var k = '';
    var arr = {};

    cb = (typeof cb === 'string') ? this.window[cb] : (cb instanceof Array) ? this.window[cb[0]][cb[1]] : cb;
    cb0 = (typeof cb0 === 'string') ? this.window[cb0] : (cb0 instanceof Array) ? this.window[cb0[0]][cb0[1]] : cb0;

    arr1keys:
    for (k1 in arr1) {
        for (i=1; i < args.length-2; i++) {
            arr = args[i];
            for (k in arr) {
                if (cb0(arr[k], arr1[k1]) === 0 && cb(k, k1) === 0) {
                    // If it reaches here, it was found in at least one array, so try next value
                    continue arr1keys;
                }
            }
            retArr[k1] = arr1[k1];
        }
    }

    return retArr;
};

exports.array_uintersect = function(...args) {
    // Returns the entries of arr1 that have values which are present in all the other arguments. Data is compared by using an user-supplied callback.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_uintersect
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
    // *     example 1: $array2 = {a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red'}
    // *     example 1: \php.array_uintersect($array1, $array2, function( f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 == string2) return 0; return -1;});
    // *     returns 1: {a: 'green', b: 'brown', 0: 'red'}
    var arr1 = args[0];

    var retArr = {};
    var cb = args[args.length-1];
    var k1 = '';
    var i = 1;
    var arr = {};
    var k = '';

    cb = (typeof cb === 'string') ? this.window[cb] : (cb instanceof Array) ? this.window[cb[0]][cb[1]] : cb;

    arr1keys:
    for (k1 in arr1) {
        arrs:
        for (i = 1; i < args.length-1; i++) {
            arr = args[i];
            for (k in arr) {
                if (cb(arr[k], arr1[k1]) === 0 ) {
                    if (i === args.length-2) {
                        retArr[k1] = arr1[k1];
                    }
                    // If the innermost loop always leads at least once to an equal value, continue the loop until done
                    continue arrs;
                }
            }
            // If it reaches here, it wasn't found in at least one array, so try next value
            continue arr1keys;
        }
    }

    return retArr;
};

exports.array_uintersect_assoc = function(...args) {
    // Returns the entries of arr1 that have values which are present in all the other arguments. Keys are used to do more restrictive check. Data is compared by using an user-supplied callback.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_uintersect_assoc
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
    // *     example 1: $array2 = {a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red'}
    // *     example 1: \php.array_uintersect_assoc($array1, $array2, function (f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 == string2) return 0; return -1;});
    // *     returns 1: {a: 'green', b: 'brown'}
    var arr1 = args[0];

    var retArr = {};
    var cb = args[args.length-1];
    var k1 = '';
    var i = 1;
    var arr = {};
    var k = '';

    cb = (typeof cb === 'string') ? this.window[cb] : (cb instanceof Array) ? this.window[cb[0]][cb[1]] : cb;

    arr1keys:
    for (k1 in arr1) {
        arrs:
        for (i = 1; i < args.length-1; i++) {
            arr = args[i];
            for (k in arr) {
                if (cb(arr[k], arr1[k1]) === 0 && k === k1) {
                    if (i === args.length-2) {
                        retArr[k1] = arr1[k1];
                    }
                    // If the innermost loop always leads at least once to an equal value, continue the loop until done
                    continue arrs;
                }
            }
            // If it reaches here, it wasn't found in at least one array, so try next value
            continue arr1keys;
        }
    }

    return retArr;
};

exports.array_uintersect_uassoc = function(...args) {
    // Returns the entries of arr1 that have values which are present in all the other arguments. Keys are used to do more restrictive check. Both data and keys are compared by using user-supplied callbacks.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_uintersect_uassoc
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
    // *     example 1: $array2 = {a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red'}
    // *     example 1: \php.array_uintersect_uassoc($array1, $array2, function (f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 == string2) return 0; return -1;}, function (f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 == string2) return 0; return -1;});
    // *     returns 1: {a: 'green', b: 'brown'}
    var arr1 = args[0];

    var retArr = {};
    var cb = args[args.length-1];
    var cb0 = args[args.length-2];
    var k1 = '';
    var i = 1;
    var k = '';
    var arr = {};

    cb = (typeof cb === 'string') ? this.window[cb] : (cb instanceof Array) ? this.window[cb[0]][cb[1]] : cb;
    cb0 = (typeof cb0 === 'string') ? this.window[cb0] : (cb0 instanceof Array) ? this.window[cb0[0]][cb0[1]] : cb0;

    arr1keys:
    for (k1 in arr1) {
        arrs:
        for (i = 1; i < args.length-2; i++) {
            arr = args[i];
            for (k in arr) {
                if (cb0(arr[k], arr1[k1]) === 0 && cb(k, k1) === 0) {
                    if (i === args.length-3) {
                        retArr[k1] = arr1[k1];
                    }
                    continue arrs; // If the innermost loop always leads at least once to an equal value, continue the loop until done
                }
            }
            continue arr1keys; // If it reaches here, it wasn't found in at least one array, so try next value
        }
    }

    return retArr;
};

exports.array_unique = inputArr => {
    // Removes duplicate values from array
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_unique
    // +   original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
    // +      input by: duncan
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Nate
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Michael Grier
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: The second argument, sort_flags is not implemented;
    // %          note 1: also should be sorted (asort?) first according to docs
    // *     example 1: \php.array_unique(['Kevin','Kevin','van','Zonneveld','Kevin']);
    // *     returns 1: {0: 'Kevin', 2: 'van', 3: 'Zonneveld'}
    // *     example 2: \php.array_unique({'a': 'green', 0: 'red', 'b': 'green', 1: 'blue', 2: 'red'});
    // *     returns 2: {a: 'green', 0: 'red', 1: 'blue'}
    var key = '';

    var tmp_arr2 = {};
    var val = '';

    var __array_search = (needle, haystack) => {
        var fkey = '';
        for (fkey in haystack) {
            if (haystack.hasOwnProperty(fkey)) {
                if ((haystack[fkey] + '') === (needle + '')) {
                    return fkey;
                }
            }
        }
        return false;
    };

    for (key in inputArr) {
        if (inputArr.hasOwnProperty(key)) {
            val = inputArr[key];
            if (false === __array_search(val, tmp_arr2)) {
                tmp_arr2[key] = val;
            }
        }
    }

    return tmp_arr2;
};

exports.array_unshift = function (array) {
    // Pushes elements onto the beginning of the array
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_unshift
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Martijn Wieringa
    // +   improved by: jmweb
    // %        note 1: Currently does not handle objects
    // *     example 1: \php.array_unshift(['van', 'Zonneveld'], 'Kevin');
    // *     returns 1: 3
	var i = arguments.length;

	while(--i !== 0){
	    arguments[0].unshift(arguments[i]);
	}

	return arguments[0].length;
};

exports.array_values = input => {
    // Return just the values from the input array
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_values
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: \php.array_values( {firstname: 'Kevin', surname: 'van Zonneveld'} );
    // *     returns 1: {0: 'Kevin', 1: 'van Zonneveld'}
    var tmp_arr = [];

    var cnt = 0;
    var key = '';

    for ( key in input ){
        tmp_arr[cnt] = input[key];
        cnt++;
    }

    return tmp_arr;
};

exports.array_walk = (array, funcname, userdata) => {
    // Apply a user function to every member of an array
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_walk
    // +   original by: Johnny Mast (http://www.phpvrouwen.nl)
    // *     example 1: \php.array_walk ({'a':'b'}, 'void', 'userdata');
    // *     returns 1: true
    // *     example 2: \php.array_walk ('a', 'void', 'userdata');
    // *     returns 2: false

    var key;

    if (typeof array !== 'object' || array === null) {
        return false;
    }

    for (key in array) {
        if (typeof(userdata) !== 'undefined') {
            eval(funcname + '( array [key] , key , userdata  )' );
        } else {
            eval(funcname + '(  userdata ) ');
        }
    }

    return true;
};

exports.array_walk_recursive = function (array, funcname, userdata) {
    // Apply a user function recursively to every member of an array
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_walk_recursive
    // +   original by: Johnny Mast (http://www.phpvrouwen.nl)
    // *     example 1: \php.array_walk_recursive ({'a': 'b', 'c': {'d': 'e'}}, 'void', 'userdata');
    // *     returns 1: true
    // *     example 2: \php.array_walk_recursive ('a', 'void', 'userdata');
    // *     returns 2: false

    var key;

    if (typeof array != 'object'){
        return false;
    }

    for (key in array) {
        if (typeof array[key] == 'object') {
            return this.array_walk_recursive(array [key], funcname, userdata);
        }

        if (typeof (userdata) != 'undefined') {
            eval(funcname + '( array [key] , key , userdata  )');
        } else {
            eval(funcname + '(  userdata ) ');
        }
    }

    return true;
};

exports.arsort = function (inputArr, sort_flags) {
    // Sort an array in reverse order and maintain index association
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/arsort
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: SORT_STRING (as well as natsort and natcasesort) might also be
    // %        note 1: integrated into all of these functions by adapting the code at
    // %        note 1: http://sourcefrog.net/projects/natsort/natcompare.js
    // %        note 2: The examples are correct, this is a new way
    // %        note 2: Credits to: http://javascript.internet.com/math-related/bubble-sort.html
    // %        note 3: This function deviates from PHP in returning a copy of the array instead
    // %        note 3: of acting by reference and returning true; this was necessary because
    // %        note 3: IE does not allow deleting and re-adding of properties without caching
    // %        note 3: of property position; you can set the ini of "phpjs.strictForIn" to true to
    // %        note 3: get the PHP behavior, but use this only if you are in an environment
    // %        note 3: such as Firefox extensions where for-in iteration order is fixed and true
    // %        note 3: property deletion is supported. Note that we intend to implement the PHP
    // %        note 3: behavior by default if IE ever does allow it; only gives shallow copy since
    // %        note 3: is by reference in PHP anyways
    // -    depends on: i18n_loc_get_default
    // *     example 1: \php.data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
    // *     example 1: \php.data = arsort(data);
    // *     returns 1: data == {a: 'orange', d: 'lemon', b: 'banana', c: 'apple'}
    // *     example 2: \php.ini_set('phpjs.strictForIn', true);
    // *     example 2: \php.data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
    // *     example 2: \php.arsort(data);
    // *     results 2: data == {a: 'orange', d: 'lemon', b: 'banana', c: 'apple'}
    // *     returns 2: true
    var valArr=[];

    var keyArr=[];
    var k;
    var i;
    var ret;
    var sorter;
    var that = this;
    var strictForIn = false;
    var populateArr = {};

    switch (sort_flags) {
        case 'SORT_STRING': // compare items as strings
            sorter = (a, b) => that.strnatcmp(b, a);
            break;
        case 'SORT_LOCALE_STRING': // compare items as strings, based on the current locale (set with i18n_loc_set_default() as of PHP6)
            var loc = this.i18n_loc_get_default();
            sorter = this.php_js.i18nLocales[loc].sorting;
            break;
        case 'SORT_NUMERIC': // compare items numerically
            sorter = (a, b) => a - b;
            break;
        case 'SORT_REGULAR': // compare items normally (don't change types)
        default:
            sorter = (a, b) => {
                if (a > b) {
                    return 1;
                }
                if (a < b) {
                    return -1;
                }
                return 0;
            };
            break;
    }

    var bubbleSort = (keyArr, inputArr) => {
        var i;
        var j;
        var tempValue;
        var tempKeyVal;
        for (i = inputArr.length-2; i >= 0; i--) {
            for (j = 0; j <= i; j++) {
                ret = sorter(inputArr[j+1], inputArr[j]);
                if (ret > 0) {
                    tempValue = inputArr[j];
                    inputArr[j] = inputArr[j+1];
                    inputArr[j+1] = tempValue;
                    tempKeyVal = keyArr[j];
                    keyArr[j] = keyArr[j+1];
                    keyArr[j+1] = tempKeyVal;
                }
            }
        }
    };

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    // END REDUNDANT

    strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value &&
                    this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;


    // Get key and value arrays
    for (k in inputArr) {
        if (inputArr.hasOwnProperty(k)) {
            valArr.push(inputArr[k]);
            keyArr.push(k);
            if (strictForIn) {
                delete inputArr[k];
            }
        }
    }
    try {
        // Sort our new temporary arrays
        bubbleSort(keyArr, valArr);
    } catch (e) {
        return false;
    }

    // Repopulate the old array
    for (i = 0; i < valArr.length; i++) {
        populateArr[keyArr[i]] = valArr[i];
    }

    return strictForIn || populateArr;
};

exports.asin = arg => // Returns the arc sine of the number in radians
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/asin
// +   original by: Onno Marsman
// *     example 1: \php.asin(0.3);
// *     returns 1: 0.3046926540153975
Math.asin(arg);

exports.asinh = arg => // Returns the inverse hyperbolic sine of the number, i.e. the value whose hyperbolic sine is number
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/asinh
// +   original by: Onno Marsman
// *     example 1: \php.asinh(8723321.4);
// *     returns 1: 16.67465779841863
Math.log(arg + Math.sqrt(arg*arg+1));

exports.asort = function (inputArr, sort_flags) {
    // Sort an array and maintain index association
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/asort
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   input by: paulo kuong
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Adam Wallner (http://web2.bitbaro.hu/)
    // %        note 1: SORT_STRING (as well as natsort and natcasesort) might also be
    // %        note 1: integrated into all of these functions by adapting the code at
    // %        note 1: http://sourcefrog.net/projects/natsort/natcompare.js
    // %        note 2: The examples are correct, this is a new way
    // %        note 2: Credits to: http://javascript.internet.com/math-related/bubble-sort.html
    // %        note 3: This function deviates from PHP in returning a copy of the array instead
    // %        note 3: of acting by reference and returning true; this was necessary because
    // %        note 3: IE does not allow deleting and re-adding of properties without caching
    // %        note 3: of property position; you can set the ini of "phpjs.strictForIn" to true to
    // %        note 3: get the PHP behavior, but use this only if you are in an environment
    // %        note 3: such as Firefox extensions where for-in iteration order is fixed and true
    // %        note 3: property deletion is supported. Note that we intend to implement the PHP
    // %        note 3: behavior by default if IE ever does allow it; only gives shallow copy since
    // %        note 3: is by reference in PHP anyways
    // -    depends on: strnatcmp
    // -    depends on: i18n_loc_get_default
    // *     example 1: \php.data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
    // *     example 1: \php.data = asort(data);
    // *     results 1: data == {c: 'apple', b: 'banana', d: 'lemon', a: 'orange'}
    // *     returns 1: true
    // *     example 2: \php.ini_set('phpjs.strictForIn', true);
    // *     example 2: \php.data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
    // *     example 2: \php.asort(data);
    // *     results 2: data == {c: 'apple', b: 'banana', d: 'lemon', a: 'orange'}
    // *     returns 2: true
    var valArr=[];

    var keyArr=[];
    var k;
    var i;
    var ret;
    var sorter;
    var that = this;
    var strictForIn = false;
    var populateArr = {};

    switch (sort_flags) {
        case 'SORT_STRING': // compare items as strings
            sorter = (a, b) => that.strnatcmp(a, b);
            break;
        case 'SORT_LOCALE_STRING': // compare items as strings, based on the current locale (set with i18n_loc_set_default() as of PHP6)
            var loc = this.i18n_loc_get_default();
            sorter = this.php_js.i18nLocales[loc].sorting;
            break;
        case 'SORT_NUMERIC': // compare items numerically
            sorter = (a, b) => a - b;
            break;
        case 'SORT_REGULAR': // compare items normally (don't change types)
        default:
            sorter = (a, b) => {
                if (a > b) {
                    return 1;
                }
                if (a < b) {
                    return -1;
                }
                return 0;
            };
            break;
    }

    var bubbleSort = (keyArr, inputArr) => {
        var i;
        var j;
        var tempValue;
        var tempKeyVal;
        for (i = inputArr.length-2; i >= 0; i--) {
            for (j = 0; j <= i; j++) {
                ret = sorter(inputArr[j+1], inputArr[j]);
                if (ret < 0) {
                    tempValue = inputArr[j];
                    inputArr[j] = inputArr[j+1];
                    inputArr[j+1] = tempValue;
                    tempKeyVal = keyArr[j];
                    keyArr[j] = keyArr[j+1];
                    keyArr[j+1] = tempKeyVal;
                }
            }
        }
    };

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    // END REDUNDANT

    strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value &&
                    this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;

    // Get key and value arrays
    for (k in inputArr) {
        if (inputArr.hasOwnProperty(k)) {
            valArr.push(inputArr[k]);
            keyArr.push(k);
            if (strictForIn) {
                delete inputArr[k];
            }
        }
    }
    try {
        // Sort our new temporary arrays
        bubbleSort(keyArr, valArr);
    } catch (e) {
        return false;
    }

    // Repopulate the old array
    for (i = 0; i < valArr.length; i++) {
        populateArr[keyArr[i]] = valArr[i];
    }

    return strictForIn || populateArr;
};

exports.assert = function (assertion) {
    // Checks if assertion is false
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/assert
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: Do not pass untrusted user input to assert() in string form (you can test it beforehand though)
    // %          note 2: Does not provide perfect arguments to the assertion callback, as far as file location or line number
    // *     example 1: \php.assert('false === true');
    // *     returns 1: false

    var result = false;

    var callback;
    var retVal;
    var err=undefined;

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    this.php_js.assert_values = this.php_js.assert_values || {};
    // END REDUNDANT

    var getOption = function (value) {
        if (this.php_js.assert_values[value]) {
            return this.php_js.assert_values[value];
        }
        if (this.php_js.ini[value]) {
            return this.php_js.ini[value].local_value;
        }
        switch (value) {
            case 'assert.active':
                return 1;
            case 'assert.warning': // Don't need this now
                //return 1;
                throw 'We have not yet implemented warnings in JavaScript (assert())';
            case 'assert.bail':
                return 0;
            case 'assert.quiet_eval':
                return 0;
            case 'assert.callback':
                return null;
            default:
                throw 'There was some problem';
        }
    };

    if (!getOption('assert.active')) {
        return false; // is this correct? should callbacks still execute? Should still bail if on?
    }

    try { // Less overhead to use string when assertion checking is off, allows message of exact code to callback
        result = typeof assertion === 'string' ? eval(assertion) : assertion;
    }
    catch (e) {
        if (!getOption('assert.quiet_eval')) {
            throw e;
        }
        err = e;
        result = false;
    }
    retVal = result !== false; // return false if false, otherwise, return true
    if (retVal === false) {
        if (getOption('assert.bail')) { // Todo: Will the function bail before a callback or after?
            throw 'Assertion bailed'; // No way to bail without throwing an exception (and there are no "warnings" in JavaScript for us to throw)
        }
        callback = getOption('assert.callback');
        if (typeof callback === 'string') {
            callback = this.window[callback];
        }
        // Not perfect for file location (might also use __FILE__()) or line number
        callback(this.window.location.href, err && err.lineNumber, (typeof assertion === 'string' ? assertion : '')); // From the docs, what does this mean?: "the third argument will contain the expression that failed (if any - literal values such as 1 or "two" will not be passed via this argument)"
    }
    return retVal;
};

exports.assert_options = function (what, value) {
    // Set/get the various assert flags
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/assert_options
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.assert_options('ASSERT_CALLBACK');
    // *     returns 1: null

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    this.php_js.assert_values = this.php_js.assert_values || {};

    // END REDUNDANT

    var ini;

    var dflt;
    switch (what) {
        case 'ASSERT_ACTIVE':
            ini = 'assert.active';
            dflt = 1;
            break;
        case 'ASSERT_WARNING':
            ini = 'assert.warning';
            dflt = 1;
            throw 'We have not yet implemented warnings for us to throw in JavaScript (assert_options())';
        case 'ASSERT_BAIL':
            ini = 'assert.bail';
            dflt = 0;
            break;
        case 'ASSERT_QUIET_EVAL':
            ini = 'assert.quiet_eval';
            dflt = 0;
            break;
        case 'ASSERT_CALLBACK':
            ini = 'assert.callback';
            dflt = null;
            break;
        default:
            throw 'Improper type for assert_options()';
    }
    // I presume this is to be the most recent value, instead of the default value
    var originalValue = this.php_js.assert_values[ini] || (this.php_js.ini[ini] && this.php_js.ini[ini].local_value) || dflt;

    if (value) {
        this.php_js.assert_values[ini] = value; // We use 'ini' instead of 'what' as key to be more convenient for assert() to test for current value
    }
    return originalValue;
};

exports.atan = arg => // Returns the arc tangent of the number in radians
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/atan
// +   original by: Onno Marsman
// *     example 1: \php.atan(8723321.4);
// *     returns 1: 1.5707962121596615
Math.atan(arg);

exports.atan2 = (y, x) => // Returns the arc tangent of y/x, with the resulting quadrant determined by the signs of y and x
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/atan2
// +   original by: Brett Zamir (http://brett-zamir.me)
// *     example 1: \php.atan2(1, 1);
// *     returns 1: 0.7853981633974483
Math.atan2(y, x);

exports.atanh = arg => // Returns the inverse hyperbolic tangent of the number, i.e. the value whose hyperbolic tangent is number
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/atanh
// +   original by: Onno Marsman
// *     example 1: \php.atanh(0.3);
// *     returns 1: 0.3095196042031118
0.5 * Math.log((1+arg)/(1-arg));

exports.base64_decode = function (data) {
    // Decodes string using MIME base64 algorithm
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/base64_decode
    // +   original by: Tyler Akins (http://rumkin.com)
    // +   improved by: Thunder.m
    // +      input by: Aman Gupta
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +   bugfixed by: Pellentesque Malesuada
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: utf8_decode
    // *     example 1: \php.base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==');
    // *     returns 1: 'Kevin van Zonneveld'
    // mozilla has this native
    // - but breaks in 2.0.0.12!
    //if (typeof this.window['btoa'] == 'function') {
    //    return btoa(data);
    //}

    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var o1;
    var o2;
    var o3;
    var h1;
    var h2;
    var h3;
    var h4;
    var bits;
    var i = 0;
    var ac = 0;
    var dec = "";
    var tmp_arr = [];

    if (!data) {
        return data;
    }

    data += '';

    do {  // unpack four hexets into three octets using index points in b64
        h1 = b64.indexOf(data.charAt(i++));
        h2 = b64.indexOf(data.charAt(i++));
        h3 = b64.indexOf(data.charAt(i++));
        h4 = b64.indexOf(data.charAt(i++));

        bits = h1<<18 | h2<<12 | h3<<6 | h4;

        o1 = bits>>16 & 0xff;
        o2 = bits>>8 & 0xff;
        o3 = bits & 0xff;

        if (h3 == 64) {
            tmp_arr[ac++] = String.fromCharCode(o1);
        } else if (h4 == 64) {
            tmp_arr[ac++] = String.fromCharCode(o1, o2);
        } else {
            tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
        }
    } while (i < data.length);

    dec = tmp_arr.join('');
    dec = this.utf8_decode(dec);

    return dec;
};

exports.base64_encode = function (data) {
    // Encodes string using MIME base64 algorithm
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/base64_encode
    // +   original by: Tyler Akins (http://rumkin.com)
    // +   improved by: Bayron Guevara
    // +   improved by: Thunder.m
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Pellentesque Malesuada
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: utf8_encode
    // *     example 1: \php.base64_encode('Kevin van Zonneveld');
    // *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
    // mozilla has this native
    // - but breaks in 2.0.0.12!
    //if (typeof this.window['atob'] == 'function') {
    //    return atob(data);
    //}

    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var o1;
    var o2;
    var o3;
    var h1;
    var h2;
    var h3;
    var h4;
    var bits;
    var i = 0;
    var ac = 0;
    var enc="";
    var tmp_arr = [];

    if (!data) {
        return data;
    }

    data = this.utf8_encode(data+'');

    do { // pack three octets into four hexets
        o1 = data.charCodeAt(i++);
        o2 = data.charCodeAt(i++);
        o3 = data.charCodeAt(i++);

        bits = o1<<16 | o2<<8 | o3;

        h1 = bits>>18 & 0x3f;
        h2 = bits>>12 & 0x3f;
        h3 = bits>>6 & 0x3f;
        h4 = bits & 0x3f;

        // use hexets to index into b64, and append result to encoded string
        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    } while (i < data.length);

    enc = tmp_arr.join('');

    switch (data.length % 3) {
        case 1:
            enc = enc.slice(0, -2) + '==';
        break;
        case 2:
            enc = enc.slice(0, -1) + '=';
        break;
    }

    return enc;
};

exports.base_convert = (number, frombase, tobase) => // Converts a number in a string from any base <= 36 to any base <= 36
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/base_convert
// +   original by: Philippe Baumann
// +   improved by: Rafał Kukawski (http://blog.kukawski.pl)
// *     example 1: \php.base_convert('A37334', 16, 2);
// *     returns 1: '101000110111001100110100'
parseInt(number + '', frombase | 0).toString(tobase | 0);

exports.basename = (path, suffix) => {
    // Returns the filename component of the path
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/basename
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Ash Searle (http://hexmen.com/blog/)
    // +   improved by: Lincoln Ramsay
    // +   improved by: djmix
    // *     example 1: \php.basename('/www/site/home.htm', '.htm');
    // *     returns 1: 'home'
    // *     example 2: \php.basename('ecra.php?p=1');
    // *     returns 2: 'ecra.php?p=1'
    var b = path.replace(/^.*[\/\\]/g, '');

    if (typeof(suffix) == 'string' && b.substr(b.length-suffix.length) == suffix) {
        b = b.substr(0, b.length-suffix.length);
    }

    return b;
};

exports.bcadd = function(left_operand, right_operand, scale) {
    // Returns the sum of two arbitrary precision numbers
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/bcadd
    // +   original by: lmeyrick (https://sourceforge.net/projects/bcmath-js/)
    // -    depends on: _phpjs_shared_bc
    // *     example 1: \php.bcadd(1, 2);
    // *     returns 1: 3
    //  @todo: implement these testcases
    //        bcscale(0);
    //
    //        bcmath.test.result('bcadd', 1, '3', bcadd("1", "2"));
    //        bcmath.test.result('bcadd', 2, '4.0000', bcadd("-1", "5", 4));
    //        bcmath.test.result('bcadd', 3, '8728932003911564969352217864684.00', bcadd("1928372132132819737213", "8728932001983192837219398127471", 2));
    //        bcmath.test.result('bcadd', 4, '3.357000', bcadd('1.123', '2.234', 6));

    var libbcmath = this._phpjs_shared_bc();

    var first;
    var second;
    var result;

    if (typeof(scale) == 'undefined') {
        scale = libbcmath.scale;
    }
    scale   = ((scale < 0) ? 0 : scale);

    // create objects
    first   = libbcmath.bc_init_num();
    second  = libbcmath.bc_init_num();
    result  = libbcmath.bc_init_num();

    first   = libbcmath.php_str2num(left_operand.toString());
    second  = libbcmath.php_str2num(right_operand.toString());


    result  = libbcmath.bc_add(first, second, scale);

    if (result.n_scale > scale) {
        result.n_scale = scale;
    }

    return result.toString();
};

exports.bccomp = function(left_operand, right_operand, scale) {
    // Compares two arbitrary precision numbers
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/bccomp
    // +   original by: lmeyrick (https://sourceforge.net/projects/bcmath-js/)
    // -    depends on: _phpjs_shared_bc
    // *     example 1: \php.bccomp(1, 2);
    // *     returns 1: 3
    //  @todo: implement these testcases
    //        bcscale(0);
    //
    //        bcmath.test.result('bccomp', 1, -1, bccomp('-1','5', 4));
    //        bcmath.test.result('bccomp', 2, -1, bccomp('1928372132132819737213', '8728932001983192837219398127471'));
    //        bcmath.test.result('bccomp', 3,  0, bccomp('1.00000000000000000001', '1', 2));
    //        bcmath.test.result('bccomp', 4,  1, bccomp('97321', '2321'));

    var libbcmath = this._phpjs_shared_bc();

    var first; //bc_num
    var second;

    if (typeof(scale) == 'undefined') {
        scale = libbcmath.scale;
    }
    scale   = ((scale < 0) ? 0 : scale);

    first   = libbcmath.bc_init_num();
    second  = libbcmath.bc_init_num();

    first   = libbcmath.bc_str2num(left_operand.toString(), scale);     // note bc_ not php_str2num
    second  = libbcmath.bc_str2num(right_operand.toString(), scale);    // note bc_ not php_str2num

    return libbcmath.bc_compare(first, second, scale);
};

exports.bcdiv = function(left_operand, right_operand, scale) {
    // Returns the quotient of two arbitrary precision numbers (division)
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/bcdiv
    // +   original by: lmeyrick (https://sourceforge.net/projects/bcmath-js/)
    // -    depends on: _phpjs_shared_bc
    // *     example 1: \php.bcdiv(1, 2);
    // *     returns 1: 3
    //  @todo: implement these testcases
    //        bcscale(0);
    //
    //        bcmath.test.result('bcdiv', 1, '0', bcdiv("1", "2"));
    //        bcmath.test.result('bcdiv', 2, '0.50', bcdiv("1", "2", 2));
    //        bcmath.test.result('bcdiv', 3, '-0.2000', bcdiv("-1", "5", 4));
    //        bcmath.test.result('bcdiv', 4, '3333.3333', bcdiv("10000.0000", "3", 4));
    //        bcmath.test.result('bcdiv', 5, '2387.8877', bcdiv("5573.33", "2.334", 4));
    //        bcmath.test.result('bcdiv', 7, '1.00', bcdiv('6.00', '6.00', 2));
    //        bcmath.test.result('bcdiv', 8, '1.00', bcdiv('2.00', '2.00', 2));
    //        bcmath.test.result('bcdiv', 9, '59.51111111', bcdiv('66.95', '1.125', 8));
    //        bcmath.test.result('bcdiv', 10, '4526580661.75', bcdiv('8728932001983192837219398127471.00', '1928372132132819737213.00', 2));

    var libbcmath = this._phpjs_shared_bc();

    var first;
    var second;
    var result;

    if (typeof(scale) == 'undefined') {
        scale = libbcmath.scale;
    }
    scale   = ((scale < 0) ? 0 : scale);

    // create objects
    first   = libbcmath.bc_init_num();
    second  = libbcmath.bc_init_num();
    result  = libbcmath.bc_init_num();

    first   = libbcmath.php_str2num(left_operand.toString());
    second  = libbcmath.php_str2num(right_operand.toString());

    result  = libbcmath.bc_divide(first, second, scale);
    if (result === -1) {
        // error
        throw new Error(11, "(BC) Division by zero");
    }
    if (result.n_scale > scale) {
        result.n_scale = scale;
    }
    return result.toString();
};

exports.bcmul = function(left_operand, right_operand, scale) {
    // Returns the multiplication of two arbitrary precision numbers
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/bcmul
    // +   original by: lmeyrick (https://sourceforge.net/projects/bcmath-js/)
    // -    depends on: _phpjs_shared_bc
    // *     example 1: \php.bcmul(1, 2);
    // *     returns 1: 3
    //  @todo: implement these testcases
    //        bcscale(0);
    //
    //        bcmath.test.result('bcmul', 1, '2', bcmul("1", "2"));
    //        bcmath.test.result('bcmul', 2, '-15', bcmul("-3", "5"));
    //        bcmath.test.result('bcmul', 3, '12193263111263526900', bcmul("1234567890", "9876543210"));
    //        bcmath.test.result('bcmul', 4, '3.75', bcmul("2.5", "1.5", 2));
    //        bcmath.test.result('bcmul', 5, '13008.1522', bcmul("5573.33", "2.334", 4));

    var libbcmath = this._phpjs_shared_bc();

    var first;
    var second;
    var result;

    if (typeof(scale) == 'undefined') {
        scale = libbcmath.scale;
    }
    scale   = ((scale < 0) ? 0 : scale);

    // create objects
    first   = libbcmath.bc_init_num();
    second  = libbcmath.bc_init_num();
    result  = libbcmath.bc_init_num();

    first   = libbcmath.php_str2num(left_operand.toString());
    second  = libbcmath.php_str2num(right_operand.toString());

    result  = libbcmath.bc_multiply(first, second, scale);

    if (result.n_scale > scale) {
        result.n_scale = scale;
    }
    return result.toString();
};

exports.bcround = function(val, precision) {
    // !No description available for bcround. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/bcround
    // +   original by: lmeyrick (https://sourceforge.net/projects/bcmath-js/)
    // -    depends on: _phpjs_shared_bc
    // *     example 1: \php.bcround(1, 2);
    // *     returns 1: 3
    //  @todo: implement these testcases
    //        bcscale(0);
    //
    //        bcmath.test.result('bcround', 1, '-2', bcround('-1.5', 0));
    //        bcmath.test.result('bcround', 2, '-1.1235', bcround('-1.1234567', 4));
    //        bcmath.test.result('bcround', 3, '2', bcround('1.5', 0));
    //        bcmath.test.result('bcround', 4, '1.1235', bcround('1.1234567', 4));
    //        bcmath.test.result('bcround', 5, '1', bcround('1.499999999', 0));
    //        bcmath.test.result('bcround', 6, '2', bcround('1.5555555555555555555', 0));
    //        bcmath.test.result('bcround', 7, '1.44', bcround('1.444999', 2));
    //        bcmath.test.result('bcround', 8, '-1.44', bcround('-1.444999', 2));

    var libbcmath = this._phpjs_shared_bc();

    var temp;
    var result;
    var digit;
    var right_operand;

    // create number
    temp  = libbcmath.bc_init_num();
    temp  = libbcmath.php_str2num(val.toString());

    // check if any rounding needs
    if (precision >= temp.n_scale) {
        // nothing to round, just add the zeros.
        while (temp.n_scale < precision) {
            temp.n_value[temp.n_len+temp.n_scale]=0;
            temp.n_scale++;
        }
        return temp.toString();
    }

    // get the digit we are checking (1 after the precision)
    // loop through digits after the precision marker
    digit = temp.n_value[temp.n_len + precision];

    right_operand = libbcmath.bc_init_num();
    right_operand = libbcmath.bc_new_num(1, precision);

    if (digit >= 5) {
        //round away from zero by adding 1 (or -1) at the "precision".. ie 1.44999 @ 3dp = (1.44999 + 0.001).toString().substr(0,5)
        right_operand.n_value[right_operand.n_len+right_operand.n_scale-1] = 1;
        if (temp.n_sign == libbcmath.MINUS) {
            // round down
            right_operand.n_sign = libbcmath.MINUS;
        }
        result  = libbcmath.bc_add(temp, right_operand, precision);
    } else {
        // leave-as-is.. just truncate it.
        result  = temp;
    }

    if (result.n_scale > precision) {
        result.n_scale = precision;
    }
    return result.toString();
};

exports.bcscale = function(scale) {
    // Sets default scale parameter for all bc math functions
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/bcscale
    // +   original by: lmeyrick (https://sourceforge.net/projects/bcmath-js/)this.
    // -    depends on: _phpjs_shared_bc
    // *     example 1: \php.bcscale(1);
    // *     returns 1: 3
//  @todo: implement these testcases
//        bcscale(0);
//
//        bcmath.test.result('bcscale', 1, false, bcscale('fail'));
//        bcmath.test.result('bcscale', 2, false, bcscale(-1));
//        bcmath.test.result('bcscale', 3, true, bcscale(5));
//        bcmath.test.result('bcscale', 4, true, bcscale(0));

    var libbcmath = this._phpjs_shared_bc();

    scale = parseInt(scale, 10);
    if (isNaN(scale)) {
        return false;
    }
    if (scale < 0) {
        return false;
    }
    libbcmath.scale = scale;
    return true;
};

exports.bcsub = function(left_operand, right_operand, scale) {
    // Returns the difference between two arbitrary precision numbers
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/bcsub
    // +   original by: lmeyrick (https://sourceforge.net/projects/bcmath-js/)
    // -    depends on: _phpjs_shared_bc
    // *     example 1: \php.bcsub(1, 2);
    // *     returns 1: -1
    //  @todo: implement these testcases
    //        // set scale to zero
    //        bcscale(0);
    //
    //        bcmath.test.result('bcsub', 1, '-1', bcsub('1','2'));
    //        bcmath.test.result('bcsub', 2, '-6.0000', bcsub('-1','5', 4));
    //        bcmath.test.result('bcsub', 3, '8728932000054820705086578390258.00', bcsub('8728932001983192837219398127471','1928372132132819737213', 2));
    //        bcmath.test.result('bcsub', 4, '-1.111000', bcsub('1.123', '2.234', 6));
    //        bcmath.test.result('bcsub', 5, '-2.20', bcsub('1.123456', '3.333333', 2)); //-2.209877 note: rounding not applicable as bcmath truncates.

    var libbcmath = this._phpjs_shared_bc();

    var first;
    var second;
    var result;

    if (typeof(scale) == 'undefined') {
        scale = libbcmath.scale;
    }
    scale   = ((scale < 0) ? 0 : scale);

    // create objects
    first   = libbcmath.bc_init_num();
    second  = libbcmath.bc_init_num();
    result  = libbcmath.bc_init_num();

    first   = libbcmath.php_str2num(left_operand.toString());
    second  = libbcmath.php_str2num(right_operand.toString());

    result  = libbcmath.bc_sub(first, second, scale);

    if (result.n_scale > scale) {
        result.n_scale = scale;
    }

    return result.toString();
};

exports.bin2hex = s => {
    // Converts the binary representation of data to hex
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/bin2hex
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +   bugfixed by: Linuxworld
    // *     example 1: \php.bin2hex('Kev');
    // *     returns 1: '4b6576'
    // *     example 2: \php.bin2hex(String.fromCharCode(0x00));
    // *     returns 2: '00'
    var i;

    var f = 0;
    var a = [];

    s += '';
    f = s.length;

    for (i = 0; i<f; i++) {
        a[i] = s.charCodeAt(i).toString(16).replace(/^([\da-f])$/,"0$1");
    }

    return a.join('');
};

exports.bindec = binary_string => {
    // Returns the decimal equivalent of the binary number
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/bindec
    // +   original by: Philippe Baumann
    // *     example 1: \php.bindec('110011');
    // *     returns 1: 51
    // *     example 2: \php.bindec('000110011');
    // *     returns 2: 51
    // *     example 3: \php.bindec('111');
    // *     returns 3: 7
    binary_string = (binary_string+'').replace(/[^01]/gi, '');
    return parseInt(binary_string, 2);
};

exports.call_user_func = function (cb) {
    // Call a user function which is the first parameter
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/call_user_func
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Diplom@t (http://difane.com/)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.call_user_func('isNaN', 'a');
    // *     returns 1: true
    var func;

    if (typeof cb === 'string') {
        func = (typeof this[cb] === 'function') ? this[cb] : func = (new Function(null, 'return ' + cb))();
    } else if (cb instanceof Array) {
        func = ( typeof cb[0] == 'string' ) ? eval(cb[0]+"['"+cb[1]+"']") : func = cb[0][cb[1]];
    } else if (typeof cb === 'function') {
        func = cb;
    }

    if (typeof func != 'function') {
        throw new Error(func + ' is not a valid function');
    }

    var parameters = Array.prototype.slice.call(arguments, 1);
    return (typeof cb[0] === 'string') ? func.apply(eval(cb[0]), parameters) :
                ( typeof cb[0] !== 'object' ) ? func(...parameters) : func.apply(cb[0], parameters);
};

exports.call_user_func_array = function (cb, parameters) {
    // Call a user function which is the first parameter with the arguments contained in array
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/call_user_func_array
    // +   original by: Thiago Mata (http://thiagomata.blog.com)
    // +   revised  by: Jon Hohle
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Diplom@t (http://difane.com/)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.call_user_func_array('isNaN', ['a']);
    // *     returns 1: true
    // *     example 2: \php.call_user_func_array('isNaN', [1]);
    // *     returns 2: false
    var func;

    if (typeof cb === 'string') {
        func = (typeof this[cb] === 'function') ? this[cb] : func = (new Function(null, 'return ' + cb))();
    } else if (cb instanceof Array) {
        func = ( typeof cb[0] == 'string' ) ? eval(cb[0]+"['"+cb[1]+"']") : func = cb[0][cb[1]];
    } else if (typeof cb === 'function') {
        func = cb;
    }

    if (typeof func !== 'function') {
        throw new Error(func + ' is not a valid function');
    }

    return (typeof cb[0] === 'string') ? func.apply(eval(cb[0]), parameters) :
                ( typeof cb[0] !== 'object' ) ? func(...parameters) : func.apply(cb[0], parameters);
};

exports.ceil = value => // Returns the next highest integer value of the number
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/ceil
// +   original by: Onno Marsman
// *     example 1: \php.ceil(8723321.4);
// *     returns 1: 8723322
Math.ceil(value);

exports.checkdate = (m, d, y) => // Returns true(1) if it is a valid date in gregorian calendar
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/checkdate
// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
// +   improved by: Pyerre
// +   improved by: Theriault
// *     example 1: \php.checkdate(12, 31, 2000);
// *     returns 1: true
// *     example 2: \php.checkdate(2, 29, 2001);
// *     returns 2: false
// *     example 3: \php.checkdate(03, 31, 2008);
// *     returns 3: true
// *     example 4: \php.checkdate(1, 390, 2000);
// *     returns 4: false
m > 0 && m < 13 && y > 0 && y < 32768 && d > 0 && d <= (new Date(y, m, 0)).getDate();

exports.chop = function ( str, charlist ) {
    // !No description available for chop. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/chop
    // +   original by: Paulo Freitas
    // -    depends on: rtrim
    // *     example 1: \php.rtrim('    Kevin van Zonneveld    ');
    // *     returns 1: '    Kevin van Zonneveld'
    return this.rtrim(str, charlist);
};

exports.chr = codePt => {
    // Converts a codepoint number to a character
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/chr
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.chr(75);
    // *     returns 1: 'K'
    // *     example 1: \php.chr(65536) === '\uD800\uDC00';
    // *     returns 1: true

    if (codePt > 0xFFFF) { // Create a four-byte string (length 2) since this code point is high
                                             //   enough for the UTF-16 encoding (JavaScript internal use), to
                                             //   require representation with two surrogates (reserved non-characters
                                             //   used for building other characters; the first is "high" and the next "low")
        codePt -= 0x10000;
        return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));
    }
    else {
        return String.fromCharCode(codePt);
    }
};

exports.chunk_split = (body, chunklen, end) => {
    // Returns split line
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/chunk_split
    // +   original by: Paulo Freitas
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Theriault
    // *     example 1: \php.chunk_split('Hello world!', 1, '*');
    // *     returns 1: 'H*e*l*l*o* *w*o*r*l*d*!*'
    // *     example 2: \php.chunk_split('Hello world!', 10, '*');
    // *     returns 2: 'Hello worl*d!*'

    chunklen = parseInt(chunklen, 10) || 76;
    end = end || '\r\n';

    if (chunklen < 1) {
        return false;
    }

    return body.match(new RegExp(".{0," + chunklen + "}", "g")).join(end);
};

exports.class_alias = function (clss, alias, autoload) {
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: This function is not documented and only available in PHP source
    // *     example 1: \php.function someFunc () {}
    // *     example 1: \php.class_alias('someFunc', 'olFunc');
    // *     returns 1: true

    var getFuncName = fn => {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
        if (!name) {
            return '(Anonymous)';
        }
        return name[1];
    };
    if (autoload && typeof this.window.__autoload === 'function') {
        this.window.__autoload(clss);
    }
    if (typeof clss === 'string') {
        clss = this.window[clss];
    }
    if (typeof clss === 'undefined') {
        throw "Class '"+getFuncName(clss)+"' not found";
        return false; // Return false until replace throw with error triggering
    }
    if (typeof clss !== 'function') {
        throw 'First argument of class_alias() must be a name of user defined class';
        return false;
    }
    if (typeof this.window[alias] === 'function') {
        throw 'Cannot redeclare class '+alias;
        return false;
    }

    this.window[alias] = clss;
    return true;
};

exports.class_exists = function (cls) {
    // Checks if the class exists
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/class_exists
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.function class_a() {this.meth1 = function () {return true;}};
    // *     example 1: \php.var instance_a = new class_a();
    // *     example 1: \php.class_exists('class_a');
    // *     returns 1: true
    var i = '';
    cls = this.window[cls]; // Note: will prevent inner classes

    if (typeof cls !== 'function') {return false;}

    for (i in cls.prototype) {
        return true;
    }
    for (i in cls) { // If static members exist, then consider a "class"
        if (i !== 'prototype') {
            return true;
        }
    }
    if (cls.toSource && cls.toSource().match(/this\./)) {
        // Hackish and non-standard but can probably detect if setting
        // a property (we don't want to test by instantiating as that
        // may have side-effects)
        return true;
    }

    return false;
};

exports.classkit_import = function (file) {
    // !No description available for classkit_import. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/classkit_import
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: file_get_contents
    // %        note 1: does not return an associative array as in PHP
    // %        note 2: Implement instead with include?
    // %        note 3: CLASSKIT_AGGREGATE_OVERRIDE is mentioned as a flag at http://www.php.net/manual/en/runkit.constants.php but not in classkit docs
    // *     example 1: \php.classkit_import('http://example.com/somefile.js');
    // *     returns 1: undefined
    
    eval(this.file_get_contents(file));
};

exports.classkit_method_add = function (classname, methodname, args, code, flags) {
    // !No description available for classkit_method_add. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/classkit_method_add
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.function a(){}
    // *     example 1: \php.classkit_method_add ('a', 'b', 'a,b', 'return a+b');
    // *     returns 1: true

    var func;

    var argmnts = [];

    switch (flags) {
        case 'CLASSKIT_ACC_PROTECTED':
            throw 'Protected not supported';
        case 'CLASSKIT_ACC_PRIVATE':
            throw 'Private not supported';
        case 'CLASSKIT_ACC_PUBLIC':
            default:
                break;
    }

    argmnts = args.split(/,\s*/);

    if (typeof classname === 'string') {
        classname = this.window[classname];
    }

    // Could use the following to add as a static method to the class
    //        func = Function.apply(null, argmnts.concat(code));
    //            classname[methodname] = func;
    func = Function(...argmnts.concat(code));
    classname.prototype[methodname] = func;
    return true;
};

exports.classkit_method_copy = function (dClass, dMethod, sClass, sMethod) {
    // !No description available for classkit_method_copy. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/classkit_method_copy
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.classkit_method_copy('newClass', 'newMethod', 'someClass', 'someMethod');
    // *     returns 1: true
    
    /*
    function A(){}
    function C(){}
    C.d = function () {alert('inside d');}
    classkit_method_copy('A', 'b', 'C', 'd');
    A.b(); // 'inside d'
    */
    sMethod = sMethod || dMethod;

    if (typeof dClass === 'string') {
        dClass = this.window[dClass];
    }
    if (typeof sClass === 'string') {
        sClass = this.window[sClass];
    }

    //dClass[dMethod] = sClass[sMethod]; // Copy from static to static method (as per PHP example)
    dClass.prototype[dMethod] = sClass.prototype[sMethod]; // To copy from instance to instance
    return true;
};

exports.classkit_method_redefine = function (classname, methodname, args, code, flags) {
    // !No description available for classkit_method_redefine. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/classkit_method_redefine
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.classkit_method_redefine('someClass', 'someMethod', 'a,b', 'return a+b');
    // *     returns 1: true

    // In JavaScript, this is identical to classkit_method_add

    var argmnts = [];

    var func;

    switch (flags) {
        case 'CLASSKIT_ACC_PROTECTED':
            throw 'Protected not supported';
        case 'CLASSKIT_ACC_PRIVATE':
            throw 'Private not supported';
        case 'CLASSKIT_ACC_PUBLIC':
            default:
                break;
    }

    argmnts = args.split(/,\s*/);

    if (typeof classname === 'string') {
        classname = this.window[classname];
    }

    // Could use the following to add as a static method to the class
    //        func = Function.apply(null, argmnts.concat(code));
    //            classname[methodname] = func;
    func = Function(...argmnts.concat(code));
    classname.prototype[methodname] = func;
    return true;
};

exports.classkit_method_remove = function (classname, methodname) {
    // !No description available for classkit_method_remove. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/classkit_method_remove
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.classkit_method_remove('someClass', 'someMethod');
    // *     returns 1: true
    
    if (typeof classname === 'string') {
        classname = this.window[classname];
    }
    delete classname.prototype[methodname]; // Delete any on prototype
    // delete classname[methodname]; // Delete any as static class method
    return true;
};

exports.classkit_method_rename = function (classname, methodname, newname) {
    // !No description available for classkit_method_rename. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/classkit_method_rename
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.classkit_method_rename('someClass', 'someMethod', 'newMethod');
    // *     returns 1: true
    
    if (typeof classname === 'string') {
        classname = this.window[classname];
    }

    /*
    var method = classname[methodname]; // Static
    classname[newname] = method;
    delete classname[methodname];
    */

    var method = classname.prototype[methodname];
    classname.prototype[newname] = method;
    delete classname.prototype[methodname];

    return true;
};

exports.compact = function(...args) {
    // Creates a hash containing variables and their values
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/compact
    // +   original by: Waldo Malqui Silva
    // +    tweaked by: Jack
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: \php.var1 = 'Kevin'; var2 = 'van'; var3 = 'Zonneveld';
    // *     example 1: \php.compact('var1', 'var2', 'var3');
    // *     returns 1: {'var1': 'Kevin', 'var2': 'van', 'var3': 'Zonneveld'}

    var matrix = {};

    var that = this;

    var process = value => {
        var i = 0;
        var l = value.length;
        var key_value = '';
        for (i = 0; i < l; i++) {
            key_value = value [ i ];
            if (key_value instanceof Array) {
                process( key_value );
            } else {
                if (typeof that.window[key_value] !== 'undefined') {
                    matrix[key_value] = that.window[key_value];
                }
            }
        }
        return true;
    };

    process(args);
    return matrix;
};

exports.constant = function (name) {
    // Given the name of a constant this function will return the constant's associated value
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/constant
    // +   original by: Paulo Freitas
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.constant('IMAGINARY_CONSTANT1');
    // *     returns 1: null
    var clssPos = 0;

    var clssCnst = null;
    if ((clssPos = name.indexOf('::')) !== -1) {
        clssCnst = name.slice(clssPos+2);
        name = name.slice(0, clssPos);
    }

    if (this.window[name] === undefined) {
        return null;
    }
    if (clssCnst) {
        return this.window[name][clssCnst];
    }
    return this.window[name];
};

exports.convert_cyr_string = (str, from, to) => {
    // Convert from one Cyrillic character set to another
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/convert_cyr_string
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: Assumes and converts to Unicode strings with character
    // %          note 1: code equivalents of the same numbers as in the from or
    // %          note 1: target character set; Note that neither the input or output
    // %          note 1: should be treated as actual Unicode, since the PHP function
    // %          note 1: this is based on does not either
    // %          note 2: One could easily represent (or convert the results) of a
    // %          note 2: string form as arrays of code points instead but since JavaScript
    // %          note 2: currently has no clear binary data type, we chose to use strings
    // %          note 2: as in PHP
    // *     example 1: \php.convert_cyr_string(String.fromCharCode(214), 'k', 'w').charCodeAt(0) === 230; // Char. 214 of KOI8-R gives equivalent number value 230 in win1251
    // *     returns 1: true
    var _cyr_win1251 = [
0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,
32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,
48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,
64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,
80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,
96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,
112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,
46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,
46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,
154,174,190,46,159,189,46,46,179,191,180,157,46,46,156,183,
46,46,182,166,173,46,46,158,163,152,164,155,46,46,46,167,
225,226,247,231,228,229,246,250,233,234,235,236,237,238,239,240,
242,243,244,245,230,232,227,254,251,253,255,249,248,252,224,241,
193,194,215,199,196,197,214,218,201,202,203,204,205,206,207,208,
210,211,212,213,198,200,195,222,219,221,223,217,216,220,192,209,
0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,
32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,
48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,
64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,
80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,
96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,
112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,
32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,
32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,
32,32,32,184,186,32,179,191,32,32,32,32,32,180,162,32,
32,32,32,168,170,32,178,175,32,32,32,32,32,165,161,169,
254,224,225,246,228,229,244,227,245,232,233,234,235,236,237,238,
239,255,240,241,242,243,230,226,252,251,231,248,253,249,247,250,
222,192,193,214,196,197,212,195,213,200,201,202,203,204,205,206,
207,223,208,209,210,211,198,194,220,219,199,216,221,217,215,218,
];

    var _cyr_cp866 = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
    16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,
    32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,
    48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,
    64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,
    80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,
    96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,
    112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,
    225,226,247,231,228,229,246,250,233,234,235,236,237,238,239,240,
    242,243,244,245,230,232,227,254,251,253,255,249,248,252,224,241,
    193,194,215,199,196,197,214,218,201,202,203,204,205,206,207,208,
    35,35,35,124,124,124,124,43,43,124,124,43,43,43,43,43,
    43,45,45,124,45,43,124,124,43,43,45,45,124,45,43,45,
    45,45,45,43,43,43,43,43,43,43,43,35,35,124,124,35,
    210,211,212,213,198,200,195,222,219,221,223,217,216,220,192,209,
    179,163,180,164,183,167,190,174,32,149,158,32,152,159,148,154,
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
    16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,
    32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,
    48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,
    64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,
    80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,
    96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,
    112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,
    32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,
    32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,
    205,186,213,241,243,201,32,245,187,212,211,200,190,32,247,198,
    199,204,181,240,242,185,32,244,203,207,208,202,216,32,246,32,
    238,160,161,230,164,165,228,163,229,168,169,170,171,172,173,174,
    175,239,224,225,226,227,166,162,236,235,167,232,237,233,231,234,
    158,128,129,150,132,133,148,131,149,136,137,138,139,140,141,142,
    143,159,144,145,146,147,134,130,156,155,135,152,157,153,151,154,
    ];

    var _cyr_iso88595 = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
    16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,
    32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,
    48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,
    64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,
    80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,
    96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,
    112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,
    32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,
    32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,
    32,179,32,32,32,32,32,32,32,32,32,32,32,32,32,32,
    225,226,247,231,228,229,246,250,233,234,235,236,237,238,239,240,
    242,243,244,245,230,232,227,254,251,253,255,249,248,252,224,241,
    193,194,215,199,196,197,214,218,201,202,203,204,205,206,207,208,
    210,211,212,213,198,200,195,222,219,221,223,217,216,220,192,209,
    32,163,32,32,32,32,32,32,32,32,32,32,32,32,32,32,
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
    16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,
    32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,
    48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,
    64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,
    80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,
    96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,
    112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,
    32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,
    32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,
    32,32,32,241,32,32,32,32,32,32,32,32,32,32,32,32,
    32,32,32,161,32,32,32,32,32,32,32,32,32,32,32,32,
    238,208,209,230,212,213,228,211,229,216,217,218,219,220,221,222,
    223,239,224,225,226,227,214,210,236,235,215,232,237,233,231,234,
    206,176,177,198,180,181,196,179,197,184,185,186,187,188,189,190,
    191,207,192,193,194,195,182,178,204,203,183,200,205,201,199,202,
    ];

    var _cyr_mac = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
    16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,
    32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,
    48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,
    64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,
    80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,
    96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,
    112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,
    225,226,247,231,228,229,246,250,233,234,235,236,237,238,239,240,
    242,243,244,245,230,232,227,254,251,253,255,249,248,252,224,241,
    160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,
    176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,
    128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,
    144,145,146,147,148,149,150,151,152,153,154,155,156,179,163,209,
    193,194,215,199,196,197,214,218,201,202,203,204,205,206,207,208,
    210,211,212,213,198,200,195,222,219,221,223,217,216,220,192,255,
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
    16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,
    32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,
    48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,
    64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,
    80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,
    96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,
    112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,
    192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,
    208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,
    160,161,162,222,164,165,166,167,168,169,170,171,172,173,174,175,
    176,177,178,221,180,181,182,183,184,185,186,187,188,189,190,191,
    254,224,225,246,228,229,244,227,245,232,233,234,235,236,237,238,
    239,223,240,241,242,243,230,226,252,251,231,248,253,249,247,250,
    158,128,129,150,132,133,148,131,149,136,137,138,139,140,141,142,
    143,159,144,145,146,147,134,130,156,155,135,152,157,153,151,154,
    ];

    var from_table = null;
    var to_table = null;
    var tmp;
    var i=0;
    var retStr = '';

    switch (from.toUpperCase()) {
        case 'W':
            from_table = _cyr_win1251;
            break;
        case 'A':
        case 'D':
            from_table = _cyr_cp866;
            break;
        case 'I':
            from_table = _cyr_iso88595;
            break;
        case 'M':
            from_table = _cyr_mac;
            break;
        case 'K':
            break;
        default:
            throw 'Unknown source charset: '+from; // warning
            break;
    }

    switch (to.toUpperCase()) {
        case 'W':
            to_table = _cyr_win1251;
            break;
        case 'A':
        case 'D':
            to_table = _cyr_cp866;
            break;
        case 'I':
            to_table = _cyr_iso88595;
            break;
        case 'M':
            to_table = _cyr_mac;
            break;
        case 'K':
            break;
        default:
            throw 'Unknown destination charset: '+ to; // fix: make a warning
    }

    if (!str) {
        return str;
    }

    for (i = 0; i < str.length; i++) {
        tmp = (from_table === null)? str.charAt(i) : String.fromCharCode(from_table[ str.charAt(i).charCodeAt(0) ]);
        retStr += (to_table === null) ? tmp : String.fromCharCode(to_table[tmp.charCodeAt(0)+256]);
    }
    return retStr;
};

exports.convert_uuencode = function (str){
    // uuencode a string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/convert_uuencode
    // +   original by: Ole Vrijenhoek
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   reimplemented by: Ole Vrijenhoek
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: is_scalar
    // *     example 1: \php.convert_uuencode("test\ntext text\r\n");
    // *     returns 1: '0=&5S=`IT97AT('1E>'0-"@``'
    // shortcut
    var chr = c => String.fromCharCode(c);

    if (!str || str=="") {
        return chr(0);
    } else if (!this.is_scalar(str)) {
        return false;
    }

    var c = 0;
    var u = 0;
    var i = 0;
    var a = 0;
    var encoded = "";
    var tmp1 = "";
    var tmp2 = "";
    var bytes = {};

    // divide string into chunks of 45 characters
    var chunk = () => {
        bytes = str.substr(u, 45);
        for (i in bytes) {
            bytes[i] = bytes[i].charCodeAt(0);
        }
        if (bytes.length != 0) {
            return bytes.length;
        } else {
            return 0;
        }
    };

    while (chunk() !== 0) {
        c = chunk();
        u += 45;

        // New line encoded data starts with number of bytes encoded.
        encoded += chr(c+32);

        // Convert each char in bytes[] to a byte
        for (i in bytes) {
            tmp1 = bytes[i].charCodeAt(0).toString(2);
            while (tmp1.length < 8) {
                tmp1 = "0" + tmp1;
            }
            tmp2 += tmp1;
        }

        while (tmp2.length % 6) {
            tmp2 = tmp2 + "0";
        }

        for (i=0; i<=(tmp2.length/6)-1; i++) {
            tmp1 = tmp2.substr(a, 6);
            if (tmp1 == "000000") {
                encoded += chr(96);
            } else {
                encoded += chr(parseInt(tmp1, 2)+32);
            }
            a += 6;
        }
        a = 0;
        tmp2 = "";
        encoded += "\n";
    }

    // Add termination characters
    encoded += chr(96)+"\n";

    return encoded;
};

exports.cos = arg => // Returns the cosine of the number in radians
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/cos
// +   original by: Onno Marsman
// *     example 1: \php.cos(8723321.4);
// *     returns 1: -0.18127180117607017
Math.cos(arg);

exports.cosh = arg => // Returns the hyperbolic cosine of the number, defined as (exp(number) + exp(-number))/2
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/cosh
// +   original by: Onno Marsman
// *     example 1: \php.cosh(-0.18127180117607017);
// *     returns 1: 1.0164747716114113
(Math.exp(arg) + Math.exp(-arg)) / 2;

exports.count = function (mixed_var, mode) {
    // Count the number of elements in a variable (usually an array)
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/count
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Waldo Malqui Silva
    // +      bugfixed by: Soren Hansen
    // +      input by: merabi
    // +      improved by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.count([[0,0],[0,-4]], 'COUNT_RECURSIVE');
    // *     returns 1: 6
    // *     example 2: \php.count({'one' : [1,2,3,4,5]}, 'COUNT_RECURSIVE');
    // *     returns 2: 6
    var key;

    var cnt = 0;

    if (mixed_var === null){
        return 0;
    } else if (mixed_var.constructor !== Array && mixed_var.constructor !== Object){
        return 1;
    }

    if (mode === 'COUNT_RECURSIVE') {
        mode = 1;
    }
    if (mode != 1) {
        mode = 0;
    }

    for (key in mixed_var){
        if (mixed_var.hasOwnProperty(key)) {
            cnt++;
            if ( mode==1 && mixed_var[key] && (mixed_var[key].constructor === Array || mixed_var[key].constructor === Object) ){
                cnt += this.count(mixed_var[key], 1);
            }
        }
    }

    return cnt;
};

exports.count_chars = (str, mode) => {
    // Returns info about what characters are used in input
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/count_chars
    // +   original by: Ates Goral (http://magnetiq.com)
    // +    tweaked by: Jack
    // +   bugfixed by: Onno Marsman
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    revised by: Theriault
    // *     example 1: \php.count_chars("Hello World!", 3);
    // *     returns 1: "!HWdelor"
    // *     example 2: \php.count_chars("Hello World!", 1);
    // *     returns 2: {32:1,33:1,72:1,87:1,100:1,101:1,108:3,111:2,114:1}
    var result = {};

    var resultArr = [];
    var i;

    str = ('' + str).split('').sort().join('').match(/(.)\1*/g);

    if ((mode & 1) == 0) {
        for (i = 0; i != 256; i++) {
             result[i] = 0;
        }
    }

    if (mode === 2 || mode === 4) {

        for (i = 0; i != str.length; i += 1) {
             delete result[str[i].charCodeAt(0)];
        }
        for (i in result) {
            result[i] = (mode === 4) ? String.fromCharCode(i) : 0;
        }

    } else if (mode === 3) {

        for (i = 0; i != str.length; i += 1) {
             result[i] = str[i].slice(0, 1);
        }

    } else {

        for (i = 0; i != str.length; i += 1) {
             result[str[i].charCodeAt(0)] = str[i].length;
        }

    }
    if (mode < 3) {
        return result;
    }

    for (i in result) {
       resultArr.push(result[i]);
    }
    return resultArr.join('');
};

exports.crc32 = function ( str ) {
    // Calculate the crc32 polynomial of a string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/crc32
    // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // +   improved by: T0bsn
    // -    depends on: utf8_encode
    // *     example 1: \php.crc32('Kevin van Zonneveld');
    // *     returns 1: 1249991249
    str = this.utf8_encode(str);
    var table = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";

    var crc = 0;
    var x = 0;
    var y = 0;

    crc = crc ^ (-1);
    for (var i = 0, iTop = str.length; i < iTop; i++) {
        y = ( crc ^ str.charCodeAt( i ) ) & 0xFF;
        x = "0x" + table.substr( y * 9, 8 );
        crc = ( crc >>> 8 ) ^ x;
    }

    return crc ^ (-1);
};

exports.create_function = (args, code) => {
    // Creates an anonymous function, and returns its name (funny, eh?)
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/create_function
    // +   original by: Johnny Mast (http://www.phpvrouwen.nl)
    // +   reimplemented by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: f = create_function('a, b', "return (a + b);");
    // *     example 1: f(1, 2);
    // *     returns 1: 3
     try {
        return Function(...args.split(',').concat(code));
     }
     catch (e) {
         return false;
     }
};

exports.ctype_alnum = function (text) {
    // Checks for alphanumeric character(s)
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/ctype_alnum
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: setlocale
    // *     example 1: \php.ctype_alnum('AbC12');
    // *     returns 1: true
    if (typeof text !== 'string') {
        return false;
    }
    // BEGIN REDUNDANT
    this.setlocale('LC_ALL', 0); // ensure setup of localization variables takes place
    // END REDUNDANT
    return text.search(this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.an) !== -1;
};

exports.ctype_alpha = function (text) {
    // Checks for alphabetic character(s)
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/ctype_alpha
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: setlocale
    // *     example 1: \php.ctype_alpha('Az');
    // *     returns 1: true
    if (typeof text !== 'string') {
        return false;
    }
    // BEGIN REDUNDANT
    this.setlocale('LC_ALL', 0); // ensure setup of localization variables takes place
    // END REDUNDANT
    return text.search(this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.al) !== -1;
};

exports.ctype_cntrl = function (text) {
    // Checks for control character(s)
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/ctype_cntrl
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: setlocale
    // *     example 1: \php.ctype_cntrl('\u0020');
    // *     returns 1: true
    if (typeof text !== 'string') {
        return false;
    }
    // BEGIN REDUNDANT
    this.setlocale('LC_ALL', 0); // ensure setup of localization variables takes place
    // END REDUNDANT
    return text.search(this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.ct) !== -1;
};

exports.ctype_digit = function (text) {
    // Checks for numeric character(s)
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/ctype_digit
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: setlocale
    // *     example 1: \php.ctype_digit('150');
    // *     returns 1: true
    if (typeof text !== 'string') {
        return false;
    }
    // BEGIN REDUNDANT
    this.setlocale('LC_ALL', 0); // ensure setup of localization variables takes place
    // END REDUNDANT
    return text.search(this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.dg) !== -1;
};

exports.ctype_graph = function (text) {
    // Checks for any printable character(s) except space
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/ctype_graph
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: setlocale
    // *     example 1: \php.ctype_graph('!%');
    // *     returns 1: true
    if (typeof text !== 'string') {
        return false;
    }
    // BEGIN REDUNDANT
    this.setlocale('LC_ALL', 0); // ensure setup of localization variables takes place
    // END REDUNDANT
    return text.search(this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.gr) !== -1;
};

exports.ctype_lower = function (text) {
    // Checks for lowercase character(s)
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/ctype_lower
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: setlocale
    // *     example 1: \php.ctype_lower('abc');
    // *     returns 1: true
    if (typeof text !== 'string') {
        return false;
    }
    // BEGIN REDUNDANT
    this.setlocale('LC_ALL', 0); // ensure setup of localization variables takes place
    // END REDUNDANT
    return text.search(this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.lw) !== -1;
};

exports.ctype_print = function (text) {
    // Checks for printable character(s)
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/ctype_print
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: setlocale
    // *     example 1: \php.ctype_print('AbC!#12');
    // *     returns 1: true
    if (typeof text !== 'string') {
        return false;
    }
    // BEGIN REDUNDANT
    this.setlocale('LC_ALL', 0); // ensure setup of localization variables takes place
    // END REDUNDANT
    return text.search(this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.pr) !== -1;
};

exports.ctype_punct = function (text) {
    // Checks for any printable character which is not whitespace or an alphanumeric character
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/ctype_punct
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: setlocale
    // *     example 1: \php.ctype_punct('!?');
    // *     returns 1: true
    if (typeof text !== 'string') {
        return false;
    }
    // BEGIN REDUNDANT
    this.setlocale('LC_ALL', 0); // ensure setup of localization variables takes place
    // END REDUNDANT
    return text.search(this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.pu) !== -1;
};

exports.ctype_space = function (text) {
    // Checks for whitespace character(s)
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/ctype_space
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: setlocale
    // *     example 1: \php.ctype_space('\t\n');
    // *     returns 1: true
    if (typeof text !== 'string') {
        return false;
    }
    // BEGIN REDUNDANT
    this.setlocale('LC_ALL', 0); // ensure setup of localization variables takes place
    // END REDUNDANT
    return text.search(this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.sp) !== -1;
};

exports.ctype_upper = function (text) {
    // Checks for uppercase character(s)
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/ctype_upper
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: setlocale
    // *     example 1: \php.ctype_upper('AZ');
    // *     returns 1: true
    if (typeof text !== 'string') {
        return false;
    }
    // BEGIN REDUNDANT
    this.setlocale('LC_ALL', 0); // ensure setup of localization variables takes place
    // END REDUNDANT
    return text.search(this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.up) !== -1;
};

exports.ctype_xdigit = function (text) {
    // Checks for character(s) representing a hexadecimal digit
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/ctype_xdigit
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: setlocale
    // *     example 1: \php.ctype_xdigit('01dF');
    // *     returns 1: true
    if (typeof text !== 'string') {
        return false;
    }
    // BEGIN REDUNDANT
    this.setlocale('LC_ALL', 0); // ensure setup of localization variables takes place
    // END REDUNDANT
    return text.search(this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.xd) !== -1;
};

exports.current = function (arr) {
    // Return the element currently pointed to by the internal array pointer
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/current
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Uses global: php_js to store the array pointer
    // *     example 1: \php.transport = ['foot', 'bike', 'car', 'plane'];
    // *     example 1: \php.current(transport);
    // *     returns 1: 'foot'
    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.pointers = this.php_js.pointers || [];
    var indexOf = function (value) {
        for (var i = 0, length=this.length; i < length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    };
    // END REDUNDANT
    var pointers = this.php_js.pointers;
    if (!pointers.indexOf) {
        pointers.indexOf = indexOf;
    }
    if (pointers.indexOf(arr) === -1) {
        pointers.push(arr, 0);
    }
    var arrpos = pointers.indexOf(arr);
    var cursor = pointers[arrpos+1];
    if (arr instanceof Array) {
        return arr[cursor] || false;
    }
    var ct = 0;
    for (var k in arr) {
        if (ct === cursor) {
            return arr[k];
        }
        ct++;
    }
    return false; // Empty
};

exports.date = function(format, timestamp) {
    // Format a local date/time
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/date
    // +   original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
    // +      parts by: Peter-Paul Koch (http://www.quirksmode.org/js/beat.html)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: MeEtc (http://yass.meetcweb.com)
    // +   improved by: Brad Touesnard
    // +   improved by: Tim Wiel
    // +   improved by: Bryan Elliott
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: David Randall
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Theriault
    // +  derived from: gettimeofday
    // +      input by: majak
    // +   bugfixed by: majak
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Alex
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Theriault
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Theriault
    // +   improved by: Thomas Beaucourt (http://www.webapp.fr)
    // +   improved by: JT
    // +   improved by: Theriault
    // +   improved by: Rafał Kukawski (http://blog.kukawski.pl)
    // %        note 1: Uses global: php_js to store the default timezone
    // *     example 1: \php.date('H:m:s \\m \\i\\s \\m\\o\\n\\t\\h', 1062402400);
    // *     returns 1: '09:09:40 m is month'
    // *     example 2: \php.date('F j, Y, g:i a', 1062462400);
    // *     returns 2: 'September 2, 2003, 2:26 am'
    // *     example 3: \php.date('Y W o', 1062462400);
    // *     returns 3: '2003 36 2003'
    // *     example 4: x = date('Y m d', (new Date()).getTime()/1000);
    // *     example 4: (x+'').length == 10 // 2009 01 09
    // *     returns 4: true
    // *     example 5: \php.date('W', 1104534000);
    // *     returns 5: '53'
    // *     example 6: \php.date('B t', 1104534000);
    // *     returns 6: '999 31'
    // *     example 7: \php.date('W U', 1293750000.82); // 2010-12-31
    // *     returns 7: '52 1293750000'
    // *     example 8: \php.date('W', 1293836400); // 2011-01-01
    // *     returns 8: '52'
    // *     example 9: \php.date('W Y-m-d', 1293974054); // 2011-01-02
    // *     returns 9: '52 2011-01-02'
    var that = this;

    var jsdate;
    var f;
    var formatChr = /\\?([a-z])/gi;
    var formatChrCb;

    var // Keep this here (works, but for code commented-out
    // below for file size reasons)
    //, tal= [],
    _pad = (n, c) => {
        if ((n = n + "").length < c) {
            return new Array((++c) - n.length).join("0") + n;
        } else {
            return n;
        }
    };

    var txt_words = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur",
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

    var txt_ordin = {
        1: "st",
        2: "nd",
        3: "rd",
        21: "st",
        22: "nd",
        23: "rd",
        31: "st"
    };

    formatChrCb = (t, s) => f[t] ? f[t]() : s;
    f = {
    // Day
        d() { // Day of month w/leading 0; 01..31
            return _pad(f.j(), 2);
        },
        D() { // Shorthand day name; Mon...Sun
            return f.l().slice(0, 3);
        },
        j() { // Day of month; 1..31
            return jsdate.getDate();
        },
        l() { // Full day name; Monday...Sunday
            return txt_words[f.w()] + 'day';
        },
        N() { // ISO-8601 day of week; 1[Mon]..7[Sun]
            return f.w() || 7;
        },
        S() { // Ordinal suffix for day of month; st, nd, rd, th
            return txt_ordin[f.j()] || 'th';
        },
        w() { // Day of week; 0[Sun]..6[Sat]
            return jsdate.getDay();
        },
        z() {
            // Day of year; 0..365
            var a = new Date(f.Y(), f.n() - 1, f.j());

            var b = new Date(f.Y(), 0, 1);
            return Math.round((a - b) / 864e5) + 1;
        },

    // Week
        W() {
            // ISO-8601 week number
            var a = new Date(f.Y(), f.n() - 1, f.j() - f.N() + 3);

            var b = new Date(a.getFullYear(), 0, 4);
            return 1 + Math.round((a - b) / 864e5 / 7);
        },

    // Month
        F() { // Full month name; January...December
            return txt_words[6 + f.n()];
        },
        m() { // Month w/leading 0; 01...12
            return _pad(f.n(), 2);
        },
        M() { // Shorthand month name; Jan...Dec
            return f.F().slice(0, 3);
        },
        n() { // Month; 1...12
            return jsdate.getMonth() + 1;
        },
        t() { // Days in month; 28...31
            return (new Date(f.Y(), f.n(), 0)).getDate();
        },

    // Year
        L() {
            // Is leap year?; 0 or 1
            var y = f.Y();

            var a = y & 3;
            var b = y % 4e2;
            var c = y % 1e2;
            return 0 + (!a && (c || !b));
        },
        o() {
            // ISO-8601 year
            var n = f.n();

            var W = f.W();
            var Y = f.Y();
            return Y + (n === 12 && W < 9 ? -1 : n === 1 && W > 9);
        },
        Y() { // Full year; e.g. 1980...2010
            return jsdate.getFullYear();
        },
        y() { // Last two digits of year; 00...99
            return (f.Y() + "").slice(-2);
        },

    // Time
        a() { // am or pm
            return jsdate.getHours() > 11 ? "pm" : "am";
        },
        A() { // AM or PM
            return f.a().toUpperCase();
        },
        B() {
            // Swatch Internet time; 000..999
            var // Hours
            H = jsdate.getUTCHours() * 36e2; // Seconds

            var // Minutes
            i = jsdate.getUTCMinutes() * 60;

            var s = jsdate.getUTCSeconds();
            return _pad(Math.floor((H + i + s + 36e2) / 86.4) % 1e3, 3);
        },
        g() { // 12-Hours; 1..12
            return f.G() % 12 || 12;
        },
        G() { // 24-Hours; 0..23
            return jsdate.getHours();
        },
        h() { // 12-Hours w/leading 0; 01..12
            return _pad(f.g(), 2);
        },
        H() { // 24-Hours w/leading 0; 00..23
            return _pad(f.G(), 2);
        },
        i() { // Minutes w/leading 0; 00..59
            return _pad(jsdate.getMinutes(), 2);
        },
        s() { // Seconds w/leading 0; 00..59
            return _pad(jsdate.getSeconds(), 2);
        },
        u() { // Microseconds; 000000-999000
            return _pad(jsdate.getMilliseconds() * 1000, 6);
        },

    // Timezone
        e() { // Timezone identifier; e.g. Atlantic/Azores, ...
// The following works, but requires inclusion of the very large
// timezone_abbreviations_list() function.
/*              var abbr = '', i = 0, os = 0;
            if (that.php_js && that.php_js.default_timezone) {
                return that.php_js.default_timezone;
            }
            if (!tal.length) {
                tal = that.timezone_abbreviations_list();
            }
            for (abbr in tal) {
                for (i = 0; i < tal[abbr].length; i++) {
                    os = -jsdate.getTimezoneOffset() * 60;
                    if (tal[abbr][i].offset === os) {
                        return tal[abbr][i].timezone_id;
                    }
                }
            }
*/
            return 'UTC';
        },
        I() {
            // DST observed?; 0 or 1
            // Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
            // If they are not equal, then DST is observed.
            var // Jan 1
            a = new Date(f.Y(), 0); // Jul 1 UTC

            var // Jan 1 UTC
            c = Date.UTC(f.Y(), 0);

            var // Jul 1
            b = new Date(f.Y(), 6);

            var d = Date.UTC(f.Y(), 6);
            return 0 + ((a - c) !== (b - d));
        },
        O() { // Difference to GMT in hour format; e.g. +0200
            var a = jsdate.getTimezoneOffset();
            return (a > 0 ? "-" : "+") + _pad(Math.abs(a / 60 * 100), 4);
        },
        P() { // Difference to GMT w/colon; e.g. +02:00
            var O = f.O();
            return (O.substr(0, 3) + ":" + O.substr(3, 2));
        },
        T() { // Timezone abbreviation; e.g. EST, MDT, ...
// The following works, but requires inclusion of the very
// large timezone_abbreviations_list() function.
/*              var abbr = '', i = 0, os = 0, default = 0;
            if (!tal.length) {
                tal = that.timezone_abbreviations_list();
            }
            if (that.php_js && that.php_js.default_timezone) {
                default = that.php_js.default_timezone;
                for (abbr in tal) {
                    for (i=0; i < tal[abbr].length; i++) {
                        if (tal[abbr][i].timezone_id === default) {
                            return abbr.toUpperCase();
                        }
                    }
                }
            }
            for (abbr in tal) {
                for (i = 0; i < tal[abbr].length; i++) {
                    os = -jsdate.getTimezoneOffset() * 60;
                    if (tal[abbr][i].offset === os) {
                        return abbr.toUpperCase();
                    }
                }
            }
*/
            return 'UTC';
        },
        Z() { // Timezone offset in seconds (-43200...50400)
            return -jsdate.getTimezoneOffset() * 60;
        },

    // Full Date/Time
        c() { // ISO-8601 date.
            return 'Y-m-d\\Th:i:sP'.replace(formatChr, formatChrCb);
        },
        r() { // RFC 2822
            return 'D, d M Y H:i:s O'.replace(formatChr, formatChrCb);
        },
        U() { // Seconds since UNIX epoch
            return jsdate.getTime() / 1000 | 0;
        }
    };
    this.date = function (format, timestamp) {
        that = this;
        jsdate = (
            (typeof timestamp === 'undefined') ? new Date() : // Not provided
            (timestamp instanceof Date) ? new Date(timestamp) : // JS Date()
            new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
        );
        return format.replace(formatChr, formatChrCb);
    };
    return this.date(format, timestamp);
};

exports.date_default_timezone_get = function () {
    // !No description available for date_default_timezone_get. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/date_default_timezone_get
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: timezone_abbreviations_list
    // %        note 1: Uses global: php_js to store the default timezone
    // *     example 1: \php.date_default_timezone_get();
    // *     returns 1: 'unknown'
    var tal = {};

    var abbr = '';
    var i = 0;
    var curr_offset = -(new Date()).getTimezoneOffset()*60;

    if (this.php_js) {
        if (this.php_js.default_timezone) { // set by date_default_timezone_set
            return this.php_js.default_timezone;
        }
        if (this.php_js.ENV && this.php_js.ENV.TZ) { // getenv
            return this.php_js.ENV.TZ;
        }
        if (this.php_js.ini && this.php_js.ini['date.timezone']) { // e.g., if set by ini_set()
            return this.php_js.ini['date.timezone'].local_value ? this.php_js.ini['date.timezone'].local_value : this.php_js.ini['date.timezone'].global_value;
        }
    }
    // Get from system
    tal = this.timezone_abbreviations_list();
    for (abbr in tal) {
        for (i=0; i < tal[abbr].length; i++) {
            if (tal[abbr][i].offset === curr_offset) {
                return tal[abbr][i].timezone_id;
            }
        }
    }
    return 'UTC';
};

exports.date_default_timezone_set = function (tz) {
    // Sets the default timezone used by all date/time functions in a script
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/date_default_timezone_set
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: timezone_abbreviations_list
    // %        note 1: Uses global: php_js to store the default timezone
    // *     example 1: \php.date_default_timezone_set('unknown');
    // *     returns 1: 'unknown'
    var tal = {};

    var abbr = '';
    var i = 0;

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    // END REDUNDANT
    // PHP verifies that the timezone is valid
    tal = this.timezone_abbreviations_list();
    for (abbr in tal) {
        for (i=0; i < tal[abbr].length; i++) {
            if (tal[abbr][i].timezone_id === tz) {
                this.php_js.default_timezone = tz;
                return true;
            }
        }
    }
    return false;
};

exports.date_parse = function (date) {
    // Returns associative array with detailed info about given date
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/date_parse
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: strtotime
    // *     example 1: \php.date_parse('2006-12-12 10:00:00.5');
    // *     returns 1: {year : 2006, month: 12, day: 12, hour: 10, minute: 0, second: 0, fraction: 0.5, warning_count: 0, warnings: [], error_count: 0, errors: [], is_localtime: false}

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    // END REDUNDANT

    var warningsOffset = this.php_js.warnings ? this.php_js.warnings.length : null;
    var errorsOffset = this.php_js.errors ? this.php_js.errors.length : null;

    try {
        var ts = this.strtotime(date);
    }
    finally {
        if (!ts) {
            return false;
        }
    }

    var dt = new Date(ts*1000);

    var retObj = { // Grab any new warnings or errors added (not implemented yet in strtotime()); throwing warnings, notices, or errors could also be easily monitored by using 'watch' on this.php_js.latestWarning, etc. and/or calling any defined error handlers
        warning_count: warningsOffset !== null ? this.php_js.warnings.slice(warningsOffset).length : 0,
        warnings: warningsOffset !== null ? this.php_js.warnings.slice(warningsOffset) : [],
        error_count: errorsOffset !== null ? this.php_js.errors.slice(errorsOffset).length : 0,
        errors: errorsOffset !== null ? this.php_js.errors.slice(errorsOffset) : []
    };
    retObj.year = dt.getFullYear();
    retObj.month = dt.getMonth()+1;
    retObj.day = dt.getDate();
    retObj.hour = dt.getHours();
    retObj.minute = dt.getMinutes();
    retObj.second = dt.getSeconds();
    retObj.fraction = parseFloat('0.'+dt.getMilliseconds());
    retObj.is_localtime = dt.getTimezoneOffset !== 0;

    return retObj;
};

exports.deaggregate = function (obj, class_name) {
    // !No description available for deaggregate. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/deaggregate
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.var A = function () {};
    // *     example 1: A.prop = 5;
    // *     example 1: A.prototype.someMethod = function () {};
    // *     example 1: \php.var b = {};
    // *     example 1: \php.aggregate(b, 'A');
    // *     example 1: \php.deaggregate(b, 'A');
    // *     returns 1: undefined

    var p='';

    var idx=-1;
    var pos=-1;
    var i=0;

    var indexOf = function (value) {
        for (var i = 0, length=this.length; i < length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    };

    var getFuncName = fn => {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
        if (!name) {
            return '(Anonymous)';
        }
        return name[1];
    };

    if (!this.php_js || !this.php_js.aggregateRecords || !this.php_js.aggregateKeys || !this.php_js.aggregateClasses) {
        return;
    }

    if (!this.php_js.aggregateKeys.indexOf) {
        this.php_js.aggregateKeys.indexOf = indexOf;
    }
    idx = this.php_js.aggregateKeys.indexOf(obj);
    if (idx === -1) {
        return;
    }

    if (class_name) {
        if (typeof class_name === 'string') { // PHP behavior
            class_name = this.window[class_name];
        }
        if (!this.php_js.aggregateClasses[idx].indexOf) {
            this.php_js.aggregateClasses[idx].indexOf = indexOf;
        }
        pos = this.php_js.aggregateClasses[idx].indexOf(getFuncName(class_name));
        if (pos !== -1) {
            for (p in this.php_js.aggregateRecords[idx][pos]) {
                delete obj[p];
            }
            this.php_js.aggregateClasses[idx].splice(pos, 1);
            this.php_js.aggregateRecords[idx].splice(pos, 1);
        }
    }
    else {
        for (i=0; i < this.php_js.aggregateClasses[idx].length; i++) {
            for (p in this.php_js.aggregateRecords[idx][i]) {
                delete obj[p];
            }
        }
        this.php_js.aggregateClasses.splice(idx, 1);
        this.php_js.aggregateRecords.splice(idx, 1);
    }
};

exports.decbin = number => {
    // Returns a string containing a binary representation of the number
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/decbin
    // +   original by: Enrique Gonzalez
    // +   bugfixed by: Onno Marsman
    // +   improved by: http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
    // +   input by: pilus
    // +   input by: nord_ua
    // *     example 1: \php.decbin(12);
    // *     returns 1: '1100'
    // *     example 2: \php.decbin(26);
    // *     returns 2: '11010'
    // *     example 3: \php.decbin('26');
    // *     returns 3: '11010'
    if (number < 0) {
        number = 0xFFFFFFFF + number + 1;
    }
    return parseInt(number, 10).toString(2);
};

exports.dechex = number => {
    // Returns a string containing a hexadecimal representation of the given number
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/dechex
    // +   original by: Philippe Baumann
    // +   bugfixed by: Onno Marsman
    // +   improved by: http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
    // +   input by: pilus
    // *     example 1: \php.dechex(10);
    // *     returns 1: 'a'
    // *     example 2: \php.dechex(47);
    // *     returns 2: '2f'
    // *     example 3: \php.dechex(-1415723993);
    // *     returns 3: 'ab9dc427'
    if (number < 0) {
        number = 0xFFFFFFFF + number + 1;
    }
    return parseInt(number, 10).toString(16);
};

exports.decoct = number => {
    // Returns a string containing an octal representation of the given number
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/decoct
    // +   original by: Enrique Gonzalez
    // +   bugfixed by: Onno Marsman
    // +   improved by: http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
    // +   input by: pilus
    // *     example 1: \php.decoct(15);
    // *     returns 1: '17'
    // *     example 2: \php.decoct(264);
    // *     returns 2: '410'
    if (number < 0) {
        number = 0xFFFFFFFF + number + 1;
    }
    return parseInt(number, 10).toString(8);
};

exports.define = function (name, value) {
    // Define a new constant
    //
    // version: 903.3016
    // discuss at: http://phpjs.org/functions/define
    // +      original by: Paulo Freitas
    // +       revised by: Andrea Giammarchi (http://webreflection.blogspot.com)
    // + reimplemented by: Brett Zamir (http://brett-zamir.me)
    // *        example 1: \php.define('IMAGINARY_CONSTANT1', 'imaginary_value1');
    // *        results 1: IMAGINARY_CONSTANT1 == 'imaginary_value1'
    var defn;

    var replace;
    var script;
    var that = this;
    var d = this.window.document;
    var toString = (name, value) => 'const ' + name + '=' + (
        /^(null|true|false|(\+|\-)?\d+(\.\d+)?)$/.test(value = String(value)) ? value : '"' + replace(value) + '"'
        );
    try {
        eval('const e=1');
        replace = value => {
            var replace = {
                "\x08":"b",
                "\x0A":"\\n",
                "\x0B":"v",
                "\x0C":"f",
                "\x0D":"\\r",
                '"':'"',
                "\\":"\\"
            };
            return value.replace(/\x08|[\x0A-\x0D]|"|\\/g, value => "\\"+replace[value]);
        };
        defn = (name, value) => {
            if (d.createElementNS) {
                script = d.createElementNS('http://www.w3.org/1999/xhtml', 'script');
            } else {
                script = d.createElement('script');
            }
            script.type = 'text/javascript';
            script.appendChild(d.createTextNode(toString(name, value)));
            d.documentElement.appendChild(script);
            d.documentElement.removeChild(script);
        };
    } catch (e){
        replace = value => {
            var replace = {
                "\x0A":"\\n",
                "\x0D":"\\r"
            };
            return value.replace(/"/g, '""').replace(/\n|\r/g, value => replace[value]);
        };
        defn = (this.execScript ?
            (name, value) => {
                that.execScript(toString(name, value), 'VBScript');
            }:
            (name, value) => {
                eval(toString(name, value).substring(6));
            });
    }
    defn(name, value);
};

exports.defined = function (constant_name)  {
    // Check whether a constant exists
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/defined
    // +   original by: Waldo Malqui Silva
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    revised by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: Because this function can (albeit only temporarily) overwrite a global variable,
    // %          note 1: it is not thread-safe (normally not a concern for JavaScript, but would be if used
    // %          note 1: in a threaded environment, e.g., DOM worker threads)
    // *     example 1: \php.defined('IMAGINARY_CONSTANT1');
    // *     returns 1: false
    var tmp = this.window[constant_name];

    this.window[constant_name] = this.window[constant_name] ? 'changed'+this.window[constant_name].toString() : 'changed';
    var returnval = this.window[constant_name] === tmp;
    if (!returnval) { // Reset
        this.window[constant_name] = tmp;
    }

    return returnval;
};

exports.deg2rad = angle => // Converts the number in degrees to the radian equivalent
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/deg2rad
// +   original by: Enrique Gonzalez
// *     example 1: \php.deg2rad(45);
// *     returns 1: 0.7853981633974483

angle/180 * Math.PI;

exports.die = function (status) {
    // !No description available for die. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/die
    // +   original by: Brett Zamir (http://brett-zamir.me)
    //  -   depends on: exit
    // %        note 1: Should be considered expirimental. Please comment on this function.
    // *     example 1: \php.die();
    // *     returns 1: null
    return this.exit(status);
};

exports.dirname = path => // Returns the directory name component of the path
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/dirname
// +   original by: Ozh
// +   improved by: XoraX (http://www.xorax.info)
// *     example 1: \php.dirname('/etc/passwd');
// *     returns 1: '/etc'
// *     example 2: \php.dirname('c:/Temp/x');
// *     returns 2: 'c:/Temp'
// *     example 3: \php.dirname('/dir/test/');
// *     returns 3: '/dir'

path.replace(/\\/g,'/').replace(/\/[^\/]*\/?$/, '');

exports.doubleval = function (mixed_var) {
    // !No description available for doubleval. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/doubleval
    // +   original by: Brett Zamir (http://brett-zamir.me)
    //  -   depends on: floatval
    // %        note 1: 1.0 is simplified to 1 before it can be accessed by the function, this makes
    // %        note 1: it different from the PHP implementation. We can't fix this unfortunately.
    // *     example 1: \php.doubleval(186);
    // *     returns 1: 186.00
    return this.floatval(mixed_var);
};

exports.each = function (arr) {
    // Return the currently pointed key..value pair in the passed array, and advance the pointer to the next element
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/each
    // +   original by: Ates Goral (http://magnetiq.com)
    // +    revised by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Uses global: php_js to store the array pointer
    // *     example 1: \php.each({a: "apple", b: "balloon"});
    // *     returns 1: {0: "a", 1: "apple", key: "a", value: "apple"}
    //  Will return a 4-item object unless a class property 'returnArrayOnly'
    //  is set to true on this function if want to only receive a two-item
    //  numerically-indexed array (for the sake of array destructuring in
    //  JavaScript 1.7+ (similar to list() in PHP, but as PHP does it automatically
    //  in that context and JavaScript cannot, we needed something to allow that option)
    //  See https://developer.mozilla.org/en/New_in_JavaScript_1.7#Destructuring_assignment

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.pointers = this.php_js.pointers || [];
    var indexOf = function (value) {
        for (var i = 0, length=this.length; i < length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    };
    // END REDUNDANT
    var pointers = this.php_js.pointers;
    if (!pointers.indexOf) {
        pointers.indexOf = indexOf;
    }
    if (pointers.indexOf(arr) === -1) {
        pointers.push(arr, 0);
    }
    var arrpos = pointers.indexOf(arr);
    var cursor = pointers[arrpos+1];
    var pos = 0;

    if (!(arr instanceof Array)) {
        var ct = 0;
        for (var k in arr) {
            if (ct === cursor) {
                pointers[arrpos+1] += 1;
                if (each.returnArrayOnly) {
                    return [k, arr[k]];
                } else {
                    return {
                        1:arr[k],
                        value:arr[k],
                        0:k,
                        key:k
                    };
                }
            }
            ct++;
        }
        return false; // Empty
    }
    if (arr.length === 0 || cursor === arr.length) {
        return false;
    }
    pos = cursor;
    pointers[arrpos+1] += 1;
    if (each.returnArrayOnly) {
        return [pos, arr[pos]];
    } else {
        return {
            1:arr[pos],
            value:arr[pos],
            0:pos,
            key:pos
        };
    }
};

exports.echo = function () {
    // !No description available for echo. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/echo
    // +   original by: Philip Peterson
    // +   improved by: echo is bad
    // +   improved by: Nate
    // +    revised by: Der Simon (http://innerdom.sourceforge.net/)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Eugene Bulkin (http://doubleaw.com/)
    // +   input by: JB
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: If browsers start to support DOM Level 3 Load and Save (parsing/serializing),
    // %        note 1: we wouldn't need any such long code (even most of the code below). See
    // %        note 1: link below for a cross-browser implementation in JavaScript. HTML5 might
    // %        note 1: possibly support DOMParser, but that is not presently a standard.
    // %        note 2: Although innerHTML is widely used and may become standard as of HTML5, it is also not ideal for
    // %        note 2: use with a temporary holder before appending to the DOM (as is our last resort below),
    // %        note 2: since it may not work in an XML context
    // %        note 3: Using innerHTML to directly add to the BODY is very dangerous because it will
    // %        note 3: break all pre-existing references to HTMLElements.
    // *     example 1: \php.echo('<div><p>abc</p><p>abc</p></div>');
    // *     returns 1: undefined
    var arg = '';

    var argc = arguments.length;
    var argv = arguments;
    var i = 0;
    var win = this.window;
    var d = win.document;
    var ns_xhtml = 'http://www.w3.org/1999/xhtml';
    var ns_xul = 'http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul'; // If we're in a XUL context

    var holder;

    var stringToDOM = (str, parent, ns, container) => {
        var extraNSs = '';
        if (ns === ns_xul) {
            extraNSs = ' xmlns:html="'+ns_xhtml+'"';
        }
        var stringContainer = '<'+container+' xmlns="'+ns+'"'+extraNSs+'>'+str+'</'+container+'>';
        if (win.DOMImplementationLS &&
            win.DOMImplementationLS.createLSInput &&
            win.DOMImplementationLS.createLSParser) { // Follows the DOM 3 Load and Save standard, but not
            // implemented in browsers at present; HTML5 is to standardize on innerHTML, but not for XML (though
            // possibly will also standardize with DOMParser); in the meantime, to ensure fullest browser support, could
            // attach http://svn2.assembla.com/svn/brettz9/DOMToString/DOM3.js (see http://svn2.assembla.com/svn/brettz9/DOMToString/DOM3.xhtml for a simple test file)
            var lsInput = DOMImplementationLS.createLSInput();
            // If we're in XHTML, we'll try to allow the XHTML namespace to be available by default
            lsInput.stringData = stringContainer;
            var lsParser = DOMImplementationLS.createLSParser(1, null); // synchronous, no schema type
            return lsParser.parse(lsInput).firstChild;
        }
        else if (win.DOMParser) {
            // If we're in XHTML, we'll try to allow the XHTML namespace to be available by default
            try {
                var fc = new DOMParser().parseFromString(stringContainer, 'text/xml');
                if (!fc || !fc.documentElement ||
                        fc.documentElement.localName !== 'parsererror' ||
                        fc.documentElement.namespaceURI !== 'http://www.mozilla.org/newlayout/xml/parsererror.xml') {
                    return fc.documentElement.firstChild;
                }
                // If there's a parsing error, we just continue on
            }
            catch(e) {
                // If there's a parsing error, we just continue on
            }
        }
        else if (win.ActiveXObject) { // We don't bother with a holder in Explorer as it doesn't support namespaces
            var axo = new ActiveXObject('MSXML2.DOMDocument');
            axo.loadXML(str);
            return axo.documentElement;
        }
        /*else if (win.XMLHttpRequest) { // Supposed to work in older Safari
            var req = new win.XMLHttpRequest;
            req.open('GET', 'data:application/xml;charset=utf-8,'+encodeURIComponent(str), false);
            if (req.overrideMimeType) {
                req.overrideMimeType('application/xml');
            }
            req.send(null);
            return req.responseXML;
        }*/
        // Document fragment did not work with innerHTML, so we create a temporary element holder
        // If we're in XHTML, we'll try to allow the XHTML namespace to be available by default
        //if (d.createElementNS && (d.contentType && d.contentType !== 'text/html')) { // Don't create namespaced elements if we're being served as HTML (currently only Mozilla supports this detection in true XHTML-supporting browsers, but Safari and Opera should work with the above DOMParser anyways, and IE doesn't support createElementNS anyways)
        if (d.createElementNS &&  // Browser supports the method
            ((// We know it's not HTML4 or less, if the tag is not HTML (even if the root namespace is null)
        d.documentElement.namespaceURI || // We can use if the document is using a namespace
            d.documentElement.nodeName.toLowerCase() !== 'html' || d.contentType && d.contentType !== 'text/html') // We know it's not regular HTML4 or less if this is Mozilla (only browser supporting the attribute) and the content type is something other than text/html; other HTML5 roots (like svg) still have a namespace
        )) { // Don't create namespaced elements if we're being served as HTML (currently only Mozilla supports this detection in true XHTML-supporting browsers, but Safari and Opera should work with the above DOMParser anyways, and IE doesn't support createElementNS anyways); last test is for the sake of being in a pure XML document
            holder = d.createElementNS(ns, container);
        }
        else {
            holder = d.createElement(container); // Document fragment did not work with innerHTML
        }
        holder.innerHTML = str;
        while (holder.firstChild) {
            parent.appendChild(holder.firstChild);
        }
        return false;
        // throw 'Your browser does not support DOM parsing as required by echo()';
    };


    var ieFix = node => {
        if (node.nodeType === 1) {
            var newNode = d.createElement(node.nodeName);
            var i;
            var len;
            if (node.attributes && node.attributes.length > 0) {
                for (i = 0, len = node.attributes.length; i < len; i++) {
                    newNode.setAttribute(node.attributes[i].nodeName, node.getAttribute(node.attributes[i].nodeName));
                }
            }
            if (node.childNodes && node.childNodes.length > 0) {
                for (i = 0, len = node.childNodes.length; i < len; i++) {
                    newNode.appendChild(ieFix(node.childNodes[i]));
                }
            }
            return newNode;
        }
        else {
            return d.createTextNode(node.nodeValue);
        }
    };

    for (i = 0; i < argc; i++ ) {
        arg = argv[i];
        if (this.php_js && this.php_js.ini && this.php_js.ini['phpjs.echo_embedded_vars']) {
            arg = arg.replace(/(.?)\{\$(.*?)\}/g, (s, m1, m2) => {
                // We assume for now that embedded variables do not have dollar sign; to add a dollar sign, you currently must use {$$var} (We might change this, however.)
                // Doesn't cover all cases yet: see http://php.net/manual/en/language.types.string.php#language.types.string.syntax.double
                if (m1 !== '\\') {
                    return m1+eval(m2);
                }
                else {
                    return s;
                }
            });
        }
        if (d.appendChild) {
            if (d.body) {
                if (win.navigator.appName == 'Microsoft Internet Explorer') { // We unfortunately cannot use feature detection, since this is an IE bug with cloneNode nodes being appended
                    d.body.appendChild(stringToDOM(ieFix(arg)));
                }
                else {
                    var unappendedLeft = stringToDOM(arg, d.body, ns_xhtml, 'div').cloneNode(true); // We will not actually append the div tag (just using for providing XHTML namespace by default)
                    if (unappendedLeft) {
                        d.body.appendChild(unappendedLeft);
                    }
                }
            } else {
                d.documentElement.appendChild(stringToDOM(arg, d.documentElement, ns_xul, 'description')); // We will not actually append the description tag (just using for providing XUL namespace by default)
            }
        } else if (d.write) {
            d.write(arg);
        }/* else { // This could recurse if we ever add print!
            print(arg);
        }*/
    }
};

exports.empty = mixed_var => {
    // !No description available for empty. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/empty
    // +   original by: Philippe Baumann
    // +      input by: Onno Marsman
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: LH
    // +   improved by: Onno Marsman
    // +   improved by: Francesco
    // +   improved by: Marc Jansen
    // +   input by: Stoyan Kyosev (http://www.svest.org/)
    // *     example 1: \php.empty(null);
    // *     returns 1: true
    // *     example 2: \php.empty(undefined);
    // *     returns 2: true
    // *     example 3: \php.empty([]);
    // *     returns 3: true
    // *     example 4: \php.empty({});
    // *     returns 4: true
    // *     example 5: \php.empty({'aFunc' : function () { alert('humpty'); } });
    // *     returns 5: false

    var key;

    if (mixed_var === "" ||
        mixed_var === 0 ||
        mixed_var === "0" ||
        mixed_var === null ||
        mixed_var === false ||
        typeof mixed_var === 'undefined'
    ){
        return true;
    }

    if (typeof mixed_var == 'object') {
        for (key in mixed_var) {
            return false;
        }
        return true;
    }

    return false;
};

exports.end = function ( arr ) {
    // Advances array argument's internal pointer to the last element and return it
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/end
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Legaev Andrey
    // +    revised by: J A R
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   restored by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    revised by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Uses global: php_js to store the array pointer
    // *     example 1: \php.end({0: 'Kevin', 1: 'van', 2: 'Zonneveld'});
    // *     returns 1: 'Zonneveld'
    // *     example 2: \php.end(['Kevin', 'van', 'Zonneveld']);
    // *     returns 2: 'Zonneveld'

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.pointers = this.php_js.pointers || [];
    var indexOf = function (value) {
        for (var i = 0, length=this.length; i < length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    };
    // END REDUNDANT
    var pointers = this.php_js.pointers;
    if (!pointers.indexOf) {
        pointers.indexOf = indexOf;
    }
    if (pointers.indexOf(arr) === -1) {
        pointers.push(arr, 0);
    }
    var arrpos = pointers.indexOf(arr);
    if (!(arr instanceof Array)) {
        var ct = 0;
        for (var k in arr) {
            ct++;
            var val = arr[k];
        }
        if (ct === 0) {
            return false; // Empty
        }
        pointers[arrpos+1] = ct - 1;
        return val;
    }
    if (arr.length === 0) {
        return false;
    }
    pointers[arrpos+1] = arr.length - 1;
    return arr[pointers[arrpos+1]];
};

exports.error_get_last = function () {
    // !No description available for error_get_last. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/error_get_last
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.error_get_last();
    // *     returns 1: null
    // *     example 2: \php.error_get_last();
    // *     returns 2: {type: 256, message: 'My user error', file: 'C:\WWW\index.php', line: 2}

    return this.php_js && this.php_js.last_error ? this.php_js.last_error : null; // Only set if error triggered within at() or trigger_error()
};

exports.error_reporting = function (level) {
    // Return the current error_reporting level, and if an argument was passed - change to the new level
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/error_reporting
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: ini_set
    // %        note 1: This will not set a global_value or access level for the ini item
    // %        note 2: If you wish the default value to be as in PHP, you must manually set it
    // %        note 3: This function depends on functions implementing error handling
    // %        note 4: See also our at() error suppressor function (@ operator in PHP) in experimental/language/
    // *     example 1: \php.error_reporting(1);
    // *     returns 1: 6135
    return this.ini_set('error_reporting', level);
};

exports.escapeshellarg = arg => {
    // Quote and escape an argument for use in a shell command
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/escapeshellarg
    // +   original by: Felix Geisendoerfer (http://www.debuggable.com/felix)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.escapeshellarg("kevin's birthday");
    // *     returns 1: "'kevin\'s birthday'"
    var ret = '';

    ret = arg.replace(/[^\\]'/g, (m, i, s) => m.slice(0, 1)+'\\\'');

    return "'"+ret+"'";
};

exports.exit = function (status) {
    // !No description available for exit. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/exit
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Paul
    // +   bugfixed by: Hyam Singer (http://www.impact-computing.com/)
    // +   improved by: Philip Peterson
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Should be considered experimental. Please comment on this function.
    // *     example 1: \php.exit();
    // *     returns 1: null
    var i;

    var that = this;

    var _addEvent = (el, type, handler, capturing) => {
        if (el.addEventListener) { /* W3C */
            el.addEventListener(type, handler, !!capturing);
        }
        else if (el.attachEvent) { /* IE */
            el.attachEvent('on'+type, handler);
        }
        else { /* OLDER BROWSERS (DOM0) */
            el['on'+type] = handler;
        }
    };

    var _stopEvent = e => {
        if (e.stopPropagation) { /* W3C */
            e.stopPropagation();
            e.preventDefault();
        }
        else {
            that.window.event.cancelBubble = true;
            that.window.event.returnValue = false;
        }
    };

    if (typeof status === 'string') {
        alert(status);
    }

    _addEvent(this.window, 'error', e => {_stopEvent(e);}, false);

    var handlers = [
        'copy', 'cut', 'paste',
        'beforeunload', 'blur', 'change', 'click', 'contextmenu', 'dblclick', 'focus', 'keydown', 'keypress', 'keyup', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll',
        'DOMNodeInserted', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument', 'DOMNodeInsertedIntoDocument', 'DOMAttrModified', 'DOMCharacterDataModified', 'DOMElementNameChanged', 'DOMAttributeNameChanged', 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'online', 'offline', 'textInput',
        'abort', 'close', 'dragdrop', 'load', 'paint', 'reset', 'select', 'submit', 'unload'
    ];

    for (i=0; i < handlers.length; i++) {
        _addEvent(this.window, handlers[i], e => {_stopEvent(e);}, true);
    }

    if (this.window.stop) {
        this.window.stop();
    }

    throw '';
};

exports.exp = arg => // Returns e raised to the power of the number
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/exp
// +   original by: Onno Marsman
// *     example 1: \php.exp(0.3);
// *     returns 1: 1.3498588075760032
Math.exp(arg);

exports.explode = function (delimiter, string, limit) {
    // Splits a string on string separator and return array of components. If limit is positive only limit number of components is returned. If limit is negative all components except the last abs(limit) are returned.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/explode
    // +     original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     improved by: kenneth
    // +     improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     improved by: d3x
    // +     bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: \php.explode(' ', 'Kevin van Zonneveld');
    // *     returns 1: {0: 'Kevin', 1: 'van', 2: 'Zonneveld'}
    // *     example 2: \php.explode('=', 'a=bc=d', 2);
    // *     returns 2: ['a', 'bc=d']

    var emptyArray = { 0: '' };

    // third argument is not required
    if ( arguments.length < 2 ||
        typeof arguments[0] == 'undefined' ||
        typeof arguments[1] == 'undefined' ) {
        return null;
    }

    if ( delimiter === '' ||
        delimiter === false ||
        delimiter === null ) {
        return false;
    }

    if ( typeof delimiter == 'function' ||
        typeof delimiter == 'object' ||
        typeof string == 'function' ||
        typeof string == 'object' ) {
        return emptyArray;
    }

    if ( delimiter === true ) {
        delimiter = '1';
    }

    if (!limit) {
        return string.toString().split(delimiter.toString());
    } else {
        // support for limit argument
        var splitted = string.toString().split(delimiter.toString());
        var partA = splitted.splice(0, limit - 1);
        var partB = splitted.join(delimiter.toString());
        partA.push(partB);
        return partA;
    }
};

exports.expm1 = x => {
    // Returns exp(number) - 1, computed in a way that accurate even when the value of number is close to zero
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/expm1
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: Precision 'n' can be adjusted as desired
    // *     example 1: \php.expm1(1e-15);
    // *     returns 1: 1.0000000000000007e-15
    var ret=0; // degree of precision

    var n = 50;
    var factorial = function factorial (n) {
       if ((n === 0) || (n === 1)) {
           return 1;
       }
       else {
          var result = (n * factorial(n-1) );
          return result;
       }
    };
    for (var i=1; i < n; i++) {
        ret += x ** i/factorial(i);
    }
    return ret;
};

exports.extract = function (arr, type, prefix) {
    // Imports variables into symbol table from an array
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/extract
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Only works by extracting into global context (whether called in the global scope or
    // %        note 1: within a function); also, the EXTR_REFS flag I believe can't be made to work
    // *     example 1: \php.size = 'large';
    // *     example 1: \php.var_array = {'color' : 'blue', 'size' : 'medium', 'shape' : 'sphere'};
    // *     example 1: \php.extract(var_array, 'EXTR_PREFIX_SAME', 'wddx');
    // *     example 1: \php.color+'-'+size+'-'+shape+'-'+wddx_size;
    // *     returns 1: 'blue-large-sphere-medium'
    if (arr instanceof Array && (type !== 'EXTR_PREFIX_ALL' && type !== 'EXTR_PREFIX_INVALID')) {
        return 0;
    }
    var targetObj = this.window;
    if (this.php_js && this.php_js.ini && this.php_js.ini['phpjs.extractTargetObj'] &&
        this.php_js.ini['phpjs.extractTargetObj'].local_value) { // Allow designated object to be used instead of window
        targetObj = this.php_js.ini['phpjs.extractTargetObj'].local_value;
    }
    var chng = 0;

    for (var i in arr) {
        var validIdent = /^[_a-zA-Z$][\w|$]*$/; // TODO: Refine regexp to allow JS 1.5+ Unicode identifiers
        var prefixed = prefix+'_'+i;
        try {
            switch (type) {
                case 'EXTR_PREFIX_SAME' || 2:
                    if (targetObj[i] !== undefined) {
                        if (prefixed.match(validIdent) !== null) {
                            targetObj[prefixed] = arr[i];
                            ++chng;
                        }
                    }
                    else {
                        targetObj[i] = arr[i];
                        ++chng;
                    }
                    break;
                case 'EXTR_SKIP' || 1:
                    if (targetObj[i] === undefined) {
                        targetObj[i] = arr[i];
                        ++chng;
                    }
                    break;
                case 'EXTR_PREFIX_ALL' || 3:
                    if (prefixed.match(validIdent) !== null) {
                        targetObj[prefixed] = arr[i];
                        ++chng;
                    }
                    break;
                case 'EXTR_PREFIX_INVALID' || 4:
                    if (i.match(validIdent) !== null) {
                        if (prefixed.match(validIdent) !== null) {
                            targetObj[prefixed] = arr[i];
                            ++chng;
                        }
                    }
                    else {
                        targetObj[i] = arr[i];
                        ++chng;
                    }
                    break;
                case 'EXTR_IF_EXISTS' || 6:
                    if (targetObj[i] !== undefined) {
                        targetObj[i] = arr[i];
                        ++chng;
                    }
                    break;
                case 'EXTR_PREFIX_IF_EXISTS' || 5:
                    if (targetObj[i] !== undefined && prefixed.match(validIdent) !== null) {
                        targetObj[prefixed] = arr[i];
                        ++chng;
                    }
                    break;
                case 'EXTR_REFS' || 256:
                    throw 'The EXTR_REFS type will not work in JavaScript';
                case 'EXTR_OVERWRITE' || 0:
                // Fall-through
                default:
                    targetObj[i] = arr[i];
                    ++chng;
                    break;
            }
        }
        catch (e) { // Just won't increment for problem assignments

        }
    }
    return chng;
};

exports.fclose = function (handle) {
    // Close an open file pointer
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/fclose
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.var handle = fopen('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm', 'r');
    // *     example 1: \php.fclose(handle);
    // *     returns 1: true
    if (!handle || handle.opener !== 'fopen') {
        return false;
    }

    try {
        delete this.php_js.resourceDataPointer[handle.id];
        delete this.php_js.resourceData[handle.id]; // Free up memory
    }
    catch (e) {
        return false;
    }
    return true;
};

exports.feof = function (handle) {
    // Test for end-of-file on a file pointer
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/feof
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.var handle = fopen('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm', 'r');
    // *     example 1: \php.fread(handle, 1);
    // *     example 1: \php.feof(handle);
    // *     returns 1: false

    if (!handle || !this.php_js || !this.php_js.resourceData || !this.php_js.resourceDataPointer) {
        return true;
    }

    return !this.php_js.resourceData[handle.id][this.php_js.resourceDataPointer[handle.id]];
    
};

exports.fgetc = function (handle) {
    // Get a character from file pointer
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/fgetc
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.fopen('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm', 'r');
    // *     example 1: \php.fgetc(handle);
    // *     returns 1: '1'

    if (!this.php_js || !this.php_js.resourceData || !this.php_js.resourceDataPointer) {
        return false;
    }

    var start = this.php_js.resourceDataPointer[handle.id];

    if (start === undefined || !this.php_js.resourceData[handle.id][start]) {
        return false; // Resource was already closed or already reached the end of the file
    }

    var length = 1; // 2 byte-character (or surrogate)
    this.php_js.resourceDataPointer[handle.id] += length;
    var chr = this.php_js.resourceData[handle.id].substr(start, length);

    // If don't want to treat surrogate pairs as single characters, can delete from here until the last line (return chr;)
    var nextChr = this.php_js.resourceData[handle.id].substr(start+1, 1);
    var prevChr = start === 0 ? false : this.php_js.resourceData[handle.id].substr(start-1, 1);
    var code = chr.charCodeAt(0);
    if (0xD800 <= code && code <= 0xDBFF) { // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
        if (!nextChr)  {
            throw 'High surrogate without following low surrogate (fgetc)';
        }
        var next = nextChr.charCodeAt(0);
        if (0xDC00 > next || next > 0xDFFF) {
            throw 'High surrogate without following low surrogate (fgetc)';
        }
        this.php_js.resourceDataPointer[handle.id] += length; // Need to increment counter again since grabbing next item
        return chr+nextChr;
    }
    else if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
        if (prevChr === false) {
            throw 'Low surrogate without preceding high surrogate (fgetc)';
        }
        var prev = prevChr.charCodeAt(0);
        if (0xD800 > prev || prev > 0xDBFF) { //(could change last hex to 0xDB7F to treat high private surrogates as single characters)
            throw 'Low surrogate without preceding high surrogate (fgetc)';
        }
        return prevChr+chr; // Probably shouldn't have reached here, at least if traversing by fgetc()
    }
    
    return chr;
};

exports.fgetcsv = function (handle, length, delimiter, enclosure, escape) {
    // Get line from file pointer and parse for CSV fields
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/fgetcsv
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: str_getcsv
    // *     example 1: \php.fopen('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm', 'r');
    // *     example 1: \php.fgetcsv(handle, 1);
    // *     returns 1: '<'

    var start=0;

    var fullline='';

    if (!this.php_js || !this.php_js.resourceData || !this.php_js.resourceDataPointer || length !== undefined && !length) {
        return false;
    }

    start = this.php_js.resourceDataPointer[handle.id];

    if (start === undefined || !this.php_js.resourceData[handle.id][start]) {
        return false; // Resource was already closed or already reached the end of the file
    }

    fullline = this.php_js.resourceData[handle.id].slice(start, this.php_js.resourceData[handle.id].indexOf('\n', start)+1);
    if (fullline === '') {
        fullline = this.php_js.resourceData[handle.id].slice(start); // Get to rest of the file
    }

    length = (length === undefined || fullline.length < length) ? fullline.length : Math.floor(length/2) || 1; // two bytes per character (or surrogate), but ensure at least one

    this.php_js.resourceDataPointer[handle.id] += length; // Leaves the pointer one higher apparently than in fgets/fgetss
    return this.str_getcsv(this.php_js.resourceData[handle.id].substr(start, length), delimiter, enclosure, escape);
};

exports.fgets = function (handle, length) {
    // Get a line from file pointer
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/fgets
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.fopen('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm', 'r');
    // *     example 1: \php.fgets(handle, 1);
    // *     returns 1: '<'

    var start=0;

    var fullline='';
    var endlinePos = -1;
    var content = '';

    if (!this.php_js || !this.php_js.resourceData || !this.php_js.resourceDataPointer || length !== undefined && !length) {
        return false;
    }

    start = this.php_js.resourceDataPointer[handle.id];

    if (start === undefined || !this.php_js.resourceData[handle.id][start]) {
        return false; // Resource was already closed or already reached the end of the file
    }

    content = this.php_js.resourceData[handle.id].slice(start);

    endlinePos = content.search(/\r\n?|\n/)+start+1;
    fullline = this.php_js.resourceData[handle.id].slice(start, endlinePos+1);
    if (fullline === '') {
        fullline = this.php_js.resourceData[handle.id].slice(start); // Get to rest of the file
    }

    length = (length === undefined || fullline.length < length) ? fullline.length : Math.floor(length/2) || 1; // two bytes per character (or surrogate), but ensure at least one

    this.php_js.resourceDataPointer[handle.id] += length;
    return this.php_js.resourceData[handle.id].substr(start, length);
};

exports.fgetss = function (handle, length, allowable_tags) {
    // Get a line from file pointer and strip HTML tags
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/fgetss
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: strip_tags
    // *     example 1: \php.fopen('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm', 'r');
    // *     example 1: \php.fgetss(handle, 4096, 'a');
    // *     returns 1: ''

    var start=0;

    var fullline='';

    if (!this.php_js || !this.php_js.resourceData || !this.php_js.resourceDataPointer || length !== undefined && !length) {
        return false;
    }

    start = this.php_js.resourceDataPointer[handle.id];

    if (start === undefined || !this.php_js.resourceData[handle.id][start]) {
        return false; // Resource was already closed or already reached the end of the file
    }

    fullline = this.php_js.resourceData[handle.id].slice(start, this.php_js.resourceData[handle.id].indexOf('\n', start)+1);
    if (fullline === '') {
        fullline = this.php_js.resourceData[handle.id].slice(start); // Get to rest of the file
    }

    length = (length === undefined || fullline.length < length) ? fullline.length : Math.floor(length/2) || 1; // two bytes per character (or surrogate), but ensure at least one

    this.php_js.resourceDataPointer[handle.id] += length-1;
    return this.strip_tags(this.php_js.resourceData[handle.id].substr(start, length), allowable_tags);
};

exports.file = function (url) {
    // Read entire file into an array
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/file
    // +   original by: Legaev Andrey
    // +      input by: Jani Hartikainen
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // %        note 1: This function uses XmlHttpRequest and cannot retrieve resource from different domain.
    // %        note 1: Synchronous so may lock up browser, mainly here for study purposes.
    // %        note 1: To avoid browser blocking issues's consider using jQuery's: $('#divId').load('http://url') instead.
    // *     example 1: \php.file('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm');
    // *     returns 1: {0: '123'}
    var req = this.window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
    if (!req) {throw new Error('XMLHttpRequest not supported');}

    req.open("GET", url, false);
    req.send(null);

    return req.responseText.split('\n');
};

exports.file_exists = function (url) {
    // Returns true if filename exists
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/file_exists
    // +   original by: Enrique Gonzalez
    // +      input by: Jani Hartikainen
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // %        note 1: This function uses XmlHttpRequest and cannot retrieve resource from different domain.
    // %        note 1: Synchronous so may lock up browser, mainly here for study purposes.
    // *     example 1: \php.file_exists('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm');
    // *     returns 1: '123'

    var req = this.window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
    if (!req) {throw new Error('XMLHttpRequest not supported');}

    // HEAD Results are usually shorter (faster) than GET
    req.open('HEAD', url, false);
    req.send(null);
    if (req.status == 200){
        return true;
    }

    return false;
};

exports.file_get_contents = function (url, flags, context, offset, maxLen) {
    // Read the entire file into a string
    //
    // version: 906.111
    // discuss at: http://phpjs.org/functions/file_get_contents
    // +   original by: Legaev Andrey
    // +      input by: Jani Hartikainen
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   input by: Raphael (Ao) RUDLER
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: This function uses XmlHttpRequest and cannot retrieve resource from different domain without modifications.
    // %        note 2: Synchronous by default (as in PHP) so may lock up browser. Can
    // %        note 2: get async by setting a custom "phpjs.async" property to true and "notification" for an
    // %        note 2: optional callback (both as context params, with responseText, and other JS-specific
    // %        note 2: request properties available via 'this'). Note that file_get_contents() will not return the text
    // %        note 2: in such a case (use this.responseText within the callback). Or, consider using
    // %        note 2: jQuery's: $('#divId').load('http://url') instead.
    // %        note 3: The context argument is only implemented for http, and only partially (see below for
    // %        note 3: "Presently unimplemented HTTP context options"); also the arguments passed to
    // %        note 3: notification are incomplete
    // *     example 1: \php.file_get_contents('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm');
    // *     returns 1: '123'
    // Note: could also be made to optionally add to global $http_response_header as per http://php.net/manual/en/reserved.variables.httpresponseheader.php
    var tmp;

    var headers = [];
    var newTmp = [];
    var k=0;
    var i=0;
    var href = '';
    var pathPos = -1;
    var flagNames = 0;
    var content = null;
    var http_stream = false;
    var func = value => value.substring(1) !== '';

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    // END REDUNDANT

    var ini = this.php_js.ini;
    context = context || this.php_js.default_streams_context || null;

    if (!flags) {flags = 0;}
    var OPTS = {
        FILE_USE_INCLUDE_PATH : 1,
        FILE_TEXT : 32,
        FILE_BINARY : 64
    };
    if (typeof flags === 'number') { // Allow for a single string or an array of string flags
        flagNames = flags;
    }
    else {
        flags = [].concat(flags);
        for (i=0; i < flags.length; i++) {
            if (OPTS[flags[i]]) {
                flagNames = flagNames | OPTS[flags[i]];
            }
        }
    }

    if (flagNames & OPTS.FILE_BINARY && (flagNames & OPTS.FILE_TEXT)) { // These flags shouldn't be together
        throw 'You cannot pass both FILE_BINARY and FILE_TEXT to file_get_contents()';
    }

    if ((flagNames & OPTS.FILE_USE_INCLUDE_PATH) && ini.include_path &&
            ini.include_path.local_value) {
        var slash = ini.include_path.local_value.indexOf('/') !== -1 ? '/' : '\\';
        url = ini.include_path.local_value+slash+url;
    }
    else if (!/^(https?|file):/.test(url)) { // Allow references within or below the same directory (should fix to allow other relative references or root reference; could make dependent on parse_url())
        href = this.window.location.href;
        pathPos = url.indexOf('/') === 0 ? href.indexOf('/', 8)-1 : href.lastIndexOf('/');
        url = href.slice(0, pathPos+1)+url;
    }

    if (context) {
        var http_options = context.stream_options && context.stream_options.http;
        http_stream = !!http_options;
    }

    if (!context || http_stream) {
        var req = this.window.ActiveXObject ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest();
        if (!req) {throw new Error('XMLHttpRequest not supported');}

        var method = http_stream ? http_options.method : 'GET';
        var async = !!(context && context.stream_params && context.stream_params['phpjs.async']);

        if (ini['phpjs.ajaxBypassCache'] && ini['phpjs.ajaxBypassCache'].local_value) {
            url += (url.match(/\?/) == null ? "?" : "&") + (new Date()).getTime(); // Give optional means of forcing bypass of cache
        }

        req.open(method, url, async);
        if (async) {
            var notification = context.stream_params.notification;
            if (typeof notification === 'function') {
                // Fix: make work with req.addEventListener if available: https://developer.mozilla.org/En/Using_XMLHttpRequest
                if (0 && req.addEventListener) { // Unimplemented so don't allow to get here
                    /*
                    req.addEventListener('progress', updateProgress, false);
                    req.addEventListener('load', transferComplete, false);
                    req.addEventListener('error', transferFailed, false);
                    req.addEventListener('abort', transferCanceled, false);
                    */
                }
                else {
                    req.onreadystatechange = aEvt => { // aEvt has stopPropagation(), preventDefault(); see https://developer.mozilla.org/en/NsIDOMEvent

    // Other XMLHttpRequest properties: multipart, responseXML, status, statusText, upload, withCredentials
    /*
    PHP Constants:
    STREAM_NOTIFY_RESOLVE   1       A remote address required for this stream has been resolved, or the resolution failed. See severity  for an indication of which happened.
    STREAM_NOTIFY_CONNECT   2     A connection with an external resource has been established.
    STREAM_NOTIFY_AUTH_REQUIRED 3     Additional authorization is required to access the specified resource. Typical issued with severity level of STREAM_NOTIFY_SEVERITY_ERR.
    STREAM_NOTIFY_MIME_TYPE_IS  4     The mime-type of resource has been identified, refer to message for a description of the discovered type.
    STREAM_NOTIFY_FILE_SIZE_IS  5     The size of the resource has been discovered.
    STREAM_NOTIFY_REDIRECTED    6     The external resource has redirected the stream to an alternate location. Refer to message .
    STREAM_NOTIFY_PROGRESS  7     Indicates current progress of the stream transfer in bytes_transferred and possibly bytes_max as well.
    STREAM_NOTIFY_COMPLETED 8     There is no more data available on the stream.
    STREAM_NOTIFY_FAILURE   9     A generic error occurred on the stream, consult message and message_code for details.
    STREAM_NOTIFY_AUTH_RESULT   10     Authorization has been completed (with or without success).

    STREAM_NOTIFY_SEVERITY_INFO 0     Normal, non-error related, notification.
    STREAM_NOTIFY_SEVERITY_WARN 1     Non critical error condition. Processing may continue.
    STREAM_NOTIFY_SEVERITY_ERR  2     A critical error occurred. Processing cannot continue.
    */
                        var objContext = {
                            responseText : req.responseText,
                            responseXML : req.responseXML,
                            status : req.status,
                            statusText : req.statusText,
                            readyState : req.readyState,
                            evt : aEvt
                        }; // properties are not available in PHP, but offered on notification via 'this' for convenience

                        // notification args: notification_code, severity, message, message_code, bytes_transferred, bytes_max (all int's except string 'message')
                        // Need to add message, etc.
                        var bytes_transferred;
                        switch (req.readyState) {
                            case 0: //     UNINITIALIZED     open() has not been called yet.
                                notification.call(objContext, 0, 0, '', 0, 0, 0);
                                break;
                            case 1: //     LOADING     send() has not been called yet.
                                notification.call(objContext, 0, 0, '', 0, 0, 0);
                                break;
                            case 2: //     LOADED     send() has been called, and headers and status are available.
                                notification.call(objContext, 0, 0, '', 0, 0, 0);
                                break;
                            case 3: //     INTERACTIVE     Downloading; responseText holds partial data.
                                bytes_transferred = req.responseText.length*2; // One character is two bytes
                                notification.call(objContext, 7, 0, '', 0, bytes_transferred, 0);
                                break;
                            case 4: //     COMPLETED     The operation is complete.
                                if (req.status >= 200 && req.status < 400) {
                                    bytes_transferred = req.responseText.length*2; // One character is two bytes
                                    notification.call(objContext, 8, 0, '', req.status, bytes_transferred, 0);
                                }
                                else if (req.status === 403) { // Fix: These two are finished except for message
                                    notification.call(objContext, 10, 2, '', req.status, 0, 0);
                                }
                                else { // Errors
                                    notification.call(objContext, 9, 2, '', req.status, 0, 0);
                                }
                                break;
                            default:
                                throw 'Unrecognized ready state for file_get_contents()';
                        }
                    }
                }
            }
        }

        if (http_stream) {
            var sendHeaders = http_options.header && http_options.header.split(/\r?\n/);
            var userAgentSent = false;
            for (i=0; i < sendHeaders.length; i++) {
                var sendHeader = sendHeaders[i];
                var breakPos = sendHeader.search(/:\s*/);
                var sendHeaderName = sendHeader.substring(0, breakPos);
                req.setRequestHeader(sendHeaderName, sendHeader.substring(breakPos+1));
                if (sendHeaderName === 'User-Agent') {
                    userAgentSent = true;
                }
            }
            if (!userAgentSent) {
                var user_agent = http_options.user_agent ||
                                                                    (ini.user_agent && ini.user_agent.local_value);
                if (user_agent) {
                    req.setRequestHeader('User-Agent', user_agent);
                }
            }
            content = http_options.content || null;
            /*
            // Presently unimplemented HTTP context options
            var request_fulluri = http_options.request_fulluri || false; // When set to TRUE, the entire URI will be used when constructing the request. (i.e. GET http://www.example.com/path/to/file.html HTTP/1.0). While this is a non-standard request format, some proxy servers require it.
            var max_redirects = http_options.max_redirects || 20; // The max number of redirects to follow. Value 1 or less means that no redirects are followed.
            var protocol_version = http_options.protocol_version || 1.0; // HTTP protocol version
            var timeout = http_options.timeout || (ini.default_socket_timeout && ini.default_socket_timeout.local_value); // Read timeout in seconds, specified by a float
            var ignore_errors = http_options.ignore_errors || false; // Fetch the content even on failure status codes.
            */
        }

        if (flagNames & OPTS.FILE_TEXT) { // Overrides how encoding is treated (regardless of what is returned from the server)
            var content_type = 'text/html';
            if (http_options && http_options['phpjs.override']) { // Fix: Could allow for non-HTTP as well
                content_type = http_options['phpjs.override']; // We use this, e.g., in gettext-related functions if character set
                                                                                                        //   overridden earlier by bind_textdomain_codeset()
            }
            else {
                var encoding = (ini['unicode.stream_encoding'] && ini['unicode.stream_encoding'].local_value) || 'UTF-8';
                if (http_options && http_options.header && (/^content-type:/im).test(http_options.header)) { // We'll assume a content-type expects its own specified encoding if present
                    content_type = http_options.header.match(/^content-type:\s*(.*)$/im)[1]; // We let any header encoding stand
                }
                if (!(/;\s*charset=/).test(content_type)) { // If no encoding
                    content_type += '; charset='+encoding;
                }
            }
            req.overrideMimeType(content_type);
        }
        // Default is FILE_BINARY, but for binary, we apparently deviate from PHP in requiring the flag, since many if not
        //     most people will also want a way to have it be auto-converted into native JavaScript text instead
        else if (flagNames & OPTS.FILE_BINARY) { // Trick at https://developer.mozilla.org/En/Using_XMLHttpRequest to get binary
            req.overrideMimeType('text/plain; charset=x-user-defined');
            // Getting an individual byte then requires:
            // responseText.charCodeAt(x) & 0xFF; // throw away high-order byte (f7) where x is 0 to responseText.length-1 (see notes in our substr())
        }

        if (http_options && http_options['phpjs.sendAsBinary']) { // For content sent in a POST or PUT request (use with file_put_contents()?)
            req.sendAsBinary(content); // In Firefox, only available FF3+
        }
        else {
            req.send(content);
        }

        tmp = req.getAllResponseHeaders();
        if (tmp) {
            tmp = tmp.split('\n');
            for (k=0; k < tmp.length; k++) {
                if (func(tmp[k])) {
                    newTmp.push(tmp[k]);
                }
            }
            tmp = newTmp;
            for (i=0; i < tmp.length; i++) {
                headers[i] = tmp[i];
            }
            this.$http_response_header = headers; // see http://php.net/manual/en/reserved.variables.httpresponseheader.php
        }

        if (offset || maxLen) {
            if (maxLen) {
                return req.responseText.substr(offset || 0, maxLen);
            }
            return req.responseText.substr(offset);
        }
        return req.responseText;
    }
    return false;
};

exports.filemtime = function (file) {
    // +   original by: Ole Vrijenhoek (http://www.nervous.nl/)
    // +    bugfixed by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: get_headers
    // %        note 1:  Looks for Last-Modified in response header.
    // *     example 1: \php.filemtime('http://www.un.org');
    // *     returns 1: 1241532483

    var headers = {};
    headers = this.get_headers(file, 1);
    return (headers && headers['Last-Modified'] && Date.parse(headers['Last-Modified'])/1000) || false;
};

exports.filesize = function (url) {
    // Get file size
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/filesize
    // +   original by: Enrique Gonzalez
    // +      input by: Jani Hartikainen
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: T. Wild
    // %        note 1: This function uses XmlHttpRequest and cannot retrieve resource from different domain.
    // %        note 1: Synchronous so may lock up browser, mainly here for study purposes.
    // *     example 1: \php.filesize('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm');
    // *     returns 1: '3'
    var req = this.window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
    if (!req) {throw new Error('XMLHttpRequest not supported');}

    req.open('HEAD', url, false);
    req.send(null);

    if (!req.getResponseHeader) {
        try {
            throw new Error('No getResponseHeader!');
        } catch (e){
            return false;
        }
    } else if (!req.getResponseHeader('Content-Length')) {
        try {
            throw new Error('No Content-Length!');
        } catch (e2){
            return false;
        }
    } else {
        return req.getResponseHeader('Content-Length');
    }
};

exports.floatval = mixed_var => // +   original by: Michael White (http://getsprink.com)
// %        note 1: The native parseFloat() method of JavaScript returns NaN when it encounters a string before an int or float value.
// *     example 1: \php.floatval('150.03_page-section');
// *     returns 1: 150.03
// *     example 2: \php.floatval('page: 3');
// *     returns 2: 0
// *     example 2: \php.floatval('-50 + 8');
// *     returns 2: -50
parseFloat(mixed_var) || 0;

exports.floor = value => // Returns the next lowest integer value from the number
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/floor
// +   original by: Onno Marsman
// *     example 1: \php.floor(8723321.4);
// *     returns 1: 8723321

Math.floor(value);

exports.fmod = (x, y) => {
    // Returns the remainder of dividing x by y as a float
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/fmod
    // +   original by: Onno Marsman
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: \php.fmod(5.7, 1.3);
    // *     returns 1: 0.5

    var tmp;

    var tmp2;
    var p = 0;
    var pY = 0;
    var l = 0.0;
    var l2 = 0.0;

    tmp = x.toExponential().match(/^.\.?(.*)e(.+)$/);
    p = parseInt(tmp[2], 10)-(tmp[1]+'').length;
    tmp = y.toExponential().match(/^.\.?(.*)e(.+)$/);
    pY = parseInt(tmp[2], 10)-(tmp[1]+'').length;

    if (pY > p) {
        p = pY;
    }

    tmp2 = (x%y);

    if (p < -100 || p > 20) {
        // toFixed will give an out of bound error so we fix it like this:
        l  = Math.round(Math.log(tmp2)/Math.log(10));
        l2 = 10 ** l;

        return (tmp2 / l2).toFixed(l-p)*l2;
    } else {
        return parseFloat(tmp2.toFixed(-p));
    }
};

exports.fopen = function (filename, mode, use_include_path, context) {
    // Open a file or a URL and return a file pointer
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/fopen
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   input by: Paul Smith
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: file_get_contents
    // *     example 1: \php.fopen('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm', 'r');
    // *     returns 1: 'Resource id #1'

    var resource={};

    var i=0;
    var that = this;
    var getFuncName = fn => {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
        if (!name) {
            return '(Anonymous)';
        }
        return name[1];
    };

    // BEGIN file inclusion: file_get_contents
    var file_get_contents = url => {
        var req = that.window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
        if (!req) {
            throw new Error('XMLHttpRequest not supported');
        }
        if (!(/^http/).test(url)) { // Allow references within or below the same directory (should fix to allow other relative references or root reference; could make dependent on parse_url())
            url = that.window.location.href + '/' +url;
        }
        req.open("GET", url, false);
        req.send(null);
        return req.responseText;
    };
    // END file inclusion

    if (use_include_path === 1 || use_include_path === '1' || use_include_path === true) { 
        // Not implemented yet: Search for file in include path too
    }
    if (context) {
        // Not implemented yet, but could be useful to modify nature of HTTP request, etc.
    }

    for (i=0; i < mode.length; i++) { // Have to deal with other flags if ever allow
        if (mode.charAt(i) === 'r' && (!mode.charAt(i+1) || mode.charAt(i+1) !== '+')) {
            continue;
        }
        switch (mode.charAt(i)) {
            case 'r': // must have '+' now
            case 'w': // or 'w+'
            case 'a': // or 'a+'
            case 'x':// or 'x+'
                throw 'Writing is not implemented';
            case 'b':
            case 't':
                throw 'Windows-only modes are not supported';
            default:
                throw 'Unrecognized file mode passed to '+getFuncName(arguments.caller)+'()';
        }
    }

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.resourceData = this.php_js.resourceData || {};
    this.php_js.resourceDataPointer = this.php_js.resourceDataPointer || {};
    this.php_js.resourceIdCounter = this.php_js.resourceIdCounter || 0;
    // END REDUNDANT

    // BEGIN STATIC
    function PHPJS_Resource (type, id, opener) { // Can reuse the following for other resources, just changing the instantiation
        // See http://php.net/manual/en/resource.php for types
        this.type = type;
        this.id = id;
        this.opener = opener;
    }
    PHPJS_Resource.prototype.toString = function () {
        return 'Resource id #'+this.id;
    };
    PHPJS_Resource.prototype.get_resource_type = function () {
        return this.type;
    };
    PHPJS_Resource.prototype.var_dump = function () {
        return 'resource('+this.id+') of type ('+this.type+')';
    };
    // END STATIC

    this.php_js.resourceIdCounter++;
    this.php_js.resourceData[this.php_js.resourceIdCounter] = this.file_get_contents(filename);
    this.php_js.resourceDataPointer[this.php_js.resourceIdCounter] = 0;

    resource = new PHPJS_Resource('stream', this.php_js.resourceIdCounter, 'fopen');
    resource.mode = mode; // Add file-specific attributes

    return resource; // may be 'file' instead of 'stream' type on some systems
};

exports.forward_static_call = function (cb, parameters) {
    // !No description available for forward_static_call. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/forward_static_call
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: No real relevance to late static binding here; might also use call_user_func()
    // *     example 1: \php.forward_static_call('isNaN', 'a');
    // *     returns 1: true

    var func;

    if (typeof cb == 'string') {
        if (typeof this[cb] == 'function') {
            func = this[cb];
        } else {
            func = (new Function(null, 'return ' + cb))();
        }
    } else if (cb instanceof Array) {
        func = eval(cb[0]+"['"+cb[1]+"']");
    }

    if (typeof func != 'function') {
        throw new Error(func + ' is not a valid function');
    }

    return func(...Array.prototype.slice.call(arguments, 1));
};

exports.forward_static_call_array = function (cb, parameters) {
    // !No description available for forward_static_call_array. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/forward_static_call_array
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: No real relevance to late static binding here; might also use call_user_func_array()
    // *     example 1: \php.forward_static_call_array('isNaN', ['a']);
    // *     returns 1: true
    // *     example 2: \php.forward_static_call_array('isNaN', [1]);
    // *     returns 2: false

    var func;

    if (typeof cb == 'string') {
        if (typeof this[cb] == 'function') {
            func = this[cb];
        } else {
            func = (new Function(null, 'return ' + cb))();
        }
    } else if (cb instanceof Array) {
        func = eval(cb[0]+"['"+cb[1]+"']");
    }

    if (typeof func != 'function') {
        throw new Error(func + ' is not a valid function');
    }

    return func(...parameters);
};

exports.fpassthru = function (handle) {
    // Output all remaining data from a file pointer
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/fpassthru
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.fopen('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm', 'r');
    // *     example 1: \php.fpassthru(handle);
    // *     returns 1: 3

    if (!this.php_js || !this.php_js.resourceData || !this.php_js.resourceDataPointer || !handle || !handle.id) {
        return false;
    }

    var chrs = this.php_js.resourceData[handle.id].slice(this.php_js.resourceDataPointer[handle.id]);
    this.echo(chrs);
    this.php_js.resourceDataPointer[handle.id] = this.php_js.resourceData[handle.id].length; // Place pointer at end
    return chrs;
};

exports.fread = function (handle, length) {
    // Binary-safe file read
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/fread
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.fopen('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm', 'r');
    // *     example 1: \php.fread(handle, 10);
    // *     returns 1: '123'

    if (!this.php_js || !this.php_js.resourceData || !this.php_js.resourceDataPointer) {
        return false;
    }

    length = length < 8192 ? (Math.floor(length/2) || 1) : 4096; // 2 bytes per character (or surrogate) means limit of 8192 bytes = 4096 characters; ensure at least one

    var start = this.php_js.resourceDataPointer[handle.id];

    if (start === undefined) {
        return false; // Resource was already closed
    }

    if (!this.php_js.resourceData[handle.id][start]) {
        return ''; // already reached the end of the file (but pointer not closed)
    }

    this.php_js.resourceDataPointer[handle.id] += length;

    return this.php_js.resourceData[handle.id].substr(start, length); // Extra length won't be a problem here
};

exports.fscanf = function (handle, format) {
    // Implements a mostly ANSI compatible fscanf()
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/fscanf
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: fgets
    // -    depends on: sscanf
    // *     example 1: \php.var handle = fopen('http://example.com/names_and_professions.html', 'r');
    // *     example 1: \php.fscanf(handle, '%s\t%s\t%s\n');
    // *     returns 1: ['robert', 'slacker', 'us']

    var mixed; // Could be an array or an integer

    mixed = this.sscanf(
        ...[fgets(handle), format].concat(Array.prototype.slice.call(arguments, 2))
    );

    return mixed;
};

exports.fseek = function (handle, offset, whence) {
    // Seek on a file pointer
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/fseek
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.var h = fopen('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm', 'r');
    // *     example 1: \php.fseek(h, 100);
    // *     returns 1: 0

    var getFuncName = fn => {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
        if (!name) {
            return '(Anonymous)';
        }
        return name[1];
    };
    if (!this.php_js || !this.php_js.resourceData || !this.php_js.resourceDataPointer ||
            !handle || !handle.constructor || getFuncName(handle.constructor) !== 'PHPJS_Resource') {
        return -1;
    }

    switch (whence) {
        case undefined: // fall-through
        case 'SEEK_SET':
            this.php_js.resourceDataPointer[handle.id] = offset/2+1;
            break;
        case 'SEEK_CUR':
            this.php_js.resourceDataPointer[handle.id] += offset/2+1;
            break;
        case 'SEEK_END':
            this.php_js.resourceDataPointer[handle.id] = this.php_js.resourceData[handle.id].length + offset/2 + 1;
            break;
        default:
            throw 'Unrecognized whence value for fseek()';
    }
    return 0;
};

exports.ftell = function (handle) {
    // Get file pointer's read/write position
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/ftell
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.var h = fopen('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm', 'r');
    // *     example 1: \php.fread(h, 100);
    // *     example 1: \php.ftell(h);
    // *     returns 1: 99

    var getFuncName = fn => {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
        if (!name) {
            return '(Anonymous)';
        }
        return name[1];
    };
    if (!this.php_js || !this.php_js.resourceData || !this.php_js.resourceDataPointer ||
            !handle || !handle.constructor || getFuncName(handle.constructor) !== 'PHPJS_Resource') {
        return false;
    }
    return this.php_js.resourceDataPointer[handle.id]*2-1; // We're currently storing by character, so need to multiply by two; subtract one to appear like array pointer
};

exports.func_get_arg = function (num) {
    // Get the $arg_num'th argument that was passed to the function
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/func_get_arg
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: May not work in all JS implementations
    // *     example 1: \php.function tmp_a() {return func_get_arg(1);}
    // *     example 1: \php.tmp_a('a', 'b');
    // *     returns 1: 'a'
    if (!arguments.callee.caller) {
        try {
            throw new Error('Either you are using this in a browser which does not support the "caller" property or you are calling this from a global context');
            //return false;
        } catch (e){
            return false;
        }
    }

    if (num > arguments.callee.caller.arguments.length - 1) {
        try {
            throw new Error('Argument number is greater than the number of arguments actually passed');
            //return false;
        } catch (e2){
            return false;
        }
    }

    return arguments.callee.caller.arguments[num];
};

exports.func_get_args = function(...args) {
    // !No description available for func_get_args. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/func_get_args
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: May not work in all JS implementations
    // *     example 1: \php.function tmp_a () {return func_get_args();}
    // *     example 1: \php.tmp_a('a', 'b');
    // *     returns 1: ['a', 'b']
    if (!args.callee.caller) {
        try {
            throw new Error('Either you are using this in a browser which does not support the "caller" property or you are calling this from a global context');
            // return false;
        } catch (e){
            return false;
        }
    }

    return Array.prototype.slice.call(args.callee.caller.arguments);
};

exports.func_num_args = function(...args) {
    // Get the number of arguments that were passed to the function
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/func_num_args
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: May not work in all JS implementations
    // *     example 1: \php.function tmp_a () {return func_num_args();}
    // *     example 1: \php.tmp_a('a', 'b');
    // *     returns 1: 2
    if (!args.callee.caller) {
        try {
            throw new Error('Either you are using this in a browser which does not support the "caller" property or you are calling this from a global context');
            //return false;
        } catch (e){
            return false;
        }
    }

    return args.callee.caller.arguments.length;
};

exports.function_exists = function (function_name) {
    // Checks if the function exists
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/function_exists
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Steve Clay
    // +   improved by: Legaev Andrey
    // *     example 1: \php.function_exists('isFinite');
    // *     returns 1: true
    if (typeof function_name == 'string'){
        return (typeof this.window[function_name] == 'function');
    } else{
        return (function_name instanceof Function);
    }
};

exports.get_cfg_var = function (varname) {
    // Get the value of a PHP configuration option
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/get_cfg_var
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: The ini values must be set within an ini file
    // *     example 1: \php.get_cfg_var('date.timezone');
    // *     returns 1: 'Asia/Hong_Kong'
    if (this.php_js && this.php_js.ini && this.php_js.ini[varname].global_value !== undefined) {
        if (this.php_js.ini[varname].global_value === null) {
            return '';
        }
        return this.php_js.ini[varname].global_value;
    }
    return '';
};

exports.get_class = function (obj) {
    // Retrieves the class name
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/get_class
    // +   original by: Ates Goral (http://magnetiq.com)
    // +   improved by: David James
    // *     example 1: \php.get_class(new (function MyClass() {}));
    // *     returns 1: "MyClass"
    // *     example 2: \php.get_class({});
    // *     returns 2: "Object"
    // *     example 3: \php.get_class([]);
    // *     returns 3: false
    // *     example 4: \php.get_class(42);
    // *     returns 4: false
    // *     example 5: \php.get_class(window);
    // *     returns 5: false
    // *     example 6: \php.get_class(function MyFunction() {});
    // *     returns 6: false
    if (obj instanceof Object && !(obj instanceof Array) &&
        !(obj instanceof Function) && obj.constructor &&
        obj != this.window) {
        var arr = obj.constructor.toString().match(/function\s*(\w+)/);

        if (arr && arr.length == 2) {
            return arr[1];
        }
    }

    return false;
};

exports.get_class_methods = function (name) {
    // Returns an array of method names for class or class instance.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/get_class_methods
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.function Myclass () {this.privMethod = function (){}}
    // *     example 1: Myclass.classMethod = function () {}
    // *     example 1: Myclass.prototype.myfunc1 = function () {return(true);};
    // *     example 1: Myclass.prototype.myfunc2 = function () {return(true);}
    // *     example 1: \php.get_class_methods('MyClass')
    // *     returns 1: {}
    var constructor;

    var retArr={};
    var method = '';

    if (typeof name === 'function') {
        constructor = name;
    } else if (typeof name === 'string') {
        constructor = this.window[name];
    } else if (typeof name === 'object') {
        constructor = name;
        for (method in constructor.constructor) { // Get class methods of object's constructor
            if (typeof constructor.constructor[method] === 'function') {
                retArr[method] = constructor.constructor[method];
            }
        }
        // return retArr; // Uncomment to behave as "class" is usually defined in JavaScript convention (and see comment below)
    }
    for (method in constructor) {
        if (typeof constructor[method] === 'function') {
            retArr[method] = constructor[method];
        }
    }
    // Comment out this block to behave as "class" is usually defined in JavaScript convention (and see comment above)
    for (method in constructor.prototype) {
        if (typeof constructor.prototype[method] === 'function') {
            retArr[method] = constructor.prototype[method];
        }
    }

    return retArr;
};

exports.get_class_vars = function (name) {
    // Returns an array of default properties of the class.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/get_class_vars
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.function Myclass(){privMethod = function (){};}
    // *     example 1: Myclass.classMethod = function () {}
    // *     example 1: Myclass.prototype.myfunc1 = function () {return(true);};
    // *     example 1: Myclass.prototype.myfunc2 = function () {return(true);}
    // *     example 1: \php.get_class_vars('MyClass')
    // *     returns 1: {}

    var constructor;

    var retArr={};
    var prop = '';

    if (typeof name === 'function') {
        constructor = name;
    } else if (typeof name === 'string') {
        constructor = this.window[name];
    }

    for (prop in constructor) {
        if (typeof constructor[prop] !== 'function' && prop !== 'prototype') {
            retArr[prop] = constructor[prop];
        }
    }
    // Comment out this block to behave as "class" is usually defined in JavaScript convention
    if (constructor.prototype) {
        for (prop in constructor.prototype) {
            if (typeof constructor.prototype[prop] !== 'function') {
                retArr[prop] = constructor.prototype[prop];
            }
        }
    }

    return retArr;
};

exports.get_declared_classes = function () {
    // !No description available for get_declared_classes. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/get_declared_classes
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +    depends on: class_exists
    // *     example 1: \php.function A (z) {this.z=z} // Assign 'this' in constructor, making it class-like
    // *     example 1: \php.function B () {}
    // *     example 1: B.c = function () {}; // Add a static method, making it class-like
    // *     example 1: \php.function C () {}
    // *     example 1: C.prototype.z = function () {}; // Add to prototype, making it behave as a "class"
    // *     example 1: \php.get_declared_classes()
    // *     returns 1: [C, B, A]

    var i = '';

    var j = '';
    var arr = [];
    var already = {};

    for (i in this.window) {
        try {
            if (typeof this.window[i] === 'function') {
                if (!already[i] && this.class_exists(i)) {
                    already[i] = 1;
                    arr.push(i);
                }
            } else if (typeof this.window[i] === 'object') {
                for (j in this.window[i]) {
                    if (typeof this.window[j] === 'function' && this.window[j] && !already[j] && this.class_exists(j)) {
                        already[j] = 1;
                        arr.push(j);
                    }
                }
            }
        } catch (e) {

        }
    }

    return arr;
};

exports.get_defined_constants = function (categorize) {
    // +    original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Could possibly substitute some others like M_PI with JavaScript's Math.PI, etc., but here
    // %        note 1: sticking to PHP, except for changing: NULL to null, NAN to NaN, and INF to Number.POSITIVE_INFINITY
    // %        note 2: TRUE, FALSE, and NULL capitalized constants (as in PHP) could work ok in some
    // %        note 2: implementations, but not all, so they are commented out
    // %        note 3: We used a PHP script to auto-convert these, so we can simply reuse it to add more below if we
    // %        note 3: implement more extensions needing constants, assuming we have a PHP set-up which
    // %        note 3: uses the extensions!
    // %        note 4: If you do ini_set('phpjs.get_defined_constants.setConstants', 'this') then call this function,
    // %        note 4: it will set the PHP constants as globals for you on the "this" object. In the namespaced version, this
    // %        note 4: means the "constants" will be attached directly to the $P object: e.g., $P.PREG_OFFSET_CAPTURE
    // %        note 4: In the non-namespaced version, this will act like the setting mentioned in note 6
    // %        note 4: If you do ini_set('phpjs.get_defined_constants.setConstants', 'thisExt') then call this function,
    // %        note 4: it will set the PHP constants for you, but will first create a namespace on your object
    // %        note 4: for each extension to which the "constants" will be added. For example, $P.pcre.PREG_OFFSET_CAPTURE
    // %        note 4: For the non-namespaced version, this will be created on window: alert(pcre.PREG_OFFSET_CAPTURE);
    // %        note 4: If you do ini_set('phpjs.get_defined_constants.setConstants', true) then call this function,
    // %        note 4: it will set the PHP constants as window globals for you, even if you are using the php.js namespaced
    // %        note 4: version. For example, you can just do: alert(PREG_OFFSET_CAPTURE); . Only the constants set directly
    // %        note 4: at the level of window globals, will actually be immutable constants.
    // %        note 5: Note that our functions might not have been designed yet to handle PHP-style constants if at all, as
    // %        note 5: some of our extensions rely simply on the constant name being passed in to the function as a
    // %        note 5:  string to work as a flag
    // -    depends on: define
    // *     example 1: \php.var cnsts = get_defined_constants();
    // *     example 1: \php.cnsts.E_NOTICE;
    // *     returns 1: 8
    // *     example 2: \php.var cnsts = get_defined_constants(true); // passing false will produce the same value! (in PHP as well as here)
    // *     example 2: \php.cnsts.internal.E_NOTICE;
    // *     returns 2: 8

    var ext = '';

    var cnst = '';
    var constObj = {};
    var flatConstObj = {};
    var win;
    var thisExt = false;

    constObj = {
      'internal' : {
        'E_ERROR' : 1,
        'E_RECOVERABLE_ERROR' : 4096,
        'E_WARNING' : 2,
        'E_PARSE' : 4,
        'E_NOTICE' : 8,
        'E_STRICT' : 2048,
        'E_CORE_ERROR' : 16,
        'E_CORE_WARNING' : 32,
        'E_COMPILE_ERROR' : 64,
        'E_COMPILE_WARNING' : 128,
        'E_USER_ERROR' : 256,
        'E_USER_WARNING' : 512,
        'E_USER_NOTICE' : 1024,
        'E_ALL' : 6143,
        /* // Could work ok in some implementations, but not all, so commenting out
        'TRUE' : true,
        'FALSE' : false,
        'NULL' : null,
        */
        'ZEND_THREAD_SAFE' : true,
        'PHP_VERSION' : '5.2.6',
        'PHP_OS' : 'WINNT',
        'PHP_SAPI' : 'apache2handler',
        'DEFAULT_INCLUDE_PATH' : '.;C:\\php5\\pear',
        'PEAR_INSTALL_DIR' : 'C:\\php5\\pear',
        'PEAR_EXTENSION_DIR' : 'C:\\php5',
        'PHP_EXTENSION_DIR' : 'C:\\php5',
        'PHP_PREFIX' : 'C:\\php5',
        'PHP_BINDIR' : 'C:\\php5',
        'PHP_LIBDIR' : 'C:\\php5',
        'PHP_DATADIR' : 'C:\\php5',
        'PHP_SYSCONFDIR' : 'C:\\php5',
        'PHP_LOCALSTATEDIR' : 'C:\\php5',
        'PHP_CONFIG_FILE_PATH' : 'C:\\Windows',
        'PHP_CONFIG_FILE_SCAN_DIR' : '',
        'PHP_SHLIB_SUFFIX' : 'dll',
        'PHP_EOL' : '\n',
        'PHP_INT_MAX' : 2147483647,
        'PHP_INT_SIZE' : 4,
        'PHP_OUTPUT_HANDLER_START' : 1,
        'PHP_OUTPUT_HANDLER_CONT' : 2,
        'PHP_OUTPUT_HANDLER_END' : 4,
        'UPLOAD_ERR_OK' : 0,
        'UPLOAD_ERR_INI_SIZE' : 1,
        'UPLOAD_ERR_FORM_SIZE' : 2,
        'UPLOAD_ERR_PARTIAL' : 3,
        'UPLOAD_ERR_NO_FILE' : 4,
        'UPLOAD_ERR_NO_TMP_DIR' : 6,
        'UPLOAD_ERR_CANT_WRITE' : 7,
        'UPLOAD_ERR_EXTENSION' : 8
      },
      'pcre' : {
        'PREG_PATTERN_ORDER' : 1,
        'PREG_SET_ORDER' : 2,
        'PREG_OFFSET_CAPTURE' : 256,
        'PREG_SPLIT_NO_EMPTY' : 1,
        'PREG_SPLIT_DELIM_CAPTURE' : 2,
        'PREG_SPLIT_OFFSET_CAPTURE' : 4,
        'PREG_GREP_INVERT' : 1,
        'PREG_NO_ERROR' : 0,
        'PREG_INTERNAL_ERROR' : 1,
        'PREG_BACKTRACK_LIMIT_ERROR' : 2,
        'PREG_RECURSION_LIMIT_ERROR' : 3,
        'PREG_BAD_UTF8_ERROR' : 4,
        'PCRE_VERSION' : '7.6 2008-01-28'
      },
      'session' : {
        'DATE_ATOM' : 'Y-m-d\\TH:i:sP',
        'DATE_COOKIE' : 'l, d-M-y H:i:s T',
        'DATE_ISO8601' : 'Y-m-d\\TH:i:sO',
        'DATE_RFC822' : 'D, d M y H:i:s O',
        'DATE_RFC850' : 'l, d-M-y H:i:s T',
        'DATE_RFC1036' : 'D, d M y H:i:s O',
        'DATE_RFC1123' : 'D, d M Y H:i:s O',
        'DATE_RFC2822' : 'D, d M Y H:i:s O',
        'DATE_RFC3339' : 'Y-m-d\\TH:i:sP',
        'DATE_RSS' : 'D, d M Y H:i:s O',
        'DATE_W3C' : 'Y-m-d\\TH:i:sP',
        'SUNFUNCS_RET_TIMESTAMP' : 0,
        'SUNFUNCS_RET_STRING' : 1,
        'SUNFUNCS_RET_DOUBLE' : 2
      },
      'standard' : {
        'CONNECTION_ABORTED' : 1,
        'CONNECTION_NORMAL' : 0,
        'CONNECTION_TIMEOUT' : 2,
        'INI_USER' : 1,
        'INI_PERDIR' : 2,
        'INI_SYSTEM' : 4,
        'INI_ALL' : 7,
        'PHP_URL_SCHEME' : 0,
        'PHP_URL_HOST' : 1,
        'PHP_URL_PORT' : 2,
        'PHP_URL_USER' : 3,
        'PHP_URL_PASS' : 4,
        'PHP_URL_PATH' : 5,
        'PHP_URL_QUERY' : 6,
        'PHP_URL_FRAGMENT' : 7,
        'M_E' : 2.718281828459,
        'M_LOG2E' : 1.442695040889,
        'M_LOG10E' : 0.43429448190325,
        'M_LN2' : 0.69314718055995,
        'M_LN10' : 2.302585092994,
        'M_PI' : 3.1415926535898,
        'M_PI_2' : 1.5707963267949,
        'M_PI_4' : 0.78539816339745,
        'M_1_PI' : 0.31830988618379,
        'M_2_PI' : 0.63661977236758,
        'M_SQRTPI' : 1.7724538509055,
        'M_2_SQRTPI' : 1.1283791670955,
        'M_LNPI' : 1.1447298858494,
        'M_EULER' : 0.57721566490153,
        'M_SQRT2' : 1.4142135623731,
        'M_SQRT1_2' : 0.70710678118655,
        'M_SQRT3' : 1.7320508075689,
        'INF' : Number.POSITIVE_INFINITY,
        'NAN' : 0,
        'INFO_GENERAL' : 1,
        'INFO_CREDITS' : 2,
        'INFO_CONFIGURATION' : 4,
        'INFO_MODULES' : 8,
        'INFO_ENVIRONMENT' : 16,
        'INFO_VARIABLES' : 32,
        'INFO_LICENSE' : 64,
        'INFO_ALL' : -1,
        'CREDITS_GROUP' : 1,
        'CREDITS_GENERAL' : 2,
        'CREDITS_SAPI' : 4,
        'CREDITS_MODULES' : 8,
        'CREDITS_DOCS' : 16,
        'CREDITS_FULLPAGE' : 32,
        'CREDITS_QA' : 64,
        'CREDITS_ALL' : -1,
        'HTML_SPECIALCHARS' : 0,
        'HTML_ENTITIES' : 1,
        'ENT_COMPAT' : 2,
        'ENT_QUOTES' : 3,
        'ENT_NOQUOTES' : 0,
        'STR_PAD_LEFT' : 0,
        'STR_PAD_RIGHT' : 1,
        'STR_PAD_BOTH' : 2,
        'PATHINFO_DIRNAME' : 1,
        'PATHINFO_BASENAME' : 2,
        'PATHINFO_EXTENSION' : 4,
        'PATHINFO_FILENAME' : 8,
        'CHAR_MAX' : 127,
        'LC_CTYPE' : 2,
        'LC_NUMERIC' : 4,
        'LC_TIME' : 5,
        'LC_COLLATE' : 1,
        'LC_MONETARY' : 3,
        'LC_ALL' : 0,
        'SEEK_SET' : 0,
        'SEEK_CUR' : 1,
        'SEEK_END' : 2,
        'LOCK_SH' : 1,
        'LOCK_EX' : 2,
        'LOCK_UN' : 3,
        'LOCK_NB' : 4,
        'STREAM_NOTIFY_CONNECT' : 2,
        'STREAM_NOTIFY_AUTH_REQUIRED' : 3,
        'STREAM_NOTIFY_AUTH_RESULT' : 10,
        'STREAM_NOTIFY_MIME_TYPE_IS' : 4,
        'STREAM_NOTIFY_FILE_SIZE_IS' : 5,
        'STREAM_NOTIFY_REDIRECTED' : 6,
        'STREAM_NOTIFY_PROGRESS' : 7,
        'STREAM_NOTIFY_FAILURE' : 9,
        'STREAM_NOTIFY_COMPLETED' : 8,
        'STREAM_NOTIFY_RESOLVE' : 1,
        'STREAM_NOTIFY_SEVERITY_INFO' : 0,
        'STREAM_NOTIFY_SEVERITY_WARN' : 1,
        'STREAM_NOTIFY_SEVERITY_ERR' : 2,
        'STREAM_FILTER_READ' : 1,
        'STREAM_FILTER_WRITE' : 2,
        'STREAM_FILTER_ALL' : 3,
        'STREAM_CLIENT_PERSISTENT' : 1,
        'STREAM_CLIENT_ASYNC_CONNECT' : 2,
        'STREAM_CLIENT_CONNECT' : 4,
        'STREAM_CRYPTO_METHOD_SSLv2_CLIENT' : 0,
        'STREAM_CRYPTO_METHOD_SSLv3_CLIENT' : 1,
        'STREAM_CRYPTO_METHOD_SSLv23_CLIENT' : 2,
        'STREAM_CRYPTO_METHOD_TLS_CLIENT' : 3,
        'STREAM_CRYPTO_METHOD_SSLv2_SERVER' : 4,
        'STREAM_CRYPTO_METHOD_SSLv3_SERVER' : 5,
        'STREAM_CRYPTO_METHOD_SSLv23_SERVER' : 6,
        'STREAM_CRYPTO_METHOD_TLS_SERVER' : 7,
        'STREAM_SHUT_RD' : 0,
        'STREAM_SHUT_WR' : 1,
        'STREAM_SHUT_RDWR' : 2,
        'STREAM_PF_INET' : 2,
        'STREAM_PF_INET6' : 23,
        'STREAM_PF_UNIX' : 1,
        'STREAM_IPPROTO_IP' : 0,
        'STREAM_IPPROTO_TCP' : 6,
        'STREAM_IPPROTO_UDP' : 17,
        'STREAM_IPPROTO_ICMP' : 1,
        'STREAM_IPPROTO_RAW' : 255,
        'STREAM_SOCK_STREAM' : 1,
        'STREAM_SOCK_DGRAM' : 2,
        'STREAM_SOCK_RAW' : 3,
        'STREAM_SOCK_SEQPACKET' : 5,
        'STREAM_SOCK_RDM' : 4,
        'STREAM_PEEK' : 2,
        'STREAM_OOB' : 1,
        'STREAM_SERVER_BIND' : 4,
        'STREAM_SERVER_LISTEN' : 8,
        'FILE_USE_INCLUDE_PATH' : 1,
        'FILE_IGNORE_NEW_LINES' : 2,
        'FILE_SKIP_EMPTY_LINES' : 4,
        'FILE_APPEND' : 8,
        'FILE_NO_DEFAULT_CONTEXT' : 16,
        'PSFS_PASS_ON' : 2,
        'PSFS_FEED_ME' : 1,
        'PSFS_ERR_FATAL' : 0,
        'PSFS_FLAG_NORMAL' : 0,
        'PSFS_FLAG_FLUSH_INC' : 1,
        'PSFS_FLAG_FLUSH_CLOSE' : 2,
        'CRYPT_SALT_LENGTH' : 12,
        'CRYPT_STD_DES' : 1,
        'CRYPT_EXT_DES' : 0,
        'CRYPT_MD5' : 1,
        'CRYPT_BLOWFISH' : 0,
        'DIRECTORY_SEPARATOR' : '\\',
        'PATH_SEPARATOR' : ';',
        'GLOB_BRACE' : 128,
        'GLOB_MARK' : 8,
        'GLOB_NOSORT' : 32,
        'GLOB_NOCHECK' : 16,
        'GLOB_NOESCAPE' : 4096,
        'GLOB_ERR' : 4,
        'GLOB_ONLYDIR' : 1073741824,
        'GLOB_AVAILABLE_FLAGS' : 1073746108,
        'LOG_EMERG' : 1,
        'LOG_ALERT' : 1,
        'LOG_CRIT' : 1,
        'LOG_ERR' : 4,
        'LOG_WARNING' : 5,
        'LOG_NOTICE' : 6,
        'LOG_INFO' : 6,
        'LOG_DEBUG' : 6,
        'LOG_KERN' : 0,
        'LOG_USER' : 8,
        'LOG_MAIL' : 16,
        'LOG_DAEMON' : 24,
        'LOG_AUTH' : 32,
        'LOG_SYSLOG' : 40,
        'LOG_LPR' : 48,
        'LOG_NEWS' : 56,
        'LOG_UUCP' : 64,
        'LOG_CRON' : 72,
        'LOG_AUTHPRIV' : 80,
        'LOG_PID' : 1,
        'LOG_CONS' : 2,
        'LOG_ODELAY' : 4,
        'LOG_NDELAY' : 8,
        'LOG_NOWAIT' : 16,
        'LOG_PERROR' : 32,
        'EXTR_OVERWRITE' : 0,
        'EXTR_SKIP' : 1,
        'EXTR_PREFIX_SAME' : 2,
        'EXTR_PREFIX_ALL' : 3,
        'EXTR_PREFIX_INVALID' : 4,
        'EXTR_PREFIX_IF_EXISTS' : 5,
        'EXTR_IF_EXISTS' : 6,
        'EXTR_REFS' : 256,
        'SORT_ASC' : 4,
        'SORT_DESC' : 3,
        'SORT_REGULAR' : 0,
        'SORT_NUMERIC' : 1,
        'SORT_STRING' : 2,
        'SORT_LOCALE_STRING' : 5,
        'CASE_LOWER' : 0,
        'CASE_UPPER' : 1,
        'COUNT_NORMAL' : 0,
        'COUNT_RECURSIVE' : 1,
        'ASSERT_ACTIVE' : 1,
        'ASSERT_CALLBACK' : 2,
        'ASSERT_BAIL' : 3,
        'ASSERT_WARNING' : 4,
        'ASSERT_QUIET_EVAL' : 5,
        'STREAM_USE_PATH' : 1,
        'STREAM_IGNORE_URL' : 2,
        'STREAM_ENFORCE_SAFE_MODE' : 4,
        'STREAM_REPORT_ERRORS' : 8,
        'STREAM_MUST_SEEK' : 16,
        'STREAM_URL_STAT_LINK' : 1,
        'STREAM_URL_STAT_QUIET' : 2,
        'STREAM_MKDIR_RECURSIVE' : 1,
        'STREAM_IS_URL' : 1,
        'IMAGETYPE_GIF' : 1,
        'IMAGETYPE_JPEG' : 2,
        'IMAGETYPE_PNG' : 3,
        'IMAGETYPE_SWF' : 4,
        'IMAGETYPE_PSD' : 5,
        'IMAGETYPE_BMP' : 6,
        'IMAGETYPE_TIFF_II' : 7,
        'IMAGETYPE_TIFF_MM' : 8,
        'IMAGETYPE_JPC' : 9,
        'IMAGETYPE_JP2' : 10,
        'IMAGETYPE_JPX' : 11,
        'IMAGETYPE_JB2' : 12,
        'IMAGETYPE_SWC' : 13,
        'IMAGETYPE_IFF' : 14,
        'IMAGETYPE_WBMP' : 15,
        'IMAGETYPE_JPEG2000' : 9,
        'IMAGETYPE_XBM' : 16
      }
    };

    if (this.php_js && this.php_js.ini && this.php_js.ini['phpjs.get_defined_constants.setConstants'] &&
            this.php_js.ini['phpjs.get_defined_constants.setConstants'].local_value) {
        // Allow us to set a configuration to let this function set global constants
        if (this.php_js.ini['phpjs.get_defined_constants.setConstants'].local_value === 'this') {
            win = this;
        }
        else if (this.php_js.ini['phpjs.get_defined_constants.setConstants'].local_value === 'thisExt') {
            win = this;
            thisExt = true;
        }
        else {
            win = this.window;
        }
        
        for (ext in constObj) {
            if (thisExt) { // Allows namespacing constants (e.g,. this.pcre.PREG_OFFSET_CAPTURE)
                for (cnst in constObj[ext]) {
                    if (!win[ext]) {
                        win[ext] = {};
                    }
                    // These will not be real constants!
                    win[ext][cnst] = constObj[ext][cnst];
                }
            }
            else {
                for (cnst in constObj[ext]) {
                    if (this === this.window) { // Take advantage of fact, in this case we can make real constants
                        this.define(cnst, constObj[ext][cnst]);
                    }
                    else {
                        // These will not be real constants!
                        win[cnst] = constObj[ext][cnst];
                    }
                }
            }
        }
    }

    if (typeof categorize !== 'undefined') { // PHP will return if any argument is set, even false
        return constObj;
    }

    for (ext in constObj) {
        for (cnst in constObj[ext]) {
            flatConstObj[cnst] = constObj[ext][cnst];
        }
    }
    return flatConstObj;
};

exports.get_defined_functions = function () {
    // Returns an array of all defined functions
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/get_defined_functions
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Test case 1: If get_defined_functions can find itself in the defined functions, it worked :)
    // *     example 1: \php.function test_in_array (array, p_val) {for(var i = 0, l = array.length; i < l; i++) {if(array[i] == p_val) return true;} return false;}
    // *     example 1: \php.funcs = get_defined_functions();
    // *     example 1: \php.found = test_in_array(funcs, 'get_defined_functions');
    // *     results 1: found == true
    var i = '';

    var arr = [];
    var already = {};

    for (i in this.window) {
        try {
            if (typeof this.window[i] === 'function') {
                if (!already[i]) {
                    already[i] = 1;
                    arr.push(i);
                }
            }
            else if (typeof this.window[i] === 'object') {
                for (var j in this.window[i]) {
                    if (typeof this.window[j] === 'function' && this.window[j] && !already[j]) {
                        already[j] = 1;
                        arr.push(j);
                    }
                }
            }
        }
        catch (e) {
            // Some objects in Firefox throw exceptions when their properties are accessed (e.g., sessionStorage)
        }
    }

    return arr;
};

exports.get_defined_vars = function () {
    // Returns an associative array of names and values of all currently defined variable names (variables in the current scope)
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/get_defined_vars
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Test case 1: If get_defined_vars can find itself in the defined vars, it worked :)
    // *     example 1: \php.function test_in_array(array, p_val) {for(var i = 0, l = array.length; i < l; i++) {if(array[i] == p_val) return true;} return false;}
    // *     example 1: \php.funcs = get_defined_vars();
    // *     example 1: \php.found = test_in_array(funcs, 'get_defined_vars');
    // *     results 1: found == true
    var i = '';

    var arr = [];
    var already = {};

    for (i in this.window) {
        try {
            if (typeof this.window[i] === 'object') {
                for (var j in this.window[i]) {
                    if (this.window[j] && !already[j]) {
                        already[j] = 1;
                        arr.push(j);
                    }
                }
            }
            else if (!already[i]) {
                already[i] = 1;
                arr.push(i);
            }
        }
        catch (e) { // Problems accessing some properties in FF (e.g., sessionStorage)
            if (!already[i]) {
                already[i] = 1;
                arr.push(i);
            }
        }
    }

    return arr;
};

exports.get_extension_funcs = function (module_name) {
    // Returns an array with the names of functions belonging to the named extension
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/get_extension_funcs
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.get_extension_funcs('json');
    // *     returns 1: ['json_decode', 'json_encode', 'json_last_error']

    this.php_js = this.php_js || {};
    // We put this on the global in order to avoid rebuilding and reuse this object by itself
    this.php_js.exts = this.php_js.exts || { // This only includes those extensions for which we have or are working on at least some functions
        array: ['array_change_key_case','array_chunk','array_combine','array_count_values','array_diff_assoc','array_diff_key','array_diff_uassoc','array_diff_ukey','array_diff','array_fill_keys','array_fill','array_filter','array_flip','array_intersect_assoc','array_intersect_key','array_intersect_uassoc','array_intersect_ukey','array_intersect','array_key_exists','array_keys','array_map','array_merge_recursive','array_merge','array_multisort','array_pad','array_pop','array_product','array_push','array_rand','array_reduce','array_replace_recursive','array_replace','array_reverse','array_search','array_shift','array_slice','array_splice','array_sum','array_udiff_assoc','array_udiff_uassoc','array_udiff','array_uintersect_assoc','array_uintersect_uassoc','array_uintersect','array_unique','array_unshift','array_values','array_walk_recursive','array_walk','array','arsort','asort','compact','count','current','each','end','extract','in_array','key','krsort','ksort','list','natcasesort','natsort','next','pos','prev','range','reset','rsort','shuffle','sizeof','sort','uasort','uksort','usort'],
        bc: ['bcadd','bccomp','bcdiv','bcmod','bcmul','bcpow','bcpowmod','bcscale','bcsqrt','bcsub'],
        classkit: ['classkit_import','classkit_method_add','classkit_method_copy','classkit_method_redefine','classkit_method_remove','classkit_method_rename'],
        classobj: ['call_user_method_array','call_user_method','class_alias','class_exists','get_called_class','get_class_methods','get_class_vars','get_class','get_declared_classes','get_declared_interfaces','get_object_vars','get_parent_class','interface_exists','is_a','is_subclass_of','method_exists','property_exists'],
        ctype: ['ctype_alnum','ctype_alpha','ctype_cntrl','ctype_digit','ctype_graph','ctype_lower','ctype_print','ctype_punct','ctype_space','ctype_upper','ctype_xdigit'],
        datetime: ['checkdate','date_add','date_create_from_format','date_create','date_date_set','date_default_timezone_get','date_default_timezone_set','date_diff','date_format','date_get_last_errors','date_interval_create_from_date_string','date_interval_format','date_isodate_set','date_modify','date_offset_get','date_parse_from_format','date_parse','date_sub','date_sun_info','date_sunrise','date_sunset','date_time_set','date_timestamp_get','date_timestamp_set','date_timezone_get','date_timezone_set','date','getdate','gettimeofday','gmdate','gmmktime','gmstrftime','idate','localtime','microtime','mktime','strftime','strptime','strtotime','time','timezone_abbreviations_list','timezone_identifiers_list','timezone_location_get','timezone_name_from_abbr','timezone_name_get','timezone_offset_get','timezone_open','timezone_transitions_get','timezone_version_get'],
        dir : ['chdir','chroot','dir','closedir','getcwd','opendir','readdir','rewinddir','scandir'],
        errorfunc: ['debug_backtrace','debug_print_backtrace','error_get_last','error_log','error_reporting','restore_error_handler','restore_exception_handler','set_error_handler','set_exception_handler','trigger_error','user_error'],
        exec: ['escapeshellarg','escapeshellcmd','exec','passthru','proc_close','proc_get_status','proc_nice','proc_open','proc_terminate','shell_exec','system'],
        filesystem: ['basename','chgrp','chmod','chown','clearstatcache','copy','delete','dirname','disk_free_space','disk_total_space','diskfreespace','fclose','feof','fflush','fgetc','fgetcsv','fgets','fgetss','file_exists','file_get_contents','file_put_contents','file','fileatime','filectime','filegroup','fileinode','filemtime','fileowner','fileperms','filesize','filetype','flock','fnmatch','fopen','fpassthru','fputcsv','fputs','fread','fscanf','fseek','fstat','ftell','ftruncate','fwrite','glob','is_dir','is_executable','is_file','is_link','is_readable','is_uploaded_file','is_writable','is_writeable','lchgrp','lchown','link','linkinfo','lstat','mkdir','move_uploaded_file','parse_ini_file','parse_ini_string','pathinfo','pclose','popen','readfile','readlink','realpath','rename','rewind','rmdir','set_file_buffer','stat','symlink','tempnam','tmpfile','touch','umask','unlink'],
        funchand: ['call_user_func_array','call_user_func','create_function','forward_static_call_array','forward_static_call','func_get_arg','func_get_args','func_num_args','function_exists','get_defined_functions','register_shutdown_function','register_tick_function','unregister_tick_function'],
        // Moving to http://us.php.net/manual/en/class.locale.php ?
        i18n: ['locale_get_default','locale_set_default'],
        inclued: ['inclued_get_data'],
        info: ['assert_options','assert','dl','extension_loaded','gc_collect_cycles','gc_disable','gc_enable','gc_enabled','get_cfg_var','get_current_user','get_defined_constants','get_extension_funcs','get_include_path','get_included_files','get_loaded_extensions','get_magic_quotes_gpc','get_magic_quotes_runtime','get_required_files','getenv','getlastmod','getmygid','getmyinode','getmypid','getmyuid','getopt','getrusage','ini_alter','ini_get_all','ini_get','ini_restore','ini_set','magic_quotes_runtime','main','memory_get_peak_usage','memory_get_usage','php_ini_loaded_file','php_ini_scanned_files','php_logo_guid','php_sapi_name','php_uname','phpcredits','phpinfo','phpversion','putenv','restore_include_path','set_include_path','set_magic_quotes_runtime','set_time_limit','sys_get_temp_dir','version_compare','zend_logo_guid','zend_thread_id','zend_version'],
        json: ['json_decode', 'json_encode', 'json_last_error'],
        // Note that "language" is not a real extension, but part of the PHP language which we implement as JavaScript functions
        language: ['at','clone','declare','foreach','goto','include','include_once','php_user_filter','require','require_once','stdClass',
                            'ErrorException', 'Exception','HEREDOC',
                            '$_SESSION', '__CLASS__', '__DIR__', '__FILE__','__FUNCTION__','__LINE__','__METHOD__',
                            ],
        math: ['abs','acos','acosh','asin','asinh','atan2','atan','atanh','base_convert','bindec','ceil','cos','cosh','decbin','dechex','decoct','deg2rad','exp','expm1','floor','fmod','getrandmax','hexdec','hypot','is_finite','is_infinite','is_nan','lcg_value','log10','log1p','log','max','min','mt_getrandmax','mt_rand','mt_srand','octdec','pi','pow','rad2deg','rand','round','sin','sinh','sqrt','srand','tan','tanh'],
        misc: ['connection_aborted','connection_status','connection_timeout','constant','define','defined','die','eval','exit','get_browser','__halt_compiler','highlight_file','highlight_string','ignore_user_abort','pack','php_check_syntax','php_strip_whitespace','show_source','sleep','sys_getloadavg','time_nanosleep','time_sleep_until','uniqid','unpack','usleep'],
        'net-gopher' : ['gopher_parsedir'],
        network: ['checkdnsrr','closelog','define_syslog_variables','dns_check_record','dns_get_mx','dns_get_record','fsockopen','gethostbyaddr','gethostbyname','gethostbynamel','gethostname','getmxrr','getprotobyname','getprotobynumber','getservbyname','getservbyport','header_remove','header','headers_list','headers_sent','inet_ntop','inet_pton','ip2long','long2ip','openlog','pfsockopen','setcookie','setrawcookie','socket_get_status','socket_set_blocking','socket_set_timeout','syslog'],
        objaggregation: ['aggregate_info','aggregate_methods_by_list','aggregate_methods_by_regexp','aggregate_methods','aggregate_properties_by_list','aggregate_properties_by_regexp','aggregate_properties','aggregate','aggregation_info','deaggregate'],
        outcontrol: ['flush','ob_clean','ob_end_clean','ob_end_flush','ob_flush','ob_get_clean','ob_get_contents','ob_get_flush','ob_get_length','ob_get_level','ob_get_status','ob_gzhandler','ob_implicit_flush','ob_list_handlers','ob_start','output_add_rewrite_var','output_reset_rewrite_vars'],
        overload: ['overload'],
        pcre: ['preg_filter','preg_grep','preg_last_error','preg_match_all','preg_match','preg_quote','preg_replace_callback','preg_replace','preg_split'],
        runkit: ['Runkit_Sandbox','Runkit_Sandbox_Parent','runkit_class_adopt','runkit_class_emancipate','runkit_constant_add','runkit_constant_redefine','runkit_constant_remove','runkit_function_add','runkit_function_copy','runkit_function_redefine','runkit_function_remove','runkit_function_rename','runkit_import','runkit_lint_file','runkit_lint','runkit_method_add','runkit_method_copy','runkit_method_redefine','runkit_method_remove','runkit_method_rename','runkit_return_value_used','runkit_sandbox_output_handler','runkit_superglobals'],
        session: ['session_cache_expire','session_cache_limiter','session_commit','session_decode','session_destroy','session_encode','session_get_cookie_params','session_id','session_is_registered','session_module_name','session_name','session_regenerate_id','session_register','session_save_path','session_set_cookie_params','session_set_save_handler','session_start','session_unregister','session_unset','session_write_close'],
        stream: ['set_socket_blocking','stream_bucket_append','stream_bucket_make_writeable','stream_bucket_new','stream_bucket_prepend','stream_context_create','stream_context_get_default','stream_context_get_options','stream_context_get_params','stream_context_set_default','stream_context_set_option','stream_context_set_params','stream_copy_to_stream','stream_encoding','stream_filter_append','stream_filter_prepend','stream_filter_register','stream_filter_remove','stream_get_contents','stream_get_filters','stream_get_line','stream_get_meta_data','stream_get_transports','stream_get_wrappers','stream_is_local','stream_notification_callback','stream_register_wrapper','stream_resolve_include_path','stream_select','stream_set_blocking','stream_set_timeout','stream_set_write_buffer','stream_socket_accept','stream_socket_client','stream_socket_enable_crypto','stream_socket_get_name','stream_socket_pair','stream_socket_recvfrom','stream_socket_sendto','stream_socket_server','stream_socket_shutdown','stream_supports_lock','stream_wrapper_register','stream_wrapper_restore','stream_wrapper_unregister'],
        strings: ['addcslashes','addslashes','bin2hex','chop','chr','chunk_split','convert_cyr_string','convert_uudecode','convert_uuencode','count_chars','crc32','crypt','echo','explode','fprintf','get_html_translation_table','hebrev','hebrevc','html_entity_decode','htmlentities','htmlspecialchars_decode','htmlspecialchars','implode','join','lcfirst','levenshtein','localeconv','ltrim','md5_file','md5','metaphone','money_format','nl_langinfo','nl2br','number_format','ord','parse_str','print','printf','quoted_printable_decode','quoted_printable_encode','quotemeta','rtrim','setlocale','sha1_file','sha1','similar_text','soundex','sprintf','sscanf','str_getcsv','str_ireplace','str_pad','str_repeat','str_replace','str_rot13','str_shuffle','str_split','str_word_count','strcasecmp','strchr','strcmp','strcoll','strcspn','strip_tags','stripcslashes','stripos','stripslashes','stristr','strlen','strnatcasecmp','strnatcmp','strncasecmp','strncmp','strpbrk','strpos','strrchr','strrev','strripos','strrpos','strspn','strstr','strtok','strtolower','strtoupper','strtr','substr_compare','substr_count','substr_replace','substr','trim','ucfirst','ucwords','vfprintf','vprintf','vsprintf','wordwrap'],
        tokenizer: ['token_get_all','token_name'],
        url: ['base64_decode','base64_encode','get_headers','get_meta_tags','http_build_query','parse_url','rawurldecode','rawurlencode','urldecode','urlencode'],
        'var': ['debug_zval_dump','doubleval','empty','floatval','get_defined_vars','get_resource_type','gettype','import_request_variables','intval','is_array','is_binary','is_bool','is_buffer','is_callable','is_double','is_float','is_int','is_integer','is_long','is_null','is_numeric','is_object','is_real','is_resource','is_scalar','is_string','is_unicode','isset','print_r','serialize','settype','strval','unserialize','unset','var_dump','var_export'],
        xml: ['utf8_decode','utf8_encode','xml_error_string','xml_get_current_byte_index','xml_get_current_column_number','xml_get_current_line_number','xml_get_error_code','xml_parse_into_struct','xml_parse','xml_parser_create_ns','xml_parser_create','xml_parser_free','xml_parser_get_option','xml_parser_set_option','xml_set_character_data_handler','xml_set_default_handler','xml_set_element_handler','xml_set_end_namespace_decl_handler','xml_set_external_entity_ref_handler','xml_set_notation_decl_handler','xml_set_object','xml_set_processing_instruction_handler','xml_set_start_namespace_decl_handler','xml_set_unparsed_entity_decl_handler'],
        xmlreader: ['XMLReader'], // only in class form
        xmlwriter: ['xmlwriter_end_attribute','xmlwriter_end_cdata','xmlwriter_end_comment','xmlwriter_end_document','xmlwriter_end_dtd_attlist','xmlwriter_end_dtd_element','xmlwriter_end_dtd_entity','xmlwriter_end_dtd','xmlwriter_end_element','xmlwriter_end_pi','xmlwriter_flush','xmlwriter_full_end_element','xmlwriter_open_memory','xmlwriter_open_uri','xmlwriter_output_memory','xmlwriter_set_indent_string','xmlwriter_set_indent','xmlwriter_start_attribute_ns','xmlwriter_start_attribute','xmlwriter_start_cdata','xmlwriter_start_comment','xmlwriter_start_document','xmlwriter_start_dtd_attlist','xmlwriter_start_dtd_element','xmlwriter_start_dtd_entity','xmlwriter_start_dtd','xmlwriter_start_element_ns','xmlwriter_start_element','xmlwriter_start_pi','xmlwriter_text','xmlwriter_write_attribute_ns','xmlwriter_write_attribute','xmlwriter_write_cdata','xmlwriter_write_comment','xmlwriter_write_dtd_attlist','xmlwriter_write_dtd_element','xmlwriter_write_dtd_entity','xmlwriter_write_dtd','xmlwriter_write_element_ns','xmlwriter_write_element','xmlwriter_write_pi','xmlwriter_write_raw']
    };
    return this.php_js.exts[module_name] || false;
};

exports.get_headers = function (url, format) {
    // +   original by: Paulo Freitas
    // +    bugfixed by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: This function uses XmlHttpRequest and cannot retrieve resource from different domain.
    // %        note 1: Synchronous so may lock up browser, mainly here for study purposes.
    // *     example 1: \php.get_headers('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm')[0];
    // *     returns 1: 'Date: Wed, 13 May 2009 23:53:11 GMT'
    var req = this.window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
    if (!req) {
        throw new Error('XMLHttpRequest not supported');
    }
    var tmp;
    var headers;
    var pair;
    var i;
    var j = 0;

    req.open('HEAD', url, false);
    req.send(null);

    if (req.readyState < 3) {
        return false;
    }

    tmp = req.getAllResponseHeaders();
    tmp = tmp.split('\n');
    tmp = this.array_filter(tmp, value => value.substring(1) !== '');
    headers = format ? {} : [];

    for (i in tmp) {
        if (format) {
            pair = tmp[i].split(':');
            headers[pair.splice(0, 1)] = pair.join(':').substring(1);
        } else {
            headers[j++] = tmp[i];
        }
    }
    return headers;
};

exports.get_html_translation_table = (table, quote_style) => {
    // Returns the internal translation table used by htmlspecialchars and htmlentities
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/get_html_translation_table
    // +   original by: Philip Peterson
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: noname
    // +   bugfixed by: Alex
    // +   bugfixed by: Marco
    // +   bugfixed by: madipta
    // +   improved by: KELAN
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Frank Forte
    // +   bugfixed by: T.Wild
    // +      input by: Ratheous
    // %          note: It has been decided that we're not going to add global
    // %          note: dependencies to php.js, meaning the constants are not
    // %          note: real constants, but strings instead. Integers are also supported if someone
    // %          note: chooses to create the constants themselves.
    // *     example 1: \php.get_html_translation_table('HTML_SPECIALCHARS');
    // *     returns 1: {'"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;'}

    var entities = {};

    var hash_map = {};
    var decimal = 0;
    var symbol = '';
    var constMappingTable = {};
    var constMappingQuoteStyle = {};
    var useTable = {};
    var useQuoteStyle = {};

    // Translate arguments
    constMappingTable[0]      = 'HTML_SPECIALCHARS';
    constMappingTable[1]      = 'HTML_ENTITIES';
    constMappingQuoteStyle[0] = 'ENT_NOQUOTES';
    constMappingQuoteStyle[2] = 'ENT_COMPAT';
    constMappingQuoteStyle[3] = 'ENT_QUOTES';

    useTable       = !isNaN(table) ? constMappingTable[table] : table ? table.toUpperCase() : 'HTML_SPECIALCHARS';
    useQuoteStyle = !isNaN(quote_style) ? constMappingQuoteStyle[quote_style] : quote_style ? quote_style.toUpperCase() : 'ENT_COMPAT';

    if (useTable !== 'HTML_SPECIALCHARS' && useTable !== 'HTML_ENTITIES') {
        throw new Error("Table: "+useTable+' not supported');
        // return false;
    }

    entities['38'] = '&amp;';
    if (useTable === 'HTML_ENTITIES') {
        entities['160'] = '&nbsp;';
        entities['161'] = '&iexcl;';
        entities['162'] = '&cent;';
        entities['163'] = '&pound;';
        entities['164'] = '&curren;';
        entities['165'] = '&yen;';
        entities['166'] = '&brvbar;';
        entities['167'] = '&sect;';
        entities['168'] = '&uml;';
        entities['169'] = '&copy;';
        entities['170'] = '&ordf;';
        entities['171'] = '&laquo;';
        entities['172'] = '&not;';
        entities['173'] = '&shy;';
        entities['174'] = '&reg;';
        entities['175'] = '&macr;';
        entities['176'] = '&deg;';
        entities['177'] = '&plusmn;';
        entities['178'] = '&sup2;';
        entities['179'] = '&sup3;';
        entities['180'] = '&acute;';
        entities['181'] = '&micro;';
        entities['182'] = '&para;';
        entities['183'] = '&middot;';
        entities['184'] = '&cedil;';
        entities['185'] = '&sup1;';
        entities['186'] = '&ordm;';
        entities['187'] = '&raquo;';
        entities['188'] = '&frac14;';
        entities['189'] = '&frac12;';
        entities['190'] = '&frac34;';
        entities['191'] = '&iquest;';
        entities['192'] = '&Agrave;';
        entities['193'] = '&Aacute;';
        entities['194'] = '&Acirc;';
        entities['195'] = '&Atilde;';
        entities['196'] = '&Auml;';
        entities['197'] = '&Aring;';
        entities['198'] = '&AElig;';
        entities['199'] = '&Ccedil;';
        entities['200'] = '&Egrave;';
        entities['201'] = '&Eacute;';
        entities['202'] = '&Ecirc;';
        entities['203'] = '&Euml;';
        entities['204'] = '&Igrave;';
        entities['205'] = '&Iacute;';
        entities['206'] = '&Icirc;';
        entities['207'] = '&Iuml;';
        entities['208'] = '&ETH;';
        entities['209'] = '&Ntilde;';
        entities['210'] = '&Ograve;';
        entities['211'] = '&Oacute;';
        entities['212'] = '&Ocirc;';
        entities['213'] = '&Otilde;';
        entities['214'] = '&Ouml;';
        entities['215'] = '&times;';
        entities['216'] = '&Oslash;';
        entities['217'] = '&Ugrave;';
        entities['218'] = '&Uacute;';
        entities['219'] = '&Ucirc;';
        entities['220'] = '&Uuml;';
        entities['221'] = '&Yacute;';
        entities['222'] = '&THORN;';
        entities['223'] = '&szlig;';
        entities['224'] = '&agrave;';
        entities['225'] = '&aacute;';
        entities['226'] = '&acirc;';
        entities['227'] = '&atilde;';
        entities['228'] = '&auml;';
        entities['229'] = '&aring;';
        entities['230'] = '&aelig;';
        entities['231'] = '&ccedil;';
        entities['232'] = '&egrave;';
        entities['233'] = '&eacute;';
        entities['234'] = '&ecirc;';
        entities['235'] = '&euml;';
        entities['236'] = '&igrave;';
        entities['237'] = '&iacute;';
        entities['238'] = '&icirc;';
        entities['239'] = '&iuml;';
        entities['240'] = '&eth;';
        entities['241'] = '&ntilde;';
        entities['242'] = '&ograve;';
        entities['243'] = '&oacute;';
        entities['244'] = '&ocirc;';
        entities['245'] = '&otilde;';
        entities['246'] = '&ouml;';
        entities['247'] = '&divide;';
        entities['248'] = '&oslash;';
        entities['249'] = '&ugrave;';
        entities['250'] = '&uacute;';
        entities['251'] = '&ucirc;';
        entities['252'] = '&uuml;';
        entities['253'] = '&yacute;';
        entities['254'] = '&thorn;';
        entities['255'] = '&yuml;';
    }

    if (useQuoteStyle !== 'ENT_NOQUOTES') {
        entities['34'] = '&quot;';
    }
    if (useQuoteStyle === 'ENT_QUOTES') {
        entities['39'] = '&#39;';
    }
    entities['60'] = '&lt;';
    entities['62'] = '&gt;';


    // ascii decimals to real symbols
    for (decimal in entities) {
        symbol = String.fromCharCode(decimal);
        hash_map[symbol] = entities[decimal];
    }

    return hash_map;
};

exports.get_include_path = function () {
    // !No description available for get_include_path. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/get_include_path
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.get_include_path();
    // *     returns 1: '/phpjs'

    if (this.php_js && this.php_js.ini && this.php_js.ini.include_path && this.php_js.ini.include_path.local_value) {
        return this.php_js.ini.include_path.local_value;
    }
    return '';
};

exports.get_included_files = function () {
    // Returns an array with the file names that were included (includes require and once varieties)
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/get_included_files
    // +   original by: Michael White (http://getsprink.com)
    // %        note 1: Uses global: php_js to keep track of included files
    // *     example 1: \php.get_included_files();
    // *     returns 1: ['http://kevin.vanzonneveld.net/pj_tester.php']
    var cur_file = {};
    cur_file[this.window.location.href] = 1;
    if (!this.php_js) {
        this.php_js = {};
    }
    if (!this.php_js.includes) {
        this.php_js.includes = cur_file;
    }

    var includes = [];
    var i = 0;
    for (var key in this.php_js.includes){
        includes[i] = key;
        i++;
    }

    return includes;
};

exports.get_meta_tags = function (file) {
    // Extracts all meta tag content attributes from a file and returns an array
    //
    // version: 905.3122
    // discuss at: http://phpjs.org/functions/get_meta_tags
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: This function uses XmlHttpRequest and cannot retrieve resource from different domain.
    // %        note 1: Synchronous so may lock up browser, mainly here for study purposes.
    // -    depends on: file_get_contents
    // *     example 1: \php.get_meta_tags('http://kevin.vanzonneveld.net/pj_test_supportfile_2.htm');
    // *     returns 1: {description: 'a php manual', author: 'name', keywords: 'php documentation', 'geo_position': '49.33;-86.59'}
    var fulltxt = '';

    if (false) {
        // Use this for testing instead of the line above:
        fulltxt = '<meta name="author" content="name">'+
        '<meta name="keywords" content="php documentation">'+
        '<meta name="DESCRIPTION" content="a php manual">'+
        '<meta name="geo.position" content="49.33;-86.59">'+
        '</head>';
    } else {
        fulltxt = this.file_get_contents(file).match(/^[\s\S]*<\/head>/i); // We have to disallow some character, so we choose a Unicode non-character
    }

    var patt = /<meta[^>]*?>/gim;
    var patt1 = /<meta\s+.*?name\s*=\s*(['"]?)(.*?)\1\s+.*?content\s*=\s*(['"]?)(.*?)\3/gim;
    var patt2 = /<meta\s+.*?content\s*=\s*(['"?])(.*?)\1\s+.*?name\s*=\s*(['"]?)(.*?)\3/gim;
    var txt;
    var match;
    var name;
    var arr={};

    while ((txt = patt.exec(fulltxt)) !== null) {
        while ((match = patt1.exec(txt)) !== null) {
            name = match[2].replace(/\W/g, '_').toLowerCase();
            arr[name] = match[4];
        }
        while ((match = patt2.exec(txt)) !== null) {
            name = match[4].replace(/\W/g, '_').toLowerCase();
            arr[name] = match[2];
        }
    }
    return arr;
};

exports.get_object_vars = obj => {
    // Returns an array of object properties
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/get_object_vars
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.function Myclass () {this.privMethod = function (){}}
    // *     example 1: Myclass.classMethod = function () {}
    // *     example 1: Myclass.prototype.myfunc1 = function () {return(true);};
    // *     example 1: Myclass.prototype.myfunc2 = function () {return(true);}
    // *     example 1: \php.get_object_vars('MyClass')
    // *     returns 1: {}
    var retArr = {};

    var prop = '';

    for (prop in obj) {
        if (typeof obj[prop] !== 'function' && prop !== 'prototype') {
            retArr[prop] = obj[prop];
        }
    }
    for (prop in obj.prototype) {
        if (typeof obj.prototype[prop] !== 'function') {
            retArr[prop] = obj.prototype[prop];
        }
    }

    return retArr;
};

exports.get_required_files = function () {
    // !No description available for get_required_files. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/get_required_files
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: get_included_files
    // *     example 1: \php.get_required_files();
    // *     returns 1: ['http://kevin.vanzonneveld.net/pj_tester.php']
    return this.get_included_files();
};

exports.get_resource_type = handle => {
    // Get the resource type name for a given resource
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/get_resource_type
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.get_resource_type('a');
    // *     returns 1: false
    var getFuncName = fn => {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
        if (!name) {
            return '(Anonymous)';
        }
        return name[1];
    };
    if (!handle || typeof handle !== 'object' || !handle.constructor || getFuncName(handle.constructor) !== 'PHPJS_Resource') {
        return false;
    }

    return handle.get_resource_type();
};

exports.getdate = timestamp => {
    // Get date/time information
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/getdate
    // +   original by: Paulo Freitas
    // +   input by: Alex
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.getdate(1055901520);
    // *     returns 1: {'seconds': 40, 'minutes': 58, 'hours': 21, 'mday': 17, 'wday': 2, 'mon': 6, 'year': 2003, 'yday': 167, 'weekday': 'Tuesday', 'month': 'June', '0': 1055901520}
    var _w = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var _m = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var d=(
        (typeof(timestamp) == 'undefined') ? new Date() : // Not provided
        (typeof(timestamp) == 'object') ? new Date(timestamp) : // Javascript Date()
        new Date(timestamp*1000) // UNIX timestamp (auto-convert to int)
    );
    var w = d.getDay();
    var m = d.getMonth();
    var y = d.getFullYear();
    var r = {};

    r.seconds = d.getSeconds();
    r.minutes = d.getMinutes();
    r.hours = d.getHours();
    r.mday = d.getDate();
    r.wday = w;
    r.mon = m + 1;
    r.year = y;
    r.yday = Math.floor((d - (new Date(y, 0, 1))) / 86400000);
    r.weekday = _w[w];
    r.month = _m[m];
    r['0'] = parseInt(d.getTime() / 1000, 10);

    return r;
};

exports.getenv = function (varname) {
    // Get the value of an environment variable
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/getenv
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: We are not using $_ENV as in PHP, you could define
    // %        note 1: "$_ENV = this.php_js.ENV;" and get/set accordingly
    // %        note 2: Returns e.g. 'en-US' when set global this.php_js.ENV is set
    // %        note 3: Uses global: php_js to store environment info
    // *     example 1: \php.getenv('LC_ALL');
    // *     returns 1: false

    if (!this.php_js || !this.php_js.ENV || !this.php_js.ENV[varname]) {
        return false;
    }

    return this.php_js.ENV[varname];
};

exports.getlastmod = function () {
    // Get time of last page modification
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/getlastmod
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Will not work on browsers which don't support document.lastModified
    // *     example 1: \php.getlastmod();
    // *     returns 1: 1237610043
    return new Date(this.window.document.lastModified).getTime()/1000;
};

exports.getrandmax = () => // Returns the maximum value a random number can have
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/getrandmax
// +   original by: Onno Marsman
// *     example 1: \php.getrandmax();
// *     returns 1: 2147483647
2147483647;

exports.gettimeofday = return_float => {
    // Returns the current time as array
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/gettimeofday
    // + original by: Brett Zamir (http://brett-zamir.me)
    // +      derived from: Josh Fraser (http://onlineaspect.com/2007/06/08/auto-detect-a-time-zone-with-javascript/)
    // +         parts by: Breaking Par Consulting Inc (http://www.breakingpar.com/bkp/home.nsf/0/87256B280015193F87256CFB006C45F7)
    // +  revised by: Theriault
    // *   example 1: \php.gettimeofday();
    // *   returns 1: {sec: 12, usec: 153000, minuteswest: -480, dsttime: 0}
    // *   example 1: \php.gettimeofday(true);
    // *   returns 1: 1238748978.49
    var t = new Date();

    var y = 0;

    if (return_float) {
        return t.getTime() / 1000;
    }

    y = t.getFullYear(); // Store current year.

    return {
        sec : t.getUTCSeconds(),
        usec : t.getUTCMilliseconds() * 1000,
        minuteswest : t.getTimezoneOffset(),
        // Compare Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC to see if DST is observed.
        dsttime : 0 + (((new Date(y, 0)) - Date.UTC(y, 0)) !== ((new Date(y, 6)) - Date.UTC(y, 6)))
    };
};

exports.gettype = function (mixed_var) {
    // Returns the type of the variable
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/gettype
    // +   original by: Paulo Freitas
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Douglas Crockford (http://javascript.crockford.com)
    // +   input by: KELAN
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: is_float
    // %        note 1: 1.0 is simplified to 1 before it can be accessed by the function, this makes
    // %        note 1: it different from the PHP implementation. We can't fix this unfortunately.
    // *     example 1: \php.gettype(1);
    // *     returns 1: 'integer'
    // *     example 2: \php.gettype(undefined);
    // *     returns 2: 'undefined'
    // *     example 3: \php.gettype({0: 'Kevin van Zonneveld'});
    // *     returns 3: 'array'
    // *     example 4: \php.gettype('foo');
    // *     returns 4: 'string'
    // *     example 5: \php.gettype({0: function () {return false;}});
    // *     returns 5: 'array'
    var s = typeof mixed_var;

    var name;
    var getFuncName = fn => {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
        if (!name) {
            return '(Anonymous)';
        }
        return name[1];
    };
    if (s === 'object') {
        if (mixed_var !== null) { // From: http://javascript.crockford.com/remedial.html
            if (typeof mixed_var.length === 'number' &&
                    !(mixed_var.propertyIsEnumerable('length')) &&
                    typeof mixed_var.splice === 'function') {
                s = 'array';
            }
            else if (mixed_var.constructor && getFuncName(mixed_var.constructor)) {
                name = getFuncName(mixed_var.constructor);
                if (name === 'Date') {
                    s = 'date'; // not in PHP
                }
                else if (name === 'RegExp') {
                    s = 'regexp'; // not in PHP
                }
                else if (name === 'PHPJS_Resource') { // Check against our own resource constructor
                    s = 'resource';
                }
            }
        } else {
            s = 'null';
        }
    }
    else if (s === 'number') {
        s = this.is_float(mixed_var) ? 'double' : 'integer';
    }
    return s;
};

exports.gmdate = function (format, timestamp) {
    // Format a GMT date/time
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/gmdate
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   input by: Alex
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: date
    // *     example 1: \php.gmdate('H:m:s \\m \\i\\s \\m\\o\\n\\t\\h', 1062402400); // Return will depend on your timezone
    // *     returns 1: '07:09:40 m is month'
    var dt=(
        (typeof(timestamp) == 'undefined') ? new Date() : // Not provided
        (typeof(timestamp) == 'object') ? new Date(timestamp) : // Javascript Date()
        new Date(timestamp*1000) // UNIX timestamp (auto-convert to int)
    );
    timestamp = Date.parse(dt.toUTCString().slice(0, -4))/1000;
    return this.date(format, timestamp);
};

exports.gmmktime = function(...args) {
    // Get UNIX timestamp for a GMT date
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/gmmktime
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   derived from: mktime
    // *     example 1: \php.gmmktime(14, 10, 2, 2, 1, 2008);
    // *     returns 1: 1201875002
    // *     example 2: \php.gmmktime(0, 0, -1, 1, 1, 1970);
    // *     returns 2: -1
    var d = new Date();

    var r = args;
    var i = 0;
    var e = ['Hours', 'Minutes', 'Seconds', 'Month', 'Date', 'FullYear'];

    for (i = 0; i < e.length; i++) {
        if (typeof r[i] === 'undefined') {
            r[i] = d['getUTC' + e[i]]();
            r[i] += (i === 3); // +1 to fix JS months.
        } else {
            r[i] = parseInt(r[i], 10);
            if (isNaN(r[i])) {
                return false;
            }
        }
    }

    // Map years 0-69 to 2000-2069 and years 70-100 to 1970-2000.
    r[5] += (r[5] >= 0 ? (r[5] <= 69 ? 2e3 : (r[5] <= 100 ? 1900 : 0)) : 0);

    // Set year, month (-1 to fix JS months), and date.
    // !This must come before the call to setHours!
    d.setUTCFullYear(r[5], r[3] - 1, r[4]);

    // Set hours, minutes, and seconds.
    d.setUTCHours(r[0], r[1], r[2]);

    // Divide milliseconds by 1000 to return seconds and drop decimal.
    // Add 1 second if negative or it'll be off from PHP by 1 second.
    return (d.getTime() / 1e3 >> 0) - (d.getTime() < 0);
};

exports.gmstrftime = function (format, timestamp) {
    // Format a GMT/UCT time/date according to locale settings
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/gmstrftime
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   input by: Alex
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: strftime
    // *     example 1: \php.gmstrftime("%A", 1062462400);
    // *     returns 1: 'Tuesday'
    var dt=(
        (typeof(timestamp) == 'undefined') ? new Date() : // Not provided
        (typeof(timestamp) == 'object') ? new Date(timestamp) : // Javascript Date()
        new Date(timestamp*1000) // UNIX timestamp (auto-convert to int)
    );
    timestamp = Date.parse(dt.toUTCString().slice(0, -4))/1000;
    return this.strftime(format, timestamp);
};

exports.gopher_parsedir = dirent => {
    // !No description available for gopher_parsedir. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/gopher_parsedir
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.var entry = gopher_parsedir('0All about my gopher site.\t/allabout.txt\tgopher.example.com\t70\u000d\u000a');
    // *     example 1: \php.entry.title;
    // *     returns 1: 'All about my gopher site.'

    /* Types
    * 0 = plain text file
    * 1 = directory menu listing
    * 2 = CSO search query
    * 3 = error message
    * 4 = BinHex encoded text file
    * 5 = binary archive file
    * 6 = UUEncoded text file
    * 7 = search engine query
    * 8 = telnet session pointer
    * 9 = binary file
    * g = Graphics file format, primarily a GIF file
    * h = HTML file
    * i = informational message
    * s = Audio file format, primarily a WAV file
    */

    var entryPattern = /^(.)(.*?)\t(.*?)\t(.*?)\t(.*?)\u000d\u000a$/;
    var entry = dirent.match(entryPattern);

    if (entry === null) {
        throw 'Could not parse the directory entry';
        // return false;
    }

    var type = entry[1];
    switch (type) {
        case 'i':
            type = 255; // GOPHER_INFO
            break;
        case '1':
            type = 1; // GOPHER_DIRECTORY
            break;
        case '0':
            type = 0; // GOPHER_DOCUMENT
            break;
        case '4':
            type = 4; // GOPHER_BINHEX
            break;
        case '5':
            type = 5; // GOPHER_DOSBINARY
            break;
        case '6':
            type = 6; // GOPHER_UUENCODED
            break;
        case '9':
            type = 9; // GOPHER_BINARY
            break;
        case 'h':
            type = 254; // GOPHER_HTTP
            break;
        default:
            return {type:-1, data: dirent}; // GOPHER_UNKNOWN
    }
    return {type, title:entry[2], path:entry[3], host:entry[4], port:entry[5]};
};

exports.hexdec = hex_string => {
    // Returns the decimal equivalent of the hexadecimal number
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/hexdec
    // +   original by: Philippe Baumann
    // *     example 1: \php.hexdec('that');
    // *     returns 1: 10
    // *     example 2: \php.hexdec('a0');
    // *     returns 2: 160

    hex_string = (hex_string+'').replace(/[^a-f0-9]/gi, '');
    return parseInt(hex_string, 16);
};

exports.html_entity_decode = function (string, quote_style) {
    // Convert all HTML entities to their applicable characters
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/html_entity_decode
    // +   original by: john (http://www.jd-tech.net)
    // +      input by: ger
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +   improved by: marc andreu
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Ratheous
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Nick Kolosov (http://sammy.ru)
    // +   bugfixed by: Fox
    // -    depends on: get_html_translation_table
    // *     example 1: \php.html_entity_decode('Kevin &amp; van Zonneveld');
    // *     returns 1: 'Kevin & van Zonneveld'
    // *     example 2: \php.html_entity_decode('&amp;lt;');
    // *     returns 2: '&lt;'
    var hash_map = {};

    var symbol = '';
    var tmp_str = '';
    var entity = '';
    tmp_str = string.toString();

    if (false === (hash_map = this.get_html_translation_table('HTML_ENTITIES', quote_style))) {
        return false;
    }

    // fix &amp; problem
    // http://phpjs.org/functions/get_html_translation_table:416#comment_97660
    delete(hash_map['&']);
    hash_map['&'] = '&amp;';

    for (symbol in hash_map) {
        entity = hash_map[symbol];
        tmp_str = tmp_str.split(entity).join(symbol);
    }
    tmp_str = tmp_str.split('&#039;').join("'");

    return tmp_str;
};

exports.htmlentities = function (string, quote_style) {
    // Convert all applicable characters to HTML entities
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/htmlentities
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: nobbler
    // +    tweaked by: Jack
    // +   bugfixed by: Onno Marsman
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Ratheous
    // -    depends on: get_html_translation_table
    // *     example 1: \php.htmlentities('Kevin & van Zonneveld');
    // *     returns 1: 'Kevin &amp; van Zonneveld'
    // *     example 2: \php.htmlentities("foo'bar","ENT_QUOTES");
    // *     returns 2: 'foo&#039;bar'
    var hash_map = {};

    var symbol = '';
    var tmp_str = '';
    var entity = '';
    tmp_str = string.toString();

    if (false === (hash_map = this.get_html_translation_table('HTML_ENTITIES', quote_style))) {
        return false;
    }
    hash_map["'"] = '&#039;';
    for (symbol in hash_map) {
        entity = hash_map[symbol];
        tmp_str = tmp_str.split(symbol).join(entity);
    }

    return tmp_str;
};

exports.htmlspecialchars = (string, quote_style, charset, double_encode) => {
    // Convert special characters to HTML entities
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/htmlspecialchars
    // +   original by: Mirek Slugen
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Nathan
    // +   bugfixed by: Arno
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Ratheous
    // +      input by: Mailfaker (http://www.weedem.fr/)
    // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
    // +      input by: felix
    // +    bugfixed by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: charset argument not supported
    // *     example 1: \php.htmlspecialchars("<a href='test'>Test</a>", 'ENT_QUOTES');
    // *     returns 1: '&lt;a href=&#039;test&#039;&gt;Test&lt;/a&gt;'
    // *     example 2: \php.htmlspecialchars("ab\"c'd", ['ENT_NOQUOTES', 'ENT_QUOTES']);
    // *     returns 2: 'ab"c&#039;d'
    // *     example 3: \php.htmlspecialchars("my "&entity;" is still here", null, null, false);
    // *     returns 3: 'my &quot;&entity;&quot; is still here'
    var optTemp = 0;

    var i = 0;
    var noquotes= false;
    if (typeof quote_style === 'undefined' || quote_style === null) {
        quote_style = 2;
    }
    string = string.toString();
    if (double_encode !== false) { // Put this first to avoid double-encoding
        string = string.replace(/&/g, '&amp;');
    }
    string = string.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    var OPTS = {
        'ENT_NOQUOTES': 0,
        'ENT_HTML_QUOTE_SINGLE' : 1,
        'ENT_HTML_QUOTE_DOUBLE' : 2,
        'ENT_COMPAT': 2,
        'ENT_QUOTES': 3,
        'ENT_IGNORE' : 4
    };
    if (quote_style === 0) {
        noquotes = true;
    }
    if (typeof quote_style !== 'number') { // Allow for a single string or an array of string flags
        quote_style = [].concat(quote_style);
        for (i=0; i < quote_style.length; i++) {
            // Resolve string input to bitwise e.g. 'PATHINFO_EXTENSION' becomes 4
            if (OPTS[quote_style[i]] === 0) {
                noquotes = true;
            }
            else if (OPTS[quote_style[i]]) {
                optTemp = optTemp | OPTS[quote_style[i]];
            }
        }
        quote_style = optTemp;
    }
    if (quote_style & OPTS.ENT_HTML_QUOTE_SINGLE) {
        string = string.replace(/'/g, '&#039;');
    }
    if (!noquotes) {
        string = string.replace(/"/g, '&quot;');
    }

    return string;
};

exports.htmlspecialchars_decode = (string, quote_style) => {
    // Convert special HTML entities back to characters
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/htmlspecialchars_decode
    // +   original by: Mirek Slugen
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Mateusz "loonquawl" Zalega
    // +      input by: ReverseSyntax
    // +      input by: Slawomir Kaniecki
    // +      input by: Scott Cariss
    // +      input by: Francois
    // +   bugfixed by: Onno Marsman
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Ratheous
    // +      input by: Mailfaker (http://www.weedem.fr/)
    // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
    // +    bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.htmlspecialchars_decode("<p>this -&gt; &quot;</p>", 'ENT_NOQUOTES');
    // *     returns 1: '<p>this -> &quot;</p>'
    // *     example 2: \php.htmlspecialchars_decode("&amp;quot;");
    // *     returns 2: '&quot;'
    var optTemp = 0;

    var i = 0;
    var noquotes= false;
    if (typeof quote_style === 'undefined') {
        quote_style = 2;
    }
    string = string.toString().replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    var OPTS = {
        'ENT_NOQUOTES': 0,
        'ENT_HTML_QUOTE_SINGLE' : 1,
        'ENT_HTML_QUOTE_DOUBLE' : 2,
        'ENT_COMPAT': 2,
        'ENT_QUOTES': 3,
        'ENT_IGNORE' : 4
    };
    if (quote_style === 0) {
        noquotes = true;
    }
    if (typeof quote_style !== 'number') { // Allow for a single string or an array of string flags
        quote_style = [].concat(quote_style);
        for (i=0; i < quote_style.length; i++) {
            // Resolve string input to bitwise e.g. 'PATHINFO_EXTENSION' becomes 4
            if (OPTS[quote_style[i]] === 0) {
                noquotes = true;
            }
            else if (OPTS[quote_style[i]]) {
                optTemp = optTemp | OPTS[quote_style[i]];
            }
        }
        quote_style = optTemp;
    }
    if (quote_style & OPTS.ENT_HTML_QUOTE_SINGLE) {
        string = string.replace(/&#0*39;/g, "'"); // PHP doesn't currently escape if more than one 0, but it should
        // string = string.replace(/&apos;|&#x0*27;/g, "'"); // This would also be useful here, but not a part of PHP
    }
    if (!noquotes) {
        string = string.replace(/&quot;/g, '"');
    }
    // Put this in last place to avoid escape being double-decoded
    string = string.replace(/&amp;/g, '&');

    return string;
};

exports.http_build_query = (formdata, numeric_prefix, arg_separator) => {
    // Generates a form-encoded query string from an associative array or object.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/http_build_query
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Legaev Andrey
    // +   improved by: Michael White (http://getsprink.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +    revised by: stag019
    // -    depends on: urlencode
    // *     example 1: \php.http_build_query({foo: 'bar', php: 'hypertext processor', baz: 'boom', cow: 'milk'}, '', '&amp;');
    // *     returns 1: 'foo=bar&amp;php=hypertext+processor&amp;baz=boom&amp;cow=milk'
    // *     example 2: \php.http_build_query({'php': 'hypertext processor', 0: 'foo', 1: 'bar', 2: 'baz', 3: 'boom', 'cow': 'milk'}, 'myvar_');
    // *     returns 2: 'php=hypertext+processor&myvar_0=foo&myvar_1=bar&myvar_2=baz&myvar_3=boom&cow=milk'
    var value;

    var key;
    var tmp = [];

    var _http_build_query_helper = function (key, val, arg_separator) {
        var k;
        var tmp = [];
        if (val === true) {
            val = "1";
        } else if (val === false) {
            val = "0";
        }
        if (val !== null && typeof(val) === "object") {
            for (k in val) {
                if (val[k] !== null) {
                    tmp.push(_http_build_query_helper(key + "[" + k + "]", val[k], arg_separator));
                }
            }
            return tmp.join(arg_separator);
        } else if (typeof(val) !== "function") {
            return this.urlencode(key) + "=" + this.urlencode(val);
        } else {
            throw new Error('There was an error processing for http_build_query().');
        }
    };

    if (!arg_separator) {
        arg_separator = "&";
    }
    for (key in formdata) {
        value = formdata[key];
        if (numeric_prefix && !isNaN(key)) {
            key = String(numeric_prefix) + key;
        }
        tmp.push(_http_build_query_helper(key, value, arg_separator));
    }

    return tmp.join(arg_separator);
};

exports.hypot = (x, y) => // Returns sqrt(num1*num1 + num2*num2)
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/hypot
// +   original by: Onno Marsman
// *     example 1: \php.hypot(3, 4);
// *     returns 1: 5
// *     example 2: \php.hypot([], 'a');
// *     returns 2: 0
Math.sqrt(x*x + y*y) || 0;

exports.i18n_loc_get_default = function () {
    // !No description available for i18n_loc_get_default. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/i18n_loc_get_default
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: Renamed in PHP6 from locale_get_default(). Not listed yet at php.net
    // %          note 2: List of locales at http://demo.icu-project.org/icu-bin/locexp
    // %          note 3: To be usable with sort() if it is passed the SORT_LOCALE_STRING sorting flag: http://php.net/manual/en/function.sort.php
    // -    depends on: i18n_loc_set_default
    // *     example 1: \php.i18n_loc_get_default();
    // *     returns 1: 'en_US_POSIX'

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    // END REDUNDANT
    return this.php_js.i18nLocale || (i18n_loc_set_default('en_US_POSIX'), 'en_US_POSIX'); // Ensure defaults are set up
};

exports.i18n_loc_set_default = function (name) {
    // !No description available for i18n_loc_set_default. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/i18n_loc_set_default
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: Renamed in PHP6 from locale_set_default(). Not listed yet at php.net
    // %          note 2: List of locales at http://demo.icu-project.org/icu-bin/locexp (use for implementing other locales here)
    // %          note 3: To be usable with sort() if it is passed the SORT_LOCALE_STRING sorting flag: http://php.net/manual/en/function.sort.php
    // *     example 1: \php.i18n_loc_set_default('pt_PT');
    // *     returns 1: true

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    // END REDUNDANT

    this.php_js.i18nLocales = {
        en_US_POSIX : {
            sorting(str1, str2) { // Fix: This one taken from strcmp, but need for other locales; we don't use localeCompare since its locale is not settable
                return ( str1 == str2 ) ? 0 : ( ( str1 > str2 ) ? 1 : -1 );
            }
        }
    };

    this.php_js.i18nLocale = name;
    return true;
};

exports.idate = (format, timestamp) => {
    // Format a local time/date as integer
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/idate
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Alex
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Theriault
    // +  derived from: date
    // +  derived from: gettimeofday
    // *     example 1: \php.idate('y');
    // *     returns 1: 9
    if (format === undefined) {
        throw 'idate() expects at least 1 parameter, 0 given';
    }
    if (!format.length || format.length > 1) {
        throw 'idate format is one char';
    }

    // Fix: Need to allow date_default_timezone_set() (check for this.php_js.default_timezone and use)
    var date = (
        (typeof timestamp === 'undefined') ? new Date() : // Not provided
        (timestamp instanceof Date) ? new Date(timestamp) : // Javascript Date()
        new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
    );

    var a;

    switch (format) {
        case 'B':
            return Math.floor(((date.getUTCHours() * 36e2) + (date.getUTCMinutes() * 60) +
                                                date.getUTCSeconds() + 36e2) / 86.4) % 1e3;
        case 'd':
            return date.getDate();
        case 'h':
            return date.getHours() % 12 || 12;
        case 'H':
            return date.getHours();
        case 'i':
            return date.getMinutes();
        case 'I': // capital 'i'
            // Logic derived from getimeofday().
            // Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
            // If they are not equal, then DST is observed.
            a = date.getFullYear();
            return 0 + (((new Date(a, 0)) - Date.UTC(a, 0)) !== ((new Date(a, 6)) - Date.UTC(a, 6)));
        case 'L':
            a = date.getFullYear();
            return (!(a & 3) && (a % 1e2 || !(a % 4e2))) ? 1 : 0;
        case 'm':
            return date.getMonth() + 1;
        case 's':
            return date.getSeconds();
        case 't':
            return (new Date(date.getFullYear(), date.getMonth() + 1, 0)).getDate();
        case 'U':
            return Math.round(date.getTime() / 1000);
        case 'w':
            return date.getDay();
        case 'W':
            a = new Date(date.getFullYear(), date.getMonth(), date.getDate() - (date.getDay() || 7) + 3);
            return 1 + Math.round((a - (new Date(a.getFullYear(), 0, 4))) / 864e5 / 7);
        case 'y':
            return parseInt((date.getFullYear() + '').slice(2), 10); // This function returns an integer, unlike date()
        case 'Y':
            return date.getFullYear();
        case 'z':
            return Math.floor((date - new Date(date.getFullYear(), 0, 1)) / 864e5);
        case 'Z':
            return -date.getTimezoneOffset() * 60;
        default:
            throw 'Unrecognized date format token';
    }
};

exports.implode = function (glue, pieces) {
    // Joins array elements placing glue string between items and return one string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/implode
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Waldo Malqui Silva
    // +   improved by: Itsacon (http://www.itsacon.net/)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.implode(' ', ['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: 'Kevin van Zonneveld'
    // *     example 2: \php.implode(' ', {first:'Kevin', last: 'van Zonneveld'});
    // *     returns 2: 'Kevin van Zonneveld'
    var i = '';

    var retVal='';
    var tGlue='';
    if (arguments.length === 1) {
        pieces = glue;
        glue = '';
    }
    if (typeof(pieces) === 'object') {
        if (pieces instanceof Array) {
            return pieces.join(glue);
        }
        else {
            for (i in pieces) {
                retVal += tGlue + pieces[i];
                tGlue = glue;
            }
            return retVal;
        }
    }
    else {
        return pieces;
    }
};

exports.import_request_variables = function (types, prefix) {
    // Import GET/POST/Cookie variables into the global scope
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/import_request_variables
    // +      original by: Jalal Berrami
    // + reimplemented by: Brett Zamir (http://brett-zamir.me)
    // + improved by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: IMPORTANT: You must sanitize user variables passed in via URL in JavaScript as in PHP,
    // %          note 1: especially if you want to use any of these variables in an eval()-like function (not recommended)!
    // *        example 1: \php.document.cookie = 'snack=yummy';
    // *        example 1: \php.import_request_variables('gc', 'pr_');
    // *        results 1: pr_snack == 'yummy'
    var i = 0;

    var current = '';
    var url = '';
    var vars = '';
    var arrayBracketPos = -1;
    var arrName='';
    var win = this.window;
    var requestObj = this.window;
    var getObj = false;
    var cookieObj = false;
    prefix = prefix || '';

    var that = this;
    var _ini_get = ini => {
        if (that.php_js && that.php_js.ini && that.php_js.ini[ini] &&
            that.php_js.ini[ini].local_value) { // Allow designated object to be used instead of window
            return that.php_js.ini[ini].local_value;
        }
        return false;
    };

    requestObj = _ini_get('phpjs.requestVarsObj') || requestObj;
    if (/g/i.test(types)) { // GET
        getObj = _ini_get('phpjs.getVarsObj') || getObj;
        for (i = 0, url = win.location.href, vars = url.substring(url.lastIndexOf('?') + 1, url.length).split('&'); i < vars.length; i++){
            current = vars[i].split('=');
            current[1] = decodeURIComponent(current[1]);
            arrayBracketPos = current[0].indexOf('[');
            if (arrayBracketPos !== -1) {
                arrName = current[0].substring(0, arrayBracketPos);
                arrName = decodeURIComponent(arrName);
                if (!requestObj[prefix+arrName]) {
                    requestObj[prefix+arrName] = [];
                }
                requestObj[prefix+arrName].push(current[1] || null);
                if (getObj) {
                    if (!getObj[prefix+arrName]) {
                        getObj[prefix+arrName] = [];
                    }
                    getObj[prefix+arrName].push(current[1] || null);
                }
            }
            else {
                current[0] = decodeURIComponent(current[0]);
                requestObj[prefix+current[0]] = current[1] || null;
                if (getObj) {
                    getObj[prefix+current[0]] = current[1] || null;
                }
            }
        }
    }
    if (/c/i.test(types)) { // COOKIE
        cookieObj = _ini_get('phpjs.cookieVarsObj') || cookieObj;
        for (i = 0, vars = win.document.cookie.split("&"); i < vars.length;i++){
            current = vars[i].split("=");
            requestObj[prefix+current[0]] = current[1].split(";")[0] || null;
            if (cookieObj) {
                cookieObj[prefix+current[0]] = current[1].split(";")[0] || null;
            }
        }
    }
};

exports.in_array = (needle, haystack, argStrict) => {
    // Checks if the given value exists in the array
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/in_array
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: vlado houba
    // +   input by: Billy
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.in_array('van', ['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: true
    // *     example 2: \php.in_array('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'});
    // *     returns 2: false
    // *     example 3: \php.in_array(1, ['1', '2', '3']);
    // *     returns 3: true
    // *     example 3: \php.in_array(1, ['1', '2', '3'], false);
    // *     returns 3: true
    // *     example 4: \php.in_array(1, ['1', '2', '3'], true);
    // *     returns 4: false
    var key = '';

    var strict = !!argStrict;

    if (strict) {
        for (key in haystack) {
            if (haystack[key] === needle) {
                return true;
            }
        }
    } else {
        for (key in haystack) {
            if (haystack[key] == needle) {
                return true;
            }
        }
    }

    return false;
};

exports.include = function (filename) {
    // !No description available for include. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/include
    // +   original by: mdsjack (http://www.mdsjack.bo.it)
    // +   improved by: Legaev Andrey
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Michael White (http://getsprink.com)
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      bugfixed by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Force Javascript execution to pause until the file is loaded. Usually causes failure if the file never loads. ( Use sparingly! )
    // %        note 2: The included file does not come available until a second script block, so typically use this in the header.
    // %        note 3: Uses global: php_js to keep track of included files
    // *     example 1: \php.include('http://www.phpjs.org/js/phpjs/_supporters/pj_test_supportfile_2.js');
    // *     returns 1: 1
    var d = this.window.document;
    var isXML = d.documentElement.nodeName !== 'HTML' || !d.write; // Latter is for silly comprehensiveness
    var js = d.createElementNS && isXML ? d.createElementNS('http://www.w3.org/1999/xhtml', 'script') : d.createElement('script');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', filename);
    js.setAttribute('defer', 'defer');
    d.getElementsByTagNameNS && isXML ?
        (d.getElementsByTagNameNS('http://www.w3.org/1999/xhtml', 'head')[0] ?
            d.getElementsByTagNameNS('http://www.w3.org/1999/xhtml', 'head')[0].appendChild(js) :
            d.documentElement.insertBefore(js, d.documentElement.firstChild) // in case of XUL
        ):
        d.getElementsByTagName('head')[0].appendChild(js);
    // save include state for reference by include_once
    var cur_file = {};
    cur_file[this.window.location.href] = 1;

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    // END REDUNDANT
    if (!this.php_js.includes) {
        this.php_js.includes = cur_file;
    }
    if (!this.php_js.includes[filename]) {
        this.php_js.includes[filename] = 1;
    } else {
        this.php_js.includes[filename]++;
    }

    return this.php_js.includes[filename];
};

exports.include_once = function (filename) {
    // !No description available for include_once. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/include_once
    // +   original by: Legaev Andrey
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Michael White (http://getsprink.com)
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: include
    // %        note 1: Uses global: php_js to keep track of included files (though private static variable in namespaced version)
    // *     example 1: \php.include_once('http://www.phpjs.org/js/phpjs/_supporters/pj_test_supportfile_2.js');
    // *     returns 1: true
    var cur_file = {};
    cur_file[this.window.location.href] = 1;

    // BEGIN STATIC
    try { // We can't try to access on window, since it might not exist in some environments, and if we use "this.window"
            //    we risk adding another copy if different window objects are associated with the namespaced object
        php_js_shared; // Will be private static variable in namespaced version or global in non-namespaced
                                       //   version since we wish to share this across all instances
    }
    catch(e) {
        php_js_shared = {};
    }
    // END STATIC

    if (!php_js_shared.includes) {
        php_js_shared.includes = cur_file;
    }
    if (!php_js_shared.includes[filename]) {
        if (this.include(filename)){
            return true;
        }
    } else{
        return true;
    }
    return false;
};

exports.inet_ntop = a => {
    // Converts a packed inet address to a human readable IP address string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/inet_ntop
    // +   original by: Theriault
    // *     example 1: \php.inet_ntop('\x7F\x00\x00\x01');
    // *     returns 1: '127.0.0.1'
    // *     example 2: \php.inet_ntop('\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\1');
    // *     returns 2: '::1'

    var i = 0;

    var m = '';
    var c = [];
    a += '';
    if (a.length === 4) { // IPv4
        return [
            a.charCodeAt(0),
            a.charCodeAt(1),
            a.charCodeAt(2),
            a.charCodeAt(3)
        ].join('.');
    } else if (a.length === 16) { // IPv6
        for (i = 0; i < 16; i++) {
            c.push(((a.charCodeAt(i++) << 8) + a.charCodeAt(i)).toString(16));
        }
        return c.join(':').replace(/((^|:)0(?=:|$))+:?/g, t => {
            m = (t.length > m.length) ? t : m;
            return t;
        }).replace(m || ' ', '::');
    } else { // Invalid length
        return false;
    }
};

exports.inet_pton = a => {
    // Converts a human readable IP address to a packed binary string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/inet_pton
    // +   original by: Theriault
    // *     example 1: \php.inet_pton('::');
    // *     returns 1: '\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0' (binary)
    // *     example 2: \php.inet_pton('127.0.0.1');
    // *     returns 2: '\x7F\x00\x00\x01' (binary)
    var r;

    var m;
    var x;
    var i;
    var j;
    var f = String.fromCharCode;
    m = a.match(/^(?:\d{1,3}(?:\.|$)){4}/);  // IPv4
    if (m) {
        m = m[0].split('.');
        m = f(m[0]) + f(m[1]) + f(m[2]) + f(m[3]);
        // Return if 4 bytes, otherwise false.
        return m.length === 4 ? m : false;
    }
    r = /^((?:[\da-f]{1,4}(?::|)){0,8})(::)?((?:[\da-f]{1,4}(?::|)){0,8})$/;
    m = a.match(r); // IPv6
    if (m) {
        // Translate each hexadecimal value.
        for (j = 1; j < 4; j++) {
            // Indice 2 is :: and if no length, continue.
            if (j === 2 || m[j].length === 0) {
                continue;
            }
            m[j] = m[j].split(':');
            for (i = 0; i < m[j].length; i++) {
                m[j][i] = parseInt(m[j][i], 16);
                // Would be NaN if it was blank, return false.
                if (isNaN(m[j][i])) {
                    return false; // Invalid IP.
                }
                m[j][i] = f(m[j][i] >> 8) + f(m[j][i] & 0xFF);
            }
            m[j] = m[j].join('');
        }
        x = m[1].length + m[3].length;
        if (x === 16) {
            return m[1] + m[3];
        } else if (x < 16 && m[2].length > 0) {
            return m[1] + (new Array(16 - x + 1)).join('\x00') + m[3];
        }
    }
    return false; // Invalid IP.
};

exports.ini_alter = function (varname, newvalue) {
    // !No description available for ini_alter. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/ini_alter
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: ini_set
    // *     example 1: \php.ini_alter('date.timezone', 'America/Chicago');
    // *     returns 1: 'Asia/Hong_Kong'
    return this.ini_set(varname, newvalue);
};

exports.ini_get = function (varname) {
    // Get a configuration option
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/ini_get
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: The ini values must be set by ini_set or manually within an ini file
    // *     example 1: \php.ini_get('date.timezone');
    // *     returns 1: 'Asia/Hong_Kong'
    if (this.php_js && this.php_js.ini && this.php_js.ini[varname] && this.php_js.ini[varname].local_value !== undefined) {
        if (this.php_js.ini[varname].local_value === null) {
            return '';
        }
        return this.php_js.ini[varname].local_value;
    }
    return '';
};

exports.ini_get_all = function (extension, details) {
    // Get all configuration options
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/ini_get_all
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: The ini values must be set by ini_set or manually within an ini file
    // %        note 1: Store each ini with PHP name and with the values global_value, local_value, and access; be sure to set the same value at the beginning for global and local value
    // %        note 1: If you define an ini file, which sets this.php_js.ini values (window.php_js.ini if you are using the non-namespaced version), be sure to also set php_js.ini_loaded_file 
    // %        note 1: equal to its path, for the sake of php_ini_loaded_file() and also set php_js.ini_scanned_files (a comma-separated string of a set of paths, all in the 
    // %        note 1: same directory) for the sake of php_ini_scanned_files().
    // *     example 1: \php.ini_get_all('date', false);
    // *     returns 1: {'date.default_latitude':"31.7667", 'date.default_longitude':"35.2333", 'date.sunrise_zenith':"90.583333", 'date.sunset_zenith':"90.583333", date.timezone:""}

    var key='';

    var ini={};
    var noDetails={};
    var extPattern;
    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    // END REDUNDANT

    if (extension) {
        extPattern = new RegExp('^'+extension+'\\.');
        for (key in this.php_js.ini) {
            extPattern.lastIndex = 0;
            if (extPattern.test(key)) {
                ini[key] = this.php_js.ini[key];
            }
        }
    }
    else {
        for (key in this.php_js.ini) {
            ini[key] = this.php_js.ini[key];
        }
    }

    if (details !== false) { // default is true
        return ini; // {global_value: '', local_value: '', access: ''};
    }

    for (key in ini) {
        noDetails[key] = ini[key].local_value;
    }
    return noDetails;
};

exports.ini_restore = function (varname) {
    // Restore the value of a configuration option specified by varname
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/ini_restore
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.ini_restore('date.timezone');
    // *     returns 1: 'America/Chicago'
    if (this.php_js && this.php_js.ini && this.php_js.ini[varname]) {
        this.php_js.ini[varname].local_value = this.php_js.ini[varname].global_value;
    }
};

exports.ini_set = function (varname, newvalue) {
    // Set a configuration option, returns false on error and the old value of the configuration option on success
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/ini_set
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: This will not set a global_value or access level for the ini item
    // *     example 1: \php.ini_set('date.timezone', 'America/Chicago');
    // *     returns 1: 'Asia/Hong_Kong'

    var oldval = '';

    var that = this;
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    this.php_js.ini[varname] = this.php_js.ini[varname] || {};
    oldval = this.php_js.ini[varname].local_value;

    var _setArr = oldval => { // Although these are set individually, they are all accumulated
        if (typeof oldval === 'undefined') {
            that.php_js.ini[varname].local_value = [];
        }
        that.php_js.ini[varname].local_value.push(newvalue);
    };

    switch (varname) {
        case 'extension':
            if (typeof this.dl === 'function') {
                this.dl(newvalue); // This function is only experimental in php.js
            }
            _setArr(oldval, newvalue);
            break;
        default:
            this.php_js.ini[varname].local_value = newvalue;
            break;
    }
    return oldval;
};

exports.intval = (mixed_var, base) => {
    // Get the integer value of a variable using the optional base for the conversion
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/intval
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: stensi
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   input by: Matteo
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.intval('Kevin van Zonneveld');
    // *     returns 1: 0
    // *     example 2: \php.intval(4.2);
    // *     returns 2: 4
    // *     example 3: \php.intval(42, 8);
    // *     returns 3: 42
    // *     example 4: \php.intval('09');
    // *     returns 4: 9
    // *     example 5: \php.intval('1e', 16);
    // *     returns 5: 30
    var tmp;

    var type = typeof( mixed_var );

    if (type === 'boolean') {
        return (mixed_var) ? 1 : 0;
    } else if (type === 'string') {
        tmp = parseInt(mixed_var, base || 10);
        return (isNaN(tmp) || !isFinite(tmp)) ? 0 : tmp;
    } else if (type === 'number' && isFinite(mixed_var) ) {
        return Math.floor(mixed_var);
    } else {
        return 0;
    }
};

exports.ip2long = IP => {
    // Converts a string containing an (IPv4) Internet Protocol dotted address into a proper address
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/ip2long
    // +   original by: Waldo Malqui Silva
    // +   improved by: Victor
    // +    revised by: fearphage (http://http/my.opera.com/fearphage/)
    // +    revised by: Theriault
    // *     example 1: \php.ip2long('192.0.34.166');
    // *     returns 1: 3221234342
    // *     example 2: \php.ip2long('0.0xABCDEF');
    // *     returns 2: 11259375
    // *     example 3: \php.ip2long('255.255.255.256');
    // *     returns 3: false
    var i = 0;
    // PHP allows decimal, octal, and hexadecimal IP components.
    // PHP allows between 1 (e.g. 127) to 4 (e.g 127.0.0.1) components.
    IP = IP.match(/^([1-9]\d*|0[0-7]*|0x[\da-f]+)(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?$/i); // Verify IP format.
    if (!IP) {
        return false; // Invalid format.
    }
    // Reuse IP variable for component counter.
    IP[0] = 0;
    for (i = 1; i < 5; i += 1) {
        IP[0] += !!((IP[i] || '').length);
        IP[i] = parseInt(IP[i]) || 0;
    }
    // Continue to use IP for overflow values.
    // PHP does not allow any component to overflow.
    IP.push(256, 256, 256, 256);
    // Recalculate overflow of last component supplied to make up for missing components.
    IP[4 + IP[0]] *= 256 ** (4 - IP[0]);
    if (IP[1] >= IP[5] || IP[2] >= IP[6] || IP[3] >= IP[7] || IP[4] >= IP[8]) {
        return false;
    }
    return IP[1] * (IP[0] === 1 || 16777216) + IP[2] * (IP[0] <= 2 || 65536) + IP[3] * (IP[0] <= 3 || 256) + IP[4] * 1;
};

exports.is_array = function (mixed_var) {
    // Returns true if variable is an array
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/is_array
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Legaev Andrey
    // +   bugfixed by: Cord
    // +   bugfixed by: Manish
    // +   improved by: Onno Marsman
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: In php.js, javascript objects are like php associative arrays, thus JavaScript objects will also
    // %        note 1: return true  in this function (except for objects which inherit properties, being thus used as objects),
    // %        note 1: unless you do ini_set('phpjs.objectsAsArrays', true), in which case only genuine JavaScript arrays
    // %        note 1: will return true
    // *     example 1: \php.is_array(['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: true
    // *     example 2: \php.is_array('Kevin van Zonneveld');
    // *     returns 2: false
    // *     example 3: \php.is_array({0: 'Kevin', 1: 'van', 2: 'Zonneveld'});
    // *     returns 3: true
    // *     example 4: \php.is_array(function tmp_a(){this.name = 'Kevin'});
    // *     returns 4: false
    var key = '';
    var getFuncName = fn => {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
        if (!name) {
            return '(Anonymous)';
        }
        return name[1];
    };

    if (!mixed_var) {
        return false;
    }

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    // END REDUNDANT

    if (typeof mixed_var === 'object') {

        if (this.php_js.ini['phpjs.objectsAsArrays'] &&  // Strict checking for being a JavaScript array (only check this way if call ini_set('phpjs.objectsAsArrays', 0) to disallow objects as arrays)
            (
            (this.php_js.ini['phpjs.objectsAsArrays'].local_value.toLowerCase &&
                    this.php_js.ini['phpjs.objectsAsArrays'].local_value.toLowerCase() === 'off') ||
                parseInt(this.php_js.ini['phpjs.objectsAsArrays'].local_value, 10) === 0)
            ) {
            return mixed_var.hasOwnProperty('length') && // Not non-enumerable because of being on parent class
                            !mixed_var.propertyIsEnumerable('length') && // Since is own property, if not enumerable, it must be a built-in function
                                getFuncName(mixed_var.constructor) !== 'String'; // exclude String()
        }

        if (mixed_var.hasOwnProperty) {
            for (key in mixed_var) {
                // Checks whether the object has the specified property
                // if not, we figure it's not an object in the sense of a php-associative-array.
                if (false === mixed_var.hasOwnProperty(key)) {
                    return false;
                }
            }
        }

        // Read discussion at: http://kevin.vanzonneveld.net/techblog/article/javascript_equivalent_for_phps_is_array/
        return true;
    }

    return false;
};

exports.is_binary = vr => // +   original by: Brett Zamir (http://brett-zamir.me)
// *     example 1: \php.is_binary('This could be binary as far as JavaScript knows...');
// *     returns 1: true
// If it is a string of any kind, it could be binary
typeof vr === 'string';

exports.is_bool = mixed_var => // Returns true if variable is a boolean
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/is_bool
// +   original by: Onno Marsman
// *     example 1: \php.is_bool(false);
// *     returns 1: true
// *     example 2: \php.is_bool(0);
// *     returns 2: false
typeof mixed_var === 'boolean';

exports.is_buffer = vr => // +   original by: Brett Zamir (http://brett-zamir.me)
// *     example 1: \php.is_buffer('This could be binary or a regular string as far as JavaScript knows...');
// *     returns 1: true
typeof vr === 'string';

exports.is_callable = function (v, syntax_only, callable_name) {
    // Returns true if var is callable.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/is_callable
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: The variable callable_name cannot work as a string variable passed by reference as in PHP (since JavaScript does not support passing strings by reference), but instead will take the name of a global variable and set that instead
    // %        note 2: When used on an object, depends on a constructor property being kept on the object prototype
    // *     example 1: \php.is_callable('is_callable');
    // *     returns 1: true
    // *     example 2: \php.is_callable('bogusFunction', true);
    // *     returns 2:true // gives true because does not do strict checking
    // *     example 3: \php.function SomeClass () {}
    // *     example 3: SomeClass.prototype.someMethod = function (){};
    // *     example 3: \php.var testObj = new SomeClass();
    // *     example 3: \php.is_callable([testObj, 'someMethod'], true, 'myVar');
    // *     example 3: \php.alert(myVar); // 'SomeClass::someMethod'
    var name='';

    var obj={};
    var method='';
    var getFuncName = fn => {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
        if (!name) {
            return '(Anonymous)';
        }
        return name[1];
    };
    if (typeof v === 'string') {
        obj = this.window;
        method = v;
        name = v;
    }
    else if (v instanceof Array && v.length === 2 && typeof v[0] === 'object' && typeof v[1] === 'string') {
        obj = v[0];
        method = v[1];
        name = (obj.constructor && getFuncName(obj.constructor))+'::'+method;
    }
    else {
        return false;
    }
    if (syntax_only || typeof obj[method] === 'function') {
        if (callable_name) {
            this.window[callable_name] = name;
        }
        return true;
    }
    return false;
};

exports.is_double = function (mixed_var) {
    // !No description available for is_double. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/is_double
    // +   original by: Paulo Freitas
    //  -   depends on: is_float
    // %        note 1: 1.0 is simplified to 1 before it can be accessed by the function, this makes
    // %        note 1: it different from the PHP implementation. We can't fix this unfortunately.
    // *     example 1: \php.is_double(186.31);
    // *     returns 1: true
    return this.is_float(mixed_var);
};

exports.is_finite = val => {
    // Returns whether argument is finite
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/is_finite
    // +   original by: Onno Marsman
    // *     example 1: \php.is_finite(Infinity);
    // *     returns 1: false
    // *     example 2: \php.is_finite(-Infinity);
    // *     returns 2: false
    // *     example 3: \php.is_finite(0);
    // *     returns 3: true
    var warningType = '';

    if (val===Infinity || val===-Infinity) {
        return false;
    }

    //Some warnings for maximum PHP compatibility
    if (typeof val=='object') {
        warningType = (val instanceof Array ? 'array' : 'object');
    } else if (typeof val=='string' && !val.match(/^[\+\-]?\d/)) {
        //simulate PHP's behaviour: '-9a' doesn't give a warning, but 'a9' does.
        warningType = 'string';
    }
    if (warningType) {
        throw new Error('Warning: is_finite() expects parameter 1 to be double, '+warningType+' given');
    }

    return true;
};

exports.is_float = mixed_var => {
    // Returns true if variable is float point
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/is_float
    // +   original by: Paulo Freitas
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: WebDevHobo (http://webdevhobo.blogspot.com/)
    // %        note 1: 1.0 is simplified to 1 before it can be accessed by the function, this makes
    // %        note 1: it different from the PHP implementation. We can't fix this unfortunately.
    // *     example 1: \php.is_float(186.31);
    // *     returns 1: true
    if (typeof mixed_var !== 'number') {
        return false;
    }

    return !!(mixed_var % 1);
};

exports.is_infinite = val => {
    // Returns whether argument is infinite
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/is_infinite
    // +   original by: Onno Marsman
    // *     example 1: \php.is_infinite(Infinity);
    // *     returns 1: true
    // *     example 2: \php.is_infinite(-Infinity);
    // *     returns 2: true
    // *     example 3: \php.is_infinite(0);
    // *     returns 3: false
    var warningType = '';

    if (val===Infinity || val===-Infinity) {
        return true;
    }

    //Some warnings for maximum PHP compatibility
    if (typeof val=='object') {
        warningType = (val instanceof Array ? 'array' : 'object');
    } else if (typeof val=='string' && !val.match(/^[\+\-]?\d/)) {
        //simulate PHP's behaviour: '-9a' doesn't give a warning, but 'a9' does.
        warningType = 'string';
    }
    if (warningType) {
        throw new Error('Warning: is_infinite() expects parameter 1 to be double, '+warningType+' given');
    }

    return false;
};

exports.is_int = mixed_var => {
    // !No description available for is_int. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/is_int
    // +   original by: Alex
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    revised by: Matt Bradley
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: WebDevHobo (http://webdevhobo.blogspot.com/)
    // %        note 1: 1.0 is simplified to 1 before it can be accessed by the function, this makes
    // %        note 1: it different from the PHP implementation. We can't fix this unfortunately.
    // *     example 1: \php.is_int(23)
    // *     returns 1: true
    // *     example 2: \php.is_int('23')
    // *     returns 2: false
    // *     example 3: \php.is_int(23.5)
    // *     returns 3: false
    // *     example 4: \php.is_int(true)
    // *     returns 4: false
    if (typeof mixed_var !== 'number') {
        return false;
    }

    return !(mixed_var % 1);
};

exports.is_integer = function (mixed_var) {
    // !No description available for is_integer. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/is_integer
    // +   original by: Paulo Freitas
    //  -   depends on: is_int
    // %        note 1: 1.0 is simplified to 1 before it can be accessed by the function, this makes
    // %        note 1: it different from the PHP implementation. We can't fix this unfortunately.
    // *     example 1: \php.is_integer(186.31);
    // *     returns 1: false
    // *     example 2: \php.is_integer(12);
    // *     returns 2: true
    return this.is_int(mixed_var);
};

exports.is_long = function (mixed_var) {
    // Returns true if variable is a long (integer)
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/is_long
    // +   original by: Paulo Freitas
    //  -   depends on: is_float
    // %        note 1: 1.0 is simplified to 1 before it can be accessed by the function, this makes
    // %        note 1: it different from the PHP implementation. We can't fix this unfortunately.
    // *     example 1: \php.is_long(186.31);
    // *     returns 1: true
    return this.is_float(mixed_var);
};

exports.is_nan = val => {
    // Returns whether argument is not a number
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/is_nan
    // +   original by: Onno Marsman
    // +      input by: Robin
    // *     example 1: \php.is_nan(NaN);
    // *     returns 1: true
    // *     example 2: \php.is_nan(0);
    // *     returns 2: false
    var warningType = '';

    if (typeof val=='number' && isNaN(val)) {
        return true;
    }

    //Some errors for maximum PHP compatibility
    if (typeof val=='object') {
        warningType = (val instanceof Array ? 'array' : 'object');
    } else if (typeof val=='string' && !val.match(/^[\+\-]?\d/)) {
        //simulate PHP's behaviour: '-9a' doesn't give a warning, but 'a9' does.
        warningType = 'string';
    }
    if (warningType) {
        throw new Error('Warning: is_nan() expects parameter 1 to be double, '+warningType+' given');
    }

    return false;
};

exports.is_null = mixed_var => // Returns true if variable is null
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/is_null
// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
// *     example 1: \php.is_null('23');
// *     returns 1: false
// *     example 2: \php.is_null(null);
// *     returns 2: true
mixed_var === null;

exports.is_numeric = mixed_var => // Returns true if value is a number or a numeric string
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/is_numeric
// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
// +   improved by: David
// +   improved by: taith
// +   bugfixed by: Tim de Koning
// +   bugfixed by: WebDevHobo (http://webdevhobo.blogspot.com/)
// +   bugfixed by: Brett Zamir (http://brett-zamir.me)
// *     example 1: \php.is_numeric(186.31);
// *     returns 1: true
// *     example 2: \php.is_numeric('Kevin van Zonneveld');
// *     returns 2: false
// *     example 3: \php.is_numeric('+186.31e2');
// *     returns 3: true
// *     example 4: \php.is_numeric('');
// *     returns 4: false
// *     example 4: \php.is_numeric([]);
// *     returns 4: false
(typeof(mixed_var) === 'number' || typeof(mixed_var) === 'string') && mixed_var !== '' && !isNaN(mixed_var);

exports.is_object = mixed_var => {
    // Returns true if variable is an object
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/is_object
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Legaev Andrey
    // +   improved by: Michael White (http://getsprink.com)
    // *     example 1: \php.is_object('23');
    // *     returns 1: false
    // *     example 2: \php.is_object({foo: 'bar'});
    // *     returns 2: true
    // *     example 3: \php.is_object(null);
    // *     returns 3: false
    if (mixed_var instanceof Array) {
        return false;
    } else {
        return (mixed_var !== null) && (typeof( mixed_var ) == 'object');
    }
};

exports.is_real = function (mixed_var) {
    // !No description available for is_real. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/is_real
    // +   original by: Brett Zamir (http://brett-zamir.me)
    //  -   depends on: is_float
    // %        note 1: 1.0 is simplified to 1 before it can be accessed by the function, this makes
    // %        note 1: it different from the PHP implementation. We can't fix this unfortunately.
    // *     example 1: \php.is_double(186.31);
    // *     returns 1: true
    return this.is_float(mixed_var);
};

exports.is_resource = handle => {
    // Returns true if variable is a resource
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/is_resource
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Luis Salazar (http://www.freaky-media.com/)
    // *     example 1: \php.is_resource('a');
    // *     returns 1: false
    var getFuncName = fn => {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
        if (!name) {
            return '(Anonymous)';
        }
        return name[1];
    };
    return !(!handle || typeof handle !== 'object' || !handle.constructor || getFuncName(handle.constructor) !== 'PHPJS_Resource');
};

exports.is_scalar = mixed_var => // Returns true if value is a scalar
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/is_scalar
// +   original by: Paulo Freitas
// *     example 1: \php.is_scalar(186.31);
// *     returns 1: true
// *     example 2: \php.is_scalar({0: 'Kevin van Zonneveld'});
// *     returns 2: false
(/boolean|number|string/).test(typeof mixed_var);

exports.is_string = mixed_var => // Returns true if variable is a Unicode or binary string
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/is_string
// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
// *     example 1: \php.is_string('23');
// *     returns 1: true
// *     example 2: \php.is_string(23.5);
// *     returns 2: false
typeof( mixed_var ) == 'string';

exports.is_unicode = vr => {
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Almost all strings in JavaScript should be Unicode
    // *     example 1: \php.is_unicode('We the peoples of the United Nations...!');
    // *     returns 1: true
    if (typeof vr !== 'string') {
        return false;
    }

    // If surrogates occur outside of high-low pairs, then this is not Unicode
    var arr=[];

    var any='([\s\S])';
    var highSurrogate='[\uD800-\uDBFF]';
    var lowSurrogate='[\uDC00-\uDFFF]';
    var highSurrogateBeforeAny = new RegExp(highSurrogate+any, 'g');
    var lowSurrogateAfterAny = new RegExp(any+lowSurrogate, 'g');
    var singleLowSurrogate = new RegExp('^'+lowSurrogate+'$');
    var singleHighSurrogate = new RegExp('^'+highSurrogate+'$');

    while ((arr = highSurrogateBeforeAny.exec(vr)) !== null) {
        if (!arr[1] || !arr[1].match(singleLowSurrogate)) { // If high not followed by low surrogate
            return false;
        }
    }
    while ((arr = lowSurrogateAfterAny.exec(vr)) !== null) {
        if (!arr[1] || !arr[1].match(singleHighSurrogate)) { // If low not preceded by high surrogate
            return false;
        }
    }
    return true;
};

exports.isset = function(...args) {
    // !No description available for isset. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/isset
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: FremyCompany
    // +   improved by: Onno Marsman
    // +   improved by: Rafał Kukawski
    // *     example 1: \php.isset( undefined, true);
    // *     returns 1: false
    // *     example 2: \php.isset( 'Kevin van Zonneveld' );
    // *     returns 2: true

    var a = args;

    var l = a.length;
    var i = 0;
    var undef;

    if (l === 0) {
        throw new Error('Empty isset');
    }

    while (i !== l) {
        if (a[i] === undef || a[i] === null) {
            return false;
        }
        i++;
    }
    return true;
};

exports.join = function (glue, pieces) {
    // An alias for implode
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/join
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: implode
    // *     example 1: \php.join(' ', ['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: 'Kevin van Zonneveld'
    return this.implode( glue, pieces );
};

exports.json_decode = function (str_json) {
    // Decodes the JSON representation into a PHP value
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/json_decode
    // +      original by: Public Domain (http://www.json.org/json2.js)
    // + reimplemented by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      improved by: T.J. Leahy
    // +      improved by: Michael White
    // *        example 1: \php.json_decode('[\n    "e",\n    {\n    "pluribus": "unum"\n}\n]');
    // *        returns 1: ['e', {pluribus: 'unum'}]
    /*
        http://www.JSON.org/json2.js
        2008-11-19
        Public Domain.
        NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
        See http://www.JSON.org/js.html
    */

    var json = this.window.JSON;
    if (typeof json === 'object' && typeof json.parse === 'function') {
        try {
            return json.parse(str_json);
        } catch(err) {
            if (!(err instanceof SyntaxError)) {
                throw new Error('Unexpected error type in json_decode()');
            }
            this.php_js = this.php_js || {};
            this.php_js.last_error_json = 4; // usable by json_last_error()
            return null;
        }
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var j;
    var text = str_json;

    // Parsing happens in four stages. In the first stage, we replace certain
    // Unicode characters with escape sequences. JavaScript handles many characters
    // incorrectly, either silently deleting them, or treating them as line endings.
    cx.lastIndex = 0;
    if (cx.test(text)) {
        text = text.replace(cx, a => '\\u' +
        ('0000' + a.charCodeAt(0).toString(16)).slice(-4));
    }

    // In the second stage, we run the text against regular expressions that look
    // for non-JSON patterns. We are especially concerned with '()' and 'new'
    // because they can cause invocation, and '=' because it can cause mutation.
    // But just to be safe, we want to reject all unexpected forms.

    // We split the second stage into 4 regexp operations in order to work around
    // crippling inefficiencies in IE's and Safari's regexp engines. First we
    // replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
    // replace all simple value tokens with ']' characters. Third, we delete all
    // open brackets that follow a colon or comma or that begin the text. Finally,
    // we look to see that the remaining characters are only whitespace or ']' or
    // ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.
    if ((/^[\],:{}\s]*$/).
        test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
            replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
            replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

        // In the third stage we use the eval function to compile the text into a
        // JavaScript structure. The '{' operator is subject to a syntactic ambiguity
        // in JavaScript: it can begin a block or an object literal. We wrap the text
        // in parens to eliminate the ambiguity.

        j = eval('(' + text + ')');

        return j;
    }

    this.php_js = this.php_js || {};
    this.php_js.last_error_json = 4; // usable by json_last_error()
    return null;
};

exports.json_encode = function (mixed_val) {
    // Returns the JSON representation of a value
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/json_encode
    // +      original by: Public Domain (http://www.json.org/json2.js)
    // + reimplemented by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      improved by: Michael White
    // +      input by: felix
    // +      bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *        example 1: \php.json_encode(['e', {pluribus: 'unum'}]);
    // *        returns 1: '[\n    "e",\n    {\n    "pluribus": "unum"\n}\n]'
    /*
        http://www.JSON.org/json2.js
        2008-11-19
        Public Domain.
        NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
        See http://www.JSON.org/js.html
    */
    var retVal;

    var json = this.window.JSON;
    try {
        if (typeof json === 'object' && typeof json.stringify === 'function') {
            retVal = json.stringify(mixed_val); // Errors will not be caught here if our own equivalent to resource
                                                                            //  (an instance of PHPJS_Resource) is used
            if (retVal === undefined) {
                throw new SyntaxError('json_encode');
            }
            return retVal;
        }

        var value = mixed_val;

        var quote = string => {
            var escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
            var meta = {    // table of character substitutions
                '\b': '\\b',
                '\t': '\\t',
                '\n': '\\n',
                '\f': '\\f',
                '\r': '\\r',
                '"' : '\\"',
                '\\': '\\\\'
            };

            escapable.lastIndex = 0;
            return escapable.test(string) ?
                            '"' + string.replace(escapable, a => {
                                var c = meta[a];
                                return typeof c === 'string' ? c :
                                '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                            }) + '"' :
                            '"' + string + '"';
        };

        var str = function (key, holder) {
            var gap = '';
            var indent = '    ';
            var i = 0;          // The loop counter.
            var k = '';          // The member key.
            var v = '';          // The member value.
            var length = 0;
            var mind = gap;
            var partial = [];
            var value = holder[key];

            // If the value has a toJSON method, call it to obtain a replacement value.
            if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
                value = value.toJSON(key);
            }

            // What happens next depends on the value's type.
            switch (typeof value) {
                case 'string':
                    return quote(value);

                case 'number':
                    // JSON numbers must be finite. Encode non-finite numbers as null.
                    return isFinite(value) ? String(value) : 'null';

                case 'boolean':
                case 'null':
                    // If the value is a boolean or null, convert it to a string. Note:
                    // typeof null does not produce 'null'. The case is included here in
                    // the remote chance that this gets fixed someday.

                    return String(value);

                case 'object':
                    // If the type is 'object', we might be dealing with an object or an array or
                    // null.
                    // Due to a specification blunder in ECMAScript, typeof null is 'object',
                    // so watch out for that case.
                    if (!value) {
                        return 'null';
                    }
                    if ((this.PHPJS_Resource && value instanceof this.PHPJS_Resource) ||
                        (window.PHPJS_Resource && value instanceof window.PHPJS_Resource)) {
                        throw new SyntaxError('json_encode');
                    }

                    // Make an array to hold the partial results of stringifying this object value.
                    gap += indent;
                    partial = [];

                    // Is the value an array?
                    if (Object.prototype.toString.apply(value) === '[object Array]') {
                        // The value is an array. Stringify every element. Use null as a placeholder
                        // for non-JSON values.

                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || 'null';
                        }

                        // Join all of the elements together, separated with commas, and wrap them in
                        // brackets.
                        v = partial.length === 0 ? '[]' :
                                gap ? '[\n' + gap +
                                partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                                '[' + partial.join(',') + ']';
                        gap = mind;
                        return v;
                    }

                    // Iterate through all of the keys in the object.
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    }

                    // Join all of the member texts together, separated with commas,
                    // and wrap them in braces.
                    v = partial.length === 0 ? '{}' :
                            gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                            mind + '}' : '{' + partial.join(',') + '}';
                    gap = mind;
                    return v;
                case 'undefined': // Fall-through
                case 'function': // Fall-through
                default:
                    throw new SyntaxError('json_encode');
            }
        };

        // Make a fake root object containing our value under the key of ''.
        // Return the result of stringifying the value.
        return str('', {
            '': value
        });

    } catch(err) { // Todo: ensure error handling above throws a SyntaxError in all cases where it could
                            // (i.e., when the JSON global is not available and there is an error)
        if (!(err instanceof SyntaxError)) {
            throw new Error('Unexpected error type in json_encode()');
        }
        this.php_js = this.php_js || {};
        this.php_js.last_error_json = 4; // usable by json_last_error()
        return null;
    }
};

exports.json_last_error = function () {
    // !No description available for json_last_error. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/json_last_error
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.json_last_error();
    // *     returns 1: 0
    /*
    JSON_ERROR_NONE = 0
    JSON_ERROR_DEPTH = 1 // max depth limit to be removed per PHP comments in json.c (not possible in JS?)
    JSON_ERROR_STATE_MISMATCH = 2 // internal use? also not documented
    JSON_ERROR_CTRL_CHAR = 3 // [\u0000-\u0008\u000B-\u000C\u000E-\u001F] if used directly within json_decode(),
                                                                  // but JSON functions auto-escape these, so error not possible in JavaScript
    JSON_ERROR_SYNTAX = 4
    */
    return this.php_js && this.php_js.last_error_json ? this.php_js.last_error_json : 0;
};

exports.key = function (arr) {
    // Return the key of the element currently pointed to by the internal array pointer
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/key
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   input by: Riddler (http://www.frontierwebdev.com/)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Uses global: php_js to store the array pointer
    // *     example 1: \php.array = {fruit1: 'apple', 'fruit2': 'orange'}
    // *     example 1: \php.key(array);
    // *     returns 1: 'fruit1'
    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.pointers = this.php_js.pointers || [];
    var indexOf = function (value) {
        for (var i = 0, length=this.length; i < length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    };
    // END REDUNDANT

    var pointers = this.php_js.pointers;
    if (!pointers.indexOf) {
        pointers.indexOf = indexOf;
    }

    if (pointers.indexOf(arr) === -1) {
        pointers.push(arr, 0);
    }
    var cursor = pointers[pointers.indexOf(arr)+1];
    if (!(arr instanceof Array)) {
        var ct = 0;
        for (var k in arr) {
            if (ct === cursor) {
                return k;
            }
            ct++;
        }
        return false; // Empty
    }
    if (arr.length === 0) {
        return false;
    }
    return cursor;
};

exports.krsort = function (inputArr, sort_flags) {
    // Sort an array by key value in reverse order
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/krsort
    // +   original by: GeekFG (http://geekfg.blogspot.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: The examples are correct, this is a new way
    // %        note 2: This function deviates from PHP in returning a copy of the array instead
    // %        note 2: of acting by reference and returning true; this was necessary because
    // %        note 2: IE does not allow deleting and re-adding of properties without caching
    // %        note 2: of property position; you can set the ini of "phpjs.strictForIn" to true to
    // %        note 2: get the PHP behavior, but use this only if you are in an environment
    // %        note 2: such as Firefox extensions where for-in iteration order is fixed and true
    // %        note 2: property deletion is supported. Note that we intend to implement the PHP
    // %        note 2: behavior by default if IE ever does allow it; only gives shallow copy since
    // %        note 2: is by reference in PHP anyways
    // -    depends on: i18n_loc_get_default
    // *     example 1: \php.data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
    // *     example 1: \php.data = krsort(data);
    // *     results 1: {d: 'lemon', c: 'apple', b: 'banana', a: 'orange'}
    // *     example 2: \php.ini_set('phpjs.strictForIn', true);
    // *     example 2: \php.data = {2: 'van', 3: 'Zonneveld', 1: 'Kevin'};
    // *     example 2: \php.krsort(data);
    // *     results 2: data == {3: 'Kevin', 2: 'van', 1: 'Zonneveld'}
    // *     returns 2: true
    var tmp_arr={};

    var keys=[];
    var sorter;
    var i;
    var k;
    var that=this;
    var strictForIn = false;
    var populateArr = {};

    switch (sort_flags) {
        case 'SORT_STRING': // compare items as strings
            sorter = (a, b) => that.strnatcmp(b, a);
            break;
        case 'SORT_LOCALE_STRING': // compare items as strings, based on the current locale (set with  i18n_loc_set_default() as of PHP6)
            var loc = this.i18n_loc_get_default();
            sorter = this.php_js.i18nLocales[loc].sorting;
            break;
        case 'SORT_NUMERIC': // compare items numerically
            sorter = (a, b) => b - a;
            break;
        case 'SORT_REGULAR': // compare items normally (don't change types)
        default:
            sorter = (a, b) => {
                if (a < b) {
                    return 1;
                }
                if (a > b) {
                    return -1;
                }
                return 0;
            };
            break;
    }

    // Make a list of key names
    for (k in inputArr) {
        if (inputArr.hasOwnProperty(k)) {
            keys.push(k);
        }
    }
    keys.sort(sorter);

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    // END REDUNDANT

    strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value &&
                    this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;


    // Rebuild array with sorted key names
    for (i = 0; i < keys.length; i++) {
        k = keys[i];
        tmp_arr[k] = inputArr[k];
        if (strictForIn) {
            delete inputArr[k];
        }
    }
    for (i in tmp_arr) {
        if (tmp_arr.hasOwnProperty(i)) {
            populateArr[i] = tmp_arr[i];
        }
    }

    return strictForIn || populateArr;
};

exports.ksort = function (inputArr, sort_flags) {
    // Sort an array by key
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/ksort
    // +   original by: GeekFG (http://geekfg.blogspot.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: The examples are correct, this is a new way
    // %        note 2: This function deviates from PHP in returning a copy of the array instead
    // %        note 2: of acting by reference and returning true; this was necessary because
    // %        note 2: IE does not allow deleting and re-adding of properties without caching
    // %        note 2: of property position; you can set the ini of "phpjs.strictForIn" to true to
    // %        note 2: get the PHP behavior, but use this only if you are in an environment
    // %        note 2: such as Firefox extensions where for-in iteration order is fixed and true
    // %        note 2: property deletion is supported. Note that we intend to implement the PHP
    // %        note 2: behavior by default if IE ever does allow it; only gives shallow copy since
    // %        note 2: is by reference in PHP anyways
    // -    depends on: i18n_loc_get_default
    // *     example 1: \php.data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
    // *     example 1: \php.data = ksort(data);
    // *     results 1: {a: 'orange', b: 'banana', c: 'apple', d: 'lemon'}
    // *     example 2: \php.ini_set('phpjs.strictForIn', true);
    // *     example 2: \php.data = {2: 'van', 3: 'Zonneveld', 1: 'Kevin'};
    // *     example 2: \php.ksort(data);
    // *     results 2: data == {1: 'Kevin', 2: 'van', 3: 'Zonneveld'}
    // *     returns 2: true
    var tmp_arr={};

    var keys=[];
    var sorter;
    var i;
    var k;
    var that=this;
    var strictForIn = false;
    var populateArr = {};

    switch (sort_flags) {
        case 'SORT_STRING': // compare items as strings
            sorter = (a, b) => that.strnatcmp(a, b);
            break;
        case 'SORT_LOCALE_STRING': // compare items as strings, based on the current locale (set with  i18n_loc_set_default() as of PHP6)
            var loc = this.i18n_loc_get_default();
            sorter = this.php_js.i18nLocales[loc].sorting;
            break;
        case 'SORT_NUMERIC': // compare items numerically
            sorter = (a, b) => (a+0) - (b+0);
            break;
        // case 'SORT_REGULAR': // compare items normally (don't change types)
        default:
            sorter = (a, b) => {
                if (a > b) {
                    return 1;
                }
                if (a < b) {
                    return -1;
                }
                return 0;
            };
            break;
    }

    // Make a list of key names
    for (k in inputArr) {
        if (inputArr.hasOwnProperty(k)) {
            keys.push(k);
        }
    }
    keys.sort(sorter);

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    // END REDUNDANT

    strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value &&
                    this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;

    // Rebuild array with sorted key names
    for (i = 0; i < keys.length; i++) {
        k = keys[i];
        tmp_arr[k] = inputArr[k];
        if (strictForIn) {
            delete inputArr[k];
        }
    }
    for (i in tmp_arr) {
        if (tmp_arr.hasOwnProperty(i)) {
            populateArr[i] = tmp_arr[i];
        }
    }

    return strictForIn || populateArr;
};

exports.lcfirst = str => {
    // !No description available for lcfirst. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/lcfirst
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.lcfirst('Kevin Van Zonneveld');
    // *     returns 1: 'kevin Van Zonneveld'
    str += '';
    var f = str.charAt(0).toLowerCase();
    return f + str.substr(1);
};

exports.lcg_value = () => // !No description available for lcg_value. @php.js developers: Please update the function summary text file.
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/lcg_value
// +   original by: Onno Marsman
Math.random();

exports.levenshtein = (s1, s2) => {
    // Calculate Levenshtein distance between two strings
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/levenshtein
    // +            original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
    // +            bugfixed by: Onno Marsman
    // +             revised by: Andrea Giammarchi (http://webreflection.blogspot.com)
    // + reimplemented by: Brett Zamir (http://brett-zamir.me)
    // + reimplemented by: Alexander M Beedie
    // *                example 1: \php.levenshtein('Kevin van Zonneveld', 'Kevin van Sommeveld');
    // *                returns 1: 3
    if (s1 == s2) {
        return 0;
    }

    var s1_len = s1.length;
    var s2_len = s2.length;
    if (s1_len === 0) {
        return s2_len;
    }
    if (s2_len === 0) {
        return s1_len;
    }

    // BEGIN STATIC
    var split = false;
    try{
        split=!('0')[0];
    } catch (e){
        split=true; // Earlier IE may not support access by string index
    }
    // END STATIC
    if (split){
        s1 = s1.split('');
        s2 = s2.split('');
    }

    var v0 = new Array(s1_len+1);
    var v1 = new Array(s1_len+1);

    var s1_idx=0;
    var s2_idx=0;
    var cost=0;
    for (s1_idx=0; s1_idx<s1_len+1; s1_idx++) {
        v0[s1_idx] = s1_idx;
    }
    var char_s1='';
    var char_s2='';
    for (s2_idx=1; s2_idx<=s2_len; s2_idx++) {
        v1[0] = s2_idx;
        char_s2 = s2[s2_idx - 1];

        for (s1_idx=0; s1_idx<s1_len;s1_idx++) {
            char_s1 = s1[s1_idx];
            cost = (char_s1 == char_s2) ? 0 : 1;
            var m_min = v0[s1_idx+1] + 1;
            var b = v1[s1_idx] + 1;
            var c = v0[s1_idx] + cost;
            if (b < m_min) {
                m_min = b; }
            if (c < m_min) {
                m_min = c; }
            v1[s1_idx+1] = m_min;
        }
        var v_tmp = v0;
        v0 = v1;
        v1 = v_tmp;
    }
    return v0[s1_len];
};

exports.localeconv = function () {
    // Returns numeric formatting information based on the current locale
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/localeconv
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: setlocale
    // *     example 1: \php.localeconv();
    // *     returns 1: {decimal_point: '.', thousands_sep: ',', positive_sign: '', negative_sign: '-', int_frac_digits: 2, frac_digits: 2, p_cs_precedes: 1, p_sep_by_space: 0, n_cs_precedes: 1, n_sep_by_space: 0, p_sign_posn: 3, n_sign_posn: 0, grouping: 3, int_curr_symbol: 'USD', currency_symbol: '$', mon_decimal_point: '.', mon_thousands_sep: ',', mon_grouping: 3}
    var arr = {};

    var prop='';

    // BEGIN REDUNDANT
    this.setlocale('LC_ALL', 0); // ensure setup of localization variables takes place, if not already
    // END REDUNDANT

    // Make copies
    for (prop in this.php_js.locales[this.php_js.localeCategories.LC_NUMERIC].LC_NUMERIC) {
        arr[prop] = this.php_js.locales[this.php_js.localeCategories.LC_NUMERIC].LC_NUMERIC[prop];
    }
    for (prop in this.php_js.locales[this.php_js.localeCategories.LC_MONETARY].LC_MONETARY) {
        arr[prop] = this.php_js.locales[this.php_js.localeCategories.LC_MONETARY].LC_MONETARY[prop];
    }

    return arr;
};

exports.localtime = (timestamp, is_assoc) => {
    // Returns the results of the C system call localtime as an associative array if the associative_array argument is set to 1 other wise it is a regular array
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/localtime
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +  derived from: Josh Fraser (http://onlineaspect.com/2007/06/08/auto-detect-a-time-zone-with-javascript/)
    // +      parts by: Breaking Par Consulting Inc (http://www.breakingpar.com/bkp/home.nsf/0/87256B280015193F87256CFB006C45F7)
    // +   improved by: Ryan W Tenney (http://ryan.10e.us)
    // *     example 1: \php.localtime();
    // *     returns 1: [50,28,0,14,2,109,6,73,0]
    var t;

    var yday;
    var x;
    var o = {};

    if (timestamp === undefined) {
        t = new Date();
    } else if (timestamp instanceof Date) {
        t = timestamp;
    } else {
        t = new Date(timestamp * 1000);
    }

    x = (t, m) => {
        var a = (new Date(t.getFullYear(), 0, m, 0, 0, 0, 0)).toUTCString();
        return t - new Date(a.slice(0, a.lastIndexOf(' ') - 1));
    };

    yday = Math.floor((t - new Date(t.getFullYear(), 0, 1)) / 86400000);

    o = {
        'tm_sec'  : t.getSeconds(),           // seconds
        'tm_min'  : t.getMinutes(),           // minutes
        'tm_hour' : t.getHours(),             // hour
        'tm_mday' : t.getDate(),              // day of the month, 1 - 31
        'tm_mon'  : t.getMonth(),             // month of the year, 0 (January) to 11 (December)
        'tm_year' : t.getFullYear() - 1900,   // years since 1900
        'tm_wday' : t.getDay(),               // day of the week, 0 (Sun) to 6 (Sat)
        'tm_yday' : yday,                     // day of the year
        'tm_isdst': +(x(t, 1) != x(t, 6))     // is daylight savings time in effect
    };

    return is_assoc ? o : [
        o.tm_sec,
        o.tm_min,
        o.tm_hour,
        o.tm_mday,
        o.tm_mon,
        o.tm_year,
        o.tm_wday,
        o.tm_yday,
        o.tm_isdst
    ];
};

exports.log = (arg, base) => {
    // Returns the natural logarithm of the number, or the base log if base is specified
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/log
    // +   original by: Onno Marsman
    // *     example 1: \php.log(8723321.4, 7);
    // *     returns 1: 8.212871815082147
    if (base === undefined) {
        return Math.log(arg);
    } else {
        return Math.log(arg)/Math.log(base);
    }
};

exports.log10 = arg => // Returns the base-10 logarithm of the number
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/log10
// +   original by: Philip Peterson
// +   improved by: Onno Marsman
// +   improved by: Tod Gentille
// *     example 1: \php.log10(10);
// *     returns 1: 1
// *     example 2: \php.log10(1);
// *     returns 2: 0
Math.log(arg) / Math.LN10;

exports.log1p = x => {
    // Returns log(1 + number), computed in a way that accurate even when the value of number is close to zero
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/log1p
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: Precision 'n' can be adjusted as desired
    // *     example 1: \php.log1p(1e-15);
    // *     returns 1: 9.999999999999995e-16

    var ret=0; // degree of precision

    var n = 50;
    if (x <= -1) {
        return '-INF'; // JavaScript style would be to return Number.NEGATIVE_INFINITY
    }
    if (x < 0 || x > 1) {
        return Math.log(1+x);
    }
    for (var i=1; i < n; i++) {
        if ((i % 2) === 0) {
            ret -= x ** i/i;
        }
        else {
            ret += x ** i/i;
        }
    }
    return ret;
};

exports.long2ip = proper_address => {
    // Converts an (IPv4) Internet network address into a string in Internet standard dotted format
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/long2ip
    // +   original by: Waldo Malqui Silva
    // *     example 1: \php.long2ip( 3221234342 );
    // *     returns 1: '192.0.34.166'

    var output = false;

    if ( !isNaN( proper_address ) && ( proper_address >= 0 || proper_address <= 4294967295 ) ) {
        output = Math.floor(proper_address / (256 ** 3) ) + '.' +
            Math.floor( ( proper_address % (256 ** 3) ) / (256 ** 2) ) + '.' +
            Math.floor( ( ( proper_address % (256 ** 3) )  % (256 ** 2) ) / (256 ** 1) ) + '.' +
            Math.floor( ( ( ( proper_address % (256 ** 3) ) % (256 ** 2) ) % (256 ** 1) ) / (256 ** 0) );
    }

    return output;
};

exports.ltrim = (str, charlist) => {
    // Strips whitespace from the beginning of a string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/ltrim
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Erkekjetter
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // *     example 1: \php.ltrim('    Kevin van Zonneveld    ');
    // *     returns 1: 'Kevin van Zonneveld    '
    charlist = !charlist ? ' \\s\u00A0' : (charlist+'').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
    var re = new RegExp('^[' + charlist + ']+', 'g');
    return (str+'').replace(re, '');
};

exports.mail = function (to, subject, message, additional_headers, additional_parameters) {
    // Send an email message
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/mail
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: Currently only works if the SSJS SendMail method is available
    // %          note 1: and also depends on the ini having been set for 'sendmail_from'
    // %          note 2: 'additional_parameters' argument is not supported
    // *     example 1: \php.mail('you@example.com', 'Hi!', "What's been going on lately?");
    // *     returns 1: true
    // *     example 2: \php.mail("jack@example.com, barry@example.net", 'ok subj', 'my message',
    // *     example 2:           'From: jack@example.com\r\n'+'Organization : Example Corp\r\n'+
    // *     example 2:           'Content-type: text/html;charset=utf8');
    // *     returns 2: true
    var _append = (sm, prop, value) => {
        if (!sm[prop]) { // Ok?
            sm[prop] = '';
            sm[prop] += value;
        }
        else {
            sm[prop] += ','+value;
        }
    };

    if (this.window.SendMail) { // See http://research.nihonsoft.org/javascript/ServerReferenceJS12/sendmail.htm
        var sm = new this.window.SendMail();
        var from = this.php_js && this.php_js.ini && this.php_js.ini.sendmail_from && this.php_js.ini.sendmail_from.local_value;
        sm.To = to;
        sm.Subject = subject;
        sm.Body = message;
        sm.From = from;
        if (additional_headers) {
            var headers = additional_headers.trim().split(/\r?\n/);
            for (var i = 0; i < headers.length; i++) {
                var header = headers[i];
                var colonPos = header.indexOf(':');
                if (colonPos === -1) {
                    throw new Error('Malformed headers');
                }
                var prop = header.slice(0, colonPos).trim();
                var value = header.slice(colonPos+1).trim();
                switch(prop) {
                    // Todo: Add any others to this top fall-through which can allow multiple headers
                    //                via commas; will otherwise be overwritten (Errorsto, Replyto?)
                    case 'Bcc':
                        // Fall-through
                    case 'Cc':
                        // Fall-through
                    case 'To': // Apparently appendable with additional headers per PHP examples
                        _append(sm, prop, value);
                        break;
                    case 'Subject': // Overridable in additional headers?
                        break;
                    case 'Body': // Overridable in additional headers?
                        break;
                    case 'From': // Default, though can be overridden
                        /* Fall-through */
                    default: //  Errorsto, Organization, Replyto, Smtpserver
                        sm[prop] = value;
                        break;
                }
            }
        }
        if (!sm.From) {
            throw new Error('Warning: mail(): "sendmail_from" not set in php.ini');
        }
        return sm.send();
    }
    return false;
};

exports.max = function(...args) {
    // Return the highest value in an array or a series of arguments
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/max
    // +   original by: Onno Marsman
    // +    revised by: Onno Marsman
    // +    tweaked by: Jack
    // %          note: Long code cause we're aiming for maximum PHP compatibility
    // *     example 1: \php.max(1, 3, 5, 6, 7);
    // *     returns 1: 7
    // *     example 2: \php.max([2, 4, 5]);
    // *     returns 2: 5
    // *     example 3: \php.max(0, 'hello');
    // *     returns 3: 0
    // *     example 4: \php.max('hello', 0);
    // *     returns 4: 'hello'
    // *     example 5: \php.max(-1, 'hello');
    // *     returns 5: 'hello'
    // *     example 6: \php.max([2, 4, 8], [2, 5, 7]);
    // *     returns 6: [2, 5, 7]
    var ar;

    var retVal;
    var i = 0;
    var n = 0;
    var argv = args;
    var argc = argv.length;

    var _obj2Array = obj => {
        if (obj instanceof Array) {
            return obj;
        } else {
            var ar = [];
            for (var i in obj) {
                ar.push(obj[i]);
            }
            return ar;
        }
    }; //function _obj2Array

    var _compare = (current, next) => {
        var i = 0;
        var n = 0;
        var tmp = 0;
        var nl = 0;
        var cl = 0;

        if (current === next) {
            return 0;
        } else if (typeof current == 'object') {
            if (typeof next == 'object') {
               current = _obj2Array(current);
               next    = _obj2Array(next);
               cl      = current.length;
               nl      = next.length;
               if (nl > cl) {
                   return 1;
               } else if (nl < cl) {
                   return -1;
               } else {
                   for (i = 0, n = cl; i<n; ++i) {
                       tmp = _compare(current[i], next[i]);
                       if (tmp == 1) {
                           return 1;
                       } else if (tmp == -1) {
                           return -1;
                       }
                   }
                   return 0;
               }
            } else {
               return -1;
            }
        } else if (typeof next == 'object') {
            return 1;
        } else if (isNaN(next) && !isNaN(current)) {
            if (current == 0) {
               return 0;
            } else {
               return (current<0 ? 1 : -1);
            }
        } else if (isNaN(current) && !isNaN(next)) {
            if (next==0) {
               return 0;
            } else {
               return (next>0 ? 1 : -1);
            }
        } else {
            if (next==current) {
               return 0;
            } else {
               return (next>current ? 1 : -1);
            }
        }
    }; //function _compare

    if (argc === 0) {
        throw new Error('At least one value should be passed to max()');
    } else if (argc === 1) {
        if (typeof argv[0] === 'object') {
            ar = _obj2Array(argv[0]);
        } else {
            throw new Error('Wrong parameter count for max()');
        }
        if (ar.length === 0) {
            throw new Error('Array must contain at least one element for max()');
        }
    } else {
        ar = argv;
    }

    retVal = ar[0];
    for (i=1, n=ar.length; i<n; ++i) {
        if (_compare(retVal, ar[i])==1) {
            retVal = ar[i];
        }
    }

    return retVal;
};

exports.md5 = function (str) {
    // Calculate the md5 hash of a string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/md5
    // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // + namespaced by: Michael White (http://getsprink.com)
    // +    tweaked by: Jack
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: utf8_encode
    // *     example 1: \php.md5('Kevin van Zonneveld');
    // *     returns 1: '6e658d4bfcb59cc13f96c14450ac40b9'
    var xl;

    var rotateLeft = (lValue, iShiftBits) => (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));

    var addUnsigned = (lX, lY) => {
        var lX4;
        var lY4;
        var lX8;
        var lY8;
        var lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    };

    var _F = (x, y, z) => (x & y) | ((~x) & z);
    var _G = (x, y, z) => (x & z) | (y & (~z));
    var _H = (x, y, z) => x ^ y ^ z;
    var _I = (x, y, z) => y ^ (x | (~z));

    var _FF = (a, b, c, d, x, s, ac) => {
        a = addUnsigned(a, addUnsigned(addUnsigned(_F(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };

    var _GG = (a, b, c, d, x, s, ac) => {
        a = addUnsigned(a, addUnsigned(addUnsigned(_G(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };

    var _HH = (a, b, c, d, x, s, ac) => {
        a = addUnsigned(a, addUnsigned(addUnsigned(_H(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };

    var _II = (a, b, c, d, x, s, ac) => {
        a = addUnsigned(a, addUnsigned(addUnsigned(_I(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };

    var convertToWordArray = str => {
        var lWordCount;
        var lMessageLength = str.length;
        var lNumberOfWords_temp1=lMessageLength + 8;
        var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
        var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
        var lWordArray=new Array(lNumberOfWords-1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while ( lByteCount < lMessageLength ) {
            lWordCount = (lByteCount-(lByteCount % 4))/4;
            lBytePosition = (lByteCount % 4)*8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (str.charCodeAt(lByteCount)<<lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount-(lByteCount % 4))/4;
        lBytePosition = (lByteCount % 4)*8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
        lWordArray[lNumberOfWords-2] = lMessageLength<<3;
        lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
        return lWordArray;
    };

    var wordToHex = lValue => {
        var wordToHexValue="";
        var wordToHexValue_temp="";
        var lByte;
        var lCount;
        for (lCount = 0;lCount<=3;lCount++) {
            lByte = (lValue>>>(lCount*8)) & 255;
            wordToHexValue_temp = "0" + lByte.toString(16);
            wordToHexValue = wordToHexValue + wordToHexValue_temp.substr(wordToHexValue_temp.length-2,2);
        }
        return wordToHexValue;
    };

    var x=[];
    var k;
    var AA;
    var BB;
    var CC;
    var DD;
    var a;
    var b;
    var c;
    var d;
    var S11=7;
    var S12=12;
    var S13=17;
    var S14=22;
    var S21=5;
    var S22=9;
    var S23=14;
    var S24=20;
    var S31=4;
    var S32=11;
    var S33=16;
    var S34=23;
    var S41=6;
    var S42=10;
    var S43=15;
    var S44=21;

    str = this.utf8_encode(str);
    x = convertToWordArray(str);
    a = 0x67452301;b = 0xEFCDAB89;c = 0x98BADCFE;d = 0x10325476;

    xl = x.length;
    for (k=0;k<xl;k+=16) {
        AA=a; BB=b; CC=c; DD=d;
        a=_FF(a,b,c,d,x[k+0], S11,0xD76AA478);
        d=_FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
        c=_FF(c,d,a,b,x[k+2], S13,0x242070DB);
        b=_FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
        a=_FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
        d=_FF(d,a,b,c,x[k+5], S12,0x4787C62A);
        c=_FF(c,d,a,b,x[k+6], S13,0xA8304613);
        b=_FF(b,c,d,a,x[k+7], S14,0xFD469501);
        a=_FF(a,b,c,d,x[k+8], S11,0x698098D8);
        d=_FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
        c=_FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
        b=_FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
        a=_FF(a,b,c,d,x[k+12],S11,0x6B901122);
        d=_FF(d,a,b,c,x[k+13],S12,0xFD987193);
        c=_FF(c,d,a,b,x[k+14],S13,0xA679438E);
        b=_FF(b,c,d,a,x[k+15],S14,0x49B40821);
        a=_GG(a,b,c,d,x[k+1], S21,0xF61E2562);
        d=_GG(d,a,b,c,x[k+6], S22,0xC040B340);
        c=_GG(c,d,a,b,x[k+11],S23,0x265E5A51);
        b=_GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
        a=_GG(a,b,c,d,x[k+5], S21,0xD62F105D);
        d=_GG(d,a,b,c,x[k+10],S22,0x2441453);
        c=_GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
        b=_GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
        a=_GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
        d=_GG(d,a,b,c,x[k+14],S22,0xC33707D6);
        c=_GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
        b=_GG(b,c,d,a,x[k+8], S24,0x455A14ED);
        a=_GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
        d=_GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
        c=_GG(c,d,a,b,x[k+7], S23,0x676F02D9);
        b=_GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
        a=_HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
        d=_HH(d,a,b,c,x[k+8], S32,0x8771F681);
        c=_HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
        b=_HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
        a=_HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
        d=_HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
        c=_HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
        b=_HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
        a=_HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
        d=_HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
        c=_HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
        b=_HH(b,c,d,a,x[k+6], S34,0x4881D05);
        a=_HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
        d=_HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
        c=_HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
        b=_HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
        a=_II(a,b,c,d,x[k+0], S41,0xF4292244);
        d=_II(d,a,b,c,x[k+7], S42,0x432AFF97);
        c=_II(c,d,a,b,x[k+14],S43,0xAB9423A7);
        b=_II(b,c,d,a,x[k+5], S44,0xFC93A039);
        a=_II(a,b,c,d,x[k+12],S41,0x655B59C3);
        d=_II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
        c=_II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
        b=_II(b,c,d,a,x[k+1], S44,0x85845DD1);
        a=_II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
        d=_II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
        c=_II(c,d,a,b,x[k+6], S43,0xA3014314);
        b=_II(b,c,d,a,x[k+13],S44,0x4E0811A1);
        a=_II(a,b,c,d,x[k+4], S41,0xF7537E82);
        d=_II(d,a,b,c,x[k+11],S42,0xBD3AF235);
        c=_II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
        b=_II(b,c,d,a,x[k+9], S44,0xEB86D391);
        a=addUnsigned(a,AA);
        b=addUnsigned(b,BB);
        c=addUnsigned(c,CC);
        d=addUnsigned(d,DD);
    }

    var temp = wordToHex(a)+wordToHex(b)+wordToHex(c)+wordToHex(d);

    return temp.toLowerCase();
};

exports.md5_file = function ( str_filename ) {
    // Calculate the md5 hash of given filename
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/md5_file
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: file_get_contents
    // -    depends on: md5
    // *     example 1: \php.md5_file('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm');
    // *     returns 1: '202cb962ac59075b964b07152d234b70'
    var buf = '';

    buf = this.file_get_contents(str_filename);

    if (!buf) {
        return false;
    }

    return this.md5(buf);
};

exports.metaphone = (word, phones) => {
    // +   original by: Greg Frazier
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.metaphone('Gnu');
    // *     returns 1: 'N'

    // As far as use of the String() constructor, the author recalls IE 6 giving errors otherwise

    var wordlength = word.length;

    var x = 0;
    var tempchar = '';
    var metaword = '';

    var removedbl = word => {
        var wordlength = word.length,
        tempword = word.toLowerCase(),
        rebuilt,
        tempchar1, tempchar2,
        x;

        tempchar1 = tempword.charAt(0);
        rebuilt = tempchar1;
        for (x=1;x<wordlength;x++){
            tempchar2 = tempword.charAt(x);
            if (tempchar2 != tempchar1 || tempchar2 == 'c' || tempchar2 == 'g'){
                rebuilt += tempchar2;
            }
            tempchar1 = tempchar2;
        }
        return rebuilt;
    };

    var isVowel=a => {
        switch (a.toLowerCase()) {
            case 'a': return true;
            case 'e': return true;
            case 'i': return true;
            case 'o': return true;
            case 'u': return true;
            default: return false;
        }
    };

    var tempword = removedbl(word.toLowerCase());

    //Special wh- case
    if (tempword.charAt(0) == 'w' && tempword.charAt(1) == 'h'){
        // Remove "h" and rebuild the string
        tempword = "w" + tempword.substr(2);
    }

    for (x=0; x<wordlength; x++){
        tempchar = String(tempword).charAt(x);
        if (x === 0 && x+1 <= wordlength){
            switch (tempchar){
                case 'a': if (tempword.charAt(x+1) == 'e'){ metaword += 'e'; }else{metaword += 'a';} break;
                case 'e': metaword += 'e'; break;
                case 'i': metaword += 'i'; break;
                case 'o': metaword += 'o'; break;
                case 'u': metaword += 'u'; break;
                case 'g': if (String(tempword).charAt(x+1) == 'n'){ x += 1; tempchar = String(tempword).charAt(x);} break;
                case 'k': if (String(tempword).charAt(x+1) == 'n'){ x += 1; tempchar = String(tempword).charAt(x);} break;
                case 'p': if (String(tempword).charAt(x+1) == 'n'){ x += 1; tempchar = String(tempword).charAt(x);} break;
                case 'w': if (String(tempword).charAt(x+1) == 'r'){ x += 1; tempchar = String(tempword).charAt(x); break;} break;
            }
        }
        if (isVowel(tempchar) === false){
            switch (tempchar){
                case 'b': if (String(tempword).charAt(x-1) == 'm'){ break;}else{metaword += 'b';} break;
                case 'c': if (x+1 <= wordlength){
                            if (String(tempword).charAt(x+1) == 'h' && String(tempword).charAt(x-1) != 's'){
                                if (x === 0 && (x+2 <= wordlength) && isVowel(String(tempword).charAt(x+2))) {
                                    metaword += 'k';
                                } else {
                                    metaword += 'x';
                                }
                             }else if (String(tempword).charAt(x+1) == 'i' && String(tempword).charAt(x+2) == 'a'){ metaword += 'x';}
                            else if (String(tempword).charAt(x+1) == 'i' || String(tempword).charAt(x+1) == 'e' || String(tempword).charAt(x+1) == 'y'){
                                if (x > 0){
                                    if (String(tempword).charAt(x-1) == 's'){
                                        break;
                                    }else{
                                        metaword += 's';
                                    }
                                }else{
                                    metaword += 's';
                                }
                            }else{
                                metaword += 'k';
                            }
                          }else{
                            metaword += 'k';
                          }
                          break;
                case 'd': if (x+2 <= wordlength){
                            if (String(tempword).charAt(x+1) == 'g'){
                                if (String(tempword).charAt(x+2) == 'e' || String(tempword).charAt(x+2) == 'y' || String(tempword).charAt(x+2) == 'i'){
                                    metaword += 'j';
                                    x += 2;
                                }else{
                                    metaword += 't';
                                }
                            }else{
                                metaword += 't';
                            }
                          }else{
                                metaword += 't';
                          }
                          break;
                case 'f': metaword += 'f'; break;
                case 'g': if (x < wordlength){
                            if ((String(tempword).charAt(x+1) == 'n' && x+1 == wordlength - 1) || (String(tempword).charAt(x+1) == 'n' && String(tempword).charAt(x+2) == 's' && x+2 == wordlength - 1)){break;}
                            if (String(tempword).charAt(x+1) == 'n' && String(tempword).charAt(x+2) == 'e' && String(tempword).charAt(x+3) == 'd' && x+3 == wordlength - 1){break;}
                            if (String(tempword).charAt(x-1) == 'n' && String(tempword).charAt(x-2) == 'i' && x == wordlength - 1){break;}
                            if (String(tempword).charAt(x+1) == 'h' && x+1 <= wordlength-1 && String(tempword).charAt(x-1) == 'u' && String(tempword).charAt(x-2) == 'o'){metaword += 'f';break;}
                            if (String(tempword).charAt(x+1) == 'h' && x+2 <= wordlength){if(isVowel(String(tempword).charAt(x+2)) === false){break; /*silent*/ }else{metaword += 'k';}}
                            else if (x+1 == wordlength){if(String(tempword).charAt(x+1) == 'n'){break;}else{metaword += 'k';}}
                            else if (x+3 == wordlength){if(String(tempword).charAt(x+1) == 'n' && String(tempword).charAt(x+2) == 'e' && String(tempword).charAt(x+3) == 'd'){}else{metaword += 'k';}}
                            else if (x+1 <= wordlength){if(String(tempword).charAt(x+1) == 'i' || String(tempword).charAt(x+1) == 'e' || String(tempword).charAt(x+1) == 'y'){
                                                    if (String(tempword).charAt(x-1) != 'g'){ metaword += 'j';}
                                                    }else if (x > 0){ if (String(tempword).charAt(x-1) == 'd'){
                                                        switch (String(tempword).charAt(x+1)){
                                                            case 'e':
                                                            case 'y':
                                                            case 'i': break;
                                                            default: metaword += 'k';
                                                        }
                                                        }else{metaword += 'k';}
                                                    }else{metaword += 'k';}
                            }else{
                                metaword += 'k';
                            }
                          }else{
                                metaword += 'k';
                          }
                          break;
                case 'm': metaword += 'm'; break;
                case 'j': metaword += 'j'; break;
                case 'n': metaword += 'n'; break;
                case 'q': metaword += 'k'; break;
                case 'r': metaword += 'r'; break;
                case 'l': metaword += 'l'; break;
                case 'v': metaword += 'f'; break;
                case 'z': metaword += 's'; break;
                case 'x': if (x === 0){metaword += 's';}else{metaword += 'ks';} break;
                case 'm': metaword += 'm'; break;
                case 'k': if (x > 0){ if (String(tempword).charAt(x-1) != 'c'){metaword += 'k';}}else{metaword += 'k';} break;
                case 'p': if (x+1 <= wordlength){if(String(tempword).charAt(x+1) == 'h'){metaword += 'f';}else{metaword +='p';}}else{metaword += 'p';} break;
                case 'y': if (x+1 <= wordlength){if(isVowel(String(tempword).charAt(x+1)) === true){metaword += 'y';}}else{metaword += 'y';} break;
                case 'h': if (x === 0 || 'csptg'.indexOf(String(tempword).charAt(x-1)) === -1) {
                            if (isVowel(String(tempword).charAt(x+1)) === true){metaword += 'h';}} break;
                case 's': if (x+1 <= wordlength){if(String(tempword).charAt(x+1) == 'h'){ metaword += 'x'; }
                            else if (x+2 <= wordlength){if(String(tempword).charAt(x+1) == 'i'){if(String(tempword).charAt(x+2) == 'o' || String(tempword).charAt(x+2) == 'a'){metaword += 'x';}else{metaword += 's';}
                            }else{metaword += 's';}}else{metaword += 's';}}else{metaword += 's';} break;
                case 't': if (x+1 <= wordlength){if(String(tempword).charAt(x+1) == 'h'){ metaword += '0'; }
                            else if (x+2 <= wordlength){if(String(tempword).charAt(x+1) == 'i'){if(String(tempword).charAt(x+2) == 'o' || String(tempword).charAt(x+2) == 'a'){metaword += 'x';}else{metaword += 't';}
                            }else{metaword += 't';}}else{metaword += 't';}}else{metaword += 't';} break;
                case 'w': if (x+1 <= wordlength){if(isVowel(String(tempword).charAt(x+1)) === true){metaword += 'w';}} break;
            }
        }
    }

    phones = parseInt(phones, 10);
    if (metaword.length > phones) {
        return metaword.substr(0, phones).toUpperCase();
    }
    return metaword.toUpperCase();
};

exports.method_exists = function (obj, method) {
    // Checks if the class method exists
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/method_exists
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.function class_a() {this.meth1 = function () {return true;}};
    // *     example 1: \php.var instance_a = new class_a();
    // *     example 1: \php.method_exists(instance_a, 'meth1');
    // *     returns 1: true
    // *     example 2: \php.function class_a() {this.meth1 = function () {return true;}};
    // *     example 2: \php.var instance_a = new class_a();
    // *     example 2: \php.method_exists(instance_a, 'meth2');
    // *     returns 2: false
    if (typeof obj === 'string') {
        return this.window[obj] && typeof this.window[obj][method] === 'function';
    }

    return typeof obj[method] === 'function';
};

exports.microtime = get_as_float => {
    // Returns either a string or a float containing the current time in seconds and microseconds
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/microtime
    // +   original by: Paulo Freitas
    // *     example 1: \php.timeStamp = microtime(true);
    // *     results 1: timeStamp > 1000000000 && timeStamp < 2000000000
    var now = new Date().getTime() / 1000;
    var s = parseInt(now, 10);

    return (get_as_float) ? now : (Math.round((now - s) * 1000) / 1000) + ' ' + s;
};

exports.min = function(...args) {
    // Return the lowest value in an array or a series of arguments
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/min
    // +   original by: Onno Marsman
    // +    revised by: Onno Marsman
    // +    tweaked by: Jack
    // %          note: Long code cause we're aiming for maximum PHP compatibility
    // *     example 1: \php.min(1, 3, 5, 6, 7);
    // *     returns 1: 1
    // *     example 2: \php.min([2, 4, 5]);
    // *     returns 2: 2
    // *     example 3: \php.min(0, 'hello');
    // *     returns 3: 0
    // *     example 4: \php.min('hello', 0);
    // *     returns 4: 'hello'
    // *     example 5: \php.min(-1, 'hello');
    // *     returns 5: -1
    // *     example 6: \php.min([2, 4, 8], [2, 5, 7]);
    // *     returns 6: [2, 4, 8]

    var ar;

    var retVal;
    var i = 0;
    var n = 0;
    var argv = args;
    var argc = argv.length;

    var _obj2Array = obj => {
        if (obj instanceof Array) {
            return obj;
        } else {
            var ar = [];
            for (var i in obj) {
                ar.push(obj[i]);
            }
            return ar;
        }
    }; //function _obj2Array

    var _compare = (current, next) => {
        var i = 0;
        var n = 0;
        var tmp = 0;
        var nl = 0;
        var cl = 0;

        if (current === next) {
            return 0;
        } else if (typeof current == 'object') {
            if (typeof next == 'object') {
               current = _obj2Array(current);
               next    = _obj2Array(next);
               cl      = current.length;
               nl      = next.length;
               if (nl > cl) {
                   return 1;
               } else if (nl < cl) {
                   return -1;
               } else {
                   for (i = 0, n = cl; i<n; ++i) {
                       tmp = _compare(current[i], next[i]);
                       if (tmp == 1) {
                           return 1;
                       } else if (tmp == -1) {
                           return -1;
                       }
                   }
                   return 0;
               }
            } else {
               return -1;
            }
        } else if (typeof next == 'object') {
            return 1;
        } else if (isNaN(next) && !isNaN(current)) {
            if (current == 0) {
               return 0;
            } else {
               return (current<0 ? 1 : -1);
            }
        } else if (isNaN(current) && !isNaN(next)) {
            if (next==0) {
               return 0;
            } else {
               return (next>0 ? 1 : -1);
            }
        } else {
            if (next==current) {
               return 0;
            } else {
               return (next>current ? 1 : -1);
            }
        }
    }; //function _compare

    if (argc === 0) {
        throw new Error('At least one value should be passed to min()');
    } else if (argc === 1) {
        if (typeof argv[0] === 'object') {
            ar = _obj2Array(argv[0]);
        } else {
            throw new Error('Wrong parameter count for min()');
        }
        if (ar.length === 0) {
            throw new Error('Array must contain at least one element for min()');
        }
    } else {
        ar = argv;
    }

    retVal = ar[0];
    for (i=1, n=ar.length; i<n; ++i) {
        if (_compare(retVal, ar[i])==-1) {
            retVal = ar[i];
        }
    }

    return retVal;
};

exports.mktime = function(...args) {
    // Get UNIX timestamp for a date
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/mktime
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: baris ozdil
    // +      input by: gabriel paderni
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: FGFEmperor
    // +      input by: Yannoo
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: jakes
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Marc Palau
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +      input by: 3D-GRAF
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Chris
    // +    revised by: Theriault
    // %        note 1: The return values of the following examples are
    // %        note 1: received only if your system's timezone is UTC.
    // *     example 1: \php.mktime(14, 10, 2, 2, 1, 2008);
    // *     returns 1: 1201875002
    // *     example 2: \php.mktime(0, 0, 0, 0, 1, 2008);
    // *     returns 2: 1196467200
    // *     example 3: \php.make = mktime();
    // *     example 3: \php.td = new Date();
    // *     example 3: \php.real = Math.floor(td.getTime() / 1000);
    // *     example 3: \php.diff = (real - make);
    // *     results 3: diff < 5
    // *     example 4: \php.mktime(0, 0, 0, 13, 1, 1997)
    // *     returns 4: 883612800
    // *     example 5: \php.mktime(0, 0, 0, 1, 1, 1998)
    // *     returns 5: 883612800
    // *     example 6: \php.mktime(0, 0, 0, 1, 1, 98)
    // *     returns 6: 883612800
    // *     example 7: \php.mktime(23, 59, 59, 13, 0, 2010)
    // *     returns 7: 1293839999
    // *     example 8: \php.mktime(0, 0, -1, 1, 1, 1970)
    // *     returns 8: -1
    var d = new Date();

    var r = args;
    var i = 0;
    var e = ['Hours', 'Minutes', 'Seconds', 'Month', 'Date', 'FullYear'];

    for (i = 0; i < e.length; i++) {
        if (typeof r[i] === 'undefined') {
            r[i] = d['get' + e[i]]();
            r[i] += (i === 3); // +1 to fix JS months.
        } else {
            r[i] = parseInt(r[i], 10);
            if (isNaN(r[i])) {
                return false;
            }
        }
    }

    // Map years 0-69 to 2000-2069 and years 70-100 to 1970-2000.
    r[5] += (r[5] >= 0 ? (r[5] <= 69 ? 2e3 : (r[5] <= 100 ? 1900 : 0)) : 0);

    // Set year, month (-1 to fix JS months), and date.
    // !This must come before the call to setHours!
    d.setFullYear(r[5], r[3] - 1, r[4]);

    // Set hours, minutes, and seconds.
    d.setHours(r[0], r[1], r[2]);

    // Divide milliseconds by 1000 to return seconds and drop decimal.
    // Add 1 second if negative or it'll be off from PHP by 1 second.
    return (d.getTime() / 1e3 >> 0) - (d.getTime() < 0);
};

exports.money_format = function (format, number) {
    // Convert monetary value(s) to string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/money_format
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   input by: daniel airton wermann (http://wermann.com.br)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: setlocale
    // %          note 1: This depends on setlocale having the appropriate locale (these examples use 'en_US')
    // *     example 1: \php.money_format('%i', 1234.56);
    // *     returns 1: 'USD 1,234.56'
    // *     example 2: \php.money_format('%14#8.2n', 1234.5678);
    // *     returns 2: ' $     1,234.57'
    // *     example 3: \php.money_format('%14#8.2n', -1234.5678);
    // *     returns 3: '-$     1,234.57'
    // *     example 4: \php.money_format('%(14#8.2n', 1234.5678);
    // *     returns 4: ' $     1,234.57 '
    // *     example 5: \php.money_format('%(14#8.2n', -1234.5678);
    // *     returns 5: '($     1,234.57)'
    // *     example 6: \php.money_format('%=014#8.2n', 1234.5678);
    // *     returns 6: ' $000001,234.57'
    // *     example 7: \php.money_format('%=014#8.2n', -1234.5678);
    // *     returns 7: '-$000001,234.57'
    // *     example 8: \php.money_format('%=*14#8.2n', 1234.5678);
    // *     returns 8: ' $*****1,234.57'
    // *     example 9: \php.money_format('%=*14#8.2n', -1234.5678);
    // *     returns 9: '-$*****1,234.57'
    // *     example 10: \php.money_format('%=*^14#8.2n', 1234.5678);
    // *     returns 10: '  $****1234.57'
    // *     example 11: \php.money_format('%=*^14#8.2n', -1234.5678);
    // *     returns 11: ' -$****1234.57'
    // *     example 12: \php.money_format('%=*!14#8.2n', 1234.5678);
    // *     returns 12: ' *****1,234.57'
    // *     example 13: \php.money_format('%=*!14#8.2n', -1234.5678);
    // *     returns 13: '-*****1,234.57'
    // *     example 14: \php.money_format('%i', 3590);
    // *     returns 14: ' USD 3,590.00'

    // Per PHP behavior, there seems to be no extra padding for sign when there is a positive number, though my
    // understanding of the description is that there should be padding; need to revisit examples

    // Helpful info at http://ftp.gnu.org/pub/pub/old-gnu/Manuals/glibc-2.2.3/html_chapter/libc_7.html and http://publib.boulder.ibm.com/infocenter/zos/v1r10/index.jsp?topic=/com.ibm.zos.r10.bpxbd00/strfmp.htm

    if (typeof number !== 'number') {
        return null;
    }
    var regex = /%((=.|[+^(!-])*?)(\d*?)(#(\d+))?(\.(\d+))?([in%])/g; // 1: flags, 3: width, 5: left, 7: right, 8: conversion

    this.setlocale('LC_ALL', 0); // Ensure the locale data we need is set up
    var monetary = this.php_js.locales[this.php_js.localeCategories['LC_MONETARY']]['LC_MONETARY'];

    var doReplace = (n0, flags, n2, width, n4, left, n6, right, conversion) => {
        var value='';
        var repl = '';
        if (conversion === '%') { // Percent does not seem to be allowed with intervening content
            return '%';
        }
        var fill = flags && (/=./).test(flags) ? flags.match(/=(.)/)[1] : ' '; // flag: =f (numeric fill)
        var showCurrSymbol = !flags || flags.indexOf('!') === -1; // flag: ! (suppress currency symbol)
        width = parseInt(width, 10) || 0; // field width: w (minimum field width)

        var neg = number < 0;
        number = number+''; // Convert to string
        number = neg ? number.slice(1) : number; // We don't want negative symbol represented here yet

        var decpos = number.indexOf('.');
        var integer = decpos !== -1 ? number.slice(0, decpos) : number; // Get integer portion
        var fraction = decpos !== -1 ? number.slice(decpos+1) : ''; // Get decimal portion

        var _str_splice = (integerStr, idx, thous_sep) => {
            var integerArr = integerStr.split('');
            integerArr.splice(idx, 0, thous_sep);
            return integerArr.join('');
        };

        var init_lgth = integer.length;
        left = parseInt(left, 10);
        var filler = init_lgth < left;
        if (filler) {
            var fillnum = left-init_lgth;
            integer = new Array(fillnum+1).join(fill)+integer;
        }
        if (flags.indexOf('^') === -1) { // flag: ^ (disable grouping characters (of locale))
            // use grouping characters
            var thous_sep = monetary.mon_thousands_sep; // ','
            var mon_grouping = monetary.mon_grouping; // [3] (every 3 digits in U.S.A. locale)

            if (mon_grouping[0] < integer.length) {
                for (var i = 0, idx = integer.length; i < mon_grouping.length; i++) {
                    idx -= mon_grouping[i]; // e.g., 3
                    if (idx < 0) {break;}
                    if (filler && idx < fillnum) {
                        thous_sep = fill;
                    }
                    integer = _str_splice(integer, idx, thous_sep);
                }
            }
            if (mon_grouping[i-1] > 0) { // Repeating last grouping (may only be one) until highest portion of integer reached
                while (idx > mon_grouping[i-1]) {
                    idx -= mon_grouping[i-1];
                    if (filler && idx < fillnum) {
                        thous_sep = fill;
                    }
                    integer = _str_splice(integer, idx, thous_sep);
                }
            }
        }

        // left, right
        if (right === '0') { // No decimal or fractional digits
            value = integer;
        }
        else {
            var dec_pt = monetary.mon_decimal_point; // '.'
            if (right === '' || right === undefined) {
                right = conversion === 'i' ? monetary.int_frac_digits : monetary.frac_digits;
            }
            right = parseInt(right, 10);

            if (right === 0) { // Only remove fractional portion if explicitly set to zero digits
                fraction = '';
                dec_pt = '';
            }
            else if (right < fraction.length) {
                fraction = Math.round(parseFloat(fraction.slice(0, right)+'.'+fraction.substr(right, 1), 10))+'';
            }
            else if (right > fraction.length) {
                fraction += new Array(right - fraction.length + 1).join('0'); // pad with 0's
            }
            value = integer+dec_pt+fraction;
        }

        var symbol = '';
        if (showCurrSymbol) {
            symbol = conversion === 'i' ? monetary.int_curr_symbol : monetary.currency_symbol; // 'i' vs. 'n' ('USD' vs. '$')
        }
        var sign_posn = neg ? monetary.n_sign_posn : monetary.p_sign_posn;

        // 0: no space between curr. symbol and value
        // 1: space sep. them unless symb. and sign are adjacent then space sep. them from value
        // 2: space sep. sign and value unless symb. and sign are adjacent then space separates
        var sep_by_space = neg ? monetary.n_sep_by_space : monetary.p_sep_by_space;

        // p_cs_precedes, n_cs_precedes // positive currency symbol follows value = 0; precedes value = 1
        var cs_precedes = neg ? monetary.n_cs_precedes : monetary.p_cs_precedes;

        // Assemble symbol/value/sign and possible space as appropriate
        if (flags.indexOf('(') !== -1) { // flag: parenth. for negative
            // Fix: unclear on whether and how sep_by_space, sign_posn, or cs_precedes have
            // an impact here (as they do below), but assuming for now behaves as sign_posn 0 as
            // far as localized sep_by_space and sign_posn behavior
            repl = (cs_precedes ?
                                symbol + (sep_by_space === 1 ? ' ' : ''):
                                ''
                        ) +
                        value +
                        (!cs_precedes ?
                                (sep_by_space === 1 ? ' ' : '') + symbol:
                                ''
                        );
            if (neg) {
                repl = '(' + repl + ')';
            }
            else {
                repl = ' ' + repl + ' ';
            }
        }
        else { // '+' is default
            var pos_sign = monetary.positive_sign; // ''
            var neg_sign = monetary.negative_sign; // '-'
            var sign = neg ? (neg_sign) : (pos_sign);
            var otherSign = neg ? (pos_sign) : (neg_sign);
            var signPadding = '';
            if (sign_posn) { // has a sign
                signPadding = new Array(otherSign.length - sign.length + 1).join(' ');
            }

            var valueAndCS = '';
            switch(sign_posn) {
                // 0: parentheses surround value and curr. symbol;
                // 1: sign precedes them;
                // 2: sign follows them;
                // 3: sign immed. precedes curr. symbol; (but may be space between)
                // 4: sign immed. succeeds curr. symbol; (but may be space between)
                case 0:
                    valueAndCS = cs_precedes ?
                                    symbol + (sep_by_space === 1 ? ' ' : '') + value :
                                    value + (sep_by_space === 1 ? ' ' : '') + symbol;
                    repl = '('+valueAndCS+')';
                    break;
                case 1:
                    valueAndCS = cs_precedes ? 
                                    symbol+(sep_by_space === 1 ? ' ' : '')+value :
                                    value+(sep_by_space === 1 ? ' ' : '')+symbol;
                    repl = signPadding+sign+(sep_by_space === 2 ? ' ' : '')+valueAndCS;
                    break;
                case 2:
                    valueAndCS = cs_precedes ?
                                    symbol+(sep_by_space === 1 ? ' ' : '')+value :
                                    value+(sep_by_space === 1 ? ' ' : '')+symbol;
                    repl = valueAndCS+(sep_by_space === 2 ? ' ' : '')+sign+signPadding;
                    break;
                case 3:
                    repl = cs_precedes ? 
                                    signPadding+sign+(sep_by_space === 2 ? ' ' : '')+symbol+(sep_by_space === 1 ? ' ' : '')+value :
                                    value+(sep_by_space === 1 ? ' ' : '')+sign+signPadding+(sep_by_space === 2 ? ' ' : '')+symbol;
                    break;
                case 4:
                    repl = cs_precedes ?
                                    symbol+(sep_by_space === 2 ? ' ' : '')+signPadding+sign+(sep_by_space === 1 ? ' ' : '')+value :
                                    value+(sep_by_space === 1 ? ' ' : '')+symbol+(sep_by_space === 2 ? ' ' : '')+sign+signPadding;
                    break;
            }
        }

        var padding = width-repl.length;
        if (padding > 0) {
            padding = new Array(padding+1).join(' ');
            // Fix: How does p_sep_by_space affect the count if there is a space? Included in count presumably?
            if (flags.indexOf('-') !== -1) { // left-justified (pad to right)
                repl += padding;
            }
            else { // right-justified (pad to left)
                repl = padding + repl;
            }
        }
        return repl;
    };

    return format.replace(regex, doReplace);
};

exports.mt_getrandmax = () => // Returns the maximum value a random number from Mersenne Twister can have
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/mt_getrandmax
// +   original by: Onno Marsman
// *     example 1: \php.mt_getrandmax();
// *     returns 1: 2147483647
2147483647;

exports.mt_rand = function (min, max) {
    // Returns a random number from Mersenne Twister
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/mt_rand
    // +   original by: Onno Marsman
    // *     example 1: \php.mt_rand(1, 1);
    // *     returns 1: 1
    var argc = arguments.length;
    if (argc === 0) {
        min = 0;
        max = 2147483647;
    } else if (argc === 1) {
        throw new Error('Warning: mt_rand() expects exactly 2 parameters, 1 given');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

exports.natcasesort = function (inputArr) {
    // Sort an array using case-insensitive natural sort
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/natcasesort
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: This function deviates from PHP in returning a copy of the array instead
    // %        note 1: of acting by reference and returning true; this was necessary because
    // %        note 1: IE does not allow deleting and re-adding of properties without caching
    // %        note 1: of property position; you can set the ini of "phpjs.strictForIn" to true to
    // %        note 1: get the PHP behavior, but use this only if you are in an environment
    // %        note 1: such as Firefox extensions where for-in iteration order is fixed and true
    // %        note 1: property deletion is supported. Note that we intend to implement the PHP
    // %        note 1: behavior by default if IE ever does allow it; only gives shallow copy since
    // %        note 1: is by reference in PHP anyways
    // %        note 2: We cannot use numbers as keys and have them be reordered since they
    // %        note 2: adhere to numerical order in some implementations
    // -    depends on: strnatcasecmp
    // *     example 1: $array1 = {a:'IMG0.png', b:'img12.png', c:'img10.png', d:'img2.png', e:'img1.png', f:'IMG3.png'};
    // *     example 1: $array1 = natcasesort($array1);
    // *     returns 1: {a: 'IMG0.png', e: 'img1.png', d: 'img2.png', f: 'IMG3.png', c: 'img10.png', b: 'img12.png'}
    var valArr=[];

    var keyArr=[];
    var k;
    var i;
    var ret;
    var that = this;
    var strictForIn = false;
    var populateArr = {};

    var bubbleSort = (keyArr, inputArr) => {
        var i;
        var j;
        var tempValue;
        var tempKeyVal;
        for (i = inputArr.length-2; i >= 0; i--) {
            for (j = 0; j <= i; j++) {
                ret = that.strnatcasecmp(inputArr[j+1], inputArr[j]);
                if (ret < 0) {
                    tempValue = inputArr[j];
                    inputArr[j] = inputArr[j+1];
                    inputArr[j+1] = tempValue;
                    tempKeyVal = keyArr[j];
                    keyArr[j] = keyArr[j+1];
                    keyArr[j+1] = tempKeyVal;
                }
            }
        }
    };

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    // END REDUNDANT

    strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value &&
                    this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;

    // Get key and value arrays
    for (k in inputArr) {
        if (inputArr.hasOwnProperty(k)) {
            valArr.push(inputArr[k]);
            keyArr.push(k);
            if (strictForIn) {
                delete inputArr[k];
            }
        }
    }

    try {
        // Sort our new temporary arrays
        bubbleSort(keyArr, valArr);
    } catch (e) {
        return false;
    }

    // Repopulate the old array
    for (i = 0; i < valArr.length; i++) {
        populateArr[keyArr[i]] = valArr[i];
    }

    return strictForIn || populateArr;
};

exports.natsort = function (inputArr) {
    // Sort an array using natural sort
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/natsort
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: This function deviates from PHP in returning a copy of the array instead
    // %        note 1: of acting by reference and returning true; this was necessary because
    // %        note 1: IE does not allow deleting and re-adding of properties without caching
    // %        note 1: of property position; you can set the ini of "phpjs.strictForIn" to true to
    // %        note 1: get the PHP behavior, but use this only if you are in an environment
    // %        note 1: such as Firefox extensions where for-in iteration order is fixed and true
    // %        note 1: property deletion is supported. Note that we intend to implement the PHP
    // %        note 1: behavior by default if IE ever does allow it; only gives shallow copy since
    // %        note 1: is by reference in PHP anyways
    // -    depends on: strnatcmp
    // *     example 1: $array1 = {a:"img12.png", b:"img10.png", c:"img2.png", d:"img1.png"};
    // *     example 1: $array1 = natsort($array1);
    // *     returns 1: {d: 'img1.png', c: 'img2.png', b: 'img10.png', a: 'img12.png'}
    var valArr=[];

    var keyArr=[];
    var k;
    var i;
    var ret;
    var that = this;
    var strictForIn = false;
    var populateArr = {};

    var bubbleSort = (keyArr, inputArr) => {
        var i;
        var j;
        var tempValue;
        var tempKeyVal;
        for (i = inputArr.length-2; i >= 0; i--) {
            for (j = 0; j <= i; j++) {
                ret = that.strnatcmp(inputArr[j+1], inputArr[j]);
                if (ret < 0) {
                    tempValue = inputArr[j];
                    inputArr[j] = inputArr[j+1];
                    inputArr[j+1] = tempValue;
                    tempKeyVal = keyArr[j];
                    keyArr[j] = keyArr[j+1];
                    keyArr[j+1] = tempKeyVal;
                }
            }
        }
    };

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    // END REDUNDANT

    strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value &&
                    this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;

    // Get key and value arrays
    for (k in inputArr) {
        if (inputArr.hasOwnProperty(k)) {
            valArr.push(inputArr[k]);
            keyArr.push(k);
            if (strictForIn) {
                delete inputArr[k];
            }
        }
    }
    try {
        // Sort our new temporary arrays
        bubbleSort(keyArr, valArr);
    } catch (e) {
        return false;
    }

    // Repopulate the old array
    for (i = 0; i < valArr.length; i++) {
        populateArr[keyArr[i]] = valArr[i];
    }

    return strictForIn || populateArr;
};

exports.next = function (arr) {
    // Move array argument's internal pointer to the next element and return it
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/next
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Uses global: php_js to store the array pointer
    // *     example 1: \php.transport = ['foot', 'bike', 'car', 'plane'];
    // *     example 1: \php.next(transport);
    // *     example 1: \php.next(transport);
    // *     returns 1: 'car'
    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.pointers = this.php_js.pointers || [];
    var indexOf = function (value) {
        for (var i = 0, length=this.length; i < length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    };
    // END REDUNDANT
    var pointers = this.php_js.pointers;
    if (!pointers.indexOf) {
        pointers.indexOf = indexOf;
    }
    if (pointers.indexOf(arr) === -1) {
        pointers.push(arr, 0);
    }
    var arrpos = pointers.indexOf(arr);
    var cursor = pointers[arrpos+1];
    if (!(arr instanceof Array)) {
        var ct = 0;
        for (var k in arr) {
            if (ct === cursor+1) {
                pointers[arrpos+1] += 1;
                return arr[k];
            }
            ct++;
        }
        return false; // End
    }
    if (arr.length === 0 || cursor === (arr.length-1)) {
        return false;
    }
    pointers[arrpos+1] += 1;
    return arr[pointers[arrpos+1]];
};

exports.nl2br = (str, is_xhtml) => {
    // Converts newlines to HTML line breaks
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/nl2br
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Philip Peterson
    // +   improved by: Onno Marsman
    // +   improved by: Atli Þór
    // +   bugfixed by: Onno Marsman
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Maximusya
    // *     example 1: \php.nl2br('Kevin\nvan\nZonneveld');
    // *     returns 1: 'Kevin<br />\nvan<br />\nZonneveld'
    // *     example 2: \php.nl2br("\nOne\nTwo\n\nThree\n", false);
    // *     returns 2: '<br>\nOne<br>\nTwo<br>\n<br>\nThree<br>\n'
    // *     example 3: \php.nl2br("\nOne\nTwo\n\nThree\n", true);
    // *     returns 3: '<br />\nOne<br />\nTwo<br />\n<br />\nThree<br />\n'
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';

    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
};

exports.nl_langinfo = function (item) {
    // Query language and locale information
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/nl_langinfo
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: setlocale
    // *     example 1: \php.nl_langinfo('DAY_1');
    // *     returns 1: 'Sunday'
    this.setlocale('LC_ALL', 0); // Ensure locale data is available

    var loc = this.php_js.locales[this.php_js.localeCategories.LC_TIME];
    if (item.indexOf('ABDAY_') === 0) {
        return loc.LC_TIME.a[parseInt(item.replace(/^ABDAY_/, ''), 10)-1];
    }
    else if (item.indexOf('DAY_') === 0) {
        return loc.LC_TIME.A[parseInt(item.replace(/^DAY_/, ''), 10)-1];
    }
    else if (item.indexOf('ABMON_') === 0) {
        return loc.LC_TIME.b[parseInt(item.replace(/^ABMON_/, ''), 10)-1];
    }
    else if (item.indexOf('MON_') === 0) {
        return loc.LC_TIME.B[parseInt(item.replace(/^MON_/, ''), 10)-1];
    }
    else {
        switch (item) {
            // More LC_TIME
            case 'AM_STR':
                return loc.LC_TIME.p[0];
            case 'PM_STR':
                return loc.LC_TIME.p[1];
            case 'D_T_FMT':
                return loc.LC_TIME.c;
            case 'D_FMT':
                return loc.LC_TIME.x;
            case 'T_FMT':
                return loc.LC_TIME.X;
            case 'T_FMT_AMPM':
                return loc.LC_TIME.r;
            case 'ERA': // all fall-throughs
            case 'ERA_YEAR':
            case 'ERA_D_T_FMT':
            case 'ERA_D_FMT':
            case 'ERA_T_FMT':
                return loc.LC_TIME[item];
        }
        loc = this.php_js.locales[this.php_js.localeCategories.LC_MONETARY];
        if (item === 'CRNCYSTR') {
            item = 'CURRENCY_SYMBOL'; // alias
        }
        switch (item) {
            case 'INT_CURR_SYMBOL': // all fall-throughs
            case 'CURRENCY_SYMBOL':
            case 'MON_DECIMAL_POINT':
            case 'MON_THOUSANDS_SEP':
            case 'POSITIVE_SIGN':
            case 'NEGATIVE_SIGN':
            case 'INT_FRAC_DIGITS':
            case 'FRAC_DIGITS':
            case 'P_CS_PRECEDES':
            case 'P_SEP_BY_SPACE':
            case 'N_CS_PRECEDES':
            case 'N_SEP_BY_SPACE':
            case 'P_SIGN_POSN':
            case 'N_SIGN_POSN':
                return loc.LC_MONETARY[item.toLowerCase()];
            case 'MON_GROUPING': // Same as above, or return something different since this returns an array?
                return loc.LC_MONETARY[item.toLowerCase()];
        }
        loc = this.php_js.locales[this.php_js.localeCategories.LC_NUMERIC];
        switch (item) {
            case 'RADIXCHAR': // Fall-through
            case 'DECIMAL_POINT':
                return loc.LC_NUMERIC[item.toLowerCase()];
            case 'THOUSEP': // Fall-through
            case 'THOUSANDS_SEP':
                return loc.LC_NUMERIC[item.toLowerCase()];
            case 'GROUPING': // Same as above, or return something different since this returns an array?
                return loc.LC_NUMERIC[item.toLowerCase()];
        }
        loc = this.php_js.locales[this.php_js.localeCategories.LC_MESSAGES];
        switch (item) {
            case 'YESEXPR': // all fall-throughs
            case 'NOEXPR':
            case 'YESSTR':
            case 'NOSTR':
                return loc.LC_MESSAGES[item];
        }
        loc = this.php_js.locales[this.php_js.localeCategories.LC_CTYPE];
        if (item === 'CODESET') {
            return loc.LC_CTYPE[item];
        }
        return false;
    }
};

exports.number_format = (number, decimals, dec_point, thousands_sep) => {
    // Formats a number with grouped thousands
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/number_format
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     bugfix by: Michael White (http://getsprink.com)
    // +     bugfix by: Benjamin Lupton
    // +     bugfix by: Allan Jensen (http://www.winternet.no)
    // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +     bugfix by: Howard Yeend
    // +    revised by: Luke Smith (http://lucassmith.name)
    // +     bugfix by: Diogo Resende
    // +     bugfix by: Rival
    // +      input by: Kheang Hok Chin (http://www.distantia.ca/)
    // +   improved by: davook
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Jay Klehr
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Amir Habibi (http://www.residence-mixte.com/)
    // +     bugfix by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Theriault
    // *     example 1: \php.number_format(1234.56);
    // *     returns 1: '1,235'
    // *     example 2: \php.number_format(1234.56, 2, ',', ' ');
    // *     returns 2: '1 234,56'
    // *     example 3: \php.number_format(1234.5678, 2, '.', '');
    // *     returns 3: '1234.57'
    // *     example 4: \php.number_format(67, 2, ',', '.');
    // *     returns 4: '67,00'
    // *     example 5: \php.number_format(1000);
    // *     returns 5: '1,000'
    // *     example 6: \php.number_format(67.311, 2);
    // *     returns 6: '67.31'
    // *     example 7: \php.number_format(1000.55, 1);
    // *     returns 7: '1,000.6'
    // *     example 8: \php.number_format(67000, 5, ',', '.');
    // *     returns 8: '67.000,00000'
    // *     example 9: \php.number_format(0.9, 0);
    // *     returns 9: '1'
    // *    example 10: \php.number_format('1.20', 2);
    // *    returns 10: '1.20'
    // *    example 11: \php.number_format('1.20', 4);
    // *    returns 11: '1.2000'
    // *    example 12: \php.number_format('1.2000', 3);
    // *    returns 12: '1.200'
    var n = !isFinite(+number) ? 0 : +number;

    var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    var sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep;
    var dec = (typeof dec_point === 'undefined') ? '.' : dec_point;
    var s = '';

    var toFixedFix = (n, prec) => {
        var k = 10 ** prec;
        return '' + Math.round(n * k) / k;
    };

    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
};

exports.octdec = oct_string => {
    // Returns the decimal equivalent of an octal string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/octdec
    // +   original by: Philippe Baumann
    // *     example 1: \php.octdec('77');
    // *     returns 1: 63
    oct_string = (oct_string+'').replace(/[^0-7]/gi, '');
    return parseInt(oct_string, 8);
};

exports.ord = string => {
    // Returns the codepoint value of a character
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/ord
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.ord('K');
    // *     returns 1: 75
    // *     example 2: \php.ord('\uD800\uDC00'); // surrogate pair to create a single Unicode character
    // *     returns 2: 65536
    var str = string + '';

    var code = str.charCodeAt(0);
    if (0xD800 <= code && code <= 0xDBFF) { // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
        var hi = code;
        if (str.length === 1) {
            return code; // This is just a high surrogate with no following low surrogate, so we return its value;
                                    // we could also throw an error as it is not a complete character, but someone may want to know
        }
        var low = str.charCodeAt(1);
        if (!low) {

        }
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
        return code; // This is just a low surrogate with no preceding high surrogate, so we return its value;
                                // we could also throw an error as it is not a complete character, but someone may want to know
    }
    return code;
};

exports.pack = function(format) {
    // Takes one or more arguments and packs them into a binary string according to the format argument
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/pack
    // +   original by: Tim de Koning (http://www.kingsquare.nl)
    // +      parts by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   bugfixed by: Tim de Koning (http://www.kingsquare.nl)
    // %        note 1: Float encoding by: Jonas Raoni Soares Silva
    // %        note 2: Home: http://www.kingsquare.nl/blog/12-12-2009/13507444
    // %        note 3: Feedback: phpjs-pack@kingsquare.nl
    // %        note 4: 'machine dependent byte order and size' aren't
    // %        note 4: applicable for JavaScript; pack works as on a 32bit,
    // %        note 4: little endian machine
    // *     example 1: \php.pack('nvc*', 0x1234, 0x5678, 65, 66);
    // *     returns 1: '4xVAB'
    var formatPointer = 0;

    var argumentPointer = 1;
    var result = '';
    var argument = '';
    var i = 0;
    var r = [];
    var instruction;
    var quantifier;
    var word;
    var precisionBits;
    var exponentBits;
    var extraNullCount;

    // vars used by float encoding
    var bias;

    var minExp;
    var maxExp;
    var minUnnormExp;
    var status;
    var exp;
    var len;
    var bin;
    var signal;
    var n;
    var intPart;
    var floatPart;
    var lastBit;
    var rounded;
    var j;
    var k;
    var tmpResult;

    while (formatPointer < format.length) {
        instruction = format[formatPointer];
        quantifier = '';
        formatPointer++;
        while ((formatPointer < format.length) &&
              (format[formatPointer].match(/[\d\*]/) !== null)) {
            quantifier += format[formatPointer];
            formatPointer++;
        }
        if (quantifier === '') {
            quantifier = '1';
        }

        // Now pack variables: 'quantifier' times 'instruction'
        switch (instruction) {
        case 'a': // NUL-padded string
        case 'A': // SPACE-padded string

            if (typeof arguments[argumentPointer] === 'undefined') {
                throw new Error('Warning:  pack() Type ' + instruction +
                       ': not enough arguments');
            } else {
                argument = String(arguments[argumentPointer]);
            }
            if (quantifier === '*') {
                quantifier = argument.length;
            }
            for (i = 0; i < quantifier; i ++) {
                if (typeof argument[i] === 'undefined') {
                    if (instruction === 'a') {
                        result += String.fromCharCode(0);
                    } else {
                        result += ' ';
                    }
                } else {
                    result += argument[i];
                }
            }
            argumentPointer++;
            break;
        case 'h': // Hex string, low nibble first
        case 'H': // Hex string, high nibble first
            if (typeof arguments[argumentPointer] === 'undefined') {
                throw new Error('Warning: pack() Type ' + instruction +
                        ': not enough arguments');
            } else {
                argument = arguments[argumentPointer];
            }
            if (quantifier === '*') {
                quantifier = argument.length;
            }
            if (quantifier > argument.length) {
                throw new Error('Warning: pack() Type ' + instruction +
                        ': not enough characters in string');
            }
            for (i = 0; i < quantifier; i += 2) {
                // Always get per 2 bytes...
                word = argument[i];
                if (((i + 1) >= quantifier) ||
                        typeof(argument[i + 1]) === 'undefined') {
                    word += '0';
                } else {
                    word += argument[i + 1];
                }
                // The fastest way to reverse?
                if (instruction === 'h') {
                    word = word[1] + word[0];
                }
                result += String.fromCharCode(parseInt(word, 16));
            }
            argumentPointer++;
            break;

        case 'c': // signed char
        case 'C': // unsigned char
            // c and C is the same in pack
            if (quantifier === '*') {
                quantifier = arguments.length - argumentPointer;
            }
            if (quantifier > (arguments.length - argumentPointer)) {
                throw new Error('Warning:  pack() Type ' + instruction +
                        ': too few arguments');
            }

            for (i = 0; i < quantifier; i++) {
                result += String.fromCharCode(arguments[argumentPointer]);
                argumentPointer++;
            }
            break;

        case 's': // signed short (always 16 bit, machine byte order)
        case 'S': // unsigned short (always 16 bit, machine byte order)
        case 'v':
            // s and S is the same in pack
            if (quantifier === '*') {
                quantifier = arguments.length - argumentPointer;
            }
            if (quantifier > (arguments.length - argumentPointer)) {
                throw new Error('Warning:  pack() Type ' + instruction +
                        ': too few arguments');
            }

            for (i = 0; i < quantifier; i++) {
                result += String.fromCharCode(arguments[argumentPointer] &
                        0xFF);
                result += String.fromCharCode(arguments[argumentPointer] >>
                        8 & 0xFF);
                argumentPointer++;
            }
            break;

        case 'n': // unsigned short (always 16 bit, big endian byte order)
            if (quantifier === '*') {
                quantifier = arguments.length - argumentPointer;
            }
            if (quantifier > (arguments.length - argumentPointer)) {
                throw new Error('Warning:  pack() Type ' + instruction +
                        ': too few arguments');
            }

            for (i = 0; i < quantifier; i++) {
                result += String.fromCharCode(arguments[argumentPointer] >>
                        8 & 0xFF);
                result += String.fromCharCode(arguments[argumentPointer] &
                        0xFF);
                argumentPointer++;
            }
            break;

        case 'i': // signed integer (machine dependent size and byte order)
        case 'I': // unsigned integer (machine dependent size and byte order)
        case 'l': // signed long (always 32 bit, machine byte order)
        case 'L': // unsigned long (always 32 bit, machine byte order)
        case 'V': // unsigned long (always 32 bit, little endian byte order)
            if (quantifier === '*') {
                quantifier = arguments.length - argumentPointer;
            }
            if (quantifier > (arguments.length - argumentPointer)) {
                throw new Error('Warning:  pack() Type ' + instruction +
                        ': too few arguments');
            }

            for (i = 0; i < quantifier; i++) {
                result += String.fromCharCode(arguments[argumentPointer] &
                        0xFF);
                result += String.fromCharCode(arguments[argumentPointer] >>
                        8 & 0xFF);
                result += String.fromCharCode(arguments[argumentPointer] >>
                        16 & 0xFF);
                result += String.fromCharCode(arguments[argumentPointer] >>
                        24 & 0xFF);
                argumentPointer++;
            }

            break;
        case 'N': // unsigned long (always 32 bit, big endian byte order)
            if (quantifier === '*') {
                quantifier = arguments.length - argumentPointer;
            }
            if (quantifier > (arguments.length - argumentPointer)) {
                throw new Error('Warning:  pack() Type ' + instruction +
                        ': too few arguments');
            }

            for (i = 0; i < quantifier; i++) {
                result += String.fromCharCode(arguments[argumentPointer] >>
                        24 & 0xFF);
                result += String.fromCharCode(arguments[argumentPointer] >>
                        16 & 0xFF);
                result += String.fromCharCode(arguments[argumentPointer] >>
                        8 & 0xFF);
                result += String.fromCharCode(arguments[argumentPointer] &
                        0xFF);
                argumentPointer++;
            }
            break;

        case 'f': // float (machine dependent size and representation)
        case 'd': // double (machine dependent size and representation)
            // version based on IEEE754

            precisionBits = 23;
            exponentBits = 8;
            if (instruction === 'd') {
                precisionBits = 52;
                exponentBits = 11;
            }

            if (quantifier === '*') {
                quantifier = arguments.length - argumentPointer;
            }
            if (quantifier > (arguments.length - argumentPointer)) {
                throw new Error('Warning:  pack() Type ' + instruction +
                        ': too few arguments');
            }
            for (i = 0; i < quantifier; i++) {
                argument = arguments[argumentPointer];
                bias = 2 ** (exponentBits - 1) - 1;
                minExp = -bias + 1;
                maxExp = bias;
                minUnnormExp = minExp - precisionBits;
                status = isNaN(n = parseFloat(argument)) ||
                        n === -Infinity ||
                        n === +Infinity ? n : 0;
                exp = 0;
                len = 2 * bias + 1 + precisionBits + 3;
                bin = new Array(len);
                signal = (n = status !== 0 ? 0 : n) < 0;
                n = Math.abs(n);
                intPart = Math.floor(n);
                floatPart = n - intPart;

                for (k = len; k;) {
                    bin[--k] = 0;
                }
                for (k = bias + 2; intPart && k;) {
                    bin[--k] = intPart % 2;
                    intPart = Math.floor(intPart / 2);
                }
                for (k = bias + 1; floatPart > 0 && k; --floatPart) {
                    (bin[++k] = ((floatPart *= 2) >= 1) - 0);
                }
                for (k = -1; ++k < len && !bin[k];) {}

                if (bin[(lastBit = precisionBits - 1 +
                        (k = (exp = bias + 1 - k) >= minExp &&
                        exp <= maxExp ?
                            k + 1 :
                            bias + 1 - (exp = minExp - 1))
                        ) + 1]) {
                    if (!(rounded = bin[lastBit])) {
                        for (j = lastBit + 2;
                                !rounded &&
                                j < len; rounded = bin[j++]) {}
                    }
                    for (j = lastBit + 1; rounded && --j >= 0;
                            (bin[j] = !bin[j] - 0) && (rounded = 0)) {}
                }

                for (k = k - 2 < 0 ? -1 : k - 3; ++k < len && !bin[k];) {}

                if ((exp = bias + 1 - k) >= minExp && exp <= maxExp) {
                    ++k;
                } else {
                    if (exp < minExp) {
                        if (exp !== bias + 1 - len && exp < minUnnormExp) {
                            /*"encodeFloat::float underflow" */
                        }
                        k = bias + 1 - (exp = minExp - 1);
                    }
                }

                if (intPart || status !== 0) {
                    exp = maxExp + 1;
                    k = bias + 2;
                    if (status === -Infinity) {
                        signal = 1;
                    } else if (isNaN(status)) {
                        bin[k] = 1;
                    }
                }

                n = Math.abs(exp + bias);
                tmpResult = '';

                for (j = exponentBits + 1; --j;) {
                    tmpResult = (n % 2) + tmpResult;
                    n = n >>= 1;
                }

                n = 0;
                j = 0;
                k = (tmpResult = (signal ? '1' : '0') + tmpResult +
                        bin.slice(k, k + precisionBits).join('')).length;
                r = [];

                for (; k;) {
                    n += (1 << j) * tmpResult.charAt(--k);
                    if (j === 7) {
                        r[r.length] = String.fromCharCode(n);
                        n = 0;
                    }
                    j = (j + 1) % 8;
                }

                r[r.length] = n ? String.fromCharCode(n) : '';
                result += r.join('');
                argumentPointer++;
            }
            break;

        case 'x': // NUL byte
            if (quantifier === '*') {
                throw new Error('Warning: pack(): Type x: \'*\' ignored');
            }
            for (i = 0; i < quantifier; i ++) {
                result += String.fromCharCode(0);
            }
            break;

        case 'X': // Back up one byte
            if (quantifier === '*') {
                throw new Error('Warning: pack(): Type X: \'*\' ignored');
            }
            for (i = 0; i < quantifier; i ++) {
                if (result.length === 0) {
                    throw new Error('Warning: pack(): Type X:' +
                            ' outside of string');
                } else {
                    result = result.substring(0, result.length - 1);
                }
            }
            break;

        case '@': // NUL-fill to absolute position
            if (quantifier === '*') {
                throw new Error('Warning: pack(): Type X: \'*\' ignored');
            }
            if (quantifier > result.length) {
                extraNullCount = quantifier - result.length;
                for (i = 0; i < extraNullCount; i ++) {
                    result += String.fromCharCode(0);
                }
            }
            if (quantifier < result.length) {
                result = result.substring(0, quantifier);
            }
            break;

        default:
            throw new Error('Warning:  pack() Type ' + instruction +
                    ': unknown format code');
        }
    }
    if (argumentPointer < arguments.length) {
        throw new Error('Warning: pack(): ' +
                (arguments.length - argumentPointer) + ' arguments unused');
    }

    return result;
};

exports.parse_str = function (str, array){
    // Parses GET/POST/COOKIE data and sets global variables
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/parse_str
    // +   original by: Cagri Ekin
    // +   improved by: Michael White (http://getsprink.com)
    // +    tweaked by: Jack
    // +   bugfixed by: Onno Marsman
    // +   reimplemented by: stag019
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: stag019
    // -    depends on: urldecode
    // +   input by: Dreamer
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: When no argument is specified, will put variables in global scope.
    // *     example 1: \php.var arr = {};
    // *     example 1: \php.parse_str('first=foo&second=bar', arr);
    // *     results 1: arr == { first: 'foo', second: 'bar' }
    // *     example 2: \php.var arr = {};
    // *     example 2: \php.parse_str('str_a=Jack+and+Jill+didn%27t+see+the+well.', arr);
    // *     results 2: arr == { str_a: "Jack and Jill didn't see the well." }
    var glue1 = '=';

    var glue2 = '&';
    var array2 = String(str).replace(/^&(.*)$/, '$1').replace(/^(.*)&$/, '$1').split(glue2);
    var i;
    var j;
    var chr;
    var tmp;
    var key;
    var value;
    var bracket;
    var keys;
    var evalStr;
    var that = this;
    var fixStr = str => that.urldecode(str).replace(/([\\"'])/g, '\\$1').replace(/\n/g, '\\n').replace(/\r/g, '\\r');

    if (!array) {
        array = this.window;
    }

    for (i = 0; i < array2.length; i++) {
        tmp = array2[i].split(glue1);
        if (tmp.length < 2) {
            tmp = [tmp, ''];
        }
        key   = fixStr(tmp[0]);
        value = fixStr(tmp[1]);
        while (key.charAt(0) === ' ') {
            key = key.substr(1);
        }
        if (key.indexOf('\0') !== -1) {
            key = key.substr(0, key.indexOf('\0'));
        }
        if (key && key.charAt(0) !== '[') {
            keys    = [];
            bracket = 0;
            for (j = 0; j < key.length; j++) {
                if (key.charAt(j) === '[' && !bracket) {
                    bracket = j + 1;
                }
                else if (key.charAt(j) === ']') {
                    if (bracket) {
                        if (!keys.length) {
                            keys.push(key.substr(0, bracket - 1));
                        }
                        keys.push(key.substr(bracket, j - bracket));
                        bracket = 0;
                        if (key.charAt(j + 1) !== '[') {
                            break;
                        }
                    }
                }
            }
            if (!keys.length) {
                keys = [key];
            }
            for (j = 0; j < keys[0].length; j++) {
                chr = keys[0].charAt(j);
                if (chr === ' ' || chr === '.' || chr === '[') {
                    keys[0] = keys[0].substr(0, j) + '_' + keys[0].substr(j + 1);
                }
                if (chr === '[') {
                    break;
                }
            }
            evalStr = 'array';
            for (j = 0; j < keys.length; j++) {
                key = keys[j];
                if ((key !== '' && key !== ' ') || j === 0) {
                    key = "'" + key + "'";
                }
                else {
                    key = eval(evalStr + '.push([]);') - 1;
                }
                evalStr += '[' + key + ']';
                if (j !== keys.length - 1 && eval('typeof ' + evalStr) === 'undefined') {
                    eval(evalStr + ' = [];');
                }
            }
            evalStr += " = '" + value + "';\n";
            eval(evalStr);
        }
    }
};

exports.parse_url = (str, component) => {
    // Parse a URL and return its components
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/parse_url
    // +      original by: Steven Levithan (http://blog.stevenlevithan.com)
    // + reimplemented by: Brett Zamir (http://brett-zamir.me)
    // %          note: Based on http://stevenlevithan.com/demo/parseuri/js/assets/parseuri.js
    // %          note: blog post at http://blog.stevenlevithan.com/archives/parseuri
    // %          note: demo at http://stevenlevithan.com/demo/parseuri/js/assets/parseuri.js
    // %          note: Does not replace invaild characters with '_' as in PHP, nor does it return false with
    // %          note: a seriously malformed URL.
    // %          note: Besides function name, is the same as parseUri besides the commented out portion
    // %          note: and the additional section following, as well as our allowing an extra slash after
    // %          note: the scheme/protocol (to allow file:/// as in PHP)
    // *     example 1: \php.parse_url('http://username:password@hostname/path?arg=value#anchor');
    // *     returns 1: {scheme: 'http', host: 'hostname', user: 'username', pass: 'password', path: '/path', query: 'arg=value', fragment: 'anchor'}
    var  o   = {
        strictMode: false,
        key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
        q:   {
            name:   "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ // Added one optional slash to post-protocol to catch file:/// (should restrict this)
        }
    };

    var m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str);
    var uri = {};
    var i   = 14;
    while (i--) {uri[o.key[i]] = m[i] || "";}
    // Uncomment the following to use the original more detailed (non-PHP) script
    /*
        uri[o.q.name] = {};
        uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
        if ($1) uri[o.q.name][$1] = $2;
        });
        return uri;
    */

    switch (component) {
        case 'PHP_URL_SCHEME':
            return uri.protocol;
        case 'PHP_URL_HOST':
            return uri.host;
        case 'PHP_URL_PORT':
            return uri.port;
        case 'PHP_URL_USER':
            return uri.user;
        case 'PHP_URL_PASS':
            return uri.password;
        case 'PHP_URL_PATH':
            return uri.path;
        case 'PHP_URL_QUERY':
            return uri.query;
        case 'PHP_URL_FRAGMENT':
            return uri.anchor;
        default:
            var retArr = {};
            if (uri.protocol !== '') {retArr.scheme=uri.protocol;}
            if (uri.host !== '') {retArr.host=uri.host;}
            if (uri.port !== '') {retArr.port=uri.port;}
            if (uri.user !== '') {retArr.user=uri.user;}
            if (uri.password !== '') {retArr.pass=uri.password;}
            if (uri.path !== '') {retArr.path=uri.path;}
            if (uri.query !== '') {retArr.query=uri.query;}
            if (uri.anchor !== '') {retArr.fragment=uri.anchor;}
            return retArr;
    }
};

exports.pathinfo = function (path, options) {
    // Returns information about a certain string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/pathinfo
    // +   original by: Nate
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    improved by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Inspired by actual PHP source: php5-5.2.6/ext/standard/string.c line #1559
    // %        note 1: The way the bitwise arguments are handled allows for greater flexibility
    // %        note 1: & compatability. We might even standardize this code and use a similar approach for
    // %        note 1: other bitwise PHP functions
    // %        note 2: php.js tries very hard to stay away from a core.js file with global dependencies, because we like
    // %        note 2: that you can just take a couple of functions and be on your way.
    // %        note 2: But by way we implemented this function, if you want you can still declare the PATHINFO_*
    // %        note 2: yourself, and then you can use: pathinfo('/www/index.html', PATHINFO_BASENAME | PATHINFO_EXTENSION);
    // %        note 2: which makes it fully compliant with PHP syntax.
    // -    depends on: dirname
    // -    depends on: basename
    // *     example 1: \php.pathinfo('/www/htdocs/index.html', 1);
    // *     returns 1: '/www/htdocs'
    // *     example 2: \php.pathinfo('/www/htdocs/index.html', 'PATHINFO_BASENAME');
    // *     returns 2: 'index.html'
    // *     example 3: \php.pathinfo('/www/htdocs/index.html', 'PATHINFO_EXTENSION');
    // *     returns 3: 'html'
    // *     example 4: \php.pathinfo('/www/htdocs/index.html', 'PATHINFO_FILENAME');
    // *     returns 4: 'index'
    // *     example 5: \php.pathinfo('/www/htdocs/index.html', 2 | 4);
    // *     returns 5: {basename: 'index.html', extension: 'html'}
    // *     example 6: \php.pathinfo('/www/htdocs/index.html', 'PATHINFO_ALL');
    // *     returns 6: {dirname: '/www/htdocs', basename: 'index.html', extension: 'html', filename: 'index'}
    // *     example 7: \php.pathinfo('/www/htdocs/index.html');
    // *     returns 7: {dirname: '/www/htdocs', basename: 'index.html', extension: 'html', filename: 'index'}
    // Working vars
    var opt = '';

    var optName = '';
    var optTemp = 0;
    var tmp_arr = {};
    var cnt = 0;
    var i=0;
    var have_basename = false;
    var have_extension = false;
    var have_filename = false;

    // Input defaulting & sanitation
    if (!path) {return false;}
    if (!options) {options = 'PATHINFO_ALL';}

    // Initialize binary arguments. Both the string & integer (constant) input is
    // allowed
    var OPTS = {
        'PATHINFO_DIRNAME': 1,
        'PATHINFO_BASENAME': 2,
        'PATHINFO_EXTENSION': 4,
        'PATHINFO_FILENAME': 8,
        'PATHINFO_ALL': 0
    };
    // PATHINFO_ALL sums up all previously defined PATHINFOs (could just pre-calculate)
    for (optName in OPTS) {
        OPTS.PATHINFO_ALL = OPTS.PATHINFO_ALL | OPTS[optName];
    }
    if (typeof options !== 'number') { // Allow for a single string or an array of string flags
        options = [].concat(options);
        for (i=0; i < options.length; i++) {
            // Resolve string input to bitwise e.g. 'PATHINFO_EXTENSION' becomes 4
            if (OPTS[options[i]]) {
                optTemp = optTemp | OPTS[options[i]];
            }
        }
        options = optTemp;
    }

    // Internal Functions
    var __getExt = path => {
        var str  = path+'';
        var dotP = str.lastIndexOf('.')+1;
        return str.substr(dotP);
    };


    // Gather path infos
    if (options & OPTS.PATHINFO_DIRNAME) {
        tmp_arr.dirname = this.dirname(path);
    }

    if (options & OPTS.PATHINFO_BASENAME) {
        if (false === have_basename) {
            have_basename = this.basename(path);
        }
        tmp_arr.basename = have_basename;
    }

    if (options & OPTS.PATHINFO_EXTENSION) {
        if (false === have_basename) {
            have_basename = this.basename(path);
        }
        if (false === have_extension) {
            have_extension = __getExt(have_basename);
        }
        tmp_arr.extension = have_extension;
    }

    if (options & OPTS.PATHINFO_FILENAME) {
        if (false === have_basename) {
            have_basename = this.basename(path);
        }
        if (false === have_extension) {
            have_extension = __getExt(have_basename);
        }
        if (false === have_filename) {
            have_filename  = have_basename.substr(0, (have_basename.length - have_extension.length)-1);
        }

        tmp_arr.filename = have_filename;
    }


    // If array contains only 1 element: return string
    cnt = 0;
    for (opt in tmp_arr){
        cnt++;
    }
    if (cnt == 1) {
        return tmp_arr[opt];
    }

    // Return full-blown array
    return tmp_arr;
};

exports.pclose = function (handle) {
    // Close a file pointer opened by popen()
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/pclose
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.var handle = popen('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm', 'r');
    // *     example 1: \php.pclose(handle);
    // *     returns 1: true
    if (!handle || handle.opener !== 'popen') {
        return false;
    }

    try {
        delete this.php_js.resourceDataPointer[handle.id];
        delete this.php_js.resourceData[handle.id]; // Free up memory
    }
    catch (e) {
        return false;
    }
    return true;
};

exports.php_ini_loaded_file = function () {
    // Return the actual loaded ini filename
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/php_ini_loaded_file
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: This string representing the path of the main ini file must be manually set by the script to this.php_js.ini_loaded_file
    // *     example 1: \php.php_ini_loaded_file();
    // *     returns 1: 'myini.js'
    if (!this.php_js || !this.php_js.ini_loaded_file) {
        return false;
    }
    return this.php_js.ini_loaded_file;
};

exports.php_ini_scanned_files = function () {
    // Return comma-separated string of .ini files parsed from the additional ini dir
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/php_ini_scanned_files
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: This comma-separated string of files contained in one directory must be manually set by the script to this.php_js.ini_scanned_files
    // *     example 1: \php.php_ini_scanned_files();
    // *     returns 1: 'myini.js,myini2.js'
    if (!this.php_js || !this.php_js.ini_scanned_files) {
        return false;
    }
    return this.php_js.ini_scanned_files;
};

exports.php_strip_whitespace = function (file) {
    // Return source with stripped comments and whitespace
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/php_strip_whitespace
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: This function uses XmlHttpRequest and cannot retrieve resource from different domain.
    // %        note 1: Synchronous so may lock up browser, mainly here for study purposes.
    // %        note 1: To avoid browser blocking issues's consider using jQuery's: $('#divId').load('http://url') instead.
    // -    depends on: file_get_contents
    // *     example 1: \php.php_strip_whitespace('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm');
    // *     returns 1: '123'
    try {
        var str = this.file_get_contents(file);
    } catch (e) {
        return '';
    }
    // Strip comments (both styles), reduce non-newline whitespace to one, reduce multiple
    // newlines (preceded by any whitespace) to a newline, remove WS at beginning of line,
    // and at end of line
    return str.replace(/\/\/.*?\n/g, '').replace(/\/\*[\s\S]*?\*\//g, '').replace(/[ \f\r\t\v\u00A0\u2028\u2029]+/g, ' ').replace(/\s*\n+/g, '\n').replace(/^\s+/gm, '').replace(/\s*$/gm, '');
};

exports.phpversion = function () {
    // Return the current PHP version
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/phpversion
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: We are using this to get the JavaScript version (since this is JavaScript and we can't get the PHP version anyways)
    // %        note 2: The return value will depend on your client's JavaScript version
    // %        note 3: Uses global: php_js to store environment info
    // *     example 1: \php.phpversion();
    // *     returns 1: '1.8'

    var xhtml=true;

    var s={};
    var firstScript={};
    var d = this.window.document;
    var c = 'createElement';
    var cn = 'createElementNS';
    var xn = 'http://www.w3.org/1999/xhtml';
    var g = 'getElementsByTagName';
    var gn = 'getElementsByTagNameNS';

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    // END REDUNDANT

    var getVersion = function (app) {
        var att='';
        var minVers=0;
        var versionString='';
        var temp_jsversion=undefined;
        if (this.php_js.jsversion !== undefined) {
            return this.php_js.jsversion;
        }
        while (this.php_js.jsversion === temp_jsversion && minVers < 10) {
            temp_jsversion = '1.'+minVers;
            if (gn) {
                firstScript = d[gn](xn, 'script')[0];
            }
            if (!firstScript) {
                firstScript = d[g]('script')[0];
                xhtml = false;
            }
            if (d[cn] && xhtml) {
                s = d[cn](xn, 'script');
            }
            else {
                s = d[c]('script');
            }

            if (app) { // Check with standard attribute (but not cross-browser standardized value?) as per Mozilla
                att = 'type';
                versionString='application/javascript;version=1.';
            }
            else {
                att = 'language'; // non-standard
                versionString='JavaScript1.';
            }

            s.setAttribute(att, versionString+minVers);
            s.appendChild(d.createTextNode("this.php_js.jsversion="+"'1."+minVers+"'"));
            firstScript.parentNode.insertBefore(s, firstScript);
            s.parentNode.removeChild(s);
            minVers++;
        }
        return this.php_js.jsversion;
    };
    getVersion(true);
    getVersion(false);

    return this.php_js.jsversion;
};

exports.pi = () => // Returns an approximation of pi
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/pi
// +   original by: Onno Marsman
// *     example 1: \php.pi(8723321.4);
// *     returns 1: 3.141592653589793
Math.PI;

exports.popen = function (filename, mode, use_include_path, context) {
    // Execute a command and open either a read or a write pipe to it
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/popen
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   input by: Paul Smith
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: file_get_contents
    // *     example 1: \php.popen('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm', 'r');
    // *     returns 1: 'Resource id #1'

    var resource={};

    var i=0;
    var that = this;
    var getFuncName = fn => {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
        if (!name) {
            return '(Anonymous)';
        }
        return name[1];
    };

    // BEGIN file inclusion: file_get_contents
    var file_get_contents = url => {
        var req = that.window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
        if (!req) {
            throw new Error('XMLHttpRequest not supported');
        }
        if (!(/^http/).test(url)) { // Allow references within or below the same directory (should fix to allow other relative references or root reference; could make dependent on parse_url())
            url = that.window.location.href + '/' +url;
        }
        req.open("GET", url, false);
        req.send(null);
        return req.responseText;
    };
    // END file inclusion

    if (use_include_path === 1 || use_include_path === '1' || use_include_path === true) {
        // Not implemented yet: Search for file in include path too
    }
    if (context) {
        // Not implemented yet, but could be useful to modify nature of HTTP request, etc.
    }

    for (i=0; i < mode.length; i++) { // Have to deal with other flags if ever allow
        switch (mode.charAt(i)) {
            case 'r':
                if (!mode.charAt(i+1) || mode.charAt(i+1) !== '+') {
                    break;
                }
            case 'w': // or 'w+'
            case 'a': // or 'a+'
            case 'x':// or 'x+'
                throw 'Writing is not implemented';
            case 'b':
            case 't':
                throw 'Windows-only modes are not supported';
            default:
                throw 'Unrecognized file mode passed to '+getFuncName(arguments.caller)+'()';
        }
    }

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.resourceData = this.php_js.resourceData || {};
    this.php_js.resourceDataPointer = this.php_js.resourceDataPointer || {};
    this.php_js.resourceIdCounter = this.php_js.resourceIdCounter || 0;
    // END REDUNDANT

    // BEGIN STATIC
    function PHPJS_Resource (type, id, opener) { // Can reuse the following for other resources, just changing the instantiation
        // See http://php.net/manual/en/resource.php for types
        this.type = type;
        this.id = id;
        this.opener = opener;
    }
    PHPJS_Resource.prototype.toString = function () {
        return 'Resource id #'+this.id;
    };
    PHPJS_Resource.prototype.get_resource_type = function () {
        return this.type;
    };
    PHPJS_Resource.prototype.var_dump = function () {
        return 'resource('+this.id+') of type ('+this.type+')';
    };
    // END STATIC

    this.php_js.resourceIdCounter++;

    this.php_js.resourceData[this.php_js.resourceIdCounter] = this.file_get_contents(filename);
    this.php_js.resourceDataPointer[this.php_js.resourceIdCounter] = 0;

    resource = new PHPJS_Resource('stream', this.php_js.resourceIdCounter, 'popen');
    resource.mode = mode; // Add file-specific attributes

    return resource; // may be 'file' instead of 'stream' type on some systems
};

exports.pos = function (arr) {
    // !No description available for pos. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/pos
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Uses global: php_js to store the array pointer
    // -    depends on: current
    // *     example 1: \php.transport = ['foot', 'bike', 'car', 'plane'];
    // *     example 1: \php.pos(transport);
    // *     returns 1: 'foot'

    return this.current(arr);
};

exports.pow = (base, exp) => base ** exp;

exports.preg_grep = (pattern, input, flags) => {
    // Searches array and returns entries which match regex
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/preg_grep
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: If pass pattern as string, must escape backslashes, even for single quotes
    // %          note 2: The regular expression itself must be expressed JavaScript style
    // %          note 3: It is not recommended to submit the pattern as a string, as we may implement
    // %          note 3:   parsing of PHP-style expressions (flags, etc.) in the future
    // *     example 1: \php.var arr = [1, 4, 4.5, 3, 'a', 4.4];
    // *     example 1: \php.preg_grep("/^(\\d+)?\\.\\d+$/", arr);
    // *     returns 1: {2: 4.5, 5: 4.4}

    var p='';

    var retObj = {};
    var invert = (flags === 1 || flags === 'PREG_GREP_INVERT'); // Todo: put flags as number and do bitwise checks (at least if other flags allowable); see pathinfo()

    if (typeof pattern === 'string') {
        pattern = eval(pattern);
    }

    if (invert) {
        for (p in input) {
            if (input[p].search(pattern) === -1) {
                retObj[p] = input[p];
            }
        }
    } else {
        for (p in input) {
            if (input[p].search(pattern) !== -1) {
                retObj[p] = input[p];
            }
        }
    }

    return retObj;
};

exports.preg_quote = (str, delimiter) => // Quote regular expression characters plus an optional character
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/preg_quote
// +   original by: booeyOH
// +   improved by: Ates Goral (http://magnetiq.com)
// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
// +   bugfixed by: Onno Marsman
// +   improved by: Brett Zamir (http://brett-zamir.me)
// *     example 1: \php.preg_quote("$40");
// *     returns 1: '\$40'
// *     example 2: \php.preg_quote("*RRRING* Hello?");
// *     returns 2: '\*RRRING\* Hello\?'
// *     example 3: \php.preg_quote("\\.+*?[^]$(){}=!<>|:");
// *     returns 3: '\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:'
(str+'').replace(
    new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\'+(delimiter || '')+'-]', 'g'),
    '\\$&'
);

exports.prev = function (arr) {
    // Move array argument's internal pointer to the previous element and return it
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/prev
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Uses global: php_js to store the array pointer
    // *     example 1: \php.transport = ['foot', 'bike', 'car', 'plane'];
    // *     example 1: \php.prev(transport);
    // *     returns 1: false
    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.pointers = this.php_js.pointers || [];
    var indexOf = function (value) {
        for (var i = 0, length=this.length; i < length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    };
    // END REDUNDANT
    var pointers = this.php_js.pointers;
    if (!pointers.indexOf) {
        pointers.indexOf = indexOf;
    }
    var arrpos = pointers.indexOf(arr);
    var cursor = pointers[arrpos+1];
    if (pointers.indexOf(arr) === -1 || cursor === 0) {
        return false;
    }
    if (!(arr instanceof Array)) {
        var ct = 0;
        for (var k in arr) {
            if (ct === cursor-1) {
                pointers[arrpos+1] -= 1;
                return arr[k];
            }
            ct++;
        }
    // Shouldn't reach here
    }
    if (arr.length === 0) {
        return false;
    }
    pointers[arrpos+1] -= 1;
    return arr[pointers[arrpos+1]];
};

exports.print_r = function (array, return_val) {
    // Prints out or returns information about the specified variable
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/print_r
    // +   original by: Michael White (http://getsprink.com)
    // +   improved by: Ben Bryan
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +      improved by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: echo
    // *     example 1: \php.print_r(1, true);
    // *     returns 1: 1

    var output = "";

    var pad_char = " ";
    var pad_val = 4;
    var d = this.window.document;
    var getFuncName = fn => {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
        if (!name) {
            return '(Anonymous)';
        }
        return name[1];
    };

    var repeat_char = (len, pad_char) => {
        var str = "";
        for (var i=0; i < len; i++) {
            str += pad_char;
        }
        return str;
    };

    var formatArray = (obj, cur_depth, pad_val, pad_char) => {
        if (cur_depth > 0) {
            cur_depth++;
        }

        var base_pad = repeat_char(pad_val*cur_depth, pad_char);
        var thick_pad = repeat_char(pad_val*(cur_depth+1), pad_char);
        var str = "";

        if (typeof obj === 'object' && obj !== null && obj.constructor && getFuncName(obj.constructor) !== 'PHPJS_Resource') {
            str += "Array\n" + base_pad + "(\n";
            for (var key in obj) {
                if (obj[key] instanceof Array) {
                    str += thick_pad + "["+key+"] => "+formatArray(obj[key], cur_depth+1, pad_val, pad_char);
                } else {
                    str += thick_pad + "["+key+"] => " + obj[key] + "\n";
                }
            }
            str += base_pad + ")\n";
        } else if (obj === null || obj === undefined) {
            str = '';
        } else { // for our "resource" class
            str = obj.toString();
        }

        return str;
    };

    output = formatArray(array, 0, pad_val, pad_char);

    if (return_val !== true) {
        if (d.body) {
            this.echo(output);
        }
        else {
            try {
                d = XULDocument; // We're in XUL, so appending as plain text won't work; trigger an error out of XUL
                this.echo('<pre xmlns="http://www.w3.org/1999/xhtml" style="white-space:pre;">'+output+'</pre>');
            }
            catch (e) {
                this.echo(output); // Outputting as plain text may work in some plain XML
            }
        }
        return true;
    } else {
        return output;
    }
};

exports.printf = function(...args) {
    // Output a formatted string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/printf
    // +   original by: Ash Searle (http://hexmen.com/blog/)
    // +   improved by: Michael White (http://getsprink.com)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: sprintf
    // *     example 1: \php.printf("%01.2f", 123.1);
    // *     returns 1: 6
    var body;

    var elmt;
    var d = this.window.document;
    var ret = '';

    var HTMLNS = 'http://www.w3.org/1999/xhtml';
    body = d.getElementsByTagNameNS ?
      (d.getElementsByTagNameNS(HTMLNS, 'body')[0] ?
        d.getElementsByTagNameNS(HTMLNS, 'body')[0] :
        d.documentElement.lastChild) :
      d.getElementsByTagName('body')[0];

    if (!body) {
        return false;
    }

    ret = this.sprintf(...args);

    elmt = d.createTextNode(ret);
    body.appendChild(elmt);

    return ret.length;
};

exports.property_exists = function (cls, prop) {
    // Checks if the object or class has a property
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/property_exists
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.function class_a () {this.prop1 = 'one'};
    // *     example 1: \php.var instance_a = new class_a();
    // *     example 1: \php.property_exists(instance_a, 'prop1');
    // *     returns 1: true
    // *     example 2: \php.function class_a () {this.prop1 = 'one'};
    // *     example 2: \php.var instance_a = new class_a();
    // *     example 2: \php.property_exists(instance_a, 'prop2');
    // *     returns 2: false
    cls = (typeof cls === 'string') ? this.window[cls] : cls;

    if (typeof cls === 'function' && cls.toSource &&
        cls.toSource().match(new RegExp('this\\.'+prop+'\\s'))
    ) {
        // Hackish and non-standard but can probably detect if setting
        // the property (we don't want to test by instantiating as that
        // may have side-effects)
        return true;
    }

    return (cls[prop] !== undefined && typeof cls[prop] !== 'function') ||
        (cls.prototype !== undefined && cls.prototype[prop] !== undefined && typeof cls.prototype[prop] !== 'function') ||
        (cls.constructor && cls.constructor[prop] !== undefined && typeof cls.constructor[prop] !== 'function');
};

exports.putenv = function (setting) {
    // Set the value of an environment variable
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/putenv
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: We are not using $_ENV as in PHP, you could define
    // %        note 1: "$_ENV = this.php_js.ENV;" and get/set accordingly
    // %        note 2: Uses global: php_js to store environment info
    // *     example 1: \php.putenv('LC_ALL=en-US');
    // *     results 1: true
    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ENV = this.php_js.ENV || {};
    // END REDUNDANT
    var pos = setting.indexOf('=');
    this.php_js.ENV[setting.slice(0,pos)] = setting.slice(pos+1);
    return true;
};

exports.quoted_printable_decode = str => {
    // Convert a quoted-printable string to an 8 bit string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/quoted_printable_decode
    // +   original by: Ole Vrijenhoek
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +   reimplemented by: Theriault
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Theriault
    // *     example 1: \php.quoted_printable_decode('a=3Db=3Dc');
    // *     returns 1: 'a=b=c'
    // *     example 2: \php.quoted_printable_decode('abc  =20\r\n123  =20\r\n');
    // *     returns 2: 'abc   \r\n123   \r\n'
    // *     example 3: \php.quoted_printable_decode('012345678901234567890123456789012345678901234567890123456789012345678901234=\r\n56789');
    // *     returns 3: '01234567890123456789012345678901234567890123456789012345678901234567890123456789'
    // *    example 4: \php.quoted_printable_decode("Lorem ipsum dolor sit amet=23, consectetur adipisicing elit");
    // *    returns 4: Lorem ipsum dolor sit amet#, consectetur adipisicing elit
    // Removes softline breaks
    var RFC2045Decode1 = /=\r\n/gm;

    var // Decodes all equal signs followed by two hex digits
    // the RFC states against decoding lower case encodings, but following apparent PHP behavior
    RFC2045Decode2IN = /=([0-9A-F]{2})/gim;

    var // RFC2045Decode2IN = /=([0-9A-F]{2})/gm,

    RFC2045Decode2OUT = (sMatch, sHex) => String.fromCharCode(parseInt(sHex, 16));

    return str.replace(RFC2045Decode1, '').replace(RFC2045Decode2IN, RFC2045Decode2OUT);
};

exports.quoted_printable_encode = str => {
    // +   original by: Theriault
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Theriault
    // *     example 1: \php.quoted_printable_encode('a=b=c');
    // *     returns 1: 'a=3Db=3Dc'
    // *     example 2: \php.quoted_printable_encode('abc   \r\n123   \r\n');
    // *     returns 2: 'abc  =20\r\n123  =20\r\n'
    // *     example 3: \php.quoted_printable_encode('0123456789012345678901234567890123456789012345678901234567890123456789012345');
    // *     returns 3: '012345678901234567890123456789012345678901234567890123456789012345678901234=\r\n5'
    // RFC 2045: 6.7.2: Octets with decimal values of 33 through 60 (bang to less-than) inclusive, and 62 through 126 (greater-than to tilde), inclusive, MAY be represented as the US-ASCII characters
    // PHP does not encode any of the above; as does this function.
    // RFC 2045: 6.7.3: Octets with values of 9 and 32 MAY be represented as US-ASCII TAB (HT) and SPACE characters, respectively, but MUST NOT be so represented at the end of an encoded line
    // PHP does not encode spaces (octet 32) except before a CRLF sequence as stated above. PHP always encodes tabs (octet 9). This function replicates PHP.
    // RFC 2045: 6.7.4: A line break in a text body, represented as a CRLF sequence in the text canonical form, must be represented by a (RFC 822) line break
    // PHP does not encode a CRLF sequence, as does this function.
    // RFC 2045: 6.7.5: The Quoted-Printable encoding REQUIRES that encoded lines be no more than 76 characters long. If longer lines are to be encoded with the Quoted-Printable encoding, "soft" line breaks must be used.
    // PHP breaks lines greater than 76 characters; as does this function.
    var hexChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    var RFC2045Encode1IN = / \r\n|\r\n|[^!-<>-~ ]/gm;

    var RFC2045Encode1OUT = sMatch => {
        // Encode space before CRLF sequence to prevent spaces from being stripped
        // Keep hard line breaks intact; CRLF sequences
        if (sMatch.length > 1) {
            return sMatch.replace(' ', '=20');
        }
        // Encode matching character
        var chr = sMatch.charCodeAt(0);
        return '=' + hexChars[((chr >>> 4) & 15)] + hexChars[(chr & 15)];
    };

    var // Split lines to 75 characters; the reason it's 75 and not 76 is because softline breaks are preceeded by an equal sign; which would be the 76th character.
    // However, if the last line/string was exactly 76 characters, then a softline would not be needed. PHP currently softbreaks anyway; so this function replicates PHP.
    RFC2045Encode2IN = /.{1,72}(?!\r\n)[^=]{0,3}/g;

    var RFC2045Encode2OUT = sMatch => {
        if (sMatch.substr(sMatch.length - 2) === '\r\n') {
            return sMatch;
        }
        return sMatch + '=\r\n';
    };

    str = str.replace(RFC2045Encode1IN, RFC2045Encode1OUT).replace(RFC2045Encode2IN, RFC2045Encode2OUT);
    // Strip last softline break
    return str.substr(0, str.length - 3);
};

exports.quotemeta = str => // Quotes meta characters
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/quotemeta
// +   original by: Paulo Freitas
// *     example 1: \php.quotemeta(". + * ? ^ ( $ )");
// *     returns 1: '\. \+ \* \? \^ \( \$ \)'
(str+'').replace(/([\.\\\+\*\?\[\^\]\$\(\)])/g, '\\$1');

exports.rad2deg = angle => // Converts the radian number to the equivalent number in degrees
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/rad2deg
// +   original by: Enrique Gonzalez
// *     example 1: \php.rad2deg(3.141592653589793);
// *     returns 1: 180

angle/Math.PI * 180;

exports.rand = function (min, max) {
    // Returns a random number
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/rand
    // +   original by: Leslie Hoare
    // +   bugfixed by: Onno Marsman
    // %          note 1: See the commented out code below for a version which will work with our experimental (though probably unnecessary) srand() function)
    // *     example 1: \php.rand(1, 1);
    // *     returns 1: 1

    var argc = arguments.length;
    if (argc === 0) {
        min = 0;
        max = 2147483647;
    } else if (argc === 1) {
        throw new Error('Warning: rand() expects exactly 2 parameters, 1 given');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;

    /*
    // See note above for an explanation of the following alternative code

    // +   reimplemented by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: srand
    // %          note 1: This is a very possibly imperfect adaptation from the PHP source code
    var rand_seed, ctx, PHP_RAND_MAX=2147483647; // 0x7fffffff

    if (!this.php_js || this.php_js.rand_seed === undefined) {
        this.srand();
    }
    rand_seed = this.php_js.rand_seed;

    var argc = arguments.length;
    if (argc === 1) {
        throw new Error('Warning: rand() expects exactly 2 parameters, 1 given');
    }

    var do_rand = function (ctx) {
        return ((ctx * 1103515245 + 12345) % (PHP_RAND_MAX + 1));
    };

    var php_rand = function (ctxArg) { // php_rand_r
        this.php_js.rand_seed = do_rand(ctxArg);
        return parseInt(this.php_js.rand_seed, 10);
    };

    var number = php_rand(rand_seed);

    if (argc === 2) {
        number = min + parseInt(parseFloat(parseFloat(max) - min + 1.0) * (number/(PHP_RAND_MAX + 1.0)), 10);
    }
    return number;
    */
};

exports.range = (low, high, step) => {
    // Create an array containing the range of integers or characters from low to high (inclusive)
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/range
    // +   original by: Waldo Malqui Silva
    // *     example 1: \php.range ( 0, 12 );
    // *     returns 1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    // *     example 2: \php.range( 0, 100, 10 );
    // *     returns 2: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    // *     example 3: \php.range( 'a', 'i' );
    // *     returns 3: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
    // *     example 4: \php.range( 'c', 'a' );
    // *     returns 4: ['c', 'b', 'a']
    var matrix = [];
    var inival;
    var endval;
    var plus;
    var walker = step || 1;
    var chars  = false;

    if ( !isNaN( low ) && !isNaN( high ) ) {
        inival = low;
        endval = high;
    } else if ( isNaN( low ) && isNaN( high ) ) {
        chars = true;
        inival = low.charCodeAt( 0 );
        endval = high.charCodeAt( 0 );
    } else {
        inival = ( isNaN( low ) ? 0 : low );
        endval = ( isNaN( high ) ? 0 : high );
    }

    plus = ( ( inival > endval ) ? false : true );
    if ( plus ) {
        while ( inival <= endval ) {
            matrix.push( ( ( chars ) ? String.fromCharCode( inival ) : inival ) );
            inival += walker;
        }
    } else {
        while ( inival >= endval ) {
            matrix.push( ( ( chars ) ? String.fromCharCode( inival ) : inival ) );
            inival -= walker;
        }
    }

    return matrix;
};

exports.rawurldecode = str => // Decodes URL-encodes string
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/rawurldecode
// +   original by: Brett Zamir (http://brett-zamir.me)
// +      input by: travc
// +      input by: Brett Zamir (http://brett-zamir.me)
// +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
// +      input by: Ratheous
// +      reimplemented by: Brett Zamir (http://brett-zamir.me)
// %        note 1: Please be aware that this function expects to decode from UTF-8 encoded strings, as found on
// %        note 1: pages served as UTF-8
// *     example 1: \php.rawurldecode('Kevin+van+Zonneveld%21');
// *     returns 1: 'Kevin+van+Zonneveld!'
// *     example 2: \php.rawurldecode('http%3A%2F%2Fkevin.vanzonneveld.net%2F');
// *     returns 2: 'http://kevin.vanzonneveld.net/'
// *     example 3: \php.rawurldecode('http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a');
// *     returns 3: 'http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a'
// *     example 4: \php.rawurldecode('-22%97bc%2Fbc');
// *     returns 4: '-22—bc/bc'
decodeURIComponent(str);

exports.rawurlencode = str => {
    // URL-encodes string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/rawurlencode
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +      input by: travc
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Michael Grier
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Ratheous
    // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Joris
    // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: This reflects PHP 5.3/6.0+ behavior
    // %        note 2: Please be aware that this function expects to encode into UTF-8 encoded strings, as found on
    // %        note 2: pages served as UTF-8
    // *     example 1: \php.rawurlencode('Kevin van Zonneveld!');
    // *     returns 1: 'Kevin%20van%20Zonneveld%21'
    // *     example 2: \php.rawurlencode('http://kevin.vanzonneveld.net/');
    // *     returns 2: 'http%3A%2F%2Fkevin.vanzonneveld.net%2F'
    // *     example 3: \php.rawurlencode('http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a');
    // *     returns 3: 'http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a'
    str = (str+'').toString();

    // Tilde should be allowed unescaped in future versions of PHP (as reflected below), but if you want to reflect current
    // PHP behavior, you would need to add ".replace(/~/g, '%7E');" to the following.
    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
                                                                    replace(/\)/g, '%29').replace(/\*/g, '%2A');
};

exports.readfile = function (filename, use_include_path, context) {
    // Output a file or a URL
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/readfile
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: echo
    // *     example 1: \php.readfile('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm');
    // *     returns 1: '123'

    var read_data = this.file_get_contents(filename, use_include_path, context); // bitwise-or use_include_path?
    this.echo(read_data);
    return read_data;
};

exports.realpath = function (path) {
    // Return the resolved path
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/realpath
    // +   original by: mk.keck
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // %        note 1: Returned path is an url like e.g. 'http://yourhost.tld/path/'
    // *     example 1: \php.realpath('../.././_supporters/pj_test_supportfile_1.htm');
    // *     returns 1: 'file:/home/kevin/workspace/_supporters/pj_test_supportfile_1.htm'

    var p = 0;

    var arr = [];
    /* Save the root, if not given */
    var r = this.window.location.href;
    /* Avoid input failures */
    path = (path + '').replace('\\', '/');
    /* Check if there's a port in path (like 'http://') */
    if (path.indexOf('://') !== -1) {
        p = 1;
    }
    /* Ok, there's not a port in path, so let's take the root */
    if (!p) {
        path = r.substring(0, r.lastIndexOf('/') + 1) + path;
    }
    /* Explode the given path into it's parts */
    arr = path.split('/');
    /* The path is an array now */
    path = [];
    /* Foreach part make a check */
    for (var k in arr) {
        /* This is'nt really interesting */
        if (arr[k] == '.') {
            continue;
        }
        /* This reduces the realpath */
        if (arr[k] == '..') {
            /* But only if there more than 3 parts in the path-array.
             * The first three parts are for the uri */
            if (path.length > 3) {
                path.pop();
            }
        }
        /* This adds parts to the realpath */
        else {
            /* But only if the part is not empty or the uri
             * (the first three parts ar needed) was not
             * saved */
            if ((path.length < 2) || (arr[k] !== '')) {
                path.push(arr[k]);
            }
        }
    }
    /* Returns the absloute path as a string */
    return path.join('/');
};

exports.register_shutdown_function = function (cb) {
    // Register a user-level function to be called on request termination
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/register_shutdown_function
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.register_shutdown_function(function(first, middle, last) {alert('Goodbye '+first+' '+middle+' '+last+'!');}, 'Kevin', 'van', 'Zonneveld');
    // *     returns 1: 'Goodbye Kevin van Zonneveld!'
    var args = [];

    var _addEvent = (el, type, handler, capturing) => {
        if (el.addEventListener) { /* W3C */
            el.addEventListener(type, handler, !!capturing);
        }
        else if (el.attachEvent) { /* IE */
            el.attachEvent('on'+type, handler);
        }
        else { /* OLDER BROWSERS (DOM0) */
            el['on'+type] = handler;
        }
    };

    args = Array.prototype.slice.call(arguments, 1);
    _addEvent(this.window, 'unload', () => {
        cb(...args);
    }, false);
};

exports.require = function (filename) {
    // !No description available for require. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/require
    // +   original by: Michael White (http://getsprink.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   input by: Yen-Wei Liu
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Force Javascript execution to pause until the file is loaded. Usually causes failure if the file never loads. ( Use sparingly! )
    // %        note 2: Uses global: php_js to keep track of included files
    // -    depends on: file_get_contents
    // *     example 1: \php.require('http://www.phpjs.org/js/phpjs/_supporters/pj_test_supportfile_2.js');
    // *     returns 1: 2
    var d = this.window.document;
    var isXML = d.documentElement.nodeName !== 'HTML' || !d.write; // Latter is for silly comprehensiveness
    var js_code = this.file_get_contents(filename);
    var script_block = d.createElementNS && isXML ? d.createElementNS('http://www.w3.org/1999/xhtml', 'script') : d.createElement('script');
    script_block.type = 'text/javascript';
    var client_pc = navigator.userAgent.toLowerCase();
    if ((client_pc.indexOf('msie') !== -1) && (client_pc.indexOf('opera') === -1)) {
        script_block.text = js_code;
    } else {
        script_block.appendChild(d.createTextNode(js_code));
    }

    if (typeof(script_block) !== 'undefined') {
        d.getElementsByTagNameNS && isXML ?
            (d.getElementsByTagNameNS('http://www.w3.org/1999/xhtml', 'head')[0] ?
                d.getElementsByTagNameNS('http://www.w3.org/1999/xhtml', 'head')[0].appendChild(script_block) :
                d.documentElement.insertBefore(script_block, d.documentElement.firstChild) // in case of XUL
            ):
            d.getElementsByTagName('head')[0].appendChild(script_block);

        // save include state for reference by include_once and require_once()
        var cur_file = {};
        cur_file[this.window.location.href] = 1;

        // BEGIN REDUNDANT
        this.php_js = this.php_js || {};
        // END REDUNDANT

        if (!this.php_js.includes) {
            this.php_js.includes = cur_file;
        }

        if (!this.php_js.includes[filename]) {
            this.php_js.includes[filename] = 1;
            return 1;
        } else {
            return ++this.php_js.includes[filename];
        }
    }
    return 0;
};

exports.require_once = function (filename) {
    // !No description available for require_once. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/require_once
    // +   original by: Michael White (http://getsprink.com)
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Uses global: php_js to keep track of included files (though private static variable in namespaced version)
    // -    depends on: require
    // *     example 1: \php.require_once('http://www.phpjs.org/js/phpjs/_supporters/pj_test_supportfile_2.js');
    // *     returns 1: true
    var cur_file = {};
    cur_file[this.window.location.href] = 1;

    // save include state for reference by include_once and require_once()
    // BEGIN STATIC
    try { // We can't try to access on window, since it might not exist in some environments, and if we use "this.window"
            //    we risk adding another copy if different window objects are associated with the namespaced object
        php_js_shared; // Will be private static variable in namespaced version or global in non-namespaced
                                       //   version since we wish to share this across all instances
    }
    catch(e) {
        php_js_shared = {};
    }
    // END STATIC

    if (!php_js_shared.includes) {
        php_js_shared.includes = cur_file;
    }
    if (!php_js_shared.includes[filename]) {
        if (this.require(filename)) {
            return true;
        }
    } else {
        return true;
    }
    return false;
};

exports.reset = function ( arr ) {
    // Set array argument's internal pointer to the first element and return it
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/reset
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Legaev Andrey
    // +    revised by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Uses global: php_js to store the array pointer
    // *     example 1: \php.reset({0: 'Kevin', 1: 'van', 2: 'Zonneveld'});
    // *     returns 1: 'Kevin'

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.pointers = this.php_js.pointers || [];
    var indexOf = function (value) {
        for (var i = 0, length=this.length; i < length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    };
    // END REDUNDANT
    var pointers = this.php_js.pointers;
    if (!pointers.indexOf) {
        pointers.indexOf = indexOf;
    }
    if (pointers.indexOf(arr) === -1) {
        pointers.push(arr, 0);
    }
    var arrpos = pointers.indexOf(arr);
    if (!(arr instanceof Array)) {
        for (var k in arr) {
            if (pointers.indexOf(arr) === -1) {
                pointers.push(arr, 0);
            } else {
                pointers[arrpos+1] = 0;
            }
            return arr[k];
        }
        return false; // Empty
    }
    if (arr.length === 0) {
        return false;
    }
    pointers[arrpos+1] = 0;
    return arr[pointers[arrpos+1]];
};

exports.restore_include_path = function () {
    // !No description available for restore_include_path. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/restore_include_path
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.restore_include_path();
    // *     returns 1: undefined

    if (this.php_js && this.php_js.ini && this.php_js.ini.include_path) {
        this.php_js.ini.include_path.local_value = this.php_js.ini.include_path.global_value;
    }
};

exports.rewind = function (handle) {
    // Rewind the position of a file pointer
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/rewind
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.var h = fopen('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm', 'r');
    // *     example 1: \php.fread(h, 100);
    // *     example 1: \php.rewind(h);
    // *     returns 1: true

    var getFuncName = fn => {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
        if (!name) {
            return '(Anonymous)';
        }
        return name[1];
    };
    if (!this.php_js || !this.php_js.resourceData || !this.php_js.resourceDataPointer ||
            !handle || !handle.constructor || getFuncName(handle.constructor) !== 'PHPJS_Resource') {
        return false;
    }
    this.php_js.resourceDataPointer[handle.id] = 0;
    return true;
};

exports.round = (val, precision, mode) => {
    // Returns the number rounded to specified precision
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/round
    // +   original by: Philip Peterson
    // +    revised by: Onno Marsman
    // +      input by: Greenseed
    // +    revised by: T.Wild
    // +      input by: meo
    // +      input by: William
    // +      bugfixed by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Great work. Ideas for improvement:
    // %        note 1:  - code more compliant with developer guidelines
    // %        note 1:  - for implementing PHP constant arguments look at
    // %        note 1:  the pathinfo() function, it offers the greatest
    // %        note 1:  flexibility & compatibility possible
    // *     example 1: \php.round(1241757, -3);
    // *     returns 1: 1242000
    // *     example 2: \php.round(3.6);
    // *     returns 2: 4
    // *     example 3: \php.round(2.835, 2);
    // *     returns 3: 2.84
    // *     example 4: \php.round(1.1749999999999, 2);
    // *     returns 4: 1.17
    // *     example 5: \php.round(1.17499999999999, 2);
    // *     returns 5: 1.18
    /* Declare Variables
     * retVal  - Temporary holder of the value to be returned
     * V       - String representation of val

     * integer - Integer portion of val
     * decimal - decimal portion of val
     * decp    - Character index of . [decimal point] inV
     * negative- Was val a negative value?
     *
     * _round_half_oe - Rounding function for ROUND_HALF_ODD and ROUND_HALF_EVEN

     * _round_half_ud - Rounding function for ROUND_HALF_UP and ROUND_HALF_DOWN
     * _round_half    - Primary function for round half rounding modes
     */
    var retVal = 0;

    var v = '';
    var integer = '';
    var decimal = '';
    var decp = 0;
    var negative = false;
    var _round_half_oe = (dtR, dtLa, even) => { // round to odd or even
        if (even === true) {
            if (dtLa === 50) {
                if ((dtR % 2) === 1) {
                    if (dtLa >= 5) {
                        dtR++;
                    } else {
                        dtR--;
                    }
                }
            } else if (dtLa >= 5) {
                dtR++;
            }
        } else {
            if (dtLa === 5) {
                if ((dtR % 2) === 0) {
                    if (dtLa >= 5) {
                        dtR++;
                    } else {
                        dtR--;
                    }
                }
            } else if (dtLa >= 5) {
                dtR++;
            }
        }
        return dtR;
    };
    var _round_half_ud = (dtR, dtLa, up) => { // round up or down
        if (up === true) {
            if (dtLa >= 5) {
                dtR++;
            }
        } else {
            if (dtLa > 5) {
                dtR++;
            }
        }
        return dtR;
    };
    var _round_half = (val, decplaces, mode) => {
        /*Declare variables
             *V       - string representation of Val
             *Vlen    - The length of V - used only when rounding integers

             *VlenDif - The difference between the lengths of the original V
             *              and the V after being truncated
             *decp    - Character in index of . [decimal place] in V
             *integer - Integer protion of Val
             *decimal - Decimal portion of Val
             *DigitToRound - The digit to round

             *DigitToLookAt- The digit to compare when rounding
             *
             *round - A function to do the rounding
             */
        var v = val.toString();

        var vlen = 0;
        var vlenDif = 0;
        var decp = v.indexOf('.');
        var digitToRound = 0;
        var digitToLookAt = 0;
        var integer = '';
        var decimal = '';
        var round = null;
        var bool = false;
        switch (mode) {
            case 'up':
                bool = true;
                // Fall-through
            case 'down':
                round = _round_half_ud;
                break;
            case 'even':
                bool = true;
                // Fall-through
            case 'odd':
                round = _round_half_oe;
                break;
        }
        if (decplaces < 0) { // Int round
            vlen = v.length;

            decplaces = vlen + decplaces;
            digitToLookAt = Number(v.charAt(decplaces));
            digitToRound  = Number(v.charAt(decplaces - 1));
            digitToRound  = round(digitToRound, digitToLookAt, bool);
            v = v.slice(0, decplaces - 1);
            vlenDif = vlen - v.length - 1;

            if (digitToRound === 10) {
                v = String(Number(v) + 1) + '0';
            } else {
                v += digitToRound;
            }

            v = Number(v) * ((10 ** vlenDif));
        } else if (decplaces > 0) {
            integer = v.slice(0, decp);
            decimal = v.slice(decp + 1);
            digitToLookAt = Number(decimal.charAt(decplaces));

            digitToRound  = Number(decimal.charAt(decplaces - 1));
            digitToRound  = round(digitToRound, digitToLookAt, bool);
            decimal = decimal.slice(0, decplaces - 1);
            if (digitToRound === 10) {
                v = Number(integer + '.' + decimal) + (1 * ((10 ** (0 - decimal.length))));
            } else {
                v = Number(integer + '.' + decimal + digitToRound);
            }
        } else { // 0 decimal places
            integer = v.slice(0, decp);
            decimal = v.slice(decp + 1);
            digitToLookAt = Number(decimal.charAt(decplaces));
            digitToRound = Number(integer.charAt(integer.length - 1));
            digitToRound = round(digitToRound, digitToLookAt, bool);
            decimal = '0';
            integer = integer.slice(0, integer.length - 1);
            if (digitToRound === 10) {
                v = Number((Number(integer) + 1) + decimal); // Need to add extra 0 since passing 10
            } else {
                v = Number(integer + digitToRound);
            }
        }
        return v;
    };

    // precision optional - defaults 0
    if (typeof precision === 'undefined') {
        precision = 0;
    }
    // mode optional - defaults round half up
    if (typeof mode === 'undefined') {
        mode = 'PHP_ROUND_HALF_UP';
    }

    negative = val < 0; // Remember if val is negative

    v = Math.abs(val).toString(); // Take a string representation of val
    decp = v.indexOf('.');        // And locate the decimal point
    if (decp === -1 && precision >= 0) {
        /* If there is no decimal point and the precision is greater than 0
         * there is no need to round, return val
         */
        return val;
    } else {
        if (decp === -1) {
            // There are no decimals so integer=V and decimal=0
            integer = v;
            decimal = '0';
        } else {
            // Otherwise we have to split the decimals from the integer
            integer = v.slice(0, decp);
            if (precision >= 0) {
                // If the precision is greater than 0 then split the decimals from the integer
                // We truncate the decimals to a number of places equal to the precision requested+1
                decimal = v.substr(decp + 1, precision + 1);
            } else {
                // If the precision is less than 0 ignore the decimals - set to 0
                decimal = '0';
            }
        }
        if (precision > 0 && precision >= decimal.length) {
            /*
            * If the precision requested is more decimal places than already exist
            * there is no need to round - return val
            */
            return val;
        } else if (precision < 0 && Math.abs(precision) >= integer.length){
           /*
            * If the precison is less than 0, and is greater than than the
            * number of digits in integer, return 0 - mimics PHP
            */
            return 0;
        }
        if (decimal === '0') {
            return Number(integer);
        }
        val = Number(integer + '.' + decimal); // After sanitizing, recreate val
    }

    // Call approriate function based on passed mode, fall through for integer constants
    switch (mode) {
        case 0: case 'PHP_ROUND_HALF_UP':
            retVal = _round_half(val, precision, 'up');
            break;
        case 1:  case 'PHP_ROUND_HALF_DOWN':
            retVal = _round_half(val, precision, 'down');
            break;
        case 2: case 'PHP_ROUND_HALF_EVEN':
            retVal = _round_half(val, precision, 'even');
            break;
        case 3: case 'PHP_ROUND_HALF_ODD':
            retVal = _round_half(val, precision, 'odd');
            break;
    }
    return negative ? 0 - retVal : retVal;
};

exports.rsort = function (inputArr, sort_flags) {
    // Sort an array in reverse order
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/rsort
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    revised by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: SORT_STRING (as well as natsort and natcasesort) might also be
    // %        note 1: integrated into all of these functions by adapting the code at
    // %        note 1: http://sourcefrog.net/projects/natsort/natcompare.js
    // %        note 2: This function deviates from PHP in returning a copy of the array instead
    // %        note 2: of acting by reference and returning true; this was necessary because
    // %        note 2: IE does not allow deleting and re-adding of properties without caching
    // %        note 2: of property position; you can set the ini of "phpjs.strictForIn" to true to
    // %        note 2: get the PHP behavior, but use this only if you are in an environment
    // %        note 2: such as Firefox extensions where for-in iteration order is fixed and true
    // %        note 2: property deletion is supported. Note that we intend to implement the PHP
    // %        note 2: behavior by default if IE ever does allow it; only gives shallow copy since
    // %        note 2: is by reference in PHP anyways
    // -    depends on: i18n_loc_get_default
    // *     example 1: \php.rsort(['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: ['van', 'Zonneveld', 'Kevin']
    // *     example 2: \php.ini_set('phpjs.strictForIn', true);
    // *     example 2: \php.fruits = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
    // *     example 2: \php.rsort(fruits);
    // *     results 2: fruits == {0: 'orange', 1: 'lemon', 2: 'banana', 3: 'apple'}
    // *     returns 2: true
    var valArr = [];

    var k = '';
    var i = 0;
    var sorter = false;
    var that=this;
    var strictForIn = false;
    var populateArr = [];

    switch (sort_flags) {
        case 'SORT_STRING': // compare items as strings
             sorter = (a, b) => that.strnatcmp(b, a);
            break;
        case 'SORT_LOCALE_STRING': // compare items as strings, based on the current locale (set with  i18n_loc_set_default() as of PHP6)
            var loc = this.i18n_loc_get_default();
            sorter = this.php_js.i18nLocales[loc].sorting;
            break;
        case 'SORT_NUMERIC': // compare items numerically
            sorter = (a, b) => b - a;
            break;
        case 'SORT_REGULAR': // compare items normally (don't change types)
        default:
            sorter = (a, b) => {
                if (a < b) {
                    return 1;
                }
                if (a > b) {
                    return -1;
                }
                return 0;
            };
            break;
    }

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    // END REDUNDANT

    strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value &&
                    this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;

    for (k in inputArr) { // Get key and value arrays
        if (inputArr.hasOwnProperty(k)) {
            valArr.push(inputArr[k]);
            if (strictForIn) {
                delete inputArr[k];
            }
        }
    }

    valArr.sort(sorter);

    for (i = 0; i < valArr.length; i++) { // Repopulate the old array
        populateArr[i] = valArr[i];
    }
    return strictForIn || populateArr;
};

exports.rtrim = (str, charlist) => {
    // Removes trailing whitespace
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/rtrim
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Erkekjetter
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +   input by: rem
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.rtrim('    Kevin van Zonneveld    ');
    // *     returns 1: '    Kevin van Zonneveld'
    charlist = !charlist ? ' \\s\u00A0' : (charlist+'').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\\$1');
    var re = new RegExp('[' + charlist + ']+$', 'g');
    return (str+'').replace(re, '');
};

exports.runkit_class_adopt = function (classname, parentname) {
    // !No description available for runkit_class_adopt. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/runkit_class_adopt
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: Function can only obtain and set classes from the global context
    // *     example 1: \php.function A () {}
    // *     example 1: A.prototype.methodA = function () {};
    // *     example 1: \php.function B () {}
    // *     example 1: \php.runkit_class_adopt('B', 'A');
    // *     returns 1: true

    if (typeof this.window[classname] !== 'function' || typeof this.window[parentname] !== 'function') {
        return false;
    }

    // Classical style of inheritance
    this.window[classname].prototype = new this.window[parentname](); // Has side effects by calling the constructor!

/*
    // Prototypal completely by reference
    this.window[classname].prototype = parentname.prototype; // By mutual reference!
*/

/*
    // Mixin (deep copy, not by reference)
    var _copy = function (child, parent) {
        var p = '';
        for (p in parent) {
            if (typeof parent[p] === 'object') {
                child[p] = _copy(child[p], parent[p]);
            }
            else {
                child[p] = parent[p];
            }
        }
    };
    _copy(this.window[classname].prototype, this.window[parentname].prototype);
*/

    // Put original constructor property back
    this.window[classname].constructor = this.window[classname];
    return true;
};

exports.runkit_class_emancipate = function (classname) {
    // !No description available for runkit_class_emancipate. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/runkit_class_emancipate
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: Function can only obtain classes from the global context
    // %          note 2: We have to delete all items on the prototype
    // *     example 1: \php.function A () {}
    // *     example 1: A.prototype.methodA = function () {};
    // *     example 1: \php.function B () {}
    // *     example 1: \php.runkit_class_adopt('B', 'A');
    // *     example 1: \php.runkit_class_emancipate('B');
    // *     returns 1: true

    if (typeof this.window[classname] !== 'function') {
        return false;
    }

    for (var p in this.window[classname].prototype) {
        delete this.window[classname].prototype[p];
    }
    return true;
};

exports.runkit_function_add = function (funcname, arglist, code) {
    // !No description available for runkit_function_add. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/runkit_function_add
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: Function can only be added to the global context; use create_function() for an anonymous function
    // *     example 1: \php.runkit_function_add('add', 'a, b', "return (a + b);");
    // *     returns 1: true
    if (this.window[funcname] !== undefined) { // Presumably disallows adding where exists, since there is also redefine function
        return false;
    }

    try {
        this.window[funcname] = Function(...arglist.split(',').concat(code));
    }
    catch (e) {
        return false;
    }
    return true;
};

exports.runkit_function_copy = function (funcname, targetname) {
    // !No description available for runkit_function_copy. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/runkit_function_copy
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: Function can only be copied to and from the global context
    // *     example 1: \php.function plus (a, b) { return (a + b); }
    // *     example 1: \php.runkit_function_copy('plus', 'add');
    // *     returns 1: true
    if (typeof this.window[funcname] !== 'function' || this.window[targetname] !== undefined) { //  (presumably disallow overwriting existing variables)
        return false;
    }
    this.window[targetname] = this.window[funcname];
    return true;
};

exports.runkit_function_redefine = function (funcname, arglist, code) {
    // !No description available for runkit_function_redefine. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/runkit_function_redefine
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: Function can only be added to the global context; use create_function() for an anonymous function
    // *     example 1: \php.function add (a, b, c) {return a+b+c;}
    // *     example 1: \php.runkit_function_redefine('add', 'a, b', "return (a + b);");
    // *     returns 1: true
    if (this.window[funcname] === undefined) { // Requires existing function?
        return false;
    }

    try {
        this.window[funcname] = Function(...arglist.split(',').concat(code));
    }
    catch (e) {
        return false;
    }
    return true;
};

exports.runkit_function_remove = function (funcname) {
    // !No description available for runkit_function_remove. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/runkit_function_remove
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: Function can only remove from the global context
    // *     example 1: \php.function add (a, b, c) {return a+b+c;}
    // *     example 1: \php.runkit_function_remove('add');
    // *     returns 1: true
    if (this.window[funcname] === undefined) { // Requires existing function?
        return false;
    }

    try {
        this.window[funcname] = undefined;
    }
    catch (e) {
        return false;
    }
    return true;
};

exports.runkit_function_rename = function (funcname, newname) {
    // !No description available for runkit_function_rename. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/runkit_function_rename
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: Function can only be copied to and from the global context
    // *     example 1: \php.function plus (a, b) { return (a + b); }
    // *     example 1: \php.runkit_function_rename('plus', 'add');
    // *     returns 1: true
    if (typeof this.window[newname] !== 'function' || this.window[funcname] !== undefined) { //  (presumably disallow overwriting existing variables)
        return false;
    }
    this.window[newname] = this.window[funcname];
    this.window[funcname] = undefined;
    return true;
};

exports.runkit_import = function (file, flags) {
    // !No description available for runkit_import. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/runkit_import
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: file_get_contents
    // %        note 1: does not return an associative array as in PHP and will evaluate all variables, not only those in a function or class
    // %        note 2: Implement instead with include?
    // *     example 1: \php.runkit_import('http://example.com/somefile.js');
    // *     returns 1: undefined
    if (flags) {
        // RUNKIT_IMPORT_FUNCTIONS, RUNKIT_IMPORT_CLASS_METHODS, RUNKIT_IMPORT_CLASS_CONSTS,
        // RUNKIT_IMPORT_CLASS_PROPS, RUNKIT_IMPORT_CLASSES, RUNKIT_IMPORT_OVERRIDE
        // CLASSKIT_AGGREGATE_OVERRIDE ?
        throw 'Flags not supported for runkit_import';
    }

    eval(this.file_get_contents(file));
};

exports.runkit_method_add = function (classname, methodname, args, code, flags) {
    // !No description available for runkit_method_add. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/runkit_method_add
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.function a (){}
    // *     example 1: \php.runkit_method_add ('a', 'b', 'a,b', 'return a+b');
    // *     returns 1: true
    var func;

    var argmnts = [];

    switch (flags) {
        case 'RUNKIT_ACC_PROTECTED':
            throw 'Protected not supported';
        case 'RUNKIT_ACC_PRIVATE':
            throw 'Private not supported';
        case 'RUNKIT_ACC_PUBLIC':
            default:
                break;
    }

    argmnts = args.split(/,\s*/);

    if (typeof classname === 'string') {
        classname = this.window[classname];
    }

    // Could use the following to add as a static method to the class
    //        func = Function.apply(null, argmnts.concat(code));
    //            classname[methodname] = func;
    func = Function(...argmnts.concat(code));
    classname.prototype[methodname] = func;
    return true;
};

exports.runkit_method_copy = function (dClass, dMethod, sClass, sMethod) {
    // !No description available for runkit_method_copy. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/runkit_method_copy
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.runkit_method_copy('newClass', 'newMethod', 'someClass', 'someMethod');
    // *     returns 1: true
    /*
    function A(){}
    function C(){}
    C.d = function () {alert('inside d');}
    runkit_method_copy('A', 'b', 'C', 'd');
    A.b(); // 'inside d'
    */
    sMethod = sMethod || dMethod;

    if (typeof dClass === 'string') {
        dClass = this.window[dClass];
    }
    if (typeof sClass === 'string') {
        sClass = this.window[sClass];
    }

    //dClass[dMethod] = sClass[sMethod]; // Copy from static to static method (as per PHP example)
    dClass.prototype[dMethod] = sClass.prototype[sMethod]; // To copy from instance to instance
    return true;
};

exports.runkit_method_redefine = function (classname, methodname, args, code, flags) {
    // !No description available for runkit_method_redefine. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/runkit_method_redefine
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.runkit_method_redefine('someClass', 'someMethod', 'a,b', 'return a+b');
    // *     returns 1: true
    // In JavaScript, this is identical to runkit_method_add

    var argmnts = [];

    var func;
    var getFuncName = fn => {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
        if (!name) {
            return '(Anonymous)';
        }
        return name[1];
    };

    switch (flags) {
        case 'RUNKIT_ACC_PROTECTED':
            throw 'Protected not supported';
        case 'RUNKIT_ACC_PRIVATE':
            throw 'Private not supported';
        case 'RUNKIT_ACC_PUBLIC':
            default:
                break;
    }

    argmnts = args.split(/,\s*/);

    if (typeof classname === 'string') {
        classname = this.window[classname];
    }

    if (getFuncName(classname) !== 'PHP_JS' ||  // By default, don't allow overriding of PHP functions
        (this.php_js && this.php_js.ini && this.php_js.ini['runkit.internal_override'] &&
        (this.php_js.ini['runkit.internal_override'].local_value === true ||
            this.php_js.ini['runkit.internal_override'].local_value === 1 ||
            this.php_js.ini['runkit.internal_override'].local_value === '1' ||
            this.php_js.ini['runkit.internal_override'].local_value === 'true'
            )
        )) {
        // Could use the following to add as a static method to the class
        //        func = Function.apply(null, argmnts.concat(code));
        //            classname[methodname] = func;
        func = Function(...argmnts.concat(code));
        classname.prototype[methodname] = func;
        return true;
    }
    return false;
};

exports.runkit_method_remove = function (classname, methodname) {
    // !No description available for runkit_method_remove. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/runkit_method_remove
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.runkit_method_remove('someClass', 'someMethod');
    // *     returns 1: true
    if (typeof classname === 'string') {
        classname = this.window[classname];
    }
    if (getFuncName(classname) !== 'PHP_JS' ||  // By default, don't allow overriding of PHP functions
        (this.php_js && this.php_js.ini && this.php_js.ini['runkit.internal_override'] &&
        (this.php_js.ini['runkit.internal_override'].local_value === true ||
            this.php_js.ini['runkit.internal_override'].local_value === 1 ||
            this.php_js.ini['runkit.internal_override'].local_value === '1' ||
            this.php_js.ini['runkit.internal_override'].local_value === 'true'
            )
        )) {
        delete classname.prototype[methodname]; // Delete any on prototype
        return true;
    }
    // delete classname[methodname]; // Delete any as static class method
    return false;
};

exports.runkit_method_rename = function (classname, methodname, newname) {
    // !No description available for runkit_method_rename. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/runkit_method_rename
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.runkit_method_rename('someClass', 'someMethod', 'newMethod');
    // *     returns 1: true

    var getFuncName = fn => {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
        if (!name) {
            return '(Anonymous)';
        }
        return name[1];
    };

    if (typeof classname === 'string') {
        classname = this.window[classname];
    }

    /*
    var method = classname[methodname]; // Static
    classname[newname] = method;
    delete classname[methodname];
    */

    if (getFuncName(classname) !== 'PHP_JS' ||  // By default, don't allow overriding of PHP functions
        (this.php_js && this.php_js.ini && this.php_js.ini['runkit.internal_override'] &&
        (this.php_js.ini['runkit.internal_override'].local_value === true ||
            this.php_js.ini['runkit.internal_override'].local_value === 1 ||
            this.php_js.ini['runkit.internal_override'].local_value === '1' ||
            this.php_js.ini['runkit.internal_override'].local_value === 'true'
            )
        )) {
        var method = classname.prototype[methodname];
        classname.prototype[newname] = method;
        delete classname.prototype[methodname];
        return true;
    }
    return false;
};

exports.runkit_superglobals = function () {
    // !No description available for runkit_superglobals. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/runkit_superglobals
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: You must manually define the superglobals to be able to use them.
    // %          note 2: Another alternative (though you can't reflect on them with this function) is to use import_request_variables()
    // *     example 1: \php.runkit_superglobals();
    // *     returns 1: []
    var superglobal = {};

    var p='';
    var arr=[];
    var superglobals = ['$_GET', '$_POST', '$_REQUEST', '$_COOKIE', '$_SESSION', '$_SERVER', '$_ENV', '$_FILES'];
    for (var i=0; i < superglobals.length; i++) {
        superglobal = this.window[superglobals[i]];
        for (p in superglobal) {
            arr.push(superglobal[p]);
        }
    }
    return arr;
};

exports.serialize = function (mixed_value) {
    // Returns a string representation of variable (which can later be unserialized)
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/serialize
    // +   original by: Arpad Ray (mailto:arpad@php.net)
    // +   improved by: Dino
    // +   bugfixed by: Andrej Pavlovic
    // +   bugfixed by: Garagoth
    // +      input by: DtTvB (http://dt.in.th/2008-09-16.string-length-in-bytes.html)
    // +   bugfixed by: Russell Walker (http://www.nbill.co.uk/)
    // +   bugfixed by: Jamie Beck (http://www.terabit.ca/)
    // +      input by: Martin (http://www.erlenwiese.de/)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: utf8_encode
    // %          note: We feel the main purpose of this function should be to ease the transport of data between php & js
    // %          note: Aiming for PHP-compatibility, we have to translate objects to arrays
    // *     example 1: \php.serialize(['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: 'a:3:{i:0;s:5:"Kevin";i:1;s:3:"van";i:2;s:9:"Zonneveld";}'
    // *     example 2: \php.serialize({firstName: 'Kevin', midName: 'van', surName: 'Zonneveld'});
    // *     returns 2: 'a:3:{s:9:"firstName";s:5:"Kevin";s:7:"midName";s:3:"van";s:7:"surName";s:9:"Zonneveld";}'
    var _getType = inp => {
        var type = typeof inp;
        var match;
        var key;
        if (type == 'object' && !inp) {
            return 'null';
        }
        if (type == "object") {
            if (!inp.constructor) {
                return 'object';
            }
            var cons = inp.constructor.toString();
            match = cons.match(/(\w+)\(/);
            if (match) {
                cons = match[1].toLowerCase();
            }
            var types = ["boolean", "number", "string", "array"];
            for (key in types) {
                if (cons == types[key]) {
                    type = types[key];
                    break;
                }
            }
        }
        return type;
    };
    var type = _getType(mixed_value);
    var val;
    var ktype = '';

    switch (type) {
        case "function":
            val = "";
            break;
        case "boolean":
            val = "b:" + (mixed_value ? "1" : "0");
            break;
        case "number":
            val = (Math.round(mixed_value) == mixed_value ? "i" : "d") + ":" + mixed_value;
            break;
        case "string":
            mixed_value = this.utf8_encode(mixed_value);
            val = "s:" + encodeURIComponent(mixed_value).replace(/%../g, 'x').length + ":\"" + mixed_value + "\"";
            break;
        case "array":
        case "object":
            val = "a";
            /*
            if (type == "object") {
                var objname = mixed_value.constructor.toString().match(/(\w+)\(\)/);
                if (objname == undefined) {
                    return;
                }
                objname[1] = this.serialize(objname[1]);
                val = "O" + objname[1].substring(1, objname[1].length - 1);
            }
            */
            var count = 0;
            var vals = "";
            var okey;
            var key;
            for (key in mixed_value) {
                ktype = _getType(mixed_value[key]);
                if (ktype == "function") {
                    continue;
                }

                okey = (key.match(/^[0-9]+$/) ? parseInt(key, 10) : key);
                vals += this.serialize(okey) +
                        this.serialize(mixed_value[key]);
                count++;
            }
            val += ":" + count + ":{" + vals + "}";
            break;
        case "undefined": // Fall-through
        default: // if the JS object has a property which contains a null value, the string cannot be unserialized by PHP
            val = "N";
            break;
    }
    if (type != "object" && type != "array") {
        val += ";";
    }
    return val;
};

exports.set_include_path = function (new_include_path) {
    // Sets the include_path configuration option
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/set_include_path
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: Should influence require(), include(), fopen(), file(), readfile() and file_get_contents()
    // %          note 1: Paths could conceivably allow multiple paths (separated by semicolon and allowing ".", etc.), by
    // %          note 1: checking first for valid HTTP header at targeted address
    // *     example 1: \php.set_include_path('/php_js');
    // *     returns 1: '/old_incl_path'

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    // END REDUNDANT
    var old_path = this.php_js.ini.include_path && this.php_js.ini.include_path.local_value;
    if (!old_path) {
        this.php_js.ini.include_path = {global_value:new_include_path, local_value:new_include_path};
    }
    else {
        this.php_js.ini.include_path.global_value = new_include_path;
        this.php_js.ini.include_path.local_value = new_include_path;
    }
    return old_path;
};

exports.set_time_limit = function (seconds) {
    // Sets the maximum time a script can run
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/set_time_limit
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.set_time_limit(4);
    // *     returns 1: undefined

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    // END REDUNDANT

    this.window.setTimeout(function () {
        if (!this.php_js.timeoutStatus) {
            this.php_js.timeoutStatus = true;
        }
        throw 'Maximum execution time exceeded';
    }, seconds*1000);
};

exports.setcookie = function (name, value, expires, path, domain, secure) {
    // Send a cookie
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/setcookie
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   bugfixed by: Andreas
    // +   bugfixed by: Onno Marsman
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: setrawcookie
    // *     example 1: \php.setcookie('author_name', 'Kevin van Zonneveld');
    // *     returns 1: true
    return this.setrawcookie(name, encodeURIComponent(value), expires, path, domain, secure);
};

exports.setlocale = function (category, locale) {
    // Set locale information
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/setlocale
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   derived from: Blues at http://hacks.bluesmoon.info/strftime/strftime.js
    // +   derived from: YUI Library: http://developer.yahoo.com/yui/docs/YAHOO.util.DateLocale.html
    // -    depends on: getenv
    // %          note 1: Is extensible, but currently only implements locales en,
    // %          note 1: en_US, en_GB, en_AU, fr, and fr_CA for LC_TIME only; C for LC_CTYPE;
    // %          note 1: C and en for LC_MONETARY/LC_NUMERIC; en for LC_COLLATE
    // %          note 2: Uses global: php_js to store locale info
    // %          note 3: Consider using http://demo.icu-project.org/icu-bin/locexp as basis for localization (as in i18n_loc_set_default())
    // *     example 1: \php.setlocale('LC_ALL', 'en_US');
    // *     returns 1: 'en_US'
    var categ = '';

    var cats = [];
    var i = 0;
    var d = this.window.document;

    // BEGIN STATIC
    var _copy = function _copy (orig) {
        if (orig instanceof RegExp) {
            return new RegExp(orig);
        }
        else if (orig instanceof Date) {
            return new Date(orig);
        }
        var newObj = {};
        for (var i in orig) {
            if (typeof orig[i] === 'object') {
                newObj[i] = _copy(orig[i]);
            }
            else {
                newObj[i] = orig[i];
            }
        }
        return newObj;
    };

    // Function usable by a ngettext implementation (apparently not an accessible part of setlocale(), but locale-specific)
    // See http://www.gnu.org/software/gettext/manual/gettext.html#Plural-forms though amended with others from
    // https://developer.mozilla.org/En/Localization_and_Plurals (new categories noted with "MDC" below, though
    // not sure of whether there is a convention for the relative order of these newer groups as far as ngettext)
    // The function name indicates the number of plural forms (nplural)
    // Need to look into http://cldr.unicode.org/ (maybe future JavaScript); Dojo has some functions (under new BSD),
    // including JSON conversions of LDML XML from CLDR: http://bugs.dojotoolkit.org/browser/dojo/trunk/cldr
    // and docs at http://api.dojotoolkit.org/jsdoc/HEAD/dojo.cldr
    var _nplurals1 = n => // e.g., Japanese
    0;
    var _nplurals2a = n => // e.g., English
    (n !== 1 ? 1 : 0);
    var _nplurals2b = n => // e.g., French
    (n > 1 ? 1 : 0);
    var _nplurals2c = n => // e.g., Icelandic (MDC)
    (n % 10 === 1 && n % 100 !== 11 ? 0 : 1);
    var _nplurals3a = n => // e.g., Latvian (MDC has a different order from gettext)
    (n % 10 === 1 && n % 100 !== 11 ? 0 : n !== 0 ? 1 : 2);
    var _nplurals3b = n => // e.g., Scottish Gaelic
    (n === 1 ? 0 : n === 2 ? 1 : 2);
    var _nplurals3c = n => // e.g., Romanian
    (n === 1 ? 0 : (n === 0 || (n % 100 > 0 && n % 100 < 20)) ? 1 : 2);
    var _nplurals3d = n => // e.g., Lithuanian (MDC has a different order from gettext)
    (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && (n % 100 <10 || n % 100 >= 20) ? 1 : 2);
    var _nplurals3e = n => // e.g., Croatian
    (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >=2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
    var _nplurals3f = n => // e.g., Slovak
    (n === 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
    var _nplurals3g = n => // e.g., Polish
    (n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
    var _nplurals3h = n => // e.g., Macedonian (MDC)
    (n % 10 === 1 ? 0 : n % 10 === 2 ? 1 : 2);
    var _nplurals4a = n => // e.g., Slovenian
    (n % 100 === 1 ? 0 : n % 100 === 2 ? 1 : n % 100 === 3 || n % 100 === 4 ? 2 : 3);
    var _nplurals4b = n => // e.g., Maltese (MDC)
    (n === 1 ? 0 : n === 0 || (n % 100 && n % 100 <= 10) ? 1 : n % 100 >= 11 && n % 100 <= 19 ? 2 : 3);
    var _nplurals5 = n => // e.g., Irish Gaeilge (MDC)
    (n === 1 ? 0 : n === 2 ? 1 : n >=3 && n <= 6 ? 2 : n >= 7 && n <= 10 ? 3 : 4);
    var _nplurals6 = n => // e.g., Arabic (MDC) - Per MDC puts 0 as last group
    (n === 0 ? 5 : n === 1 ? 0 : n === 2 ? 1 : n % 100 >= 3 && n % 100 <= 10 ?
                                                                                                                            2 : n % 100 >= 11 && n % 100 <= 99 ? 3 : 4);
    // END STATIC

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};

    var phpjs = this.php_js;

    // Reconcile Windows vs. *nix locale names?
    // Allow different priority orders of languages, esp. if implement gettext as in
    //     LANGUAGE env. var.? (e.g., show German if French is not available)
    if (!phpjs.locales) {
        // Can add to the locales
        phpjs.locales = {};

        phpjs.locales.en = {
            'LC_COLLATE' :  // For strcoll
                function ( str1, str2 ) { // Fix: This one taken from strcmp, but need for other locales; we don't use localeCompare since its locale is not settable
                    return ( str1 == str2 ) ? 0 : ( ( str1 > str2 ) ? 1 : -1 );
                }
            ,
            'LC_CTYPE' : { // Need to change any of these for English as opposed to C?
                an: /^[A-Za-z\d]+$/g,
                al: /^[A-Za-z]+$/g,
                ct: /^[\u0000-\u001F\u007F]+$/g,
                dg: /^[\d]+$/g,
                gr: /^[\u0021-\u007E]+$/g,
                lw: /^[a-z]+$/g,
                pr: /^[\u0020-\u007E]+$/g,
                pu: /^[\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E]+$/g,
                sp: /^[\f\n\r\t\v ]+$/g,
                up: /^[A-Z]+$/g,
                xd: /^[A-Fa-f\d]+$/g,
                CODESET : 'UTF-8',
                 // Used by sql_regcase
                lower : 'abcdefghijklmnopqrstuvwxyz',
                upper : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            },
            'LC_TIME' : { // Comments include nl_langinfo() constant equivalents and any changes from Blues' implementation
                a: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // ABDAY_
                A: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], // DAY_
                b: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // ABMON_
                B: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], // MON_
                c: '%a %d %b %Y %r %Z', // D_T_FMT // changed %T to %r per results
                p: ['AM', 'PM'], // AM_STR/PM_STR
                P: ['am', 'pm'], // Not available in nl_langinfo()
                r: '%I:%M:%S %p', // T_FMT_AMPM (Fixed for all locales)
                x: '%m/%d/%Y', // D_FMT // switched order of %m and %d; changed %y to %Y (C uses %y)
                X: '%r', // T_FMT // changed from %T to %r  (%T is default for C, not English US)
                // Following are from nl_langinfo() or http://www.cptec.inpe.br/sx4/sx4man2/g1ab02e/strftime.4.html
                alt_digits : '', // e.g., ordinal
                ERA : '',
                ERA_YEAR : '',
                ERA_D_T_FMT : '',
                ERA_D_FMT : '',
                ERA_T_FMT : ''
            },
             // Assuming distinction between numeric and monetary is thus:
             // See below for C locale
            'LC_MONETARY' : { // Based on Windows "english" (English_United States.1252) locale
                int_curr_symbol : 'USD',
                currency_symbol : '$',
                mon_decimal_point : '.',
                mon_thousands_sep : ',',
                mon_grouping : [3], // use mon_thousands_sep; "" for no grouping; additional array members indicate successive group lengths after first group (e.g., if to be 1,23,456, could be [3, 2])
                positive_sign : '',
                negative_sign : '-',
                int_frac_digits : 2, // Fractional digits only for money defaults?
                frac_digits : 2,
                p_cs_precedes : 1, // positive currency symbol follows value = 0; precedes value = 1
                p_sep_by_space : 0, // 0: no space between curr. symbol and value; 1: space sep. them unless symb. and sign are adjacent then space sep. them from value; 2: space sep. sign and value unless symb. and sign are adjacent then space separates
                n_cs_precedes : 1, // see p_cs_precedes
                n_sep_by_space : 0, // see p_sep_by_space
                p_sign_posn : 3, // 0: parentheses surround quantity and curr. symbol; 1: sign precedes them; 2: sign follows them; 3: sign immed. precedes curr. symbol; 4: sign immed. succeeds curr. symbol
                n_sign_posn : 0 // see p_sign_posn
            },
            'LC_NUMERIC' : { // Based on Windows "english" (English_United States.1252) locale
                decimal_point : '.',
                thousands_sep : ',',
                grouping : [3] // see mon_grouping, but for non-monetary values (use thousands_sep)
            },
            'LC_MESSAGES' : {
                YESEXPR : '^[yY].*',
                NOEXPR : '^[nN].*',
                YESSTR : '',
                NOSTR : ''
            },
            nplurals : _nplurals2a
        };
        phpjs.locales.en_US = _copy(phpjs.locales.en);
        phpjs.locales.en_US.LC_TIME.c = '%a %d %b %Y %r %Z';
        phpjs.locales.en_US.LC_TIME.x = '%D';
        phpjs.locales.en_US.LC_TIME.X = '%r';
        // The following are based on *nix settings
        phpjs.locales.en_US.LC_MONETARY.int_curr_symbol = 'USD ';
        phpjs.locales.en_US.LC_MONETARY.p_sign_posn = 1;
        phpjs.locales.en_US.LC_MONETARY.n_sign_posn = 1;
        phpjs.locales.en_US.LC_MONETARY.mon_grouping = [3, 3];
        phpjs.locales.en_US.LC_NUMERIC.thousands_sep = '';
        phpjs.locales.en_US.LC_NUMERIC.grouping = [];

        phpjs.locales.en_GB = _copy(phpjs.locales.en);
        phpjs.locales.en_GB.LC_TIME.r =  '%l:%M:%S %P %Z';

        phpjs.locales.en_AU = _copy(phpjs.locales.en_GB);
        phpjs.locales.C = _copy(phpjs.locales.en); // Assume C locale is like English (?) (We need C locale for LC_CTYPE)
        phpjs.locales.C.LC_CTYPE.CODESET = 'ANSI_X3.4-1968';
        phpjs.locales.C.LC_MONETARY = {
            int_curr_symbol : '',
            currency_symbol : '',
            mon_decimal_point : '',
            mon_thousands_sep : '',
            mon_grouping : [],
            p_cs_precedes : 127,
            p_sep_by_space : 127,
            n_cs_precedes : 127,
            n_sep_by_space : 127,
            p_sign_posn : 127,
            n_sign_posn : 127,
            positive_sign : '',
            negative_sign : '',
            int_frac_digits : 127,
            frac_digits : 127
        };
        phpjs.locales.C.LC_NUMERIC = {
            decimal_point : '.',
            thousands_sep : '',
            grouping : []
        };
        phpjs.locales.C.LC_TIME.c = '%a %b %e %H:%M:%S %Y'; // D_T_FMT
        phpjs.locales.C.LC_TIME.x = '%m/%d/%y'; // D_FMT
        phpjs.locales.C.LC_TIME.X = '%H:%M:%S'; // T_FMT
        phpjs.locales.C.LC_MESSAGES.YESEXPR = '^[yY]';
        phpjs.locales.C.LC_MESSAGES.NOEXPR = '^[nN]';

        phpjs.locales.fr =_copy(phpjs.locales.en);
        phpjs.locales.fr.nplurals = _nplurals2b;
        phpjs.locales.fr.LC_TIME.a = ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'];
        phpjs.locales.fr.LC_TIME.A = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
        phpjs.locales.fr.LC_TIME.b = ['jan', 'f\u00E9v', 'mar', 'avr', 'mai', 'jun', 'jui', 'ao\u00FB', 'sep', 'oct', 'nov', 'd\u00E9c'];
        phpjs.locales.fr.LC_TIME.B = ['janvier', 'f\u00E9vrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'ao\u00FBt', 'septembre', 'octobre', 'novembre', 'd\u00E9cembre'];
        phpjs.locales.fr.LC_TIME.c = '%a %d %b %Y %T %Z';
        phpjs.locales.fr.LC_TIME.p = ['', ''];
        phpjs.locales.fr.LC_TIME.P = ['', ''];
        phpjs.locales.fr.LC_TIME.x = '%d.%m.%Y';
        phpjs.locales.fr.LC_TIME.X = '%T';

        phpjs.locales.fr_CA = _copy(phpjs.locales.fr);
        phpjs.locales.fr_CA.LC_TIME.x = '%Y-%m-%d';
    }
    if (!phpjs.locale) {
        phpjs.locale = 'en_US';
        var NS_XHTML = 'http://www.w3.org/1999/xhtml';
        var NS_XML = 'http://www.w3.org/XML/1998/namespace';
        if (d.getElementsByTagNameNS &&
                d.getElementsByTagNameNS(NS_XHTML, 'html')[0]) {
            if (d.getElementsByTagNameNS(NS_XHTML, 'html')[0].getAttributeNS &&
                    d.getElementsByTagNameNS(NS_XHTML, 'html')[0].getAttributeNS(NS_XML, 'lang')) {
                phpjs.locale = d.getElementsByTagName(NS_XHTML, 'html')[0].getAttributeNS(NS_XML, 'lang');
            } else if (d.getElementsByTagNameNS(NS_XHTML, 'html')[0].lang) { // XHTML 1.0 only
                phpjs.locale = d.getElementsByTagNameNS(NS_XHTML, 'html')[0].lang;
            }
        } else if (d.getElementsByTagName('html')[0] && d.getElementsByTagName('html')[0].lang) {
            phpjs.locale = d.getElementsByTagName('html')[0].lang;
        }
    }
    phpjs.locale = phpjs.locale.replace('-', '_'); // PHP-style

    // Fix locale if declared locale hasn't been defined
    if (!(phpjs.locale in phpjs.locales)) {
        if (phpjs.locale.replace(/_[a-zA-Z]+$/, '') in phpjs.locales) {
            phpjs.locale = phpjs.locale.replace(/_[a-zA-Z]+$/, '');
        }
    }

    if (!phpjs.localeCategories) {
        phpjs.localeCategories = {
            'LC_COLLATE': phpjs.locale, // for string comparison, see strcoll()
            'LC_CTYPE': phpjs.locale,// for character classification and conversion, for example strtoupper()
            'LC_MONETARY': phpjs.locale,// for localeconv()
            'LC_NUMERIC': phpjs.locale,// for decimal separator (See also localeconv())
            'LC_TIME': phpjs.locale,// for date and time formatting with strftime()
            'LC_MESSAGES':phpjs.locale// for system responses (available if PHP was compiled with libintl)
        };
    }
    // END REDUNDANT

    if (locale === null || locale === '') {
        locale = this.getenv(category) || this.getenv('LANG');
    } else if (locale instanceof Array) {
        for (i=0; i < locale.length; i++) {
            if (!(locale[i] in this.php_js.locales)) {
                if (i === locale.length-1) {
                    return false; // none found
                }
                continue;
            }
            locale = locale[i];
            break;
        }
    }

    // Just get the locale
    if (locale === '0' || locale === 0) {
        if (category === 'LC_ALL') {
            for (categ in this.php_js.localeCategories) {
                cats.push(categ+'='+this.php_js.localeCategories[categ]); // Add ".UTF-8" or allow ".@latint", etc. to the end?
            }
            return cats.join(';');
        }
        return this.php_js.localeCategories[category];
    }

    if (!(locale in this.php_js.locales)) {
        return false; // Locale not found
    }

    // Set and get locale
    if (category === 'LC_ALL') {
        for (categ in this.php_js.localeCategories) {
            this.php_js.localeCategories[categ] = locale;
        }
    } else {
        this.php_js.localeCategories[category] = locale;
    }
    return locale;
};

exports.setrawcookie = function (name, value, expires, path, domain, secure) {
    // Send a cookie with no url encoding of the value
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/setrawcookie
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   derived from: setcookie
    // +   input by: Michael
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.setcookie('author_name', 'Kevin van Zonneveld');
    // *     returns 1: true
    if (typeof expires === 'string' && (/^\d+$/).test(expires)) {
        expires = parseInt(expires, 10);
    }

    if (expires instanceof Date) {
        expires = expires.toGMTString();
    } else if (typeof(expires) === 'number') {
        expires = (new Date(expires * 1e3)).toGMTString();
    }

    var r = [name + '=' + value];
    var s = {};
    var i = '';
    s = {expires, path, domain};
    for (i in s) {
        if (s.hasOwnProperty(i)) { // Exclude items on Object.prototype
            s[i] && r.push(i + '=' + s[i]);
        }
    }

    return secure && r.push('secure'),
                    this.window.document.cookie = r.join(";"),
                        true;
};

exports.settype = function (vr, type) {
    // http://kevin.vanzonneveld.net
    // +   original by: Waldo Malqui Silva
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    revised by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Credits to Crockford also
    // %        note 2: only works on global variables, and "vr" must be passed in as a string
    // *     example 1: \php.foo = '5bar';
    // *     example 1: \php.settype('foo', 'integer');
    // *     results 1: foo === 5
    // *     returns 1: true
    // *     example 2: \php.foo = true;
    // *     example 2: \php.settype('foo', 'string');
    // *     results 2: foo === '1'
    // *     returns 2: true
    var is_array = arr => typeof arr === 'object' && typeof arr.length === 'number' &&
                !(arr.propertyIsEnumerable('length')) &&
                typeof arr.splice === 'function';
    var v;
    var mtch;
    var i;
    var obj;
    v = this[vr] ? this[vr] : vr;

    try {
        switch (type) {
            case 'boolean':
                if (is_array(v) && v.length === 0) {this[vr]=false;}
                else if (v === '0') {this[vr]=false;}
                else if (typeof v === 'object' && !is_array(v)) {
                    var lgth = false;
                    for (i in v) {
                        lgth = true;
                    }
                    this[vr]=lgth;
                }
                else {this[vr] = !!v;}
                break;
            case 'integer':
                if (typeof v === 'number') {this[vr]=parseInt(v, 10);}
                else if (typeof v === 'string') {
                    mtch = v.match(/^([+\-]?)(\d+)/);
                    if (!mtch) {this[vr]=0;}
                    else {this[vr]=parseInt(v, 10);}
                }
                else if (v === true) {this[vr]=1;}
                else if (v === false || v === null) {this[vr]=0;}
                else if (is_array(v) && v.length === 0) {this[vr]=0;}
                else if (typeof v === 'object') {this[vr]=1;}

                break;
            case 'float':
                if (typeof v === 'string') {
                    mtch = v.match(/^([+\-]?)(\d+(\.\d+)?|\.\d+)([eE][+\-]?\d+)?/);
                    if (!mtch) {this[vr]=0;}
                    else {this[vr]=parseFloat(v, 10);}
                }
                else if (v === true) {this[vr]=1;}
                else if (v === false || v === null) {this[vr]=0;}
                else if (is_array(v) && v.length === 0) {this[vr]=0;}
                else if (typeof v === 'object') {this[vr]=1;}
                break;
            case 'string':
                if (v === null || v === false) {this[vr]='';}
                else if (is_array(v)) {this[vr]='Array';}
                else if (typeof v === 'object') {this[vr]='Object';}
                else if (v === true) {this[vr]='1';}
                else {this[vr] += '';} // numbers (and functions?)
                break;
            case 'array':
                if (v === null) {this[vr] = [];}
                else if (typeof v !== 'object') {this[vr] = [v];}
                break;
            case 'object':
                if (v === null) {this[vr]={};}
                else if (is_array(v)) {
                    for (i = 0, obj={}; i < v.length; i++) {
                        obj[i] = v;
                    }
                    this[vr] = obj;
                }
                else if (typeof v !== 'object') {this[vr]={scalar:v};}
                break;
            case 'null':
                delete this[vr];
                break;
        }
        return true;
    } catch (e) {
        return false;
    }
};

exports.sha1 = function (str) {
    // Calculate the sha1 hash of a string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/sha1
    // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // + namespaced by: Michael White (http://getsprink.com)
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: utf8_encode
    // *     example 1: \php.sha1('Kevin van Zonneveld');
    // *     returns 1: '54916d2e62f65b3afa6e192e6a601cdbe5cb5897'
    var rotate_left = (n, s) => {
        var t4 = ( n<<s ) | (n>>>(32-s));
        return t4;
    };

    /*var lsb_hex = function (val) { // Not in use; needed?
        var str="";
        var i;
        var vh;
        var vl;

        for ( i=0; i<=6; i+=2 ) {
            vh = (val>>>(i*4+4))&0x0f;
            vl = (val>>>(i*4))&0x0f;
            str += vh.toString(16) + vl.toString(16);
        }
        return str;
    };*/

    var cvt_hex = val => {
        var str="";
        var i;
        var v;

        for (i=7; i>=0; i--) {
            v = (val>>>(i*4))&0x0f;
            str += v.toString(16);
        }
        return str;
    };

    var blockstart;
    var i;
    var j;
    var W = new Array(80);
    var H0 = 0x67452301;
    var H1 = 0xEFCDAB89;
    var H2 = 0x98BADCFE;
    var H3 = 0x10325476;
    var H4 = 0xC3D2E1F0;
    var A;
    var B;
    var C;
    var D;
    var E;
    var temp;

    str = this.utf8_encode(str);
    var str_len = str.length;

    var word_array = [];
    for (i=0; i<str_len-3; i+=4) {
        j = str.charCodeAt(i)<<24 | str.charCodeAt(i+1)<<16 |
        str.charCodeAt(i+2)<<8 | str.charCodeAt(i+3);
        word_array.push( j );
    }

    switch (str_len % 4) {
        case 0:
            i = 0x080000000;
        break;
        case 1:
            i = str.charCodeAt(str_len-1)<<24 | 0x0800000;
        break;
        case 2:
            i = str.charCodeAt(str_len-2)<<24 | str.charCodeAt(str_len-1)<<16 | 0x08000;
        break;
        case 3:
            i = str.charCodeAt(str_len-3)<<24 | str.charCodeAt(str_len-2)<<16 | str.charCodeAt(str_len-1)<<8    | 0x80;
        break;
    }

    word_array.push( i );

    while ((word_array.length % 16) != 14 ) {word_array.push( 0 );}

    word_array.push( str_len>>>29 );
    word_array.push( (str_len<<3)&0x0ffffffff );

    for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {
        for (i=0; i<16; i++) {W[i] = word_array[blockstart+i];}
        for (i=16; i<=79; i++) {W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);}


        A = H0;
        B = H1;
        C = H2;
        D = H3;
        E = H4;

        for (i= 0; i<=19; i++) {
            temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }

        for (i=20; i<=39; i++) {
            temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }

        for (i=40; i<=59; i++) {
            temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }

        for (i=60; i<=79; i++) {
            temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }

        H0 = (H0 + A) & 0x0ffffffff;
        H1 = (H1 + B) & 0x0ffffffff;
        H2 = (H2 + C) & 0x0ffffffff;
        H3 = (H3 + D) & 0x0ffffffff;
        H4 = (H4 + E) & 0x0ffffffff;
    }

    temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
    return temp.toLowerCase();
};

exports.sha1_file = function ( str_filename ) {
    // Calculate the sha1 hash of given filename
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/sha1_file
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: file_get_contents
    // -    depends on: sha1
    // *     example 1: \php.sha1_file('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm');
    // *     returns 1: '40bd001563085fc35165329ea1ff5c5ecbdbbeef'
    var buf = this.file_get_contents(str_filename);
    return this.sha1(buf);
};

exports.shuffle = function (inputArr) {
    // Randomly shuffle the contents of an array
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/shuffle
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    revised by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: This function deviates from PHP in returning a copy of the array instead
    // %        note 1: of acting by reference and returning true; this was necessary because
    // %        note 1: IE does not allow deleting and re-adding of properties without caching
    // %        note 1: of property position; you can set the ini of "phpjs.strictForIn" to true to
    // %        note 1: get the PHP behavior, but use this only if you are in an environment
    // %        note 1: such as Firefox extensions where for-in iteration order is fixed and true
    // %        note 1: property deletion is supported. Note that we intend to implement the PHP
    // %        note 1: behavior by default if IE ever does allow it; only gives shallow copy since
    // %        note 1: is by reference in PHP anyways
    // *     example 1: \php.ini_set('phpjs.strictForIn', true);
    // *     example 1: \php.shuffle({5:'a', 2:'3', 3:'c', 4:5, 'q':5});
    // *     returns 1: {5:'a', 4:5, 'q':5, 3:'c', 2:'3'}
    // *     example 2: \php.ini_set('phpjs.strictForIn', true);
    // *     example 2: \php.var data = {5:'a', 2:'3', 3:'c', 4:5, 'q':5};
    // *     example 2: \php.shuffle(data);
    // *     results 2: {5:'a', 'q':5, 3:'c', 2:'3', 4:5}
    // *     returns 2: true
    var valArr = [];

    var k = '';
    var i = 0;
    var strictForIn = false;
    var populateArr = [];

    for (k in inputArr) { // Get key and value arrays
        if (inputArr.hasOwnProperty(k)) {
            valArr.push(inputArr[k]);
            if (strictForIn) {
                delete inputArr[k];
            }
        }
    }
    valArr.sort(() => 0.5 - Math.random());

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    // END REDUNDANT

    strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value &&
                    this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;

    for (i = 0; i < valArr.length; i++) { // Repopulate the old array
        populateArr[i] = valArr[i];
    }

    return strictForIn || populateArr;
};

exports.sin = arg => // Returns the sine of the number in radians
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/sin
// +   original by: Onno Marsman
// *     example 1: \php.sin(8723321.4);
// *     returns 1: -0.9834330348825909
Math.sin(arg);

exports.sinh = arg => // Returns the hyperbolic sine of the number, defined as (exp(number) - exp(-number))/2
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/sinh
// +   original by: Onno Marsman
// *     example 1: \php.sinh(-0.9834330348825909);
// *     returns 1: -1.1497971402636502
(Math.exp(arg) - Math.exp(-arg)) / 2;

exports.sizeof = function ( mixed_var, mode ) {
    // !No description available for sizeof. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/sizeof
    // +   original by: Philip Peterson
    // -    depends on: count
    // *     example 1: \php.sizeof([[0,0],[0,-4]], 'COUNT_RECURSIVE');
    // *     returns 1: 6
    // *     example 2: \php.sizeof({'one' : [1,2,3,4,5]}, 'COUNT_RECURSIVE');
    // *     returns 2: 6

    return this.count( mixed_var, mode );
};

exports.sleep = seconds => {
    // Delay for a given number of seconds
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/sleep
    // +   original by: Christian Doebler
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // %          note: For study purposes. Current implementation could lock up the user's browser.
    // %          note: Consider using setTimeout() instead.
    // *     example 1: \php.sleep(1);
    // *     returns 1: 0

    var start = new Date().getTime();
    while (new Date() < start + seconds*1000) {}
    return 0;
};

exports.sort = function (inputArr, sort_flags) {
    // Sort an array
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/sort
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    revised by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: SORT_STRING (as well as natsort and natcasesort) might also be
    // %        note 1: integrated into all of these functions by adapting the code at
    // %        note 1: http://sourcefrog.net/projects/natsort/natcompare.js
    // %        note 2: This function deviates from PHP in returning a copy of the array instead
    // %        note 2: of acting by reference and returning true; this was necessary because
    // %        note 2: IE does not allow deleting and re-adding of properties without caching
    // %        note 2: of property position; you can set the ini of "phpjs.strictForIn" to true to
    // %        note 2: get the PHP behavior, but use this only if you are in an environment
    // %        note 2: such as Firefox extensions where for-in iteration order is fixed and true
    // %        note 2: property deletion is supported. Note that we intend to implement the PHP
    // %        note 2: behavior by default if IE ever does allow it; only gives shallow copy since
    // %        note 2: is by reference in PHP anyways
    // -    depends on: i18n_loc_get_default
    // *     example 1: \php.sort(['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: ['Kevin', 'Zonneveld', 'van']
    // *     example 2: \php.ini_set('phpjs.strictForIn', true);
    // *     example 2: \php.fruits = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
    // *     example 2: \php.sort(fruits);
    // *     results 2: fruits == {0: 'apple', 1: 'banana', 2: 'lemon', 3: 'orange'}
    // *     returns 2: true
    var valArr = [];

    var keyArr=[];
    var k = '';
    var i = 0;
    var sorter = false;
    var that = this;
    var strictForIn = false;
    var populateArr = [];

    switch (sort_flags) {
        case 'SORT_STRING': // compare items as strings
            sorter = (a, b) => that.strnatcmp(a, b);
            break;
        case 'SORT_LOCALE_STRING': // compare items as strings, based on the current locale (set with  i18n_loc_set_default() as of PHP6)
            var loc = this.i18n_loc_get_default();
            sorter = this.php_js.i18nLocales[loc].sorting;
            break;
        case 'SORT_NUMERIC': // compare items numerically
            sorter = (a, b) => a - b;
            break;
        case 'SORT_REGULAR': // compare items normally (don't change types)
        default:
            sorter = (a, b) => {
                if (a > b) {
                    return 1;
                }
                if (a < b) {
                    return -1;
                }
                return 0;
            };
            break;
    }

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    // END REDUNDANT

    strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value &&
                    this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;

    for (k in inputArr) { // Get key and value arrays
        if (inputArr.hasOwnProperty(k)) {
            valArr.push(inputArr[k]);
            if (strictForIn) {
                delete inputArr[k];
            }
        }
    }

    valArr.sort(sorter);

    for (i = 0; i < valArr.length; i++) { // Repopulate the old array
        populateArr[i] = valArr[i];
    }
    return strictForIn || populateArr;
};

exports.soundex = str => {
    // Calculate the soundex key of a string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/soundex
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +    tweaked by: Jack
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   original by: Arnout Kazemier (http://www.3rd-Eden.com)
    // *     example 1: \php.soundex('Kevin');
    // *     returns 1: 'K150'
    // *     example 2: \php.soundex('Ellery');
    // *     returns 2: 'E460'
    // *     example 3: \php.soundex('Euler');
    // *     returns 3: 'E460'
    var upStr = (str+'').toUpperCase();
    var sdx = [upStr[0],0,0,0];
    var m = {BFPV: 1, CGJKQSXZ: 2, DT: 3, L: 4, MN: 5, R: 6 };
    var k = ['BFPV', 'CGJKQSXZ', 'DT', 'L', 'MN', 'R'];
    var i = 1;
    var j = 0;
    var s = 0;
    var key;
    var code;
    var l = upStr.length;

    for (; i < l; i++){
        j = k.length;
        while (s != 3 && j--){
            key = k[j];
            if (key.indexOf(upStr[i]) !== -1) {
                code = m[key];
                if (code != sdx[s]){
                    sdx[++s] = code;
                }
            }
        }
    }

    return sdx.join('');
};

exports.split = function (delimiter, string) {
    // Split string into array by regular expression
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/split
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: explode
    // *     example 1: \php.split(' ', 'Kevin van Zonneveld');
    // *     returns 1: {0: 'Kevin', 1: 'van', 2: 'Zonneveld'}
    return this.explode( delimiter, string );
};

exports.sprintf = function(...args) {
    // Return a formatted string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/sprintf
    // +   original by: Ash Searle (http://hexmen.com/blog/)
    // + namespaced by: Michael White (http://getsprink.com)
    // +    tweaked by: Jack
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Paulo Freitas
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: \php.sprintf("%01.2f", 123.1);
    // *     returns 1: 123.10
    // *     example 2: \php.sprintf("[%10s]", 'monkey');
    // *     returns 2: '[    monkey]'
    // *     example 3: \php.sprintf("[%'#10s]", 'monkey');
    // *     returns 3: '[####monkey]'
    var regex = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g;
    var a = args;
    var i = 0;
    var format = a[i++];

    // pad()
    var pad = (str, len, chr, leftJustify) => {
        if (!chr) {chr = ' ';}
        var padding = (str.length >= len) ? '' : Array(1 + len - str.length >>> 0).join(chr);
        return leftJustify ? str + padding : padding + str;
    };

    // justify()
    var justify = (value, prefix, leftJustify, minWidth, zeroPad, customPadChar) => {
        var diff = minWidth - value.length;
        if (diff > 0) {
            if (leftJustify || !zeroPad) {
                value = pad(value, minWidth, customPadChar, leftJustify);
            } else {
                value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
            }
        }
        return value;
    };

    // formatBaseX()
    var formatBaseX = (value, base, prefix, leftJustify, minWidth, precision, zeroPad) => {
        // Note: casts negative numbers to positive ones
        var number = value >>> 0;
        prefix = prefix && number && {'2': '0b', '8': '0', '16': '0x'}[base] || '';
        value = prefix + pad(number.toString(base), precision || 0, '0', false);
        return justify(value, prefix, leftJustify, minWidth, zeroPad);
    };

    // formatString()
    var formatString = (value, leftJustify, minWidth, precision, zeroPad, customPadChar) => {
        if (precision != null) {
            value = value.slice(0, precision);
        }
        return justify(value, '', leftJustify, minWidth, zeroPad, customPadChar);
    };

    // doFormat()
    var doFormat = (substring, valueIndex, flags, minWidth, _, precision, type) => {
        var number;
        var prefix;
        var method;
        var textTransform;
        var value;

        if (substring == '%%') {return '%';}

        // parse flags
        var leftJustify = false;

        var positivePrefix = '';
        var zeroPad = false;
        var prefixBaseX = false;
        var customPadChar = ' ';
        var flagsl = flags.length;
        for (var j = 0; flags && j < flagsl; j++) {
            switch (flags.charAt(j)) {
                case ' ': positivePrefix = ' '; break;
                case '+': positivePrefix = '+'; break;
                case '-': leftJustify = true; break;
                case "'": customPadChar = flags.charAt(j+1); break;
                case '0': zeroPad = true; break;
                case '#': prefixBaseX = true; break;
            }
        }

        // parameters may be null, undefined, empty-string or real valued
        // we want to ignore null, undefined and empty-string values
        if (!minWidth) {
            minWidth = 0;
        } else if (minWidth == '*') {
            minWidth = +a[i++];
        } else if (minWidth.charAt(0) == '*') {
            minWidth = +a[minWidth.slice(1, -1)];
        } else {
            minWidth = +minWidth;
        }

        // Note: undocumented perl feature:
        if (minWidth < 0) {
            minWidth = -minWidth;
            leftJustify = true;
        }

        if (!isFinite(minWidth)) {
            throw new Error('sprintf: (minimum-)width must be finite');
        }

        if (!precision) {
            precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type == 'd') ? 0 : undefined;
        } else if (precision == '*') {
            precision = +a[i++];
        } else if (precision.charAt(0) == '*') {
            precision = +a[precision.slice(1, -1)];
        } else {
            precision = +precision;
        }

        // grab value using valueIndex if required?
        value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];

        switch (type) {
            case 's': return formatString(String(value), leftJustify, minWidth, precision, zeroPad, customPadChar);
            case 'c': return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
            case 'b': return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'o': return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'x': return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'X': return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad).toUpperCase();
            case 'u': return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'i':
            case 'd':
                number = parseInt(+value, 10);
                prefix = number < 0 ? '-' : positivePrefix;
                value = prefix + pad(String(Math.abs(number)), precision, '0', false);
                return justify(value, prefix, leftJustify, minWidth, zeroPad);
            case 'e':
            case 'E':
            case 'f':
            case 'F':
            case 'g':
            case 'G':
                number = +value;
                prefix = number < 0 ? '-' : positivePrefix;
                method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
                textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
                value = prefix + Math.abs(number)[method](precision);
                return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
            default: return substring;
        }
    };

    return format.replace(regex, doFormat);
};

exports.sql_regcase = function (str) {
    // Make regular expression for case insensitive match
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/sql_regcase
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: setlocale
    // *     example 1: \php.sql_regcase('Foo - bar.');
    // *     returns 1: '[Ff][Oo][Oo] - [Bb][Aa][Rr].'
    this.setlocale('LC_ALL', 0);
    var i=0;
    var upper = '';
    var lower='';
    var pos=0;
    var retStr='';

    upper = this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.upper;
    lower = this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.lower;

    for (i=0; i < str.length; i++) {
        if (((pos = upper.indexOf(str.charAt(i))) !== -1) || ((pos = lower.indexOf(str.charAt(i))) !== -1)) {
            retStr += '['+upper.charAt(pos)+lower.charAt(pos)+']';
        }
        else {
            retStr += str.charAt(i);
        }
    }
    return retStr;
};

exports.sqrt = arg => // Returns the square root of the number
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/sqrt
// +   original by: Onno Marsman
// *     example 1: \php.sqrt(8723321.4);
// *     returns 1: 2953.5269424875746

Math.sqrt(arg);

exports.sscanf = function (str, format) {
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Since JS does not support scalar reference variables, any additional arguments to the function will
    // %        note 1: only be allowable here as strings referring to a global variable (which will then be set to the value
    // %        note 1: found in 'str' corresponding to the appropriate conversion specification in 'format'
    // %        note 2: I am unclear on how WS is to be handled here because documentation seems to me to contradict PHP behavior
    // *     example 1: \php.sscanf('SN/2350001', 'SN/%d');
    // *     returns 1: [2350001]
    // *     example 2: \php.var myVar; // Will be set by function
    // *     example 2: \php.sscanf('SN/2350001', 'SN/%d', 'myVar');
    // *     returns 2: 1
    // *     example 3: \php.sscanf("10--20", "%2$d--%1$d"); // Must escape '$' in PHP, but not JS
    // *     returns 3: [20, 10]

    // SETUP
    var retArr = [];

    var num = 0;
    var _NWS = /\S/;
    var args = arguments;
    var that = this;
    var digit;

    var _setExtraConversionSpecs = offset => {
        // Since a mismatched character sets us off track from future legitimate finds, we just scan
        // to the end for any other conversion specifications (besides a percent literal), setting them to null
        // sscanf seems to disallow all conversion specification components (of sprintf) except for type specifiers
        //var matches = format.match(/%[+-]?([ 0]|'.)?-?\d*(\.\d+)?[bcdeufFosxX]/g); // Do not allow % in last char. class
        var matches = format.slice(offset).match(/%[cdeEufgosxX]/g); // Do not allow % in last char. class;
                                                                                                // b, F,G give errors in PHP, but 'g', though also disallowed, doesn't
        if (matches) {
            var lgth = matches.length;
            while (lgth--) {
                retArr.push(null);
            }
        }
        return _finish();
    };

    var _finish = () => {
        if (args.length === 2) {
            return retArr;
        }
        for (var i=0; i < retArr.length; ++i) {
            that.window[args[i+2]] = retArr[i];
        }
        return i;
    };

    var _addNext = (j, regex, cb) => {
        if (assign) {
            var remaining = str.slice(j);
            var check = width ? remaining.substr(0, width) : remaining;
            var match = regex.exec(check);
            var testNull = retArr[digit !== undefined ? digit : retArr.length] = match ? (cb ? cb(...match) : match[0]) : null;
            if (testNull === null) {
                throw 'No match in string';
            }
            return j+match[0].length;
        }
        return j;
    };

    if (arguments.length < 2) {
        throw 'Not enough arguments passed to sscanf';
    }

    // PROCESS
    for (var i=0, j = 0; i < format.length; i++) {
        var width = 0;
        var assign = true;

        if (format.charAt(i) === '%') {
            if (format.charAt(i+1) === '%') {
                if (str.charAt(j) === '%') { // a matched percent literal
                    ++i, ++j; // skip beyond duplicated percent
                    continue;
                }
                // Format indicated a percent literal, but not actually present
                return _setExtraConversionSpecs(i+2);
            }

            // CHARACTER FOLLOWING PERCENT IS NOT A PERCENT

            var prePattern = new RegExp('^(?:(\\d+)\\$)?(\\*)?(\\d*)([hlL]?)', 'g'); // We need 'g' set to get lastIndex

            var preConvs = prePattern.exec(format.slice(i+1));

            var tmpDigit = digit;
            if (tmpDigit && preConvs[1] === undefined) {
                throw 'All groups in sscanf() must be expressed as numeric if any have already been used';
            }
            digit = preConvs[1] ? parseInt(preConvs[1], 10)-1 : undefined;

            assign = !preConvs[2];
            width = parseInt(preConvs[3], 10);
            var sizeCode = preConvs[4];
            i += prePattern.lastIndex;

            // Fix: Does PHP do anything with these? Seems not to matter
            if (sizeCode) { // This would need to be processed later
                switch (sizeCode) {
                    case 'h': // Treats subsequent as short int (for d,i,n) or unsigned short int (for o,u,x)
                    case 'l': // Treats subsequent as long int (for d,i,n), or unsigned long int (for o,u,x);
                                   //    or as double (for e,f,g) instead of float or wchar_t instead of char
                    case 'L': // Treats subsequent as long double (for e,f,g)
                        break;
                    default:
                        throw 'Unexpected size specifier in sscanf()!';
                        break;
                }
            }
            // PROCESS CHARACTER
            try {
                switch (format.charAt(i+1)) {
                    // For detailed explanations, see http://web.archive.org/web/20031128125047/http://www.uwm.edu/cgi-bin/IMT/wwwman?topic=scanf%283%29&msection=
                    // Also http://www.mathworks.com/access/helpdesk/help/techdoc/ref/sscanf.html
                    // p, S, C arguments in C function not available
                    // DOCUMENTED UNDER SSCANF
                    case 'F': // Not supported in PHP sscanf; the argument is treated as a float, and
                                     //  presented as a floating-point number (non-locale aware)
                        // sscanf doesn't support locales, so no need for two (see %f)
                        break;
                    case 'g': // Not supported in PHP sscanf; shorter of %e and %f
                        // Irrelevant to input conversion
                        break;
                    case 'G': // Not supported in PHP sscanf; shorter of %E and %f
                        // Irrelevant to input conversion
                        break;
                    case 'b': // Not supported in PHP sscanf; the argument is treated as an integer, and presented as a binary number
                        // Not supported - couldn't distinguish from other integers
                        break;
                    case 'i': // Integer with base detection (Equivalent of 'd', but base 0 instead of 10)
                        j = _addNext(j, /([+-])?(?:(?:0x([\da-fA-F]+))|(?:0([0-7]+))|(\d+))/, (num, sign, hex, oct, dec) => hex ? parseInt(num, 16) : oct ? parseInt(num, 8) : parseInt(num, 10));
                        break;
                    case 'n': // Number of characters processed so far
                        retArr[digit !== undefined ? digit : retArr.length-1] = j;
                        break;
                    // DOCUMENTED UNDER SPRINTF
                    case 'c': // Get character; suppresses skipping over whitespace! (but shouldn't be whitespace in format anyways, so no difference here)
                        // Non-greedy match
                        j = _addNext(j, new RegExp('.{1,'+(width || 1)+'}'));
                        break;
                    case 'D': // sscanf documented decimal number; equivalent of 'd';
                    case 'd': // Optionally signed decimal integer
                        j = _addNext(j, /([+-])?(?:0*)(\d+)/, (num, sign, dec) => {
                            // Ignores initial zeroes, unlike %i and parseInt()
                            var decInt = parseInt((sign ||'')+dec, 10);
                            if (decInt < 0) { // PHP also won't allow less than -2147483648
                                return decInt < -2147483648 ? -2147483648: decInt; // integer overflow with negative
                            }
                            else { // PHP also won't allow greater than -2147483647
                                return decInt < 2147483647 ? decInt : 2147483647;
                            }
                        });
                        break;
                    case 'f': // Although sscanf doesn't support locales, this is used instead of '%F'; seems to be same as %e
                    case 'E': // These don't discriminate here as both allow exponential float of either case
                    case 'e':
                        j = _addNext(j, /([+-])?(?:0*)(\d*\.?\d*(?:[eE]?\d+)?)/, (num, sign, dec) => {
                            if (dec === '.') {
                                return null;
                            }
                            return parseFloat((sign ||'')+dec); // Ignores initial zeroes, unlike %i and parseFloat()
                        });
                        break;
                    case 'u': // unsigned decimal integer
                        // We won't deal with integer overflows due to signs
                        j = _addNext(j, /([+-])?(?:0*)(\d+)/, (num, sign, dec) => {
                            // Ignores initial zeroes, unlike %i and parseInt()
                            var decInt = parseInt(dec, 10);
                            if (sign === '-') { // PHP also won't allow greater than 4294967295
                                return 4294967296-decInt; // integer overflow with negative
                            }
                            else {
                                return decInt < 4294967295 ? decInt : 4294967295;
                            }
                        });
                        break;
                    case 'o': // Octal integer // Fix: add overflows as above?
                        j = _addNext(j, /([+-])?(?:0([0-7]+))/, (num, sign, oct) => parseInt(num, 8));
                        break;
                    case 's': // Greedy match
                        j = _addNext(j, /\S+/);
                        break;
                    case 'X': // Same as 'x'?
                    case 'x':
                         // Fix: add overflows as above?
                        // Initial 0x not necessary here
                        j = _addNext(j, /([+-])?(?:(?:0x)?([\da-fA-F]+))/, (num, sign, hex) => parseInt(num, 16));
                        break;
                    case '': // If no character left in expression
                        throw 'Missing character after percent mark in sscanf() format argument';
                    default:
                        throw 'Unrecognized character after percent mark in sscanf() format argument';
                }
            }
            catch(e) {
                if (e === 'No match in string') { // Allow us to exit
                    return _setExtraConversionSpecs(i+2);
                }
            }
            ++i; // Calculate skipping beyond initial percent too
        }
        else if (format.charAt(i) !== str.charAt(j)) {
            // Fix: Double-check i whitespace ignored in string and/or formats
            _NWS.lastIndex = 0;
            if ((_NWS).test(str.charAt(j)) || str.charAt(j) === '') { // Whitespace doesn't need to be an exact match)
                return _setExtraConversionSpecs(i+1);
            }
            else {
                // Adjust strings when encounter non-matching whitespace, so they align in future checks above
                str = str.slice(0, j)+str.slice(j+1); // Ok to replace with j++;?
                i--;
            }
        }
        else {
            j++;
        }
    }

    // POST-PROCESSING
    return _finish();
};

exports.str_getcsv = (input, delimiter, enclosure, escape) => {
    // Parse a CSV string into an array
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/str_getcsv
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.str_getcsv('"abc", "def", "ghi"');
    // *     returns 1: ['abc', 'def', 'ghi']
    var output = [];
    var backwards = str => // We need to go backwards to simulate negative look-behind (don't split on
    //an escaped enclosure even if followed by the delimiter and another enclosure mark)
    str.split('').reverse().join('');
    var pq = str => // preg_quote()
    (str+'').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1");

    delimiter = delimiter || ',';
    enclosure = enclosure || '"';
    escape = escape || '\\';

    input = input.replace(new RegExp('^\\s*'+pq(enclosure)), '').replace(new RegExp(pq(enclosure)+'\\s*$'), '');

    // PHP behavior may differ by including whitespace even outside of the enclosure
    input = backwards(input).split(new RegExp(pq(enclosure)+'\\s*'+pq(delimiter)+'\\s*'+pq(enclosure)+'(?!'+pq(escape)+')', 'g')).reverse();

    for (var i = 0; i < input.length; i++) {
        output.push(backwards(input[i]).replace(new RegExp(pq(escape)+pq(enclosure), 'g'), enclosure));
    }

    return output;
};

exports.str_ireplace = (search, replace, subject) => {
    // Replaces all occurrences of search in haystack with replace / case-insensitive
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/str_ireplace
    // +   original by: Martijn Wieringa
    // +      input by: penutbutterjelly
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    tweaked by: Jack
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Philipp Lenssen
    // *     example 1: \php.str_ireplace('l', 'l', 'HeLLo');
    // *     returns 1: 'Hello'
    // *     example 2: \php.str_ireplace('$', 'foo', '$bar');
    // *     returns 2: 'foobar'
    var i;

    var k = '';
    var searchl = 0;
    var reg;

    var escapeRegex = s => s.replace(/([\\\^\$*+\[\]?{}.=!:(|)])/g, '\\$1');

    search += '';
    searchl = search.length;
    if (!(replace instanceof Array)) {
        replace = [replace];
        if (search instanceof Array) {
            // If search is an array and replace is a string,
            // then this replacement string is used for every value of search
            while (searchl > replace.length) {
                replace[replace.length] = replace[0];
            }
        }
    }

    if (!(search instanceof Array)) {
        search = [search];
    }
    while (search.length>replace.length) {
        // If replace has fewer values than search,
        // then an empty string is used for the rest of replacement values
        replace[replace.length] = '';
    }

    if (subject instanceof Array) {
        // If subject is an array, then the search and replace is performed
        // with every entry of subject , and the return value is an array as well.
        for (k in subject) {
            if (subject.hasOwnProperty(k)) {
                subject[k] = str_ireplace(search, replace, subject[k]);
            }
        }
        return subject;
    }

    searchl = search.length;
    for (i = 0; i < searchl; i++) {
        reg = new RegExp(escapeRegex(search[i]), 'gi');
        subject = subject.replace(reg, replace[i]);
    }

    return subject;
};

exports.str_pad = (input, pad_length, pad_string, pad_type) => {
    // Returns input string padded on the left or right to specified length with pad_string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/str_pad
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // + namespaced by: Michael White (http://getsprink.com)
    // +      input by: Marco van Oort
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.str_pad('Kevin van Zonneveld', 30, '-=', 'STR_PAD_LEFT');
    // *     returns 1: '-=-=-=-=-=-Kevin van Zonneveld'
    // *     example 2: \php.str_pad('Kevin van Zonneveld', 30, '-', 'STR_PAD_BOTH');
    // *     returns 2: '------Kevin van Zonneveld-----'
    var half = '';

    var pad_to_go;

    var str_pad_repeater = (s, len) => {
        var collect = '';
        var i;

        while (collect.length < len) {collect += s;}
        collect = collect.substr(0,len);

        return collect;
    };

    input += '';
    pad_string = pad_string !== undefined ? pad_string : ' ';

    if (pad_type != 'STR_PAD_LEFT' && pad_type != 'STR_PAD_RIGHT' && pad_type != 'STR_PAD_BOTH') { pad_type = 'STR_PAD_RIGHT'; }
    if ((pad_to_go = pad_length - input.length) > 0) {
        if (pad_type == 'STR_PAD_LEFT') { input = str_pad_repeater(pad_string, pad_to_go) + input; }
        else if (pad_type == 'STR_PAD_RIGHT') { input = input + str_pad_repeater(pad_string, pad_to_go); }
        else if (pad_type == 'STR_PAD_BOTH') {
            half = str_pad_repeater(pad_string, Math.ceil(pad_to_go/2));
            input = half + input + half;
            input = input.substr(0, pad_length);
        }
    }

    return input;
};

exports.str_repeat = (input, multiplier) => // Returns the input string repeat mult times
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/str_repeat
// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
// +   improved by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
// *     example 1: \php.str_repeat('-=', 10);
// *     returns 1: '-=-=-=-=-=-=-=-=-=-='


new Array(multiplier+1).join(input);

exports.str_replace = function (search, replace, subject, count) {
    // Replaces all occurrences of search in haystack with replace
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/str_replace
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Gabriel Paderni
    // +   improved by: Philip Peterson
    // +   improved by: Simon Willison (http://simonwillison.net)
    // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   bugfixed by: Anton Ongson
    // +      input by: Onno Marsman
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    tweaked by: Onno Marsman
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   input by: Oleg Eremeev
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Oleg Eremeev
    // %          note 1: The count parameter must be passed as a string in order
    // %          note 1:  to find a global variable in which the result will be given
    // *     example 1: \php.str_replace(' ', '.', 'Kevin van Zonneveld');
    // *     returns 1: 'Kevin.van.Zonneveld'
    // *     example 2: \php.str_replace(['{name}', 'l'], ['hello', 'm'], '{name}, lars');
    // *     returns 2: 'hemmo, mars'
    var i = 0;

    var j = 0;
    var temp = '';
    var repl = '';
    var sl = 0;
    var fl = 0;
    var f = [].concat(search);
    var r = [].concat(replace);
    var s = subject;
    var ra = r instanceof Array;
    var sa = s instanceof Array;
    s = [].concat(s);
    if (count) {
        this.window[count] = 0;
    }

    for (i=0, sl=s.length; i < sl; i++) {
        if (s[i] === '') {
            continue;
        }
        for (j=0, fl=f.length; j < fl; j++) {
            temp = s[i]+'';
            repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
            s[i] = (temp).split(f[j]).join(repl);
            if (count && s[i] !== temp) {
                this.window[count] += (temp.length-s[i].length)/f[j].length;}
        }
    }
    return sa ? s : s[0];
};

exports.str_rot13 = str => // Perform the rot13 transform on a string
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/str_rot13
// +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
// +   improved by: Ates Goral (http://magnetiq.com)
// +   bugfixed by: Onno Marsman
// +   improved by: Rafał Kukawski (http://blog.kukawski.pl)
// *     example 1: \php.str_rot13('Kevin van Zonneveld');
// *     returns 1: 'Xriva ina Mbaariryq'
// *     example 2: \php.str_rot13('Xriva ina Mbaariryq');
// *     returns 2: 'Kevin van Zonneveld'
// *     example 3: \php.str_rot13(33);
// *     returns 3: '33'

(str+'').replace(
    /[a-z]/gi,
    s => String.fromCharCode(s.charCodeAt(0)+(s.toLowerCase()<'n'?13:-13))
);

exports.str_shuffle = str => {
    // Shuffles string. One permutation of all possible is created
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/str_shuffle
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.shuffled = str_shuffle("abcdef");
    // *     results 1: shuffled.length == 6

    if (str == undefined) {
        throw 'Wrong parameter count for str_shuffle()';
    }

    var getRandomInt = max => Math.floor(Math.random() * (max + 1));
    var newStr = '';
    var rand = 0;

    while (str.length) {
        rand = getRandomInt(str.length-1);
        newStr += str.charAt(rand);
        str = str.substring(0, rand)+str.substr(rand+1);
    }

    return newStr;
};

exports.str_split = (string, split_length) => {
    // Convert a string to an array. If split_length is specified, break the string down into chunks each split_length characters long.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/str_split
    // +     original by: Martijn Wieringa
    // +     improved by: Brett Zamir (http://brett-zamir.me)
    // +     bugfixed by: Onno Marsman
    // +      revised by: Theriault
    // *         example 1: \php.str_split('Hello Friend', 3);
    // *         returns 1: ['Hel', 'lo ', 'Fri', 'end']
    if (string === undefined || !string.toString || split_length < 1) {
        return false;
    }
    return string.toString().match(new RegExp('.{1,' + (split_length || '1') + '}', 'g'));
};

exports.str_word_count = function (str, format, charlist) {
    // Counts the number of words inside a string. If format of 1 is specified,     then the function will return an array containing all the words     found inside the string. If format of 2 is specified, then the function     will return an associated array where the position of the word is the key     and the word itself is the value.      For the purpose of this function, 'word' is defined as a locale dependent     string containing alphabetic characters, which also may contain, but not start     with "'" and "-" characters.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/str_word_count
    // +   original by: Ole Vrijenhoek
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +   input by: Bug?
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // -   depends on: ctype_alpha
    // *     example 1: \php.str_word_count("Hello fri3nd, you're\r\n       looking          good today!", 1);
    // *     returns 1: ['Hello', 'fri', 'nd', "you're", 'looking', 'good', 'today']
    // *     example 2: \php.str_word_count("Hello fri3nd, you're\r\n       looking          good today!", 2);
    // *     returns 2: {0: 'Hello', 6: 'fri', 10: 'nd', 14: "you're", 29: 'looking', 46: 'good', 51: 'today'}
    // *     example 3: \php.str_word_count("Hello fri3nd, you're\r\n       looking          good today!", 1, '\u00e0\u00e1\u00e3\u00e73');
    // *     returns 3: ['Hello', 'fri3nd', 'youre', 'looking', 'good', 'today']
    var len = str.length;

    var cl = charlist && charlist.length;
    var chr = '';
    var tmpStr = '';
    var i = 0;
    var c = '';
    var wArr = [];
    var wC = 0;
    var assoc = {};
    var aC = 0;
    var reg = '';
    var match = false;

    // BEGIN STATIC
    var _preg_quote = str => (str+'').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!<>\|\:])/g, '\\$1');

    var _getWholeChar = (str, i) => { // Use for rare cases of non-BMP characters
        var code = str.charCodeAt(i);
        if (code < 0xD800 || code > 0xDFFF) {
            return str.charAt(i);
        }
        if (0xD800 <= code && code <= 0xDBFF) { // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
            if (str.length <= (i+1))  {
                throw 'High surrogate without following low surrogate';
            }
            var next = str.charCodeAt(i+1);
            if (0xDC00 > next || next > 0xDFFF) {
                throw 'High surrogate without following low surrogate';
            }
            return str.charAt(i)+str.charAt(i+1);
        }
        // Low surrogate (0xDC00 <= code && code <= 0xDFFF)
        if (i === 0) {
            throw 'Low surrogate without preceding high surrogate';
        }
        var prev = str.charCodeAt(i-1);
        if (0xD800 > prev || prev > 0xDBFF) { // (could change last hex to 0xDB7F to treat high private surrogates as single characters)
            throw 'Low surrogate without preceding high surrogate';
        }
        return false; // We can pass over low surrogates now as the second component in a pair which we have already processed
    };

    // END STATIC

    if (cl) {
        reg = '^('+_preg_quote(_getWholeChar(charlist, 0));
        for (i = 1; i < cl; i++) {
            if ((chr = _getWholeChar(charlist, i)) === false) {continue;}
            reg += '|'+_preg_quote(chr);
        }
        reg += ')$';
        reg = new RegExp(reg);
    }

    for (i = 0; i < len; i++) {
        if ((c = _getWholeChar(str, i)) === false) {continue;}
        match = this.ctype_alpha(c) || (reg && c.search(reg) !== -1) ||
                            ((i !== 0 && i !== len-1) && c === '-') || // No hyphen at beginning or end unless allowed in charlist (or locale)
                            (i !== 0 && c === "'"); // No apostrophe at beginning unless allowed in charlist (or locale)
        if (match) {
            if (tmpStr === '' && format === 2) {
                aC = i;
            }
            tmpStr = tmpStr + c;
        }
        if (i === len-1 || !match && tmpStr !== '') {
            if (format !== 2) {
                wArr[wArr.length] = tmpStr;
            } else {
                assoc[aC] = tmpStr;
            }
            tmpStr = '';
            wC++;
        }
    }

    if (!format) {
        return wC;
    } else if (format === 1) {
        return wArr;
    } else if (format === 2) {
        return assoc;
    }
    throw 'You have supplied an incorrect format';
};

exports.strcasecmp = (f_string1, f_string2) => {
    // Binary safe case-insensitive string comparison
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strcasecmp
    // +     original by: Martijn Wieringa
    // +     bugfixed by: Onno Marsman
    // *         example 1: \php.strcasecmp('Hello', 'hello');
    // *         returns 1: 0
    var string1 = (f_string1+'').toLowerCase();
    var string2 = (f_string2+'').toLowerCase();

    if (string1 > string2) {
      return 1;
    }
    else if (string1 == string2) {
      return 0;
    }

    return -1;
};

exports.strchr = function ( haystack, needle, bool ) {
    // An alias for strstr
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strchr
    // +   original by: Philip Peterson
    // -    depends on: strstr
    // *     example 1: \php.strchr('Kevin van Zonneveld', 'van');
    // *     returns 1: 'van Zonneveld'
    // *     example 2: \php.strchr('Kevin van Zonneveld', 'van', true);
    // *     returns 2: 'Kevin '

    return this.strstr( haystack, needle, bool );
};

exports.strcmp = (str1, str2) => // Binary safe string comparison
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/strcmp
// +   original by: Waldo Malqui Silva
// +      input by: Steve Hilder
// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
// +    revised by: gorthaur
// *     example 1: \php.strcmp( 'waldo', 'owald' );
// *     returns 1: 1
// *     example 2: \php.strcmp( 'owald', 'waldo' );
// *     returns 2: -1
(str1 == str2 ? 0 : ( str1 > str2 ) ? 1 : -1);

exports.strcoll = function (str1, str2) {
    // Compares two strings using the current locale
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strcoll
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: setlocale
    // *     example 1: \php.strcoll('a', 'b');
    // *     returns 1: -1
    this.setlocale('LC_ALL', 0); // ensure setup of localization variables takes place
    var cmp = this.php_js.locales[this.php_js.localeCategories.LC_COLLATE].LC_COLLATE;
    // return str1.localeCompare(str2); // We don't use this as it doesn't allow us to control it via setlocale()
    return cmp(str1, str2);
};

exports.strcspn = (str, mask, start, length) => {
    // Finds length of initial segment consisting entirely of characters not found in mask. If start or/and length is provide works like strcspn(substr($s,$start,$len),$bad_chars)
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strcspn
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.strcspn('abcdefg123', '1234567890');
    // *     returns 1: 7
    // *     example 2: \php.strcspn('123abc', '1234567890');
    // *     returns 2: 3
    start = start ? start : 0;
    var count = (length && ((start + length) < str.length)) ? start + length : str.length;
    strct:
    for (var i=start, lgth=0; i < count; i++) {
        for (var j=0; j < mask.length; j++) {
            if (str.charAt(i).indexOf(mask[j]) !== -1) {
                continue strct;
            }
        }
        ++lgth;
    }

    return lgth;
};

exports.stream_context_create = function (options, params) {
    // Create a file context and optionally set parameters
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/stream_context_create
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: Can be made to work as a wrapper for proprietary contexts as well
    // *     example 1: \php.var opts = {http:{ method:'GET', header: 'Accept-language: en\r\nCookie: foo=bar\r\n' } };
    // *     example 1: \php.var context = stream_context_create(opts);
    // *     example 1: \php.get_resource_type(context);
    // *     returns 1: 'stream-context'
    var resource = {};
    options = options || {};
    // params.notification is only property currently in PHP for params

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.resourceIdCounter = this.php_js.resourceIdCounter || 0;

    function PHPJS_Resource (type, id, opener) { // Can reuse the following for other resources, just changing the instantiation
        // See http://php.net/manual/en/resource.php for types
        this.type = type;
        this.id = id;
        this.opener = opener;
    }
    PHPJS_Resource.prototype.toString = function () {
        return 'Resource id #'+this.id;
    };
    PHPJS_Resource.prototype.get_resource_type = function () {
        return this.type;
    };
    PHPJS_Resource.prototype.var_dump = function () {
        return 'resource('+this.id+') of type ('+this.type+')';
        // return 'resource('+this.id+'), '+this.type+')'; another format
    };
    // END REDUNDANT

    this.php_js.resourceIdCounter++;

    resource = new PHPJS_Resource('stream-context', this.php_js.resourceIdCounter, 'stream_context_create');
    resource.stream_options = options;
    resource.stream_params = params;

    return resource;
};

exports.stream_context_get_default = function (options) {
    // Get a handle on the default file/stream context and optionally set parameters
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/stream_context_get_default
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: stream_context_create
    // %          note 1: Although for historical reasons in PHP, this function can be used with
    // %          note 1: its options argument to set the default, it is no doubt best to use
    // %          note 1: stream_context_set_default() to do so
    // *     example 1: \php.var context = stream_context_get_default();
    // *     example 1: \php.get_resource_type(context);
    // *     returns 1: 'stream-context'
    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    // END REDUNDANT

    if (!this.php_js.default_streams_context) {
        this.php_js.default_streams_context = this.stream_context_create(options);
    }
    if (options) {
        this.php_js.default_streams_context.stream_options = options;
    }

    return this.php_js.default_streams_context;
};

exports.stream_context_get_options = stream_or_context => // Retrieve options for a stream/wrapper/context
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/stream_context_get_options
// +   original by: Brett Zamir (http://brett-zamir.me)
// *     example 1: \php.var opts = {http:{method:'GET', header: 'Accept-language: en\r\nCookie: foo=bar\r\n'}};
// *     example 1: \php.var context = stream_context_create(opts);
// *     example 1: \php.stream_context_get_options(context);
// *     returns 1: {http:{ method:'GET', header: 'Accept-language: en\r\nCookie: foo=bar\r\n' }}
stream_or_context.stream_options;

exports.stream_context_get_params = stream_or_context => // !No description available for stream_context_get_params. @php.js developers: Please update the function summary text file.
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/stream_context_get_params
// +   original by: Brett Zamir (http://brett-zamir.me)
// *     example 1: \php.var params = {notification:function (notification_code, severity, message, message_code, bytes_transferred, bytes_max) {}};
// *     example 1: \php.var context = stream_context_create({}, params);
// *     example 1: \php.stream_context_get_params(context);
// *     returns 1: {notification:function (notification_code, severity, message, message_code, bytes_transferred, bytes_max) {}, options:{}}
stream_or_context.stream_params;

exports.stream_context_set_default = function (options) {
    // !No description available for stream_context_set_default. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/stream_context_set_default
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: stream_context_create
    // *     example 1: \php.var opts = {http:{ method:'GET', header: 'Accept-language: en\r\nCookie: foo=bar\r\n' } };
    // *     example 1: \php.var context = stream_context_set_default(opts);
    // *     example 1: \php.get_resource_type(context);
    // *     returns 1: 'stream-context'
    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    // END REDUNDANT
    if (!this.php_js.default_streams_context) {
        this.php_js.default_streams_context = this.stream_context_create(options);
    }
    this.php_js.default_streams_context.stream_options = options;

    return this.php_js.default_streams_context;
};

exports.stream_context_set_option = (stream_or_context, optionsOrWrapper, option, value) => {
    // * Overloaded form: stream_context_set_option(resource context|resource stream, array options)  * Set an option (or several options) for a wrapper
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/stream_context_set_option
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.var opts = {http:{ method:'GET', header: 'Accept-language: en\r\nCookie: foo=bar\r\n' } };
    // *     example 1: \php.var context = stream_context_create(opts);
    // *     example 1: \php.stream_context_set_option(context, opts);
    // *     returns 1: true
    if (option) {
        if (!stream_or_context.stream_options[optionsOrWrapper]) { // Don't overwrite all?
            stream_or_context.stream_options[optionsOrWrapper] = {};
        }
        stream_or_context.stream_options[optionsOrWrapper][option] = value;
    }
    else {
        stream_or_context.stream_options = optionsOrWrapper;
    }
    return true;
};

exports.stream_context_set_params = (stream_or_context, params) => {
    // Set parameters for a file context
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/stream_context_set_params
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.var context = stream_context_create();
    // *     example 1: \php.stream_context_set_params({notification:function (notification_code, severity, message, message_code, bytes_transferred, bytes_max) {}});
    // *     returns 1: true
    var param = '';

    // Docs also allow for "options" as a parameter here (i.e., setting options instead of parameters) and source seems to allow encoding, input_encoding, output_encoding, and default_mode
    for (param in params) { // Overwrites all, or just supplied? Seems like just supplied
        if (param === 'options') {
            stream_or_context.stream_options = params[param]; // Overwrite all?
        }
        else {
            stream_or_context.stream_params[param] = params[param];
        }
    }
    return true;
};

exports.stream_get_contents = function (handle, maxLength, offset) {
    // Reads all remaining bytes (or up to maxlen bytes) from a stream and returns them as a string.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/stream_get_contents
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.var stream = fopen('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm', 'r');
    // *     example 1: \php.stream_get_contents(stream, 7, 2);
    // *     returns 1: 'DOCTYPE'
    if (!this.php_js || !this.php_js.resourceData || !this.php_js.resourceDataPointer || !handle || !handle.id) {
        return false;
    }
    offset = offset || 0;
    this.php_js.resourceDataPointer[handle.id] += offset;

    var chrs = this.php_js.resourceData[handle.id].slice(this.php_js.resourceDataPointer[handle.id]);
    chrs = maxLength >= 0 ? chrs.substr(0, maxLength) : chrs;

    this.echo(chrs);
    this.php_js.resourceDataPointer[handle.id] += chrs.length;

    return chrs;
};

exports.stream_get_line = function (handle, length, ending) {
    // Read up to maxlen bytes from a stream or until the ending string is found
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/stream_get_line
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.fopen('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm', 'r');
    // *     example 1: \php.stream_get_line(handle, 2);
    // *     returns 1: '<'
    var start=0;

    var fullline='';

    if (!this.php_js || !this.php_js.resourceData || !this.php_js.resourceDataPointer || length !== undefined && !length) {
        return false;
    }

    start = this.php_js.resourceDataPointer[handle.id];

    if (start === undefined || !this.php_js.resourceData[handle.id][start]) {
        return false; // Resource was already closed or already reached the end of the file
    }

    // Fix: Should we also test for /\r\n?|\n/?
    fullline = this.php_js.resourceData[handle.id].slice(start, this.php_js.resourceData[handle.id].indexOf(ending, start)+1);
    if (fullline === '') {
        fullline = this.php_js.resourceData[handle.id].slice(start); // Get to rest of the file
    }

    length = (length === undefined || fullline.length < length) ? fullline.length : Math.floor(length/2) || 1; // two bytes per character (or surrogate), but ensure at least one

    this.php_js.resourceDataPointer[handle.id] += length;
    return this.php_js.resourceData[handle.id].substr(start, length-(fullline && ending && ending.length ? ending.length : 0));
};

exports.stream_is_local = stream_or_url => {
    // string stream_resolve_include_path(string filename[, resource context]) U
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/stream_is_local
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.stream_is_local('/etc');
    // *     returns 1: true

    if (typeof stream_or_url === 'string') {
        return ((/^(https?|ftps?|ssl|tls):/).test(stream_or_url)) ? false : true; // Need a better check than this
    }
    return stream_or_url.is_local ? true : false;
};

exports.strftime = function (fmt, timestamp) {
    // Format a local time/date according to locale settings
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strftime
    // +      original by: Blues (http://tech.bluesmoon.info/)
    // + reimplemented by: Brett Zamir (http://brett-zamir.me)
    // +   input by: Alex
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // -       depends on: setlocale
    // %        note 1: Uses global: php_js to store locale info
    // *        example 1: \php.strftime("%A", 1062462400); // Return value will depend on date and locale
    // *        returns 1: 'Tuesday'
    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.setlocale('LC_ALL', 0); // ensure setup of localization variables takes place
    // END REDUNDANT
    var phpjs = this.php_js;

    // BEGIN STATIC
    var _xPad = (x, pad, r) => {
        if (typeof r === 'undefined') {
            r=10;
        }
        for ( ; parseInt(x, 10)<r && r>1; r/=10) {
            x = pad.toString() + x;
        }
        return x.toString();
    };

    var locale = phpjs.localeCategories.LC_TIME;
    var locales = phpjs.locales;
    var lc_time = locales[locale].LC_TIME;

    var _formats = {
        a(d) {
            return lc_time.a[d.getDay()];
        },
        A(d) {
            return lc_time.A[d.getDay()];
        },
        b(d) {
            return lc_time.b[d.getMonth()];
        },
        B(d) {
            return lc_time.B[d.getMonth()];
        },
        C(d) {
            return _xPad(parseInt(d.getFullYear()/100, 10), 0);
        },
        d: ['getDate', '0'],
        e: ['getDate', ' '],
        g(d) {
            return _xPad(parseInt(this.G(d)/100, 10), 0);
        },
        G(d) {
            var y = d.getFullYear();
            var V = parseInt(_formats.V(d), 10);
            var W = parseInt(_formats.W(d), 10);

            if (W > V) {
                y++;
            }
            else if (W === 0 && V >= 52) {
                y--;
            }

            return y;
        },
        H: ['getHours', '0'],
        I(d) {
            var I=d.getHours()%12; return _xPad(I===0?12:I, 0);
        },
        j(d) {
            var ms = d - new Date('' + d.getFullYear() + '/1/1 GMT');
            ms += d.getTimezoneOffset()*60000; // Line differs from Yahoo implementation which would be equivalent to replacing it here with:
            // ms = new Date('' + d.getFullYear() + '/' + (d.getMonth()+1) + '/' + d.getDate() + ' GMT') - ms;

            var doy = parseInt(ms/60000/60/24, 10)+1;
            return _xPad(doy, 0, 100);
        },
        k: ['getHours', '0'], // not in PHP, but implemented here (as in Yahoo)
        l(d) {
            var l=d.getHours()%12; return _xPad(l===0?12:l, ' ');
        },
        m(d) {
            return _xPad(d.getMonth()+1, 0);
        },
        M: ['getMinutes', '0'],
        p(d) {
            return lc_time.p[d.getHours() >= 12 ? 1 : 0 ];
        },
        P(d) {
            return lc_time.P[d.getHours() >= 12 ? 1 : 0 ];
        },
        s(d) { // Yahoo uses return parseInt(d.getTime()/1000, 10);
            return Date.parse(d)/1000;
        },
        S: ['getSeconds', '0'],
        u(d) {
            var dow = d.getDay(); return ( (dow===0) ? 7 : dow );
        },
        U(d) {
            var doy = parseInt(_formats.j(d), 10);
            var rdow = 6-d.getDay();
            var woy = parseInt((doy+rdow)/7, 10);
            return _xPad(woy, 0);
        },
        V(d) {
            var woy = parseInt(_formats.W(d), 10);
            var dow1_1 = (new Date('' + d.getFullYear() + '/1/1')).getDay();
            // First week is 01 and not 00 as in the case of %U and %W,
            // so we add 1 to the final result except if day 1 of the year
            // is a Monday (then %W returns 01).
            // We also need to subtract 1 if the day 1 of the year is
            // Friday-Sunday, so the resulting equation becomes:
            var idow = woy + (dow1_1 > 4 || dow1_1 <= 1 ? 0 : 1);
            if (idow === 53 && (new Date('' + d.getFullYear() + '/12/31')).getDay() < 4) {
                idow = 1;
            }
            else if (idow === 0) {
                idow = _formats.V(new Date('' + (d.getFullYear()-1) + '/12/31'));
            }
            return _xPad(idow, 0);
        },
        w: 'getDay',
        W(d) {
            var doy = parseInt(_formats.j(d), 10);
            var rdow = 7-_formats.u(d);
            var woy = parseInt((doy+rdow)/7, 10);
            return _xPad(woy, 0, 10);
        },
        y(d) {
            return _xPad(d.getFullYear()%100, 0);
        },
        Y: 'getFullYear',
        z(d) {
            var o = d.getTimezoneOffset();
            var H = _xPad(parseInt(Math.abs(o/60), 10), 0);
            var M = _xPad(o%60, 0);
            return (o>0?'-':'+') + H + M;
        },
        Z(d) {
            return d.toString().replace(/^.*\(([^)]+)\)$/, '$1');
            /*
            // Yahoo's: Better?
            var tz = d.toString().replace(/^.*:\d\d( GMT[+-]\d+)? \(?([A-Za-z ]+)\)?\d*$/, '$2').replace(/[a-z ]/g, '');
            if(tz.length > 4) {
                tz = Dt.formats.z(d);
            }
            return tz;
            */
        },
        '%': function (d) {
            return '%';
        }
    };
    // END STATIC

/* Fix: Locale alternatives are supported though not documented in PHP; see http://linux.die.net/man/3/strptime
Ec
EC
Ex
EX
Ey
EY
Od or Oe
OH
OI
Om
OM
OS
OU
Ow
OW
Oy
*/

    var _date=(
        (typeof(timestamp) == 'undefined') ? new Date() : // Not provided
        (typeof(timestamp) == 'object') ? new Date(timestamp) : // Javascript Date()
        new Date(timestamp*1000) // PHP API expects UNIX timestamp (auto-convert to int)
    );

    var _aggregates = {
        c: 'locale',
        D: '%m/%d/%y',
        F: '%y-%m-%d',
        h: '%b',
        n: '\n',
        r: 'locale',
        R: '%H:%M',
        t: '\t',
        T: '%H:%M:%S',
        x: 'locale',
        X: 'locale'
    };


    // First replace aggregates (run in a loop because an agg may be made up of other aggs)
    while (fmt.match(/%[cDFhnrRtTxX]/)) {
        fmt = fmt.replace(/%([cDFhnrRtTxX])/g, (m0, m1) => {
            var f = _aggregates[m1];
            return (f === 'locale' ? lc_time[m1] : f);
        });
    }

    // Now replace formats - we need a closure so that the date object gets passed through
    var str = fmt.replace(/%([aAbBCdegGHIjklmMpPsSuUVwWyYzZ%])/g, (m0, m1) => {
        var f = _formats[m1];
        if (typeof f === 'string') {
            return _date[f]();
        } else if (typeof f === 'function') {
            return f(_date);
        } else if (typeof f === 'object' && typeof (f[0]) === 'string') {
            return _xPad(_date[f[0]](), f[1]);
        } else { // Shouldn't reach here
            return m1;
        }
    });
    return str;
};

exports.strip_tags = (str, allowed_tags) => {
    // Strips HTML and PHP tags from a string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strip_tags
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Luke Godfrey
    // +      input by: Pul
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +      input by: Alex
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Marc Palau
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Eric Nagel
    // +      input by: Bobby Drake
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Tomasz Wesolowski
    // *     example 1: \php.strip_tags('<p>Kevin</p> <br /><b>van</b> <i>Zonneveld</i>', '<i><b>');
    // *     returns 1: 'Kevin <b>van</b> <i>Zonneveld</i>'
    // *     example 2: \php.strip_tags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', '<p>');
    // *     returns 2: '<p>Kevin van Zonneveld</p>'
    // *     example 3: \php.strip_tags("<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>", "<a>");
    // *     returns 3: '<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>'
    // *     example 4: \php.strip_tags('1 < 5 5 > 1');
    // *     returns 4: '1 < 5 5 > 1'
    var key = '';

    var allowed = false;
    var matches = [];
    var allowed_array = [];
    var allowed_tag = '';
    var i = 0;
    var k = '';
    var html = '';

    var replacer = (search, replace, str) => str.split(search).join(replace);

    // Build allowes tags associative array
    if (allowed_tags) {
        allowed_array = allowed_tags.match(/([a-zA-Z0-9]+)/gi);
    }

    str += '';

    // Match tags
    matches = str.match(/(<\/?[\S][^>]*>)/gi);

    // Go through all HTML tags
    for (key in matches) {
        if (isNaN(key)) {
            // IE7 Hack
            continue;
        }

        // Save HTML tag
        html = matches[key].toString();

        // Is tag not in allowed list? Remove from str!
        allowed = false;

        // Go through all allowed tags
        for (k in allowed_array) {
            // Init
            allowed_tag = allowed_array[k];
            i = -1;

            if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+'>');}
            if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+' ');}
            if (i != 0) { i = html.toLowerCase().indexOf('</'+allowed_tag)   ;}

            // Determine
            if (i == 0) {
                allowed = true;
                break;
            }
        }

        if (!allowed) {
            str = replacer(html, "", str); // Custom replace. No regexing
        }
    }

    return str;
};

exports.stripos = (f_haystack, f_needle, f_offset) => {
    // Finds position of first occurrence of a string within another, case insensitive
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/stripos
    // +     original by: Martijn Wieringa
    // +      revised by: Onno Marsman
    // *         example 1: \php.stripos('ABC', 'a');
    // *         returns 1: 0
    var haystack = (f_haystack+'').toLowerCase();
    var needle = (f_needle+'').toLowerCase();
    var index = 0;

    if ((index = haystack.indexOf(needle, f_offset)) !== -1) {
        return index;
    }
    return false;
};

exports.stripslashes = str => // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
// +   improved by: Ates Goral (http://magnetiq.com)
// +      fixed by: Mick@el
// +   improved by: marrtins
// +   bugfixed by: Onno Marsman
// +   improved by: rezna
// +   input by: Rick Waldron
// +   reimplemented by: Brett Zamir (http://brett-zamir.me)
// +   input by: Brant Messenger (http://www.brantmessenger.com/)
// +   bugfixed by: Brett Zamir (http://brett-zamir.me)
// *     example 1: \php.stripslashes('Kevin\'s code');
// *     returns 1: "Kevin's code"
// *     example 2: \php.stripslashes('Kevin\\\'s code');
// *     returns 2: "Kevin\'s code"
(str+'').replace(/\\(.?)/g, (s, n1) => {
    switch (n1) {
        case '\\':
            return '\\';
        case '0':
            return '\u0000';
        case '':
            return '';
        default:
            return n1;
    }
});

exports.stristr = (haystack, needle, bool) => {
    // Finds first occurrence of a string within another, case insensitive
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/stristr
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfxied by: Onno Marsman
    // *     example 1: \php.stristr('Kevin van Zonneveld', 'Van');
    // *     returns 1: 'van Zonneveld'
    // *     example 2: \php.stristr('Kevin van Zonneveld', 'VAN', true);
    // *     returns 2: 'Kevin '
    var pos = 0;

    haystack += '';
    pos = haystack.toLowerCase().indexOf( (needle+'').toLowerCase() );
    if (pos == -1){
        return false;
    } else{
        if (bool) {
            return haystack.substr( 0, pos );
        } else{
            return haystack.slice( pos );
        }
    }
};

exports.strlen = function (string) {
    // Get string length
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strlen
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Sakimori
    // +      input by: Kirk Strobeck
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +    revised by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: May look like overkill, but in order to be truly faithful to handling all Unicode
    // %        note 1: characters and to this function in PHP which does not count the number of bytes
    // %        note 1: but counts the number of characters, something like this is really necessary.
    // *     example 1: \php.strlen('Kevin van Zonneveld');
    // *     returns 1: 19
    // *     example 2: \php.strlen('A\ud87e\udc04Z');
    // *     returns 2: 3
    var str = string+'';
    var i = 0;
    var chr = '';
    var lgth = 0;

    if (!this.php_js || !this.php_js.ini || !this.php_js.ini['unicode.semantics'] ||
            this.php_js.ini['unicode.semantics'].local_value.toLowerCase() !== 'on') {
        return string.length;
    }

    var getWholeChar = (str, i) => {
        var code = str.charCodeAt(i);
        var next = '';
        var prev = '';
        if (0xD800 <= code && code <= 0xDBFF) { // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
            if (str.length <= (i+1))  {
                throw 'High surrogate without following low surrogate';
            }
            next = str.charCodeAt(i+1);
            if (0xDC00 > next || next > 0xDFFF) {
                throw 'High surrogate without following low surrogate';
            }
            return str.charAt(i)+str.charAt(i+1);
        } else if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
            if (i === 0) {
                throw 'Low surrogate without preceding high surrogate';
            }
            prev = str.charCodeAt(i-1);
            if (0xD800 > prev || prev > 0xDBFF) { //(could change last hex to 0xDB7F to treat high private surrogates as single characters)
                throw 'Low surrogate without preceding high surrogate';
            }
            return false; // We can pass over low surrogates now as the second component in a pair which we have already processed
        }
        return str.charAt(i);
    };

    for (i=0, lgth=0; i < str.length; i++) {
        if ((chr = getWholeChar(str, i)) === false) {
            continue;
        } // Adapt this line at the top of any loop, passing in the whole string and the current iteration and returning a variable to represent the individual character; purpose is to treat the first part of a surrogate pair as the whole character and then ignore the second part
        lgth++;
    }
    return lgth;
};

exports.strnatcasecmp = (str1, str2) => {
    // Returns the result of case-insensitive string comparison using 'natural' algorithm
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strnatcasecmp
    // +      original by: Martin Pool
    // + reimplemented by: Pierre-Luc Paour
    // + reimplemented by: Kristof Coomans (SCK-CEN (Belgian Nucleair Research Centre))
    // + reimplemented by: Brett Zamir (http://brett-zamir.me)
    // +      bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +         input by: Devan Penner-Woelk
    // +      improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *        example 1: \php.strnatcasecmp(10, 1);
    // *        returns 1: 1
    // *        example 1: \php.strnatcasecmp('1', '10');
    // *        returns 1: -1
    var a = (str1+'').toLowerCase();
    var b = (str2+'').toLowerCase();

    var isWhitespaceChar = a => a.charCodeAt(0) <= 32;

    var isDigitChar = a => {
        var charCode = a.charCodeAt(0);
        return ( charCode >= 48  && charCode <= 57 );
    };

    var compareRight = (a, b) => {
        var bias = 0;
        var ia = 0;
        var ib = 0;

        var ca;
        var cb;

        // The longest run of digits wins.  That aside, the greatest
        // value wins, but we can't know that it will until we've scanned
        // both numbers to know that they have the same magnitude, so we
        // remember it in BIAS.
        for (var cnt = 0 ; true; ia++, ib++) {
            ca = a.charAt(ia);
            cb = b.charAt(ib);

            if (!isDigitChar(ca) &&
                !isDigitChar(cb)) {
                return bias;
            } else if (!isDigitChar(ca)) {
                return -1;
            } else if (!isDigitChar(cb)) {
                return +1;
            } else if (ca < cb) {
                if (bias === '0') {
                    bias = -1;
                }
            } else if (ca > cb) {
                if (bias === '0') {
                    bias = +1;
                }
            } else if (ca === '0' && cb === '0') {
                return bias;
            }
        }
    };

    var ia = 0;
    var ib = 0;
    var nza = 0;
    var nzb = 0;
    var ca;
    var cb;
    var result;

    while (true) {
        // only count the number of zeroes leading the last number compared
        nza = nzb = 0;

        ca = a.charAt(ia);
        cb = b.charAt(ib);

        // skip over leading spaces or zeros
        while (isWhitespaceChar( ca ) || ca ==='0') {
            if (ca === '0') {
                nza++;
            } else {
                // only count consecutive zeroes
                nza = 0;
            }

            ca = a.charAt(++ia);
        }

        while (isWhitespaceChar( cb ) || cb === '0') {
            if (cb === '0') {
                nzb++;
            } else {
                // only count consecutive zeroes
                nzb = 0;
            }

            cb = b.charAt(++ib);
        }

        // process run of digits
        if (isDigitChar(ca) && isDigitChar(cb)) {
            if ((result = compareRight(a.substring(ia), b.substring(ib))) !== '0') {
                return result;
            }
        }

        if (ca === '0' && cb === '0') {
            // The strings compare the same.  Perhaps the caller
            // will want to call strcmp to break the tie.
            return nza - nzb;
        }

        if (ca < cb) {
            return -1;
        } else if (ca > cb) {
            return +1;
        }

        ++ia; ++ib;
    }
};

exports.strnatcmp = function ( f_string1, f_string2, f_version ) {
    // Returns the result of string comparison using 'natural' algorithm
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strnatcmp
    // +   original by: Martijn Wieringa
    // + namespaced by: Michael White (http://getsprink.com)
    // +    tweaked by: Jack
    // +   bugfixed by: Onno Marsman
    // -    depends on: strcmp
    // %          note: Added f_version argument against code guidelines, because it's so neat
    // *     example 1: \php.strnatcmp('Price 12.9', 'Price 12.15');
    // *     returns 1: 1
    // *     example 2: \php.strnatcmp('Price 12.09', 'Price 12.15');
    // *     returns 2: -1
    // *     example 3: \php.strnatcmp('Price 12.90', 'Price 12.15');
    // *     returns 3: 1
    // *     example 4: \php.strnatcmp('Version 12.9', 'Version 12.15', true);
    // *     returns 4: -6
    // *     example 5: \php.strnatcmp('Version 12.15', 'Version 12.9', true);
    // *     returns 5: 6
    var i = 0;

    if (f_version == undefined) {
        f_version = false;
    }

    var __strnatcmp_split = f_string => {
        var result = [];
        var buffer = '';
        var chr = '';
        var i = 0;
        var f_stringl = 0;

        var text = true;

        f_stringl = f_string.length;
        for (i = 0; i < f_stringl; i++) {
            chr = f_string.substring(i, i + 1);
            if (chr.match(/\d/)) {
                if (text) {
                    if (buffer.length > 0){
                        result[result.length] = buffer;
                        buffer = '';
                    }

                    text = false;
                }
                buffer += chr;
            } else if ((text == false) && (chr == '.') && (i < (f_string.length - 1)) && (f_string.substring(i + 1, i + 2).match(/\d/))) {
                result[result.length] = buffer;
                buffer = '';
            } else {
                if (text == false) {
                    if (buffer.length > 0) {
                        result[result.length] = parseInt(buffer, 10);
                        buffer = '';
                    }
                    text = true;
                }
                buffer += chr;
            }
        }

        if (buffer.length > 0) {
            if (text) {
                result[result.length] = buffer;
            } else {
                result[result.length] = parseInt(buffer, 10);
            }
        }

        return result;
    };

    var array1 = __strnatcmp_split(f_string1+'');
    var array2 = __strnatcmp_split(f_string2+'');

    var len = array1.length;
    var text = true;

    var result = -1;
    var r = 0;

    if (len > array2.length) {
        len = array2.length;
        result = 1;
    }

    for (i = 0; i < len; i++) {
        if (isNaN(array1[i])) {
            if (isNaN(array2[i])) {
                text = true;

                if ((r = this.strcmp(array1[i], array2[i])) != 0) {
                    return r;
                }
            } else if (text){
                return 1;
            } else {
                return -1;
            }
        } else if (isNaN(array2[i])) {
            if (text) {
                return -1;
            } else{
                return 1;
            }
        } else {
            if (text || f_version){
                if ((r = (array1[i] - array2[i])) != 0) {
                    return r;
                }
            } else {
                if ((r = this.strcmp(array1[i].toString(), array2[i].toString())) != 0) {
                    return r;
                }
            }

            text = false;
        }
    }

    return result;
};

exports.strncasecmp = (argStr1, argStr2, len) => {
    // Binary safe string comparison
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strncasecmp
    // +   original by: Saulo Vallory
    // +      input by: Nate
    // +   bugfixed by: Onno Marsman
    // %          note: Returns < 0 if str1 is less than str2 ; > 0 if str1 is greater than str2 , and 0 if they are equal.
    // *     example 1: \php.strncasecmp('Price 12.9', 'Price 12.15', 2);
    // *     returns 1: 0
    // *     example 2: \php.strncasecmp('Price 12.09', 'Price 12.15', 10);
    // *     returns 2: -1
    // *     example 3: \php.strncasecmp('Price 12.90', 'Price 12.15', 30);
    // *     returns 3: 8
    // *     example 4: \php.strncasecmp('Version 12.9', 'Version 12.15', 20);
    // *     returns 4: 8
    // *     example 5: \php.strncasecmp('Version 12.15', 'Version 12.9', 20);
    // *     returns 5: -8
    var diff;

    var i = 0;
    var str1 = (argStr1+'').toLowerCase().substr(0,len);
    var str2 = (argStr2+'').toLowerCase().substr(0,len);

    if (str1.length !== str2.length) {
        if (str1.length < str2.length) {
            len = str1.length;
            if (str2.substr(0, str1.length) == str1) {
                return str1.length - str2.length; // return the difference of chars
            }
        } else {
            len = str2.length;
            // str1 is longer than str2
            if (str1.substr(0, str2.length) == str2) {
                return str1.length - str2.length; // return the difference of chars
            }
        }
    } else {
        // Avoids trying to get a char that does not exist
        len = str1.length;
    }

    for (diff = 0, i=0; i < len; i++) {
        diff = str1.charCodeAt(i) - str2.charCodeAt(i);
        if (diff !== 0) {
            return diff;
        }
    }

    return 0;
};

exports.strncmp = (str1, str2, lgth) => {
    // Binary safe string comparison
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strncmp
    // +      original by: Waldo Malqui Silva
    // +         input by: Steve Hilder
    // +      improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +       revised by: gorthaur
    // + reimplemented by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.strncmp('aaa', 'aab', 2);
    // *     returns 1: 0
    // *     example 2: \php.strncmp('aaa', 'aab', 3 );
    // *     returns 2: -1
    var s1 = (str1+'').substr(0, lgth);
    var s2 = (str2+'').substr(0, lgth);

    return ( ( s1 == s2 ) ? 0 : ( ( s1 > s2 ) ? 1 : -1 ) );
};

exports.strpbrk = (haystack, char_list) => {
    // Search a string for any of a set of characters
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strpbrk
    // +   original by: Alfonso Jimenez (http://www.alfonsojimenez.com)
    // +   bugfixed by: Onno Marsman
    // +    revised by: Christoph
    // +    improved by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.strpbrk('This is a Simple text.', 'is');
    // *     returns 1: 'is is a Simple text.'
    for (var i = 0, len = haystack.length; i < len; ++i) {
        if (char_list.indexOf(haystack.charAt(i)) >= 0)
            return haystack.slice(i);
    }
    return false;
};

exports.strpos = (haystack, needle, offset) => {
    // Finds position of first occurrence of a string within another
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strpos
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Onno Marsman
    // +   bugfixed by: Daniel Esteban
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.strpos('Kevin van Zonneveld', 'e', 5);
    // *     returns 1: 14
    var i = (haystack+'').indexOf(needle, (offset || 0));
    return i === -1 ? false : i;
};

exports.strptime = function (dateStr, format) {
    // Parse a time/date generated with strftime()
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strptime
    // +      original by: Brett Zamir (http://brett-zamir.me)
    // +      based on: strftime
    // -       depends on: setlocale
    // -       depends on: array_map
    // *        example 1: \php.strptime('20091112222135', '%Y%m%d%H%M%S'); // Return value will depend on date and locale
    // *        returns 1: {tm_sec: 35, tm_min: 21, tm_hour: 22, tm_mday: 12, tm_mon: 10, tm_year: 109, tm_wday: 4, tm_yday: 315, unparsed: ''}
    // *        example 1: \php.strptime('2009extra', '%Y');
    // *        returns 1: {tm_sec:0, tm_min:0, tm_hour:0, tm_mday:0, tm_mon:0, tm_year:109, tm_wday:3, tm_yday: -1, unparsed: 'extra'}

    // tm_isdst is in other docs; why not PHP?

    // Needs more thorough testing and examples

    var retObj = {
            tm_sec:0, tm_min:0, tm_hour:0,
            tm_mday:0, tm_mon:0, tm_year:0,
            tm_wday:0, tm_yday: 0, unparsed: ''
        };

    var that = this;
    var amPmOffset = 0;
    var prevHour = false;

    var _date = () => {
        var o = retObj;
        // We set date to at least 1 to ensure year or month doesn't go backwards
        return _reset(new Date(Date.UTC(o.tm_year+1900, o.tm_mon, o.tm_mday || 1, o.tm_hour, o.tm_min, o.tm_sec)), o.tm_mday);
    };

    var _reset = (dateObj, realMday) => {
        // realMday is to allow for a value of 0 in return results (but without
        // messing up the Date() object)
        var o = retObj;
        var d = dateObj;
        o.tm_sec = d.getUTCSeconds();
        o.tm_min = d.getUTCMinutes();
        o.tm_hour = d.getUTCHours();
        o.tm_mday = realMday === 0 ? realMday : d.getUTCDate();
        o.tm_mon = d.getUTCMonth();
        o.tm_year = d.getUTCFullYear()-1900;
        o.tm_wday = realMday === 0 ? (d.getUTCDay() > 0 ? d.getUTCDay()-1 : 6) : d.getUTCDay();
        var jan1 = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        o.tm_yday = Math.ceil((d - jan1) / (1000*60*60*24));
    };

    // BEGIN STATIC
    var _NWS = /\S/;

    var _WS = /\s/;

    var _aggregates = {
        c: 'locale',
        D: '%m/%d/%y',
        F: '%y-%m-%d',
        r: 'locale',
        R: '%H:%M',
        T: '%H:%M:%S',
        x: 'locale',
        X: 'locale'
    };

    /* Fix: Locale alternatives are supported though not documented in PHP; see http://linux.die.net/man/3/strptime
    Ec
    EC
    Ex
    EX
    Ey
    EY
    Od or Oe
    OH
    OI
    Om
    OM
    OS
    OU
    Ow
    OW
    Oy
    */
    var _preg_quote = str => (str+'').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!<>\|\:])/g, '\\$1');
    // END STATIC

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.setlocale('LC_ALL', 0); // ensure setup of localization variables takes place
    // END REDUNDANT

    var phpjs = this.php_js;
    var locale = phpjs.localeCategories.LC_TIME;
    var locales = phpjs.locales;
    var lc_time = locales[locale].LC_TIME;

    // First replace aggregates (run in a loop because an agg may be made up of other aggs)
    while (format.match(/%[cDFhnrRtTxX]/)) {
        format = format.replace(/%([cDFhnrRtTxX])/g, (m0, m1) => {
            var f = _aggregates[m1];
            return (f === 'locale' ? lc_time[m1] : f);
        });
    }

    var _addNext = (j, regex, cb) => {
        if (typeof regex === 'string') {
            regex = new RegExp('^'+regex, 'i');
        }
        var check = dateStr.slice(j);
        var match = regex.exec(check);
        // Even if the callback returns null after assigning to the return object, the object won't be saved anyways
        var testNull = match ? cb(...match): null;
        if (testNull === null) {
            throw 'No match in string';
        }
        return j+match[0].length;
    };

    var _addLocalized = (j, formatChar, category) => _addNext(j,
                    that.array_map(
                        _preg_quote,
                        lc_time[formatChar]
                    ).join('|'), // Could make each parenthesized instead and pass index to callback
                    m => {
                        var match = lc_time[formatChar].search(new RegExp('^'+_preg_quote(m)+'$', 'i'));
                        if (match) {
                            retObj[category] = match[0];
                        }
                    }
    );

    // BEGIN PROCESSING CHARACTERS
    for (var i=0, j = 0; i < format.length; i++) {
        if (format.charAt(i) === '%') {
            var literalPos = ['%', 'n', 't'].indexOf(format.charAt(i+1));
            if (literalPos !== -1) {
                if (['%', '\n', '\t'].indexOf(dateStr.charAt(j)) === literalPos) { // a matched literal
                    ++i, ++j; // skip beyond
                    continue;
                }
                // Format indicated a percent literal, but not actually present
                return false;
            }
            var formatChar = format.charAt(i+1);
            try {
                switch (formatChar) {
                    case 'a': // Fall-through // Sun-Sat
                    case 'A': // Sunday-Saturday
                        j = _addLocalized(j, formatChar, 'tm_wday'); // Changes nothing else
                        break;
                    case 'h': // Fall-through (alias of 'b');
                    case 'b': // Jan-Dec
                        j = _addLocalized(j, 'b', 'tm_mon');
                        _date(); // Also changes wday, yday
                        break;
                    case 'B': // January-December
                        j = _addLocalized(j, formatChar, 'tm_mon');
                        _date(); // Also changes wday, yday
                        break;
                    case 'C': // 0+; century (19 for 20th)
                        j = _addNext(j,
                                                /^\d?\d/, // PHP docs say two-digit, but accepts one-digit (two-digit max)
                                                d => {
                                                    var year = (parseInt(d, 10)-19)*100;
                                                    retObj.tm_year = year;
                                                    _date();
                                                    if (!retObj.tm_yday) {retObj.tm_yday = -1;}
                                                    // Also changes wday; and sets yday to -1 (always?)
                                                }
                        );
                        break;
                    case 'd': // Fall-through  01-31 day
                    case 'e': // 1-31 day
                        j = _addNext(j,
                                                formatChar === 'd' ? /^(0[1-9]|[1-2]\d|3[0-1])/ : /^([1-2]\d|3[0-1]|[1-9])/,
                                                d => {
                                                    var dayMonth = parseInt(d, 10);
                                                    retObj.tm_mday =  dayMonth;
                                                    _date(); // Also changes w_day, y_day
                                                }
                        );
                        break;
                    case 'g': // No apparent effect; 2-digit year (see 'V')
                        break;
                    case 'G': // No apparent effect; 4-digit year (see 'V')'
                        break;
                    case 'H': // 00-23 hours
                        j = _addNext(j,
                                                /^([0-1]\d|2[0-3])/,
                                                d => {
                                                    var hour = parseInt(d, 10);
                                                    retObj.tm_hour =  hour;
                                                    // Changes nothing else
                                                }
                        );
                        break;
                    case 'l': // Fall-through of lower-case 'L'; 1-12 hours
                    case 'I': // 01-12 hours
                        j = _addNext(j,
                                                formatChar === 'l' ? /^([1-9]|1[0-2])/ : /^(0[1-9]|1[0-2])/,
                                                d => {
                                                    var hour = parseInt(d, 10)-1 + amPmOffset;
                                                    retObj.tm_hour =  hour;
                                                    prevHour = true; // Used for coordinating with am-pm
                                                    // Changes nothing else, but affected by prior 'p/P'
                                                }
                        );
                        break;
                    case 'j': // 001-366 day of year
                        j = _addNext(j,
                                                /^(00[1-9]|0[1-9]\d|[1-2]\d\d|3[0-6][0-6])/,
                                                d => {
                                                    var dayYear = parseInt(d, 10)-1;
                                                    retObj.tm_yday =  dayYear;
                                                    // Changes nothing else (oddly, since if based on a given year, could calculate other fields)
                                                }
                        );
                        break;
                    case 'm': // 01-12 month
                        j = _addNext(j,
                                                /^(0[1-9]|1[0-2])/,
                                                d => {
                                                    var month = parseInt(d, 10)-1;
                                                    retObj.tm_mon =  month;
                                                    _date(); // Also sets wday and yday
                                                }
                        );
                        break;
                    case 'M': // 00-59 minutes
                        j = _addNext(j,
                                                /^[0-5]\d/,
                                                d => {
                                                    var minute = parseInt(d, 10);
                                                    retObj.tm_min =  minute;
                                                    // Changes nothing else
                                                }
                        );
                        break;
                    case 'P': // Seems not to work; AM-PM
                        return false; // Could make fall-through instead since supposed to be a synonym despite PHP docs
                    case 'p': // am-pm
                        j = _addNext(j,
                                                /^(am|pm)/i,
                                                d => {
                                                    // No effect on 'H' since already 24 hours but
                                                    //   works before or after setting of l/I hour
                                                    amPmOffset = (/a/).test(d) ? 0 : 12;
                                                    if (prevHour) {
                                                        retObj.tm_hour += amPmOffset;
                                                    }
                                                }
                        );
                        break;
                    case 's': // Unix timestamp (in seconds)
                        j = _addNext(j,
                                                /^\d+/,
                                                d => {
                                                    var timestamp = parseInt(d, 10);
                                                    var date = new Date(Date.UTC(timestamp*1000));
                                                    _reset(date);
                                                    // Affects all fields, but can't be negative (and initial + not allowed)
                                                }
                        );
                        break;
                    case 'S': // 00-59 seconds
                        j = _addNext(j,
                                                /^[0-5]\d/, // strptime also accepts 60-61 for some reason
                                                d => {
                                                    var second = parseInt(d, 10);
                                                    retObj.tm_sec =  second;
                                                    // Changes nothing else
                                                }
                        );
                        break;
                    case 'u': // Fall-through; 1 (Monday)-7(Sunday)
                    case 'w': // 0 (Sunday)-6(Saturday)
                        j = _addNext(j,
                                                /^\d/,
                                                d => {
                                                    retObj.tm_wday = d - (formatChar === 'u');
                                                    // Changes nothing else apparently
                                                }
                        );
                        break;
                    case 'U': // Fall-through (week of year, from 1st Sunday)
                    case 'V':// Fall-through (ISO-8601:1988 week number; from first 4-weekday week, starting with Monday)
                    case 'W': // Apparently ignored (week of year, from 1st Monday)
                        break;
                    case 'y':// 69 (or higher) for 1969+, 68 (or lower) for 2068-
                        j = _addNext(j,
                                                /^\d?\d/, // PHP docs say two-digit, but accepts one-digit (two-digit max)
                                                d => {
                                                    d = parseInt(d, 10);
                                                    var year = d >= 69 ? d : d+100;
                                                    retObj.tm_year = year;
                                                    _date();
                                                    if (!retObj.tm_yday) {retObj.tm_yday = -1;}
                                                    // Also changes wday; and sets yday to -1 (always?)
                                                }
                        );
                        break;
                    case 'Y': // 2010 (4-digit year)
                        j = _addNext(j,
                                                /^\d{1,4}/, // PHP docs say four-digit, but accepts one-digit (four-digit max)
                                                d => {
                                                    var year = (parseInt(d, 10))-1900;
                                                    retObj.tm_year = year;
                                                    _date();
                                                    if (!retObj.tm_yday) {retObj.tm_yday = -1;}
                                                    // Also changes wday; and sets yday to -1 (always?)
                                                }
                        );
                        break;
                    case 'z': // Timezone; on my system, strftime gives -0800, but strptime seems not to alter hour setting
                        break;
                    case 'Z': // Timezone; on my system, strftime gives PST, but strptime treats text as unparsed
                        break;
                    default:
                        throw 'Unrecognized formatting character in strptime()';
                        break;
                }
            }
            catch(e) {
                if (e === 'No match in string') { // Allow us to exit
                    return false; // There was supposed to be a matching format but there wasn't
                }
            }
            ++i; // Calculate skipping beyond initial percent too
        }
        else if (format.charAt(i) !== dateStr.charAt(j)) {
            // If extra whitespace at beginning or end of either, or between formats, no problem
            // (just a problem when between % and format specifier)

            // If the string has white-space, it is ok to ignore
            if (dateStr.charAt(j).search(_WS) !== -1) {
                j++;
                i--; // Let the next iteration try again with the same format character
            }
            else if (format.charAt(i).search(_NWS) !== -1) { // Any extra formatting characters besides white-space causes 
                // problems (do check after WS though, as may just be WS in string before next character)
                return false;
            }
            else { // Extra WS in format
                // Adjust strings when encounter non-matching whitespace, so they align in future checks above
                // Will check on next iteration (against same (non-WS) string character)
            }
        }
        else {
            j++;
        }
    }

    // POST-PROCESSING
    retObj.unparsed = dateStr.slice(j); // Will also get extra whitespace; empty string if none
    return retObj;
};

exports.strrchr = (haystack, needle) => {
    // Finds the last occurrence of a character in a string within another
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strrchr
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   input by: Jason Wong (http://carrot.org/)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.strrchr("Line 1\nLine 2\nLine 3", 10).substr(1)
    // *     returns 1: 'Line 3'
    var pos = 0;

    if (typeof needle !== 'string') {
        needle = String.fromCharCode(parseInt(needle, 10));
    }
    needle = needle.charAt(0);
    pos = haystack.lastIndexOf(needle);
    if (pos === -1) {
        return false;
    }

    return haystack.substr(pos);
};

exports.strrev = string => {
    // Reverse a string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strrev
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +   reimplemented by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.strrev('Kevin van Zonneveld');
    // *     returns 1: 'dlevennoZ nav niveK'
    // *     example 2: \php.strrev('a\u0301haB') === 'Baha\u0301'; // combining
    // *     returns 2: true
    // *     example 3: \php.strrev('A\uD87E\uDC04Z') === 'Z\uD87E\uDC04A'; // surrogates
    // *     returns 2: true
    string = string+'';

    // Performance will be enhanced with the next two lines of code commented
    //      out if you don't care about combining characters
    // Keep Unicode combining characters together with the character preceding
    //      them and which they are modifying (as in PHP 6)
    // See http://unicode.org/reports/tr44/#Property_Table (Me+Mn)
    // We also add the low surrogate range at the beginning here so it will be
    //      maintained with its preceding high surrogate
    var grapheme_extend = /(.)([\uDC00-\uDFFF\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065E\u0670\u06D6-\u06DC\u06DE-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0901-\u0903\u093C\u093E-\u094D\u0951-\u0954\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C01-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C82\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D02\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F90-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B6-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAA\u1C24-\u1C37\u1DC0-\u1DE6\u1DFE\u1DFF\u20D0-\u20F0\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA67C\uA67D\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA926-\uA92D\uA947-\uA953\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uFB1E\uFE00-\uFE0F\uFE20-\uFE26])/g;
    string = string.replace(grapheme_extend, '$2$1'); // Temporarily reverse

    return string.split('').reverse().join('');
};

exports.strripos = (haystack, needle, offset) => {
    // Finds position of last occurrence of a string within another string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strripos
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +   input by: saulius
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.strripos('Kevin van Zonneveld', 'E');
    // *     returns 1: 16
    haystack = (haystack+'').toLowerCase();
    needle = (needle+'').toLowerCase();

    var i = -1;
    if (offset) {
        i = (haystack+'').slice(offset).lastIndexOf(needle); // strrpos' offset indicates starting point of range till end,
        // while lastIndexOf's optional 2nd argument indicates ending point of range from the beginning
        if (i !== -1) {
            i += offset;
        }
    }
    else {
        i = (haystack+'').lastIndexOf(needle);
    }
    return i >= 0 ? i : false;
};

exports.strrpos = (haystack, needle, offset) => {
    // Finds position of last occurrence of a string within another string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strrpos
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +   input by: saulius
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.strrpos('Kevin van Zonneveld', 'e');
    // *     returns 1: 16
    // *     example 2: \php.strrpos('somepage.com', '.', false);
    // *     returns 2: 8
    // *     example 3: \php.strrpos('baa', 'a', 3);
    // *     returns 3: false
    // *     example 4: \php.strrpos('baa', 'a', 2);
    // *     returns 4: 2
    var i = -1;
    if (offset) {
        i = (haystack+'').slice(offset).lastIndexOf(needle); // strrpos' offset indicates starting point of range till end,
        // while lastIndexOf's optional 2nd argument indicates ending point of range from the beginning
        if (i !== -1) {
            i += offset;
        }
    }
    else {
        i = (haystack+'').lastIndexOf(needle);
    }
    return i >= 0 ? i : false;
};

exports.strspn = (str1, str2, start, lgth) => {
    // Finds length of initial segment consisting entirely of characters found in mask. If start or/and length is provided works like strspn(substr($s,$start,$len),$good_chars)
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strspn
    // +   original by: Valentina De Rosa
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.strspn('42 is the answer, what is the question ...', '1234567890');
    // *     returns 1: 2
    // *     example 2: \php.strspn('foo', 'o', 1, 2);
    // *     returns 2: 2
    var found;
    var stri;
    var strj;
    var j = 0;
    var i = 0;

    start = start ? (start < 0 ? (str1.length+start) : start) : 0;
    lgth = lgth ? ((lgth < 0) ? (str1.length+lgth-start) : lgth) : str1.length-start;
    str1 = str1.substr(start, lgth);

    for (i = 0; i < str1.length; i++){
        found = 0;
        stri  = str1.substring(i,i+1);
        for (j = 0; j <= str2.length; j++) {
            strj = str2.substring(j,j+1);
            if (stri == strj) {
                found = 1;
                break;
            }
        }
        if (found != 1) {
            return i;
        }
    }

    return i;
};

exports.strstr = (haystack, needle, bool) => {
    // Finds first occurrence of a string within another
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strstr
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: \php.strstr('Kevin van Zonneveld', 'van');
    // *     returns 1: 'van Zonneveld'
    // *     example 2: \php.strstr('Kevin van Zonneveld', 'van', true);
    // *     returns 2: 'Kevin '
    // *     example 3: \php.strstr('name@example.com', '@');
    // *     returns 3: '@example.com'
    // *     example 4: \php.strstr('name@example.com', '@', true);
    // *     returns 4: 'name'
    var pos = 0;

    haystack += '';
    pos = haystack.indexOf( needle );
    if (pos == -1) {
        return false;
    } else{
        if (bool){
            return haystack.substr( 0, pos );
        } else{
            return haystack.slice( pos );
        }
    }
};

exports.strtok = function (str, tokens) {
    // Tokenize a string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strtok
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Use tab and newline as tokenizing characters as well
    // *     example 1: $string = "\t\t\t\nThis is\tan example\nstring\n";
    // *     example 1: $tok = strtok($string, " \n\t");
    // *     example 1: $b = '';
    // *     example 1: \php.while ($tok !== false) {$b += "Word="+$tok+"\n"; $tok = strtok(" \n\t");}
    // *     example 1: $b
    // *     returns 1: "Word=This\nWord=is\nWord=an\nWord=example\nWord=string\n"
    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    // END REDUNDANT

    if (tokens === undefined) {
        tokens = str;
        str = this.php_js.strtokleftOver;
    }
    if (str.length === 0) {
        return false;
    }
    if (tokens.indexOf(str.charAt(0)) !== -1) {
        return this.strtok(str.substr(1), tokens);
    }
    for (var i=0; i < str.length; i++) {
        if (tokens.indexOf(str.charAt(i)) !== -1) {
            break;
        }
    }
    this.php_js.strtokleftOver = str.substr(i+1);
    return str.substring(0, i);
};

exports.strtolower = str => // Makes a string lowercase
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/strtolower
// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
// +   improved by: Onno Marsman
// *     example 1: \php.strtolower('Kevin van Zonneveld');
// *     returns 1: 'kevin van zonneveld'
(str+'').toLowerCase();

exports.strtotime = function (str, now) {
    // Convert string representation of date and time to a timestamp
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strtotime
    // +   original by: Caio Ariede (http://caioariede.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: David
    // +   improved by: Caio Ariede (http://caioariede.com)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Wagner B. Soares
    // +   bugfixed by: Artur Tchernychev
    // %        note 1: Examples all have a fixed timestamp to prevent tests to fail because of variable time(zones)
    // *     example 1: \php.strtotime('+1 day', 1129633200);
    // *     returns 1: 1129719600
    // *     example 2: \php.strtotime('+1 week 2 days 4 hours 2 seconds', 1129633200);
    // *     returns 2: 1130425202
    // *     example 3: \php.strtotime('last month', 1129633200);
    // *     returns 3: 1127041200
    // *     example 4: \php.strtotime('2009-05-04 08:30:00');
    // *     returns 4: 1241418600

    var i;

    var match;
    var s;
    var strTmp = '';
    var parse = '';

    strTmp = str;
    strTmp = strTmp.replace(/\s{2,}|^\s|\s$/g, ' '); // unecessary spaces
    strTmp = strTmp.replace(/[\t\r\n]/g, ''); // unecessary chars

    if (strTmp == 'now') {
        return (new Date()).getTime()/1000; // Return seconds, not milli-seconds
    } else if (!isNaN(parse = Date.parse(strTmp))) {
        return (parse/1000);
    } else if (now) {
        now = new Date(now*1000); // Accept PHP-style seconds
    } else {
        now = new Date();
    }

    strTmp = strTmp.toLowerCase();

    var __is =
    {
        day:
        {
            'sun': 0,
            'mon': 1,
            'tue': 2,
            'wed': 3,
            'thu': 4,
            'fri': 5,
            'sat': 6
        },
        mon:
        {
            'jan': 0,
            'feb': 1,
            'mar': 2,
            'apr': 3,
            'may': 4,
            'jun': 5,
            'jul': 6,
            'aug': 7,
            'sep': 8,
            'oct': 9,
            'nov': 10,
            'dec': 11
        }
    };

    var process = m => {
        var ago = (m[2] && m[2] == 'ago');
        var num = (num = m[0] == 'last' ? -1 : 1) * (ago ? -1 : 1);

        switch (m[0]) {
            case 'last':
            case 'next':
                switch (m[1].substring(0, 3)) {
                    case 'yea':
                        now.setFullYear(now.getFullYear() + num);
                        break;
                    case 'mon':
                        now.setMonth(now.getMonth() + num);
                        break;
                    case 'wee':
                        now.setDate(now.getDate() + (num * 7));
                        break;
                    case 'day':
                        now.setDate(now.getDate() + num);
                        break;
                    case 'hou':
                        now.setHours(now.getHours() + num);
                        break;
                    case 'min':
                        now.setMinutes(now.getMinutes() + num);
                        break;
                    case 'sec':
                        now.setSeconds(now.getSeconds() + num);
                        break;
                    default:
                        var day;
                        if (typeof (day = __is.day[m[1].substring(0, 3)]) != 'undefined') {
                            var diff = day - now.getDay();
                            if (diff == 0) {
                                diff = 7 * num;
                            } else if (diff > 0) {
                                if (m[0] == 'last') {diff -= 7;}
                            } else {
                                if (m[0] == 'next') {diff += 7;}
                            }
                            now.setDate(now.getDate() + diff);
                        }
                }
                break;

            default:
                if (/\d+/.test(m[0])) {
                    num *= parseInt(m[0], 10);

                    switch (m[1].substring(0, 3)) {
                        case 'yea':
                            now.setFullYear(now.getFullYear() + num);
                            break;
                        case 'mon':
                            now.setMonth(now.getMonth() + num);
                            break;
                        case 'wee':
                            now.setDate(now.getDate() + (num * 7));
                            break;
                        case 'day':
                            now.setDate(now.getDate() + num);
                            break;
                        case 'hou':
                            now.setHours(now.getHours() + num);
                            break;
                        case 'min':
                            now.setMinutes(now.getMinutes() + num);
                            break;
                        case 'sec':
                            now.setSeconds(now.getSeconds() + num);
                            break;
                    }
                } else {
                    return false;
                }
                break;
        }
        return true;
    };

    match = strTmp.match(/^(\d{2,4}-\d{2}-\d{2})(?:\s(\d{1,2}:\d{2}(:\d{2})?)?(?:\.(\d+))?)?$/);
    if (match != null) {
        if (!match[2]) {
            match[2] = '00:00:00';
        } else if (!match[3]) {
            match[2] += ':00';
        }

        s = match[1].split(/-/g);

        for (i in __is.mon) {
            if (__is.mon[i] == s[1] - 1) {
                s[1] = i;
            }
        }
        s[0] = parseInt(s[0], 10);

        s[0] = (s[0] >= 0 && s[0] <= 69) ? '20'+(s[0] < 10 ? '0'+s[0] : s[0]+'') : (s[0] >= 70 && s[0] <= 99) ? '19'+s[0] : s[0]+'';
        return parseInt(this.strtotime(s[2] + ' ' + s[1] + ' ' + s[0] + ' ' + match[2])+(match[4] ? match[4]/1000 : ''), 10);
    }

    var regex = '([+-]?\\d+\\s'+
        '(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?'+
        '|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday'+
        '|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday)'+
        '|(last|next)\\s'+
        '(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?'+
        '|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday'+
        '|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday))'+
        '(\\sago)?';

    match = strTmp.match(new RegExp(regex, 'gi')); // Brett: seems should be case insensitive per docs, so added 'i'
    if (match == null) {
        return false;
    }

    for (i = 0; i < match.length; i++) {
        if (!process(match[i].split(' '))) {
            return false;
        }
    }

    return (now.getTime()/1000);
};

exports.strtoupper = str => // Makes a string uppercase
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/strtoupper
// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
// +   improved by: Onno Marsman
// *     example 1: \php.strtoupper('Kevin van Zonneveld');
// *     returns 1: 'KEVIN VAN ZONNEVELD'
(str+'').toUpperCase();

exports.strtr = function (str, from, to) {
    // Translates characters in str using given translation tables
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strtr
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +      input by: uestla
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Alan C
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Taras Bogach
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +      input by: jpfle
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // -   depends on: krsort
    // -   depends on: ini_set
    // *     example 1: $trans = {'hello' : 'hi', 'hi' : 'hello'};
    // *     example 1: \php.strtr('hi all, I said hello', $trans)
    // *     returns 1: 'hello all, I said hi'
    // *     example 2: \php.strtr('äaabaåccasdeöoo', 'äåö','aao');
    // *     returns 2: 'aaabaaccasdeooo'
    // *     example 3: \php.strtr('ääääääää', 'ä', 'a');
    // *     returns 3: 'aaaaaaaa'
    // *     example 4: \php.strtr('http', 'pthxyz','xyzpth');
    // *     returns 4: 'zyyx'
    // *     example 5: \php.strtr('zyyx', 'pthxyz','xyzpth');
    // *     returns 5: 'http'
    // *     example 6: \php.strtr('aa', {'a':1,'aa':2});
    // *     returns 6: '2'
    var fr = '';

    var i = 0;
    var j = 0;
    var lenStr = 0;
    var lenFrom = 0;
    var tmpStrictForIn = false;
    var fromTypeStr = '';
    var toTypeStr = '';
    var istr = '';
    var tmpFrom = [];
    var tmpTo = [];
    var ret = '';
    var match = false;

    // Received replace_pairs?
    // Convert to normal from->to chars
    if (typeof from === 'object') {
        tmpStrictForIn = this.ini_set('phpjs.strictForIn', false); // Not thread-safe; temporarily set to true
        from = this.krsort(from);
        this.ini_set('phpjs.strictForIn', tmpStrictForIn);

        for (fr in from) {
            if (from.hasOwnProperty(fr)) {
                tmpFrom.push(fr);
                tmpTo.push(from[fr]);
            }
        }

        from = tmpFrom;
        to = tmpTo;
    }

    // Walk through subject and replace chars when needed
    lenStr  = str.length;
    lenFrom = from.length;
    fromTypeStr = typeof from === 'string';
    toTypeStr = typeof to === 'string';

    for (i = 0; i < lenStr; i++) {
        match = false;
        if (fromTypeStr) {
            istr = str.charAt(i);
            for (j = 0; j < lenFrom; j++) {
                if (istr == from.charAt(j)) {
                    match = true;
                    break;
                }
            }
        }
        else {
            for (j = 0; j < lenFrom; j++) {
                if (str.substr(i, from[j].length) == from[j]) {
                    match = true;
                    // Fast forward
                    i = (i + from[j].length)-1;
                    break;
                }
            }
        }
        if (match) {
            ret += toTypeStr ? to.charAt(j) : to[j];
        } else {
            ret += str.charAt(i);
        }
    }

    return ret;
};

exports.strval = function (str) {
    // Get the string value of a variable
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/strval
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Comment out the entire switch if you want JS-like behavior instead of PHP behavior
    // -    depends on: gettype
    // *     example 1: \php.strval({red: 1, green: 2, blue: 3, white: 4});
    // *     returns 1: 'Array'
    var type = '';

    if (str === null) {return '';}

    type = this.gettype(str);
    switch (type) {
        case 'boolean':
            if (str === true) {return '1';}
            return '';
        case 'array':
            return 'Array';
        case 'object':
            return 'Object';
    }

    return str;
};

exports.substr = function (str, start, len) {
    // Returns part of a string
    //
    // version: 909.322
    // discuss at: http://phpjs.org/functions/substr
    // +     original by: Martijn Wieringa
    // +     bugfixed by: T.Wild
    // +      tweaked by: Onno Marsman
    // +      revised by: Theriault
    // +      improved by: Brett Zamir (http://brett-zamir.me)
    // %    note 1: Handles rare Unicode characters if 'unicode.semantics' ini (PHP6) is set to 'on'
    // *       example 1: \php.substr('abcdef', 0, -1);
    // *       returns 1: 'abcde'
    // *       example 2: \php.substr(2, 0, -6);
    // *       returns 2: false
    // *       example 3: \php.ini_set('unicode.semantics',  'on');
    // *       example 3: \php.substr('a\uD801\uDC00', 0, -1);
    // *       returns 3: 'a'
    // *       example 4: \php.ini_set('unicode.semantics',  'on');
    // *       example 4: \php.substr('a\uD801\uDC00', 0, 2);
    // *       returns 4: 'a\uD801\uDC00'
    // *       example 5: \php.ini_set('unicode.semantics',  'on');
    // *       example 5: \php.substr('a\uD801\uDC00', -1, 1);
    // *       returns 5: '\uD801\uDC00'
    // *       example 6: \php.ini_set('unicode.semantics',  'on');
    // *       example 6: \php.substr('a\uD801\uDC00z\uD801\uDC00', -3, 2);
    // *       returns 6: '\uD801\uDC00z'
    // *       example 7: \php.ini_set('unicode.semantics',  'on');
    // *       example 7: \php.substr('a\uD801\uDC00z\uD801\uDC00', -3, -1)
    // *       returns 7: '\uD801\uDC00z'
    // Add: (?) Use unicode.runtime_encoding (e.g., with string wrapped in "binary" or "Binary" class) to
    // allow access of binary (see file_get_contents()) by: charCodeAt(x) & 0xFF (see https://developer.mozilla.org/En/Using_XMLHttpRequest ) or require conversion first?

    var i = 0;

    var allBMP = true;
    var es = 0;
    var el = 0;
    var se = 0;
    var ret = '';
    str += '';
    var end = str.length;

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    // END REDUNDANT
    switch(
        (this.php_js.ini['unicode.semantics'] &&
            this.php_js.ini['unicode.semantics'].local_value.toLowerCase())) {
        case 'on': // Full-blown Unicode including non-Basic-Multilingual-Plane characters
            // strlen()
            for (i=0; i < str.length; i++) {
                if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i+1))) {
                    allBMP = false;
                    break;
                }
            }

            if (!allBMP) {
                if (start < 0) {
                    for (i = end - 1, es = (start += end); i >= es; i--) {
                        if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i-1))) {
                            start--;
                            es--;
                        }
                    }
                }
                else {
                    var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
                    while ((surrogatePairs.exec(str)) != null) {
                        var li = surrogatePairs.lastIndex;
                        if (li - 2 < start) {
                            start++;
                        }
                        else {
                            break;
                        }
                    }
                }

                if (start >= end || start < 0) {
                    return false;
                }
                if (len < 0) {
                    for (i = end - 1, el = (end += len); i >= el; i--) {
                        if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i-1))) {
                            end--;
                            el--;
                        }
                    }
                    if (start > end) {
                        return false;
                    }
                    return str.slice(start, end);
                }
                else {
                    se = start + len;
                    for (i = start; i < se; i++) {
                        ret += str.charAt(i);
                        if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i+1))) {
                            se++; // Go one further, since one of the "characters" is part of a surrogate pair
                        }
                    }
                    return ret;
                }
                break;
            }
            // Fall-through
        case 'off': // assumes there are no non-BMP characters;
                           //    if there may be such characters, then it is best to turn it on (critical in true XHTML/XML)
        default:
            if (start < 0) {
                start += end;
            }
            end = typeof len === 'undefined' ? end : (len < 0 ? len + end : len + start);
            // PHP returns false if start does not fall within the string.
            // PHP returns false if the calculated end comes before the calculated start.
            // PHP returns an empty string if start and end are the same.
            // Otherwise, PHP returns the portion of the string from start to end.
            return start >= str.length || start < 0 || start > end ? !1 : str.slice(start, end);
    }
    return undefined; // Please Netbeans
};

exports.substr_compare = (main_str, str, offset, length, case_insensitivity) => {
    // Binary safe optionally case insensitive comparison of 2 strings from an offset, up to length characters
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/substr_compare
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   derived from: strcasecmp, strcmp
    // *     example 1: \php.substr_compare("abcde", "bc", 1, 2);
    // *     returns 1: 0
    if (!offset && offset !== 0) {
        throw 'Missing offset for substr_compare()';
    }

    if (offset < 0) {
        offset = main_str.length + offset;
    }

    if (length && length > (main_str.length - offset)) {
        return false;
    }
    length = length || main_str.length - offset;

    main_str = main_str.substr(offset, length);
    str = str.substr(0, length); // Should only compare up to the desired length

    if (case_insensitivity) { // Works as strcasecmp
        main_str = (main_str+'').toLowerCase();
        str = (str+'').toLowerCase();
        if (main_str == str) {
          return 0;
        }
        return (main_str > str) ? 1 : -1;
    }
    // Works as strcmp
    return ( ( main_str == str ) ? 0 : ( ( main_str > str ) ? 1 : -1 ) );
};

exports.substr_count = (haystack, needle, offset, length) => {
    // Returns the number of times a substring occurs in the string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/substr_count
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // *     example 1: \php.substr_count('Kevin van Zonneveld', 'e');
    // *     returns 1: 3
    // *     example 2: \php.substr_count('Kevin van Zonneveld', 'K', 1);
    // *     returns 2: 0
    // *     example 3: \php.substr_count('Kevin van Zonneveld', 'Z', 0, 10);
    // *     returns 3: false
    var pos = 0;

    var cnt = 0;

    haystack += '';
    needle += '';
    if (isNaN(offset)) {offset = 0;}
    if (isNaN(length)) {length = 0;}
    offset--;

    while ((offset = haystack.indexOf(needle, offset+1)) != -1){
        if (length > 0 && (offset+needle.length) > length){
            return false;
        } else{
            cnt++;
        }
    }

    return cnt;
};

exports.substr_replace = (str, replace, start, length) => {
    // Replaces part of a string with another string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/substr_replace
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.substr_replace('ABCDEFGH:/MNRPQR/', 'bob', 0);
    // *     returns 1: 'bob'
    // *     example 2: $var = 'ABCDEFGH:/MNRPQR/';
    // *     example 2: \php.substr_replace($var, 'bob', 0, $var.length);
    // *     returns 2: 'bob'
    // *     example 3: \php.substr_replace('ABCDEFGH:/MNRPQR/', 'bob', 0, 0);
    // *     returns 3: 'bobABCDEFGH:/MNRPQR/'
    // *     example 4: \php.substr_replace('ABCDEFGH:/MNRPQR/', 'bob', 10, -1);
    // *     returns 4: 'ABCDEFGH:/bob/'
    // *     example 5: \php.substr_replace('ABCDEFGH:/MNRPQR/', 'bob', -7, -1);
    // *     returns 5: 'ABCDEFGH:/bob/'
    // *     example 6: 'substr_replace('ABCDEFGH:/MNRPQR/', '', 10, -1)'
    // *     returns 6: 'ABCDEFGH://'
    if (start < 0) { // start position in str
        start = start + str.length;
    }
    length = length !== undefined ? length : str.length;
    if (length < 0) {
        length = length + str.length - start;
    }
    return str.slice(0, start)+replace.substr(0, length)+replace.slice(length)+str.slice(start+length);
};

exports.tan = arg => // Returns the tangent of the number in radians
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/tan
// +   original by: Onno Marsman
// *     example 1: \php.tan(8723321.4);
// *     returns 1: 5.4251848798444815
Math.tan(arg);

exports.tanh = arg => // Returns the hyperbolic tangent of the number, defined as sinh(number)/cosh(number)
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/tanh
// +   original by: Onno Marsman
// *     example 1: \php.tanh(5.4251848798444815);
// *     returns 1: 0.9999612058841574
(Math.exp(arg) - Math.exp(-arg)) / (Math.exp(arg) + Math.exp(-arg));

exports.time = () => // Return current UNIX timestamp
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/time
// +   original by: GeekFG (http://geekfg.blogspot.com)
// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
// +   improved by: metjay
// +   improved by: HKM
// *     example 1: \php.timeStamp = time();
// *     results 1: timeStamp > 1000000000 && timeStamp < 2000000000

Math.floor(new Date().getTime()/1000);

exports.time_nanosleep = (seconds, nanosecs) => {
    // Delay for a number of seconds and nano seconds
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/time_nanosleep
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: For study purposes. Current implementation could lock up the user's browser.
    // %        note 1: Consider using setTimeout() instead.
    // %        note 2: Note that the following function's argument, contrary to the reference to
    // %        note 2: nanoseconds, does not start being significant until 1,000,000 nanoseconds (milliseconds),
    // %        note 2: since that is the smallest unit handled by JavaScript's Date function.
    // *     example 1: \php.time_nanosleep(1, 2000000000); // delays for 3 seconds
    // *     returns 1: true
    var start = new Date().getTime();
    while (new Date() < (start + seconds*1000+nanosecs/1000000)) {}
    return true;
};

exports.time_sleep_until = timestamp => {
    // Make the script sleep until the specified time
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/time_sleep_until
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %          note: For study purposes. Current implementation could lock up the user's browser.
    // %          note: Expects a timestamp in seconds, so DO NOT pass in a JavaScript timestamp which are in milliseconds (e.g., new Date()) or otherwise the function will lock up the browser 1000 times longer than probably intended.
    // %          note: Consider using setTimeout() instead.
    // *     example 1: \php.time_sleep_until(1233146501) // delays until the time indicated by the given timestamp is reached
    // *     returns 1: true
    while (new Date() < timestamp*1000) {}
    return true;
};

exports.timezone_abbreviations_list = () => {
    // !No description available for timezone_abbreviations_list. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/timezone_abbreviations_list
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +      input by: ChaosNo1
    // +    revised by: Theriault
    // +    improved by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Based on timezonemap.h from PHP 5.3
    // *     example 1: \php.var list = timezone_abbreviations_list()
    // *     example 1: \php.list['acst'][0].timezone_id
    // *     returns 1: 'America/Porto_Acre'
    var list = {};

    var i = 0;
    var j = 0;
    var len = 0;
    var jlen = 0;
    var indice = '';
    var curr = '';
    var currSub = '';
    var currSubPrefix = '';
    var timezone_id = '';

    // BEGIN STATIC
    try { // We can't try to access on window, since it might not exist in some environments, and if we use "this.window"
            //    we risk adding another copy if different window objects are associated with the namespaced object
        php_js_shared; // Will be private static variable in namespaced version or global in non-namespaced
                                       //   version since we wish to share this across all instances
    }
    catch(e) {
        php_js_shared = {};
    }

    // An array of arrays. The index of each array is the relative
    // abbreviation from the abbreviations array below. Each sub array
    // consists of 2 to 4 values. The first value will be DST. The
    // second value is the index of the value in the offsets array.
    // The third value is the timezone ID if applicable. Null is
    // returned if their is no value. The fourth value is the index
    // of the prefix to use for the timezone ID if applicable.

    if (!php_js_shared.tz_abbrs) { // This should really be static, but we can at least avoid rebuilding the array each time
        php_js_shared.tz_abbrs = [
[[1, 14, "Porto_Acre", 9],
[1, 14, "Eirunepe", 9],
[1, 14, "Rio_Branco", 9],
[1, 14, "Acre", 15]],
[[0, 11, "Porto_Acre", 9],
[0, 11, "Eirunepe", 9],
[0, 11, "Rio_Branco", 9],
[0, 11, "Acre", 15]],
[[1, 25, "Goose_Bay", 9],
[1, 25, "Pangnirtung", 9]],
[[1, 22, "Halifax", 9],
[1, 22, "Barbados", 9],
[1, 22, "Blanc-Sablon", 9],
[1, 22, "Glace_Bay", 9],
[1, 22, "Goose_Bay", 9],
[1, 22, "Martinique", 9],
[1, 22, "Moncton", 9],
[1, 22, "Pangnirtung", 9],
[1, 22, "Thule", 9],
[1, 22, "Bermuda", 13],
[1, 22, "Atlantic", 16],
[1, 51, "Baghdad", 12]],
[[0, 52, "Kabul", 12]],
[[1, 6, "Anchorage", 9],
[1, 6, "Alaska"]],
[[0, 4, "Anchorage", 9],
[0, 4, "Adak", 9],
[0, 4, "Atka", 9],
[0, 4, "Alaska"],
[0, 4, "Aleutian"]],
[[1, 7, "Anchorage", 9],
[1, 7, "Juneau", 9],
[1, 7, "Nome", 9],
[1, 7, "Yakutat", 9],
[1, 7, "Alaska"]],
[[0, 6, "Anchorage", 9],
[0, 6, "Juneau", 9],
[0, 6, "Nome", 9],
[0, 6, "Yakutat", 9],
[0, 6, "Alaska"]],
[[1, 57, "Aqtobe", 12]],
[[0, 51, "Aqtobe", 12],
[0, 54, "Aqtobe", 12],
[0, 57, "Aqtobe", 12]],
[[1, 59, "Almaty", 12]],
[[0, 54, "Almaty", 12],
[0, 57, "Almaty", 12]],
[[1, 51, "Yerevan", 12],
[1, 54, "Yerevan", 12],
[1, 22, "Boa_Vista", 9],
[1, 22, "Campo_Grande", 9],
[1, 22, "Cuiaba", 9],
[1, 22, "Manaus", 9],
[1, 22, "Porto_Velho", 9],
[1, 22, "West", 15]],
[[0, 47, "Yerevan", 12],
[0, 51, "Yerevan", 12],
[0, 14, "Boa_Vista", 9],
[0, 14, "Campo_Grande", 9],
[0, 14, "Cuiaba", 9],
[0, 14, "Manaus", 9],
[0, 14, "Porto_Velho", 9],
[0, 14, "West", 15],
[0, 32, "Amsterdam", 18]],
[[1, 76, "Anadyr", 12],
[1, 79, "Anadyr", 12],
[1, 81, "Anadyr", 12]],
[[0, 74, "Anadyr", 12],
[0, 76, "Anadyr", 12],
[0, 79, "Anadyr", 12]],
[[0, 13, "Curacao", 9],
[0, 13, "Aruba", 9]],
[[1, 22, "Halifax", 9],
[1, 22, "Blanc-Sablon", 9],
[1, 22, "Glace_Bay", 9],
[1, 22, "Moncton", 9],
[1, 22, "Pangnirtung", 9],
[1, 22, "Puerto_Rico", 9],
[1, 22, "Atlantic", 16]],
[[1, 54, "Aqtau", 12],
[1, 57, "Aqtau", 12],
[1, 57, "Aqtobe", 12]],
[[0, 51, "Aqtau", 12],
[0, 54, "Aqtau", 12],
[0, 54, "Aqtobe", 12]],
[[1, 22, "Buenos_Aires", 9],
[1, 25, "Buenos_Aires", 9],
[1, 22, "Buenos_Aires", 2],
[1, 22, "Catamarca", 2],
[1, 22, "ComodRivadavia", 2],
[1, 22, "Cordoba", 2],
[1, 22, "Jujuy", 2],
[1, 22, "La_Rioja", 2],
[1, 22, "Mendoza", 2],
[1, 22, "Rio_Gallegos", 2],
[1, 22, "San_Juan", 2],
[1, 22, "Tucuman", 2],
[1, 22, "Ushuaia", 2],
[1, 22, "Catamarca", 9],
[1, 22, "Cordoba", 9],
[1, 22, "Jujuy", 9],
[1, 22, "Mendoza", 9],
[1, 22, "Rosario", 9],
[1, 22, "Palmer", 10],
[1, 25, "Buenos_Aires", 2],
[1, 25, "Catamarca", 2],
[1, 25, "ComodRivadavia", 2],
[1, 25, "Cordoba", 2],
[1, 25, "Jujuy", 2],
[1, 25, "La_Rioja", 2],
[1, 25, "Mendoza", 2],
[1, 25, "Rio_Gallegos", 2],
[1, 25, "San_Juan", 2],
[1, 25, "Tucuman", 2],
[1, 25, "Ushuaia", 2],
[1, 25, "Catamarca", 9],
[1, 25, "Cordoba", 9],
[1, 25, "Jujuy", 9],
[1, 25, "Mendoza", 9],
[1, 25, "Rosario", 9],
[1, 25, "Palmer", 10]],
[[0, 22, "Buenos_Aires", 9],
[0, 14, "Buenos_Aires", 9],
[0, 22, "Buenos_Aires", 2],
[0, 22, "Catamarca", 2],
[0, 22, "ComodRivadavia", 2],
[0, 22, "Cordoba", 2],
[0, 22, "Jujuy", 2],
[0, 22, "La_Rioja", 2],
[0, 22, "Mendoza", 2],
[0, 22, "Rio_Gallegos", 2],
[0, 22, "San_Juan", 2],
[0, 22, "Tucuman", 2],
[0, 22, "Ushuaia", 2],
[0, 22, "Catamarca", 9],
[0, 22, "Cordoba", 9],
[0, 22, "Jujuy", 9],
[0, 22, "Mendoza", 9],
[0, 22, "Rosario", 9],
[0, 22, "Palmer", 10],
[0, 14, "Buenos_Aires", 2],
[0, 14, "Catamarca", 2],
[0, 14, "ComodRivadavia", 2],
[0, 14, "Cordoba", 2],
[0, 14, "Jujuy", 2],
[0, 14, "La_Rioja", 2],
[0, 14, "Mendoza", 2],
[0, 14, "Rio_Gallegos", 2],
[0, 14, "San_Juan", 2],
[0, 14, "Tucuman", 2],
[0, 14, "Ushuaia", 2],
[0, 14, "Catamarca", 9],
[0, 14, "Cordoba", 9],
[0, 14, "Jujuy", 9],
[0, 14, "Mendoza", 9],
[0, 14, "Rosario", 9],
[0, 14, "Palmer", 10]],
[[1, 54, "Ashkhabad", 12],
[1, 57, "Ashkhabad", 12],
[1, 54, "Ashgabat", 12],
[1, 57, "Ashgabat", 12]],
[[0, 51, "Ashkhabad", 12],
[0, 54, "Ashkhabad", 12],
[0, 51, "Ashgabat", 12],
[0, 54, "Ashgabat", 12]],
[[0, 47, "Riyadh", 12],
[0, 14, "Anguilla", 9],
[0, 14, "Antigua", 9],
[0, 14, "Aruba", 9],
[0, 14, "Barbados", 9],
[0, 14, "Blanc-Sablon", 9],
[0, 14, "Curacao", 9],
[0, 14, "Dominica", 9],
[0, 14, "Glace_Bay", 9],
[0, 14, "Goose_Bay", 9],
[0, 14, "Grenada", 9],
[0, 14, "Guadeloupe", 9],
[0, 14, "Halifax", 9],
[0, 14, "Martinique", 9],
[0, 14, "Miquelon", 9],
[0, 14, "Moncton", 9],
[0, 14, "Montserrat", 9],
[0, 14, "Pangnirtung", 9],
[0, 14, "Port_of_Spain", 9],
[0, 14, "Puerto_Rico", 9],
[0, 14, "Santo_Domingo", 9],
[0, 14, "St_Kitts", 9],
[0, 14, "St_Lucia", 9],
[0, 14, "St_Thomas", 9],
[0, 14, "St_Vincent", 9],
[0, 14, "Thule", 9],
[0, 14, "Tortola", 9],
[0, 14, "Virgin", 9],
[0, 14, "Bermuda", 13],
[0, 14, "Atlantic", 16],
[0, 47, "Aden", 12],
[0, 47, "Baghdad", 12],
[0, 47, "Bahrain", 12],
[0, 47, "Kuwait", 12],
[0, 47, "Qatar", 12]],
[[1, 22, "Halifax", 9],
[1, 22, "Blanc-Sablon", 9],
[1, 22, "Glace_Bay", 9],
[1, 22, "Moncton", 9],
[1, 22, "Pangnirtung", 9],
[1, 22, "Puerto_Rico", 9],
[1, 22, "Atlantic", 16]],
[[1, 31, "Azores", 13]],
[[1, 28, "Azores", 13],
[1, 31, "Azores", 13]],
[[0, 28, "Azores", 13],
[0, 25, "Azores", 13]],
[[1, 51, "Baku", 12],
[1, 54, "Baku", 12]],
[[0, 47, "Baku", 12],
[0, 51, "Baku", 12]],
[[1, 51, "Baku", 12],
[1, 54, "Baku", 12]],
[[0, 47, "Baku", 12],
[0, 51, "Baku", 12]],
[[1, 42, "London", 18],
[1, 42, "Belfast", 18],
[1, 42, "Gibraltar", 18],
[1, 42, "Guernsey", 18],
[1, 42, "Isle_of_Man", 18],
[1, 42, "Jersey", 18],
[1, 42, "GB"],
[1, 42, "GB-Eire"]],
[[1, 4, "Adak", 9],
[1, 4, "Atka", 9],
[1, 4, "Nome", 9],
[1, 4, "Aleutian"],
[0, 57, "Dacca", 12],
[0, 57, "Dhaka", 12]],
[[0, 43, "Mogadishu"],
[0, 43, "Kampala"],
[0, 43, "Nairobi"]],
[[0, 46, "Nairobi"],
[0, 46, "Dar_es_Salaam"],
[0, 46, "Kampala"]],
[[0, 15, "Barbados", 9],
[0, 27, "Banjul"],
[0, 41, "Tiraspol", 18],
[0, 41, "Chisinau", 18]],
[[0, 63, "Brunei", 12],
[0, 65, "Brunei", 12]],
[[1, 66, "Kuching", 12]],
[[0, 63, "Kuching", 12],
[0, 65, "Kuching", 12]],
[[1, 19, "La_Paz", 9]],
[[0, 14, "La_Paz", 9]],
[[1, 25, "Sao_Paulo", 9],
[1, 25, "Araguaina", 9],
[1, 25, "Bahia", 9],
[1, 25, "Belem", 9],
[1, 25, "Fortaleza", 9],
[1, 25, "Maceio", 9],
[1, 25, "Recife", 9],
[1, 25, "East", 15]],
[[0, 22, "Sao_Paulo", 9],
[0, 22, "Araguaina", 9],
[0, 22, "Bahia", 9],
[0, 22, "Belem", 9],
[0, 22, "Fortaleza", 9],
[0, 22, "Maceio", 9],
[0, 22, "Recife", 9],
[0, 22, "East", 15]],
[[0, 35, "London", 18],
[1, 35, "London", 18],
[0, 2, "Adak", 9],
[0, 2, "Atka", 9],
[0, 2, "Nome", 9],
[0, 2, "Midway", 21],
[0, 2, "Pago_Pago", 21],
[0, 2, "Samoa", 21],
[0, 2, "Aleutian"],
[0, 2, "Samoa"],
[0, 35, "Belfast", 18],
[0, 35, "Guernsey", 18],
[0, 35, "Isle_of_Man", 18],
[0, 35, "Jersey", 18],
[0, 35, "GB"],
[0, 35, "GB-Eire"],
[1, 35, "Eire"],
[1, 35, "Belfast", 18],
[1, 35, "Dublin", 18],
[1, 35, "Gibraltar", 18],
[1, 35, "Guernsey", 18],
[1, 35, "Isle_of_Man", 18],
[1, 35, "Jersey", 18],
[1, 35, "GB"],
[1, 35, "GB-Eire"]],
[[0, 57, "Thimbu", 12],
[0, 57, "Thimphu", 12]],
[[0, 58, "Calcutta", 12],
[0, 58, "Dacca", 12],
[0, 58, "Dhaka", 12],
[0, 58, "Rangoon", 12]],
[[0, 28, "Canary", 13]],
[[1, 6, "Anchorage", 9],
[1, 6, "Alaska"]],
[[0, 70, "Adelaide", 14],
[1, 47, "Gaborone"],
[1, 47, "Khartoum"]],
[[0, 4, "Anchorage", 9],
[0, 4, "Alaska"],
[0, 42, "Khartoum"],
[0, 42, "Blantyre"],
[0, 42, "Gaborone"],
[0, 42, "Harare"],
[0, 42, "Kigali"],
[0, 42, "Lusaka"],
[0, 42, "Maputo"],
[0, 42, "Windhoek"]],
[[1, 6, "Anchorage", 9],
[1, 6, "Alaska"]],
[[1, 14, "Rankin_Inlet", 9]],
[[1, 11, "Chicago", 9],
[1, 14, "Havana", 9],
[1, 14, "Cuba"],
[1, 11, "Atikokan", 9],
[1, 11, "Belize", 9],
[1, 11, "Cambridge_Bay", 9],
[1, 11, "Cancun", 9],
[1, 11, "Chihuahua", 9],
[1, 11, "Coral_Harbour", 9],
[1, 11, "Costa_Rica", 9],
[1, 11, "El_Salvador", 9],
[1, 11, "Fort_Wayne", 9],
[1, 11, "Guatemala", 9],
[1, 11, "Indianapolis", 4],
[1, 11, "Knox", 4],
[1, 11, "Marengo", 4],
[1, 11, "Petersburg", 4],
[1, 11, "Vevay", 4],
[1, 11, "Vincennes", 4],
[1, 11, "Winamac", 4],
[1, 11, "Indianapolis", 9],
[1, 11, "Iqaluit", 9],
[1, 11, "Louisville", 6],
[1, 11, "Monticello", 6],
[1, 11, "Knox_IN", 9],
[1, 11, "Louisville", 9],
[1, 11, "Managua", 9],
[1, 11, "Menominee", 9],
[1, 11, "Merida", 9],
[1, 11, "Mexico_City", 9],
[1, 11, "Monterrey", 9],
[1, 11, "Center", 8],
[1, 11, "New_Salem", 8],
[1, 11, "Pangnirtung", 9],
[1, 11, "Rainy_River", 9],
[1, 11, "Rankin_Inlet", 9],
[1, 11, "Tegucigalpa", 9],
[1, 11, "Winnipeg", 9],
[1, 11, "Central", 16],
[1, 11, "CST6CDT"],
[1, 11, "General", 20],
[1, 11, "Central"],
[1, 11, "East-Indiana"],
[1, 11, "Indiana-Starke"],
[1, 69, "Shanghai", 12],
[1, 69, "Chongqing", 12],
[1, 69, "Chungking", 12],
[1, 69, "Harbin", 12],
[1, 69, "Kashgar", 12],
[1, 69, "Taipei", 12],
[1, 69, "Urumqi", 12],
[1, 69, "PRC"],
[1, 69, "ROC"]],
[[1, 47, "Berlin", 18],
[1, 47, "CET"]],
[[1, 42, "Berlin", 18],
[1, 47, "Kaliningrad", 18],
[1, 42, "Algiers"],
[1, 42, "Ceuta"],
[1, 42, "Tripoli"],
[1, 42, "Tunis"],
[1, 42, "Longyearbyen", 11],
[1, 42, "Jan_Mayen", 13],
[1, 42, "CET"],
[1, 42, "Amsterdam", 18],
[1, 42, "Andorra", 18],
[1, 42, "Athens", 18],
[1, 42, "Belgrade", 18],
[1, 42, "Bratislava", 18],
[1, 42, "Brussels", 18],
[1, 42, "Budapest", 18],
[1, 42, "Chisinau", 18],
[1, 42, "Copenhagen", 18],
[1, 42, "Gibraltar", 18],
[1, 42, "Kaliningrad", 18],
[1, 42, "Kiev", 18],
[1, 42, "Lisbon", 18],
[1, 42, "Ljubljana", 18],
[1, 42, "Luxembourg", 18],
[1, 42, "Madrid", 18],
[1, 42, "Malta", 18],
[1, 42, "Minsk", 18],
[1, 42, "Monaco", 18],
[1, 42, "Oslo", 18],
[1, 42, "Paris", 18],
[1, 42, "Podgorica", 18],
[1, 42, "Prague", 18],
[1, 42, "Riga", 18],
[1, 42, "Rome", 18],
[1, 42, "San_Marino", 18],
[1, 42, "Sarajevo", 18],
[1, 42, "Simferopol", 18],
[1, 42, "Skopje", 18],
[1, 42, "Sofia", 18],
[1, 42, "Stockholm", 18],
[1, 42, "Tallinn", 18],
[1, 42, "Tirane", 18],
[1, 42, "Tiraspol", 18],
[1, 42, "Uzhgorod", 18],
[1, 42, "Vaduz", 18],
[1, 42, "Vatican", 18],
[1, 42, "Vienna", 18],
[1, 42, "Vilnius", 18],
[1, 42, "Warsaw", 18],
[1, 42, "Zagreb", 18],
[1, 42, "Zaporozhye", 18],
[1, 42, "Zurich", 18],
[1, 42, "Libya"],
[1, 42, "Poland"],
[1, 42, "Portugal"],
[1, 42, "WET"]],
[[0, 35, "Berlin", 18],
[0, 35, "Algiers"],
[0, 35, "Casablanca"],
[0, 35, "Ceuta"],
[0, 35, "Tripoli"],
[0, 35, "Tunis"],
[0, 35, "Longyearbyen", 11],
[0, 35, "Jan_Mayen", 13],
[0, 35, "CET"],
[0, 35, "Amsterdam", 18],
[0, 35, "Andorra", 18],
[0, 35, "Athens", 18],
[0, 35, "Belgrade", 18],
[0, 35, "Bratislava", 18],
[0, 35, "Brussels", 18],
[0, 35, "Budapest", 18],
[0, 35, "Chisinau", 18],
[0, 35, "Copenhagen", 18],
[0, 35, "Gibraltar", 18],
[0, 35, "Kaliningrad", 18],
[0, 35, "Kiev", 18],
[0, 35, "Lisbon", 18],
[0, 35, "Ljubljana", 18],
[0, 35, "Luxembourg", 18],
[0, 35, "Madrid", 18],
[0, 35, "Malta", 18],
[0, 35, "Minsk", 18],
[0, 35, "Monaco", 18],
[0, 35, "Oslo", 18],
[0, 35, "Paris", 18],
[0, 35, "Podgorica", 18],
[0, 35, "Prague", 18],
[0, 35, "Riga", 18],
[0, 35, "Rome", 18],
[0, 35, "San_Marino", 18],
[0, 35, "Sarajevo", 18],
[0, 35, "Simferopol", 18],
[0, 35, "Skopje", 18],
[0, 35, "Sofia", 18],
[0, 35, "Stockholm", 18],
[0, 35, "Tallinn", 18],
[0, 35, "Tirane", 18],
[0, 35, "Tiraspol", 18],
[0, 35, "Uzhgorod", 18],
[0, 35, "Vaduz", 18],
[0, 35, "Vatican", 18],
[0, 35, "Vienna", 18],
[0, 35, "Vilnius", 18],
[0, 35, "Warsaw", 18],
[0, 35, "Zagreb", 18],
[0, 35, "Zaporozhye", 18],
[0, 35, "Zurich", 18],
[0, 35, "Libya"],
[0, 35, "Poland"],
[0, 35, "Portugal"],
[0, 35, "WET"],
[0, 42, "Kaliningrad", 18]],
[[1, 28, "Scoresbysund", 9]],
[[0, 25, "Scoresbysund", 9]],
[[1, 80, "Chatham", 21],
[1, 80, "NZ-CHAT"]],
[[0, 78, "Chatham", 21],
[0, 78, "NZ-CHAT"]],
[[0, 67, "Harbin", 12],
[0, 69, "Harbin", 12]],
[[1, 10, "Belize", 9]],
[[1, 72, "Choibalsan", 12]],
[[0, 69, "Choibalsan", 12]],
[[0, 65, "Dili", 12],
[0, 65, "Makassar", 12],
[0, 65, "Pontianak", 12],
[0, 65, "Ujung_Pandang", 12]],
[[0, 69, "Sakhalin", 12]],
[[1, 5, "Rarotonga", 21]],
[[0, 4, "Rarotonga", 21]],
[[1, 22, "Santiago", 9],
[1, 14, "Santiago", 9],
[1, 22, "Palmer", 10],
[1, 22, "Continental", 17],
[1, 14, "Continental", 17]],
[[0, 14, "Santiago", 9],
[0, 11, "Santiago", 9],
[0, 14, "Palmer", 10],
[0, 14, "Continental", 17],
[0, 11, "Continental", 17]],
[[1, 14, "Bogota", 9]],
[[0, 11, "Bogota", 9]],
[[1, 11, "Chicago", 9],
[1, 11, "Atikokan", 9],
[1, 11, "Coral_Harbour", 9],
[1, 11, "Fort_Wayne", 9],
[1, 11, "Indianapolis", 4],
[1, 11, "Knox", 4],
[1, 11, "Marengo", 4],
[1, 11, "Petersburg", 4],
[1, 11, "Vevay", 4],
[1, 11, "Vincennes", 4],
[1, 11, "Winamac", 4],
[1, 11, "Indianapolis", 9],
[1, 11, "Louisville", 6],
[1, 11, "Monticello", 6],
[1, 11, "Knox_IN", 9],
[1, 11, "Louisville", 9],
[1, 11, "Menominee", 9],
[1, 11, "Rainy_River", 9],
[1, 11, "Rankin_Inlet", 9],
[1, 11, "Winnipeg", 9],
[1, 11, "Central", 16],
[1, 11, "CST6CDT"],
[1, 11, "Central"],
[1, 11, "East-Indiana"],
[1, 11, "Indiana-Starke"]],
[[0, 9, "Chicago", 9],
[0, 11, "Havana", 9],
[0, 11, "Cuba"],
[0, 9, "Atikokan", 9],
[0, 9, "Belize", 9],
[0, 9, "Cambridge_Bay", 9],
[0, 9, "Cancun", 9],
[0, 9, "Chihuahua", 9],
[0, 9, "Coral_Harbour", 9],
[0, 9, "Costa_Rica", 9],
[0, 9, "Detroit", 9],
[0, 9, "El_Salvador", 9],
[0, 9, "Fort_Wayne", 9],
[0, 9, "Guatemala", 9],
[0, 9, "Hermosillo", 9],
[0, 9, "Indianapolis", 4],
[0, 9, "Knox", 4],
[0, 9, "Marengo", 4],
[0, 9, "Petersburg", 4],
[0, 9, "Vevay", 4],
[0, 9, "Vincennes", 4],
[0, 9, "Winamac", 4],
[0, 9, "Indianapolis", 9],
[0, 9, "Iqaluit", 9],
[0, 9, "Louisville", 6],
[0, 9, "Monticello", 6],
[0, 9, "Knox_IN", 9],
[0, 9, "Louisville", 9],
[0, 9, "Managua", 9],
[0, 9, "Mazatlan", 9],
[0, 9, "Menominee", 9],
[0, 9, "Merida", 9],
[0, 9, "Mexico_City", 9],
[0, 9, "Monterrey", 9],
[0, 9, "Center", 8],
[0, 9, "New_Salem", 8],
[0, 9, "Pangnirtung", 9],
[0, 9, "Rainy_River", 9],
[0, 9, "Rankin_Inlet", 9],
[0, 9, "Regina", 9],
[0, 9, "Swift_Current", 9],
[0, 9, "Tegucigalpa", 9],
[0, 9, "Winnipeg", 9],
[0, 9, "Central", 16],
[0, 9, "East-Saskatchewan", 16],
[0, 9, "Saskatchewan", 16],
[0, 9, "CST6CDT"],
[0, 9, "BajaSur", 20],
[0, 9, "General", 20],
[0, 9, "Central"],
[0, 9, "East-Indiana"],
[0, 9, "Indiana-Starke"],
[0, 9, "Michigan"],
[0, 65, "Chongqing", 12],
[0, 65, "Chungking", 12],
[0, 65, "Harbin", 12],
[0, 65, "Kashgar", 12],
[0, 65, "Macao", 12],
[0, 65, "Macau", 12],
[0, 65, "Shanghai", 12],
[0, 65, "Taipei", 12],
[0, 65, "Urumqi", 12],
[0, 65, "PRC"],
[0, 65, "ROC"],
[0, 70, "Jayapura", 12],
[0, 70, "Adelaide", 14],
[0, 70, "Broken_Hill", 14],
[0, 70, "Darwin", 14],
[0, 70, "North", 14],
[0, 70, "South", 14],
[0, 70, "Yancowinna", 14],
[1, 73, "Adelaide", 14],
[1, 73, "Broken_Hill", 14],
[1, 73, "Darwin", 14],
[1, 73, "North", 14],
[1, 73, "South", 14],
[1, 73, "Yancowinna", 14]],
[[1, 28, "Cape_Verde", 13]],
[[0, 28, "Cape_Verde", 13],
[0, 25, "Cape_Verde", 13]],
[[0, 68, "Eucla", 14],
[1, 71, "Eucla", 14]],
[[1, 11, "Chicago", 9],
[1, 11, "Atikokan", 9],
[1, 11, "Coral_Harbour", 9],
[1, 11, "Fort_Wayne", 9],
[1, 11, "Indianapolis", 4],
[1, 11, "Knox", 4],
[1, 11, "Marengo", 4],
[1, 11, "Petersburg", 4],
[1, 11, "Vevay", 4],
[1, 11, "Vincennes", 4],
[1, 11, "Winamac", 4],
[1, 11, "Indianapolis", 9],
[1, 11, "Louisville", 6],
[1, 11, "Monticello", 6],
[1, 11, "Knox_IN", 9],
[1, 11, "Louisville", 9],
[1, 11, "Menominee", 9],
[1, 11, "Mexico_City", 9],
[1, 11, "Rainy_River", 9],
[1, 11, "Rankin_Inlet", 9],
[1, 11, "Winnipeg", 9],
[1, 11, "Central", 16],
[1, 11, "CST6CDT"],
[1, 11, "General", 20],
[1, 11, "Central"],
[1, 11, "East-Indiana"],
[1, 11, "Indiana-Starke"]],
[[0, 72, "Guam", 21],
[0, 72, "Saipan", 21]],
[[0, 57, "Dacca", 12],
[0, 57, "Dhaka", 12]],
[[0, 59, "Davis", 10]],
[[0, 72, "DumontDUrville", 10]],
[[1, 57, "Dushanbe", 12],
[1, 59, "Dushanbe", 12]],
[[0, 54, "Dushanbe", 12],
[0, 57, "Dushanbe", 12]],
[[1, 11, "EasterIsland", 17],
[1, 9, "EasterIsland", 17],
[1, 11, "Easter", 21],
[1, 9, "Easter", 21]],
[[0, 9, "EasterIsland", 17],
[0, 8, "EasterIsland", 17],
[0, 9, "Easter", 21],
[0, 8, "Easter", 21],
[1, 51, "Antananarivo", 19]],
[[0, 47, "Khartoum"],
[0, 47, "Addis_Ababa"],
[0, 47, "Asmara"],
[0, 47, "Asmera"],
[0, 47, "Dar_es_Salaam"],
[0, 47, "Djibouti"],
[0, 47, "Kampala"],
[0, 47, "Mogadishu"],
[0, 47, "Nairobi"],
[0, 47, "Antananarivo", 19],
[0, 47, "Comoro", 19],
[0, 47, "Mayotte", 19]],
[[0, 11, "Guayaquil", 9],
[0, 11, "Galapagos", 21]],
[[1, 22, "Iqaluit", 9]],
[[1, 14, "New_York", 9],
[1, 14, "Cancun", 9],
[1, 14, "Detroit", 9],
[1, 14, "Fort_Wayne", 9],
[1, 14, "Grand_Turk", 9],
[1, 14, "Indianapolis", 4],
[1, 14, "Marengo", 4],
[1, 14, "Vevay", 4],
[1, 14, "Vincennes", 4],
[1, 14, "Winamac", 4],
[1, 14, "Indianapolis", 9],
[1, 14, "Iqaluit", 9],
[1, 14, "Jamaica", 9],
[1, 14, "Louisville", 6],
[1, 14, "Monticello", 6],
[1, 14, "Louisville", 9],
[1, 14, "Montreal", 9],
[1, 14, "Nassau", 9],
[1, 14, "Nipigon", 9],
[1, 14, "Pangnirtung", 9],
[1, 14, "Port-au-Prince", 9],
[1, 14, "Santo_Domingo", 9],
[1, 14, "Thunder_Bay", 9],
[1, 14, "Toronto", 9],
[1, 14, "Eastern", 16],
[1, 14, "EST"],
[1, 14, "EST5EDT"],
[1, 14, "Jamaica"],
[1, 14, "East-Indiana"],
[1, 14, "Eastern"],
[1, 14, "Michigan"]],
[[1, 47, "Helsinki", 18],
[1, 47, "Cairo"],
[1, 47, "Amman", 12],
[1, 47, "Beirut", 12],
[1, 47, "Damascus", 12],
[1, 47, "Gaza", 12],
[1, 47, "Istanbul", 12],
[1, 47, "Nicosia", 12],
[1, 47, "EET"],
[1, 47, "Egypt"],
[1, 47, "Athens", 18],
[1, 47, "Bucharest", 18],
[1, 47, "Chisinau", 18],
[1, 47, "Istanbul", 18],
[1, 47, "Kaliningrad", 18],
[1, 47, "Kiev", 18],
[1, 47, "Mariehamn", 18],
[1, 47, "Minsk", 18],
[1, 47, "Moscow", 18],
[1, 47, "Nicosia", 18],
[1, 47, "Riga", 18],
[1, 47, "Simferopol", 18],
[1, 47, "Sofia", 18],
[1, 47, "Tallinn", 18],
[1, 47, "Tiraspol", 18],
[1, 47, "Uzhgorod", 18],
[1, 47, "Vilnius", 18],
[1, 47, "Warsaw", 18],
[1, 47, "Zaporozhye", 18],
[1, 47, "Poland"],
[1, 47, "Turkey"],
[1, 47, "W-SU"]],
[[0, 42, "Helsinki", 18],
[1, 47, "Gaza", 12],
[0, 42, "Cairo"],
[0, 42, "Tripoli"],
[0, 42, "Amman", 12],
[0, 42, "Beirut", 12],
[0, 42, "Damascus", 12],
[0, 42, "Gaza", 12],
[0, 42, "Istanbul", 12],
[0, 42, "Nicosia", 12],
[0, 42, "EET"],
[0, 42, "Egypt"],
[0, 42, "Athens", 18],
[0, 42, "Bucharest", 18],
[0, 42, "Chisinau", 18],
[0, 42, "Istanbul", 18],
[0, 42, "Kaliningrad", 18],
[0, 42, "Kiev", 18],
[0, 42, "Mariehamn", 18],
[0, 42, "Minsk", 18],
[0, 42, "Moscow", 18],
[0, 42, "Nicosia", 18],
[0, 42, "Riga", 18],
[0, 42, "Simferopol", 18],
[0, 42, "Sofia", 18],
[0, 42, "Tallinn", 18],
[0, 42, "Tiraspol", 18],
[0, 42, "Uzhgorod", 18],
[0, 42, "Vilnius", 18],
[0, 42, "Warsaw", 18],
[0, 42, "Zaporozhye", 18],
[0, 42, "Libya"],
[0, 42, "Poland"],
[0, 42, "Turkey"],
[0, 42, "W-SU"]],
[[1, 31, "Scoresbysund", 9]],
[[0, 28, "Scoresbysund", 9]],
[[1, 13, "Santo_Domingo", 9]],
[[0, 69, "Jayapura", 12]],
[[1, 14, "New_York", 9],
[1, 14, "Detroit", 9],
[1, 14, "Iqaluit", 9],
[1, 14, "Montreal", 9],
[1, 14, "Nipigon", 9],
[1, 14, "Thunder_Bay", 9],
[1, 14, "Toronto", 9],
[1, 14, "Eastern", 16],
[1, 14, "EST"],
[1, 14, "EST5EDT"],
[1, 14, "Eastern"],
[1, 14, "Michigan"]],
[[0, 11, "New_York", 9],
[0, 11, "Antigua", 9],
[0, 11, "Atikokan", 9],
[0, 11, "Cambridge_Bay", 9],
[0, 11, "Cancun", 9],
[0, 11, "Cayman", 9],
[0, 11, "Chicago", 9],
[0, 11, "Coral_Harbour", 9],
[0, 11, "Detroit", 9],
[0, 11, "Fort_Wayne", 9],
[0, 11, "Grand_Turk", 9],
[0, 11, "Indianapolis", 4],
[0, 11, "Knox", 4],
[0, 11, "Marengo", 4],
[0, 11, "Petersburg", 4],
[0, 11, "Vevay", 4],
[0, 11, "Vincennes", 4],
[0, 11, "Winamac", 4],
[0, 11, "Indianapolis", 9],
[0, 11, "Iqaluit", 9],
[0, 11, "Jamaica", 9],
[0, 11, "Louisville", 6],
[0, 11, "Monticello", 6],
[0, 11, "Knox_IN", 9],
[0, 11, "Louisville", 9],
[0, 11, "Managua", 9],
[0, 11, "Menominee", 9],
[0, 11, "Merida", 9],
[0, 11, "Montreal", 9],
[0, 11, "Nassau", 9],
[0, 11, "Nipigon", 9],
[0, 11, "Panama", 9],
[0, 11, "Pangnirtung", 9],
[0, 11, "Port-au-Prince", 9],
[0, 11, "Rankin_Inlet", 9],
[0, 11, "Santo_Domingo", 9],
[0, 11, "Thunder_Bay", 9],
[0, 11, "Toronto", 9],
[0, 11, "Eastern", 16],
[0, 11, "EST"],
[0, 11, "EST5EDT"],
[0, 11, "Jamaica"],
[0, 11, "Central"],
[0, 11, "East-Indiana"],
[0, 11, "Eastern"],
[0, 11, "Indiana-Starke"],
[0, 11, "Michigan"],
[0, 72, "ACT", 14],
[0, 72, "Brisbane", 14],
[0, 72, "Canberra", 14],
[0, 72, "Currie", 14],
[0, 72, "Hobart", 14],
[0, 72, "Lindeman", 14],
[0, 72, "Melbourne", 14],
[0, 72, "NSW", 14],
[0, 72, "Queensland", 14],
[0, 72, "Sydney", 14],
[0, 72, "Tasmania", 14],
[0, 72, "Victoria", 14],
[1, 74, "Melbourne", 14],
[1, 74, "ACT", 14],
[1, 74, "Brisbane", 14],
[1, 74, "Canberra", 14],
[1, 74, "Currie", 14],
[1, 74, "Hobart", 14],
[1, 74, "Lindeman", 14],
[1, 74, "NSW", 14],
[1, 74, "Queensland", 14],
[1, 74, "Sydney", 14],
[1, 74, "Tasmania", 14],
[1, 74, "Victoria", 14]],
[[1, 14, "New_York", 9],
[1, 14, "Detroit", 9],
[1, 14, "Iqaluit", 9],
[1, 14, "Montreal", 9],
[1, 14, "Nipigon", 9],
[1, 14, "Thunder_Bay", 9],
[1, 14, "Toronto", 9],
[1, 14, "Eastern", 16],
[1, 14, "EST"],
[1, 14, "EST5EDT"],
[1, 14, "Eastern"],
[1, 14, "Michigan"]],
[[1, 79, "Fiji", 21]],
[[0, 76, "Fiji", 21]],
[[1, 22, "Stanley", 13],
[1, 25, "Stanley", 13]],
[[0, 22, "Stanley", 13],
[0, 14, "Stanley", 13]],
[[1, 28, "Noronha", 9],
[1, 28, "DeNoronha", 15]],
[[0, 25, "Noronha", 9],
[0, 25, "DeNoronha", 15]],
[[0, 51, "Aqtau", 12],
[0, 54, "Aqtau", 12]],
[[1, 57, "Bishkek", 12],
[1, 59, "Bishkek", 12]],
[[0, 54, "Bishkek", 12],
[0, 57, "Bishkek", 12]],
[[0, 9, "Galapagos", 21]],
[[0, 6, "Gambier", 21]],
[[0, 16, "Guyana", 9]],
[[1, 51, "Tbilisi", 12],
[1, 54, "Tbilisi", 12]],
[[0, 47, "Tbilisi", 12],
[0, 51, "Tbilisi", 12]],
[[0, 22, "Cayenne", 9],
[0, 14, "Cayenne", 9]],
[[1, 33, "Accra"]],
[[0, 31, "Abidjan"],
[0, 31, "Accra"],
[0, 31, "Bamako"],
[0, 31, "Banjul"],
[0, 31, "Bissau"],
[0, 31, "Conakry"],
[0, 31, "Dakar"],
[0, 31, "Freetown"],
[0, 31, "Malabo"],
[0, 31, "Monrovia"],
[0, 31, "Niamey"],
[0, 31, "Nouakchott"],
[0, 31, "Ouagadougou"],
[0, 31, "Porto-Novo"],
[0, 31, "Sao_Tome"],
[0, 31, "Timbuktu"],
[0, 31, "Danmarkshavn", 9],
[0, 31, "Reykjavik", 13],
[0, 31, "St_Helena", 13],
[0, 31, "Eire"],
[0, 31, "Belfast", 18],
[0, 31, "Dublin", 18],
[0, 31, "Gibraltar", 18],
[0, 31, "Guernsey", 18],
[0, 31, "Isle_of_Man", 18],
[0, 31, "Jersey", 18],
[0, 31, "London", 18],
[0, 31, "GB"],
[0, 31, "GB-Eire"],
[0, 31, "Iceland"]],
[[0, 51, "Dubai", 12],
[0, 51, "Bahrain", 12],
[0, 51, "Muscat", 12],
[0, 51, "Qatar", 12]],
[[0, 22, "Guyana", 9],
[0, 16, "Guyana", 9],
[0, 14, "Guyana", 9]],
[[1, 6, "Adak", 9],
[1, 6, "Atka", 9],
[1, 6, "Aleutian"]],
[[0, 4, "Adak", 9],
[0, 4, "Atka", 9],
[0, 4, "Aleutian"]],
[[1, 5, "Honolulu", 21],
[1, 5, "HST"],
[1, 5, "Hawaii"]],
[[1, 69, "Hong_Kong", 12],
[1, 69, "Hongkong"]],
[[0, 65, "Hong_Kong", 12],
[0, 65, "Hongkong"]],
[[1, 65, "Hovd", 12]],
[[0, 57, "Hovd", 12],
[0, 59, "Hovd", 12]],
[[1, 5, "Honolulu", 21],
[1, 5, "HST"],
[1, 5, "Hawaii"]],
[[0, 4, "Honolulu", 21],
[0, 3, "Honolulu", 21],
[0, 4, "HST"],
[0, 4, "Hawaii"],
[0, 3, "HST"],
[0, 3, "Hawaii"]],
[[1, 5, "Honolulu", 21],
[1, 5, "HST"],
[1, 5, "Hawaii"]],
[[0, 59, "Bangkok", 12],
[0, 59, "Phnom_Penh", 12],
[0, 59, "Saigon", 12],
[0, 59, "Vientiane", 12],
[0, 65, "Phnom_Penh", 12],
[0, 65, "Saigon", 12],
[0, 65, "Vientiane", 12]],
[[1, 51, "Jerusalem", 12],
[1, 51, "Tel_Aviv", 12],
[1, 51, "Israel"]],
[[1, 47, "Jerusalem", 12],
[1, 47, "Gaza", 12],
[1, 47, "Tel_Aviv", 12],
[1, 47, "Israel"]],
[[1, 57, "Colombo", 12]],
[[0, 54, "Chagos", 19],
[0, 57, "Chagos", 19]],
[[1, 52, "Tehran", 12],
[1, 54, "Tehran", 12],
[1, 52, "Iran"],
[1, 54, "Iran"]],
[[1, 65, "Irkutsk", 12],
[1, 69, "Irkutsk", 12]],
[[0, 59, "Irkutsk", 12],
[0, 65, "Irkutsk", 12]],
[[0, 49, "Tehran", 12],
[0, 51, "Tehran", 12],
[0, 49, "Iran"],
[0, 51, "Iran"]],
[[1, 31, "Reykjavik", 13],
[1, 31, "Iceland"]],
[[0, 42, "Jerusalem", 12],
[0, 28, "Reykjavik", 13],
[0, 28, "Iceland"],
[0, 55, "Calcutta", 12],
[0, 55, "Colombo", 12],
[0, 55, "Dacca", 12],
[0, 55, "Dhaka", 12],
[0, 55, "Karachi", 12],
[0, 55, "Katmandu", 12],
[0, 55, "Thimbu", 12],
[0, 55, "Thimphu", 12],
[1, 34, "Eire"],
[1, 34, "Dublin", 18],
[1, 58, "Calcutta", 12],
[1, 58, "Colombo", 12],
[1, 58, "Karachi", 12],
[0, 35, "Eire"],
[0, 35, "Dublin", 18],
[1, 35, "Eire"],
[1, 35, "Dublin", 18],
[0, 42, "Gaza", 12],
[0, 42, "Tel_Aviv", 12],
[0, 42, "Israel"]],
[[0, 62, "Jakarta", 12]],
[[1, 72, "Tokyo", 12],
[1, 72, "Japan"]],
[[0, 69, "Tokyo", 12],
[0, 69, "Dili", 12],
[0, 69, "Jakarta", 12],
[0, 69, "Kuala_Lumpur", 12],
[0, 69, "Kuching", 12],
[0, 69, "Makassar", 12],
[0, 69, "Manila", 12],
[0, 69, "Pontianak", 12],
[0, 69, "Rangoon", 12],
[0, 69, "Sakhalin", 12],
[0, 69, "Singapore", 12],
[0, 69, "Ujung_Pandang", 12],
[0, 69, "Japan"],
[0, 69, "Nauru", 21],
[0, 69, "Singapore"]],
[[0, 54, "Karachi", 12]],
[[0, 54, "Kashgar", 12],
[0, 55, "Kashgar", 12]],
[[1, 69, "Seoul", 12],
[1, 72, "Seoul", 12],
[1, 69, "ROK"],
[1, 72, "ROK"]],
[[1, 57, "Bishkek", 12]],
[[0, 54, "Bishkek", 12],
[0, 57, "Bishkek", 12]],
[[1, 57, "Qyzylorda", 12]],
[[0, 51, "Qyzylorda", 12],
[0, 54, "Qyzylorda", 12],
[0, 57, "Qyzylorda", 12]],
[[0, 38, "Vilnius", 18]],
[[0, 74, "Kosrae", 21],
[0, 76, "Kosrae", 21]],
[[1, 59, "Krasnoyarsk", 12],
[1, 65, "Krasnoyarsk", 12]],
[[0, 57, "Krasnoyarsk", 12],
[0, 59, "Krasnoyarsk", 12]],
[[0, 65, "Seoul", 12],
[0, 67, "Seoul", 12],
[0, 69, "Seoul", 12],
[0, 65, "Pyongyang", 12],
[0, 65, "ROK"],
[0, 67, "Pyongyang", 12],
[0, 67, "ROK"],
[0, 69, "Pyongyang", 12],
[0, 69, "ROK"]],
[[1, 47, "Samara", 18],
[1, 51, "Samara", 18],
[1, 54, "Samara", 18]],
[[0, 47, "Samara", 18],
[0, 51, "Samara", 18]],
[[0, 0, "Kwajalein", 21],
[0, 0, "Kwajalein"]],
[[0, 73, "Lord_Howe", 14],
[1, 74, "Lord_Howe", 14],
[1, 75, "Lord_Howe", 14],
[0, 73, "LHI", 14],
[1, 74, "LHI", 14],
[1, 75, "LHI", 14]],
[[0, 4, "Kiritimati", 21],
[0, 81, "Kiritimati", 21]],
[[0, 57, "Colombo", 12],
[0, 58, "Colombo", 12]],
[[0, 59, "Chongqing", 12],
[0, 59, "Chungking", 12]],
[[0, 29, "Monrovia"]],
[[1, 45, "Riga", 18]],
[[1, 35, "Madeira", 13]],
[[1, 31, "Madeira", 13]],
[[0, 28, "Madeira", 13]],
[[1, 74, "Magadan", 12],
[1, 76, "Magadan", 12]],
[[0, 72, "Magadan", 12],
[0, 74, "Magadan", 12]],
[[1, 62, "Singapore", 12],
[1, 62, "Kuala_Lumpur", 12],
[1, 62, "Singapore"]],
[[0, 59, "Singapore", 12],
[0, 62, "Singapore", 12],
[0, 63, "Singapore", 12],
[0, 59, "Kuala_Lumpur", 12],
[0, 59, "Singapore"],
[0, 62, "Kuala_Lumpur", 12],
[0, 62, "Singapore"],
[0, 63, "Kuala_Lumpur", 12],
[0, 63, "Singapore"]],
[[0, 5, "Marquesas", 21]],
[[0, 57, "Mawson", 10]],
[[1, 11, "Cambridge_Bay", 9],
[1, 11, "Yellowknife", 9]],
[[1, 53, "Moscow", 18],
[1, 53, "W-SU"]],
[[1, 9, "Denver", 9],
[1, 9, "Boise", 9],
[1, 9, "Cambridge_Bay", 9],
[1, 9, "Chihuahua", 9],
[1, 9, "Edmonton", 9],
[1, 9, "Hermosillo", 9],
[1, 9, "Inuvik", 9],
[1, 9, "Mazatlan", 9],
[1, 9, "Center", 8],
[1, 9, "New_Salem", 8],
[1, 9, "Phoenix", 9],
[1, 9, "Regina", 9],
[1, 9, "Shiprock", 9],
[1, 9, "Swift_Current", 9],
[1, 9, "Yellowknife", 9],
[1, 9, "East-Saskatchewan", 16],
[1, 9, "Mountain", 16],
[1, 9, "Saskatchewan", 16],
[1, 9, "BajaSur", 20],
[1, 9, "MST"],
[1, 9, "MST7MDT"],
[1, 9, "Navajo"],
[1, 9, "Arizona"],
[1, 9, "Mountain"]],
[[1, 42, "MET"]],
[[0, 35, "MET"]],
[[0, 76, "Kwajalein", 21],
[0, 76, "Kwajalein"],
[0, 76, "Majuro", 21]],
[[0, 44, "Moscow", 18],
[0, 58, "Rangoon", 12],
[0, 64, "Makassar", 12],
[0, 64, "Ujung_Pandang", 12],
[0, 44, "W-SU"]],
[[1, 69, "Macao", 12],
[1, 69, "Macau", 12]],
[[0, 65, "Macao", 12],
[0, 65, "Macau", 12]],
[[1, 9, "Denver", 9],
[1, 9, "Boise", 9],
[1, 9, "Cambridge_Bay", 9],
[1, 9, "Edmonton", 9],
[1, 9, "Center", 8],
[1, 9, "New_Salem", 8],
[1, 9, "Regina", 9],
[1, 9, "Shiprock", 9],
[1, 9, "Swift_Current", 9],
[1, 9, "Yellowknife", 9],
[1, 9, "East-Saskatchewan", 16],
[1, 9, "Mountain", 16],
[1, 9, "Saskatchewan", 16],
[1, 9, "MST"],
[1, 9, "MST7MDT"],
[1, 9, "Navajo"],
[1, 9, "Mountain"],
[0, 72, "Saipan", 21]],
[[1, 51, "Moscow", 18],
[1, 54, "Moscow", 18],
[1, 51, "Chisinau", 18],
[1, 51, "Kaliningrad", 18],
[1, 51, "Kiev", 18],
[1, 51, "Minsk", 18],
[1, 51, "Riga", 18],
[1, 51, "Simferopol", 18],
[1, 51, "Tallinn", 18],
[1, 51, "Tiraspol", 18],
[1, 51, "Uzhgorod", 18],
[1, 51, "Vilnius", 18],
[1, 51, "Zaporozhye", 18],
[1, 51, "W-SU"],
[1, 54, "W-SU"]],
[[0, 47, "Moscow", 18],
[0, 47, "Chisinau", 18],
[0, 47, "Kaliningrad", 18],
[0, 47, "Kiev", 18],
[0, 47, "Minsk", 18],
[0, 47, "Riga", 18],
[0, 47, "Simferopol", 18],
[0, 47, "Tallinn", 18],
[0, 47, "Tiraspol", 18],
[0, 47, "Uzhgorod", 18],
[0, 47, "Vilnius", 18],
[0, 47, "Zaporozhye", 18],
[0, 47, "W-SU"]],
[[0, 8, "Denver", 9],
[0, 8, "Boise", 9],
[0, 8, "Cambridge_Bay", 9],
[0, 8, "Chihuahua", 9],
[0, 8, "Dawson_Creek", 9],
[0, 8, "Edmonton", 9],
[0, 8, "Ensenada", 9],
[0, 8, "Hermosillo", 9],
[0, 8, "Inuvik", 9],
[0, 8, "Mazatlan", 9],
[0, 8, "Mexico_City", 9],
[0, 8, "Center", 8],
[0, 8, "New_Salem", 8],
[0, 8, "Phoenix", 9],
[0, 8, "Regina", 9],
[0, 8, "Shiprock", 9],
[0, 8, "Swift_Current", 9],
[0, 8, "Tijuana", 9],
[0, 8, "Yellowknife", 9],
[0, 8, "East-Saskatchewan", 16],
[0, 8, "Mountain", 16],
[0, 8, "Saskatchewan", 16],
[0, 8, "BajaNorte", 20],
[0, 8, "BajaSur", 20],
[0, 8, "General", 20],
[0, 8, "MST"],
[0, 8, "MST7MDT"],
[0, 8, "Navajo"],
[0, 8, "Arizona"],
[0, 8, "Mountain"],
[1, 50, "Moscow", 18],
[1, 50, "W-SU"]],
[[0, 51, "Mauritius", 19]],
[[0, 54, "Maldives", 19]],
[[1, 9, "Denver", 9],
[1, 9, "Boise", 9],
[1, 9, "Cambridge_Bay", 9],
[1, 9, "Edmonton", 9],
[1, 9, "Center", 8],
[1, 9, "New_Salem", 8],
[1, 9, "Phoenix", 9],
[1, 9, "Regina", 9],
[1, 9, "Shiprock", 9],
[1, 9, "Swift_Current", 9],
[1, 9, "Yellowknife", 9],
[1, 9, "East-Saskatchewan", 16],
[1, 9, "Mountain", 16],
[1, 9, "Saskatchewan", 16],
[1, 9, "MST"],
[1, 9, "MST7MDT"],
[1, 9, "Navajo"],
[1, 9, "Arizona"],
[1, 9, "Mountain"]],
[[0, 65, "Kuala_Lumpur", 12],
[0, 65, "Kuching", 12]],
[[1, 76, "Noumea", 21]],
[[0, 74, "Noumea", 21]],
[[1, 26, "St_Johns", 9],
[1, 26, "Newfoundland", 16]],
[[1, 24, "St_Johns", 9],
[1, 23, "St_Johns", 9],
[1, 4, "Midway", 21],
[1, 24, "Goose_Bay", 9],
[1, 24, "Newfoundland", 16],
[1, 23, "Goose_Bay", 9],
[1, 23, "Newfoundland", 16]],
[[0, 21, "Paramaribo", 9]],
[[1, 37, "Amsterdam", 18]],
[[0, 33, "Amsterdam", 18]],
[[0, 75, "Norfolk", 21]],
[[1, 59, "Novosibirsk", 12],
[1, 65, "Novosibirsk", 12]],
[[0, 57, "Novosibirsk", 12],
[0, 59, "Novosibirsk", 12]],
[[1, 24, "St_Johns", 9],
[1, 4, "Adak", 9],
[1, 4, "Atka", 9],
[1, 4, "Nome", 9],
[1, 4, "Aleutian"],
[1, 24, "Goose_Bay", 9],
[1, 24, "Newfoundland", 16],
[0, 56, "Katmandu", 12]],
[[0, 75, "Nauru", 21],
[0, 76, "Nauru", 21]],
[[0, 21, "St_Johns", 9],
[0, 20, "St_Johns", 9],
[0, 21, "Goose_Bay", 9],
[0, 21, "Newfoundland", 16],
[0, 20, "Goose_Bay", 9],
[0, 20, "Newfoundland", 16],
[0, 2, "Adak", 9],
[0, 2, "Atka", 9],
[0, 2, "Nome", 9],
[0, 2, "Midway", 21],
[0, 2, "Pago_Pago", 21],
[0, 2, "Samoa", 21],
[0, 2, "Aleutian"],
[0, 2, "Samoa"],
[1, 36, "Amsterdam", 18]],
[[0, 2, "Niue", 21],
[0, 1, "Niue", 21]],
[[1, 24, "St_Johns", 9],
[1, 4, "Adak", 9],
[1, 4, "Atka", 9],
[1, 4, "Nome", 9],
[1, 4, "Aleutian"],
[1, 24, "Goose_Bay", 9],
[1, 24, "Newfoundland", 16]],
[[1, 79, "Auckland", 21],
[1, 79, "McMurdo", 10],
[1, 79, "South_Pole", 10],
[1, 79, "NZ"]],
[[0, 75, "Auckland", 21],
[0, 75, "NZ"]],
[[0, 76, "Auckland", 21],
[1, 76, "Auckland", 21],
[1, 77, "Auckland", 21],
[0, 76, "McMurdo", 10],
[0, 76, "South_Pole", 10],
[0, 76, "NZ"],
[1, 76, "NZ"],
[1, 77, "NZ"]],
[[1, 57, "Omsk", 12],
[1, 59, "Omsk", 12]],
[[0, 54, "Omsk", 12],
[0, 57, "Omsk", 12]],
[[1, 54, "Oral", 12]],
[[0, 51, "Oral", 12],
[0, 54, "Oral", 12]],
[[1, 9, "Inuvik", 9]],
[[1, 8, "Los_Angeles", 9],
[1, 8, "Boise", 9],
[1, 8, "Dawson", 9],
[1, 8, "Dawson_Creek", 9],
[1, 8, "Ensenada", 9],
[1, 8, "Inuvik", 9],
[1, 8, "Juneau", 9],
[1, 8, "Tijuana", 9],
[1, 8, "Vancouver", 9],
[1, 8, "Whitehorse", 9],
[1, 8, "Pacific", 16],
[1, 8, "Yukon", 16],
[1, 8, "BajaNorte", 20],
[1, 8, "PST8PDT"],
[1, 8, "Pacific"],
[1, 8, "Pacific-New"]],
[[1, 14, "Lima", 9]],
[[1, 76, "Kamchatka", 12],
[1, 79, "Kamchatka", 12]],
[[0, 74, "Kamchatka", 12],
[0, 76, "Kamchatka", 12]],
[[0, 11, "Lima", 9]],
[[0, 2, "Enderbury", 21],
[0, 79, "Enderbury", 21]],
[[1, 69, "Manila", 12]],
[[0, 65, "Manila", 12]],
[[1, 57, "Karachi", 12]],
[[0, 54, "Karachi", 12]],
[[1, 25, "Miquelon", 9]],
[[0, 22, "Miquelon", 9]],
[[0, 18, "Paramaribo", 9],
[0, 17, "Paramaribo", 9],
[0, 61, "Pontianak", 12],
[0, 72, "DumontDUrville", 10]],
[[1, 8, "Los_Angeles", 9],
[1, 8, "Dawson_Creek", 9],
[1, 8, "Ensenada", 9],
[1, 8, "Inuvik", 9],
[1, 8, "Juneau", 9],
[1, 8, "Tijuana", 9],
[1, 8, "Vancouver", 9],
[1, 8, "Pacific", 16],
[1, 8, "BajaNorte", 20],
[1, 8, "PST8PDT"],
[1, 8, "Pacific"],
[1, 8, "Pacific-New"]],
[[0, 7, "Los_Angeles", 9],
[0, 7, "Boise", 9],
[0, 7, "Dawson", 9],
[0, 7, "Dawson_Creek", 9],
[0, 7, "Ensenada", 9],
[0, 7, "Hermosillo", 9],
[0, 7, "Inuvik", 9],
[0, 7, "Juneau", 9],
[0, 7, "Mazatlan", 9],
[0, 7, "Tijuana", 9],
[0, 7, "Vancouver", 9],
[0, 7, "Whitehorse", 9],
[0, 7, "Pacific", 16],
[0, 7, "Yukon", 16],
[0, 7, "BajaNorte", 20],
[0, 7, "BajaSur", 20],
[0, 7, "Pitcairn", 21],
[0, 7, "PST8PDT"],
[0, 7, "Pacific"],
[0, 7, "Pacific-New"]],
[[1, 8, "Los_Angeles", 9],
[1, 8, "Dawson_Creek", 9],
[1, 8, "Ensenada", 9],
[1, 8, "Inuvik", 9],
[1, 8, "Juneau", 9],
[1, 8, "Tijuana", 9],
[1, 8, "Vancouver", 9],
[1, 8, "Pacific", 16],
[1, 8, "BajaNorte", 20],
[1, 8, "PST8PDT"],
[1, 8, "Pacific"],
[1, 8, "Pacific-New"]],
[[1, 22, "Asuncion", 9]],
[[0, 22, "Asuncion", 9],
[0, 14, "Asuncion", 9]],
[[1, 59, "Qyzylorda", 12]],
[[0, 54, "Qyzylorda", 12],
[0, 57, "Qyzylorda", 12]],
[[0, 51, "Reunion", 19]],
[[0, 39, "Riga", 18]],
[[0, 22, "Rothera", 10]],
[[1, 74, "Sakhalin", 12],
[1, 76, "Sakhalin", 12]],
[[0, 72, "Sakhalin", 12],
[0, 74, "Sakhalin", 12]],
[[1, 57, "Samarkand", 12],
[1, 54, "Samara", 18]],
[[0, 51, "Samarkand", 12],
[0, 54, "Samarkand", 12],
[0, 1, "Apia", 21],
[0, 1, "Pago_Pago", 21],
[0, 1, "Samoa", 21],
[0, 1, "Samoa"],
[0, 47, "Samara", 18],
[0, 51, "Samara", 18]],
[[1, 47, "Johannesburg"],
[0, 42, "Johannesburg"],
[1, 47, "Maseru"],
[1, 47, "Windhoek"],
[0, 42, "Maseru"],
[0, 42, "Mbabane"],
[0, 42, "Windhoek"]],
[[0, 74, "Guadalcanal", 21]],
[[0, 51, "Mahe", 19]],
[[0, 63, "Singapore", 12],
[0, 65, "Singapore", 12],
[0, 63, "Singapore"],
[0, 65, "Singapore"]],
[[1, 57, "Aqtau", 12]],
[[0, 54, "Aqtau", 12],
[0, 57, "Aqtau", 12]],
[[1, 30, "Freetown"],
[1, 35, "Freetown"]],
[[0, 60, "Saigon", 12],
[0, 12, "Santiago", 9],
[0, 12, "Continental", 17],
[0, 60, "Phnom_Penh", 12],
[0, 60, "Vientiane", 12]],
[[0, 22, "Paramaribo", 9],
[0, 21, "Paramaribo", 9]],
[[0, 2, "Samoa", 21],
[0, 2, "Midway", 21],
[0, 2, "Pago_Pago", 21],
[0, 2, "Samoa"]],
[[0, 47, "Volgograd", 18],
[0, 51, "Volgograd", 18]],
[[1, 54, "Yekaterinburg", 12],
[1, 57, "Yekaterinburg", 12]],
[[0, 51, "Yekaterinburg", 12],
[0, 54, "Yekaterinburg", 12]],
[[0, 47, "Syowa", 10]],
[[0, 4, "Tahiti", 21]],
[[1, 59, "Samarkand", 12],
[1, 57, "Tashkent", 12],
[1, 59, "Tashkent", 12]],
[[0, 57, "Samarkand", 12],
[0, 54, "Tashkent", 12],
[0, 57, "Tashkent", 12]],
[[1, 51, "Tbilisi", 12],
[1, 54, "Tbilisi", 12]],
[[0, 47, "Tbilisi", 12],
[0, 51, "Tbilisi", 12]],
[[0, 54, "Kerguelen", 19]],
[[0, 54, "Dushanbe", 12]],
[[0, 65, "Dili", 12],
[0, 69, "Dili", 12]],
[[0, 48, "Tehran", 12],
[0, 48, "Iran"],
[0, 51, "Ashgabat", 12],
[0, 51, "Ashkhabad", 12],
[0, 54, "Ashgabat", 12],
[0, 54, "Ashkhabad", 12],
[0, 40, "Tallinn", 18]],
[[1, 81, "Tongatapu", 21]],
[[0, 79, "Tongatapu", 21]],
[[1, 51, "Istanbul", 18],
[1, 51, "Istanbul", 12],
[1, 51, "Turkey"]],
[[0, 47, "Istanbul", 18],
[0, 47, "Istanbul", 12],
[0, 47, "Turkey"]],
[[0, 47, "Volgograd", 18]],
[[1, 69, "Ulaanbaatar", 12],
[1, 69, "Ulan_Bator", 12]],
[[0, 59, "Ulaanbaatar", 12],
[0, 65, "Ulaanbaatar", 12],
[0, 59, "Choibalsan", 12],
[0, 59, "Ulan_Bator", 12],
[0, 65, "Choibalsan", 12],
[0, 65, "Ulan_Bator", 12]],
[[1, 54, "Oral", 12],
[1, 57, "Oral", 12]],
[[0, 51, "Oral", 12],
[0, 54, "Oral", 12],
[0, 57, "Oral", 12]],
[[0, 57, "Urumqi", 12]],
[[1, 22, "Montevideo", 9],
[1, 24, "Montevideo", 9]],
[[1, 25, "Montevideo", 9]],
[[0, 22, "Montevideo", 9],
[0, 21, "Montevideo", 9]],
[[1, 57, "Samarkand", 12],
[1, 57, "Tashkent", 12]],
[[0, 54, "Samarkand", 12],
[0, 54, "Tashkent", 12]],
[[0, 14, "Caracas", 9],
[0, 13, "Caracas", 9]],
[[1, 72, "Vladivostok", 12]],
[[0, 69, "Vladivostok", 12],
[1, 74, "Vladivostok", 12]],
[[0, 69, "Vladivostok", 12],
[0, 72, "Vladivostok", 12]],
[[1, 51, "Volgograd", 18],
[1, 54, "Volgograd", 18]],
[[0, 47, "Volgograd", 18],
[0, 51, "Volgograd", 18]],
[[0, 57, "Vostok", 10]],
[[1, 76, "Efate", 21]],
[[0, 74, "Efate", 21]],
[[1, 22, "Mendoza", 9],
[1, 22, "Jujuy", 2],
[1, 22, "Mendoza", 2],
[1, 22, "Jujuy", 9]],
[[0, 14, "Mendoza", 9],
[0, 14, "Catamarca", 2],
[0, 14, "ComodRivadavia", 2],
[0, 14, "Cordoba", 2],
[0, 14, "Jujuy", 2],
[0, 14, "La_Rioja", 2],
[0, 14, "Mendoza", 2],
[0, 14, "Rio_Gallegos", 2],
[0, 14, "San_Juan", 2],
[0, 14, "Tucuman", 2],
[0, 14, "Ushuaia", 2],
[0, 14, "Catamarca", 9],
[0, 14, "Cordoba", 9],
[0, 14, "Jujuy", 9],
[0, 14, "Rosario", 9]],
[[1, 42, "Windhoek"],
[1, 42, "Ndjamena"]],
[[0, 28, "Dakar"],
[0, 28, "Bamako"],
[0, 28, "Banjul"],
[0, 28, "Bissau"],
[0, 28, "Conakry"],
[0, 28, "El_Aaiun"],
[0, 28, "Freetown"],
[0, 28, "Niamey"],
[0, 28, "Nouakchott"],
[0, 28, "Timbuktu"],
[0, 31, "Freetown"],
[0, 35, "Brazzaville"],
[0, 35, "Bangui"],
[0, 35, "Douala"],
[0, 35, "Lagos"],
[0, 35, "Libreville"],
[0, 35, "Luanda"],
[0, 35, "Malabo"],
[0, 35, "Ndjamena"],
[0, 35, "Niamey"],
[0, 35, "Porto-Novo"],
[0, 35, "Windhoek"]],
[[1, 42, "Lisbon", 18],
[1, 42, "Madrid", 18],
[1, 42, "Monaco", 18],
[1, 42, "Paris", 18],
[1, 42, "Portugal"],
[1, 42, "WET"]],
[[1, 35, "Paris", 18],
[1, 35, "Algiers"],
[1, 35, "Casablanca"],
[1, 35, "Ceuta"],
[1, 35, "Canary", 13],
[1, 35, "Faeroe", 13],
[1, 35, "Faroe", 13],
[1, 35, "Madeira", 13],
[1, 35, "Brussels", 18],
[1, 35, "Lisbon", 18],
[1, 35, "Luxembourg", 18],
[1, 35, "Madrid", 18],
[1, 35, "Monaco", 18],
[1, 35, "Portugal"],
[1, 35, "WET"],
[1, 42, "Luxembourg", 18]],
[[0, 31, "Paris", 18],
[0, 31, "Algiers"],
[0, 31, "Casablanca"],
[0, 31, "Ceuta"],
[0, 31, "El_Aaiun"],
[0, 31, "Azores", 13],
[0, 31, "Canary", 13],
[0, 31, "Faeroe", 13],
[0, 31, "Faroe", 13],
[0, 31, "Madeira", 13],
[0, 31, "Brussels", 18],
[0, 31, "Lisbon", 18],
[0, 31, "Luxembourg", 18],
[0, 31, "Madrid", 18],
[0, 31, "Monaco", 18],
[0, 31, "Portugal"],
[0, 31, "WET"],
[0, 35, "Luxembourg", 18]],
[[1, 25, "Godthab", 9],
[1, 25, "Danmarkshavn", 9]],
[[0, 22, "Godthab", 9],
[0, 22, "Danmarkshavn", 9]],
[[0, 59, "Jakarta", 12],
[0, 63, "Jakarta", 12],
[0, 65, "Jakarta", 12],
[0, 59, "Pontianak", 12],
[0, 63, "Pontianak", 12],
[0, 65, "Pontianak", 12]],
[[0, 65, "Perth", 14],
[1, 69, "Perth", 14],
[0, 2, "Apia", 21],
[0, 65, "Casey", 10],
[0, 65, "West", 14],
[1, 69, "West", 14]],
[[1, 69, "Yakutsk", 12],
[1, 72, "Yakutsk", 12]],
[[0, 65, "Yakutsk", 12],
[0, 69, "Yakutsk", 12]],
[[1, 8, "Dawson", 9],
[1, 8, "Whitehorse", 9],
[1, 8, "Yukon", 16]],
[[1, 7, "Dawson", 9],
[1, 7, "Whitehorse", 9],
[1, 7, "Yakutat", 9],
[1, 7, "Yukon", 16]],
[[1, 57, "Yekaterinburg", 12]],
[[0, 54, "Yekaterinburg", 12]],
[[1, 51, "Yerevan", 12],
[1, 54, "Yerevan", 12]],
[[0, 47, "Yerevan", 12],
[0, 51, "Yerevan", 12]],
[[1, 7, "Dawson", 9],
[1, 7, "Whitehorse", 9],
[1, 7, "Yakutat", 9],
[1, 7, "Yukon", 16]],
[[0, 6, "Anchorage", 9],
[0, 6, "Dawson", 9],
[0, 6, "Juneau", 9],
[0, 6, "Nome", 9],
[0, 6, "Whitehorse", 9],
[0, 6, "Yakutat", 9],
[0, 6, "Yukon", 16],
[0, 6, "Alaska"]],
[[1, 7, "Dawson", 9],
[1, 7, "Whitehorse", 9],
[1, 7, "Yakutat", 9],
[1, 7, "Yukon", 16]],
[[0, 35]],
[[0, 42]],
[[0, 47]],
[[0, 51]],
[[0, 54]],
[[0, 57]],
[[0, 59]],
[[0, 65]],
[[0, 69]],
[[0, 72]],
[[0, 74]],
[[0, 76]],
[[0, 28]],
[[0, 25]],
[[0, 22]],
[[0, 14]],
[[0, 11]],
[[0, 9]],
[[0, 8]],
[[0, 31, "UTC"]],
[[0, 7]],
[[0, 6]],
[[0, 4]],
[[0, 2]],
[[0, 0]],
[[0, 31, "Davis", 10],
[0, 31, "DumontDUrville", 10]],
[[0, 31]]
        ];
    }

    if (!php_js_shared.tz_abbreviations) {
        php_js_shared.tz_abbreviations = [
"acst", "act", "addt", "adt", "aft", "ahdt", "ahst", "akdt",
"akst", "aktst", "aktt", "almst", "almt", "amst", "amt", "anast",
"anat", "ant", "apt", "aqtst", "aqtt", "arst", "art", "ashst",
"asht", "ast", "awt", "azomt", "azost", "azot", "azst", "azt",
"bakst", "bakt", "bdst", "bdt", "beat", "beaut", "bmt", "bnt",
"bortst", "bort", "bost", "bot", "brst", "brt", "bst", "btt",
"burt", "cant", "capt", "cast", "cat", "cawt", "cddt", "cdt",
"cemt", "cest", "cet", "cgst", "cgt", "chadt", "chast", "chat",
"chdt", "chost", "chot", "cit", "cjt", "ckhst", "ckt", "clst",
"clt", "cost", "cot", "cpt", "cst", "cvst", "cvt", "cwst",
"cwt", "chst", "dact", "davt", "ddut", "dusst", "dust", "easst",
"east", "eat", "ect", "eddt", "edt", "eest", "eet", "egst",
"egt", "ehdt", "eit", "ept", "est", "ewt", "fjst", "fjt", "fkst",
"fkt", "fnst", "fnt", "fort", "frust", "frut", "galt", "gamt",
"gbgt", "gest", "get", "gft", "ghst", "gmt", "gst", "gyt",
"hadt", "hast", "hdt", "hkst", "hkt", "hovst", "hovt", "hpt",
"hst", "hwt", "ict", "iddt", "idt", "ihst", "iot", "irdt",
"irkst", "irkt", "irst", "isst", "ist", "javt", "jdt", "jst",
"kart", "kast", "kdt", "kgst", "kgt", "kizst", "kizt", "kmt",
"kost", "krast", "krat", "kst", "kuyst", "kuyt", "kwat", "lhst",
"lint", "lkt", "lont", "lrt", "lst", "madmt", "madst", "madt",
"magst", "magt", "malst", "malt", "mart", "mawt", "mddt", "mdst",
"mdt", "mest", "met", "mht", "mmt", "most", "mot", "mpt", "msd",
"msk", "mst", "mut", "mvt", "mwt", "myt", "ncst", "nct", "nddt",
"ndt", "negt", "nest", "net", "nft", "novst", "novt", "npt",
"nrt", "nst", "nut", "nwt", "nzdt", "nzmt", "nzst", "omsst",
"omst", "orast", "orat", "pddt", "pdt", "pest", "petst", "pett",
"pet", "phot", "phst", "pht", "pkst", "pkt", "pmdt", "pmst",
"pmt", "ppt", "pst", "pwt", "pyst", "pyt", "qyzst", "qyzt",
"ret", "rmt", "rott", "sakst", "sakt", "samst", "samt", "sast",
"sbt", "sct", "sgt", "shest", "shet", "slst", "smt", "srt",
"sst", "stat", "svest", "svet", "syot", "taht", "tasst", "tast",
"tbist", "tbit", "tft", "tjt", "tlt", "tmt", "tost", "tot",
"trst", "trt", "tsat", "ulast", "ulat", "urast", "urat", "urut",
"uyhst", "uyst", "uyt", "uzst", "uzt", "vet", "vlasst", "vlast",
"vlat", "volst", "volt", "vost", "vust", "vut", "warst", "wart",
"wast", "wat", "wemt", "west", "wet", "wgst", "wgt", "wit",
"wst", "yakst", "yakt", "yddt", "ydt", "yekst", "yekt", "yerst",
"yert", "ypt", "yst", "ywt", "a", "b", "c", "d", "e", "f", "g",
"h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
"utc", "u", "v", "w", "x", "y", "zzz", "z"];
    }

    if (!php_js_shared.tz_offsets) {
        php_js_shared.tz_offsets = [
-43200, -41400, -39600, -37800, -36000, -34200, -32400,
-28800, -25200, -21600, -19800, -18000, -16966, -16200,
-14400, -14308, -13500, -13252, -13236, -12756, -12652,
-12600, -10800,  -9052,  -9000,  -7200,  -5400,  -3996,
-3600,  -2670,  -1200,      0,   1172,   1200,   2079,
 3600,   4772,   4800,   5736,   5784,   5940,   6264,
 7200,   9000,   9048,   9384,   9885,  10800,  12344,
12600,  12648,  14400,  16200,  16248,  18000,  19800,
20700,  21600,  23400,  25200,  25580,  26240,  26400,
27000,  28656,  28800,  30000,  30600,  31500,  32400,
34200,  35100,  36000,  37800,  39600,  41400,  43200,
45000,  45900,  46800,  49500,  50400];
    }

    if (!php_js_shared.tz_prefixes) {
        php_js_shared.tz_prefixes = [
'Africa', 'America', 'America/Argentina', 'America',
'America/Indiana', 'America', 'America/Kentucky', 'America',
'America/North_Dakota', 'America', 'Antarctica', 'Arctic',
'Asia', 'Atlantic', 'Australia', 'Brazil', 'Canada', 'Chile',
'Europe', 'Indian', 'Mexico', 'Pacific'];
    }
    // END STATIC

    for (i=0, len = php_js_shared.tz_abbrs.length; i < len; i++) {
        indice = php_js_shared.tz_abbreviations[i];
        curr = php_js_shared.tz_abbrs[i];
        list[indice] = [];
        for (j=0, jlen=curr.length; j < jlen; j++) {
            currSub = curr[j];
            currSubPrefix = (currSub[3] ? php_js_shared.tz_prefixes[currSub[3]] + '/' : '');
            timezone_id = currSub[2] ? (currSubPrefix + currSub[2]) : null;
            list[indice].push({
                'dst' : !!currSub[0],
                'offset' : php_js_shared.tz_offsets[currSub[1]],
                'timezone_id' : timezone_id
            });
        }
    }

    return list;
};

exports.timezone_identifiers_list = (what, country) => {
    // !No description available for timezone_identifiers_list. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/timezone_identifiers_list
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Object argument shown in one place, but not in another
    // %        note 1: (not implemented in PHP yet?)
    // %        note 2: For countries, see
    // %        note 2: http://www.iso.org/iso/english_country_names_and_code_elements
    // *     example 1: \php.timezone_identifiers_list('Hello World');
    // *     returns 1: 1
    var i = 0;

    var new_what = '';
    var returnArr = [];
    var continents = [];
    var codes = [];

    var indexOf = function (value) {
        for (var i = 0, length=this.length; i < length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    };

    var identifiers = [
'Africa/Abidjan',
'Africa/Accra',
'Africa/Addis_Ababa',
'Africa/Algiers',
'Africa/Asmara',
'Africa/Asmera',
'Africa/Bamako',
'Africa/Bangui',
'Africa/Banjul',
'Africa/Bissau',
'Africa/Blantyre',
'Africa/Brazzaville',
'Africa/Bujumbura',
'Africa/Cairo',
'Africa/Casablanca',
'Africa/Ceuta',
'Africa/Conakry',
'Africa/Dakar',
'Africa/Dar_es_Salaam',
'Africa/Djibouti',
'Africa/Douala',
'Africa/El_Aaiun',
'Africa/Freetown',
'Africa/Gaborone',
'Africa/Harare',
'Africa/Johannesburg',
'Africa/Kampala',
'Africa/Khartoum',
'Africa/Kigali',
'Africa/Kinshasa',
'Africa/Lagos',
'Africa/Libreville',
'Africa/Lome',
'Africa/Luanda',
'Africa/Lubumbashi',
'Africa/Lusaka',
'Africa/Malabo',
'Africa/Maputo',
'Africa/Maseru',
'Africa/Mbabane',
'Africa/Mogadishu',
'Africa/Monrovia',
'Africa/Nairobi',
'Africa/Ndjamena',
'Africa/Niamey',
'Africa/Nouakchott',
'Africa/Ouagadougou',
'Africa/Porto-Novo',
'Africa/Sao_Tome',
'Africa/Timbuktu',
'Africa/Tripoli',
'Africa/Tunis',
'Africa/Windhoek',
'America/Adak',
'America/Anchorage',
'America/Anguilla',
'America/Antigua',
'America/Araguaina',
'America/Argentina/Buenos_Aires',
'America/Argentina/Catamarca',
'America/Argentina/ComodRivadavia',
'America/Argentina/Cordoba',
'America/Argentina/Jujuy',
'America/Argentina/La_Rioja',
'America/Argentina/Mendoza',
'America/Argentina/Rio_Gallegos',
'America/Argentina/San_Juan',
'America/Argentina/San_Luis',
'America/Argentina/Tucuman',
'America/Argentina/Ushuaia',
'America/Aruba',
'America/Asuncion',
'America/Atikokan',
'America/Atka',
'America/Bahia',
'America/Barbados',
'America/Belem',
'America/Belize',
'America/Blanc-Sablon',
'America/Boa_Vista',
'America/Bogota',
'America/Boise',
'America/Buenos_Aires',
'America/Cambridge_Bay',
'America/Campo_Grande',
'America/Cancun',
'America/Caracas',
'America/Catamarca',
'America/Cayenne',
'America/Cayman',
'America/Chicago',
'America/Chihuahua',
'America/Coral_Harbour',
'America/Cordoba',
'America/Costa_Rica',
'America/Cuiaba',
'America/Curacao',
'America/Danmarkshavn',
'America/Dawson',
'America/Dawson_Creek',
'America/Denver',
'America/Detroit',
'America/Dominica',
'America/Edmonton',
'America/Eirunepe',
'America/El_Salvador',
'America/Ensenada',
'America/Fort_Wayne',
'America/Fortaleza',
'America/Glace_Bay',
'America/Godthab',
'America/Goose_Bay',
'America/Grand_Turk',
'America/Grenada',
'America/Guadeloupe',
'America/Guatemala',
'America/Guayaquil',
'America/Guyana',
'America/Halifax',
'America/Havana',
'America/Hermosillo',
'America/Indiana/Indianapolis',
'America/Indiana/Knox',
'America/Indiana/Marengo',
'America/Indiana/Petersburg',
'America/Indiana/Tell_City',
'America/Indiana/Vevay',
'America/Indiana/Vincennes',
'America/Indiana/Winamac',
'America/Indianapolis',
'America/Inuvik',
'America/Iqaluit',
'America/Jamaica',
'America/Jujuy',
'America/Juneau',
'America/Kentucky/Louisville',
'America/Kentucky/Monticello',
'America/Knox_IN',
'America/La_Paz',
'America/Lima',
'America/Los_Angeles',
'America/Louisville',
'America/Maceio',
'America/Managua',
'America/Manaus',
'America/Marigot',
'America/Martinique',
'America/Mazatlan',
'America/Mendoza',
'America/Menominee',
'America/Merida',
'America/Mexico_City',
'America/Miquelon',
'America/Moncton',
'America/Monterrey',
'America/Montevideo',
'America/Montreal',
'America/Montserrat',
'America/Nassau',
'America/New_York',
'America/Nipigon',
'America/Nome',
'America/Noronha',
'America/North_Dakota/Center',
'America/North_Dakota/New_Salem',
'America/Panama',
'America/Pangnirtung',
'America/Paramaribo',
'America/Phoenix',
'America/Port-au-Prince',
'America/Port_of_Spain',
'America/Porto_Acre',
'America/Porto_Velho',
'America/Puerto_Rico',
'America/Rainy_River',
'America/Rankin_Inlet',
'America/Recife',
'America/Regina',
'America/Resolute',
'America/Rio_Branco',
'America/Rosario',
'America/Santiago',
'America/Santo_Domingo',
'America/Sao_Paulo',
'America/Scoresbysund',
'America/Shiprock',
'America/St_Barthelemy',
'America/St_Johns',
'America/St_Kitts',
'America/St_Lucia',
'America/St_Thomas',
'America/St_Vincent',
'America/Swift_Current',
'America/Tegucigalpa',
'America/Thule',
'America/Thunder_Bay',
'America/Tijuana',
'America/Toronto',
'America/Tortola',
'America/Vancouver',
'America/Virgin',
'America/Whitehorse',
'America/Winnipeg',
'America/Yakutat',
'America/Yellowknife',
'Antarctica/Casey',
'Antarctica/Davis',
'Antarctica/DumontDUrville',
'Antarctica/Mawson',
'Antarctica/McMurdo',
'Antarctica/Palmer',
'Antarctica/Rothera',
'Antarctica/South_Pole',
'Antarctica/Syowa',
'Antarctica/Vostok',
'Arctic/Longyearbyen',
'Asia/Aden',
'Asia/Almaty',
'Asia/Amman',
'Asia/Anadyr',
'Asia/Aqtau',
'Asia/Aqtobe',
'Asia/Ashgabat',
'Asia/Ashkhabad',
'Asia/Baghdad',
'Asia/Bahrain',
'Asia/Baku',
'Asia/Bangkok',
'Asia/Beirut',
'Asia/Bishkek',
'Asia/Brunei',
'Asia/Calcutta',
'Asia/Choibalsan',
'Asia/Chongqing',
'Asia/Chungking',
'Asia/Colombo',
'Asia/Dacca',
'Asia/Damascus',
'Asia/Dhaka',
'Asia/Dili',
'Asia/Dubai',
'Asia/Dushanbe',
'Asia/Gaza',
'Asia/Harbin',
'Asia/Ho_Chi_Minh',
'Asia/Hong_Kong',
'Asia/Hovd',
'Asia/Irkutsk',
'Asia/Istanbul',
'Asia/Jakarta',
'Asia/Jayapura',
'Asia/Jerusalem',
'Asia/Kabul',
'Asia/Kamchatka',
'Asia/Karachi',
'Asia/Kashgar',
'Asia/Katmandu',
'Asia/Kolkata',
'Asia/Krasnoyarsk',
'Asia/Kuala_Lumpur',
'Asia/Kuching',
'Asia/Kuwait',
'Asia/Macao',
'Asia/Macau',
'Asia/Magadan',
'Asia/Makassar',
'Asia/Manila',
'Asia/Muscat',
'Asia/Nicosia',
'Asia/Novosibirsk',
'Asia/Omsk',
'Asia/Oral',
'Asia/Phnom_Penh',
'Asia/Pontianak',
'Asia/Pyongyang',
'Asia/Qatar',
'Asia/Qyzylorda',
'Asia/Rangoon',
'Asia/Riyadh',
'Asia/Saigon',
'Asia/Sakhalin',
'Asia/Samarkand',
'Asia/Seoul',
'Asia/Shanghai',
'Asia/Singapore',
'Asia/Taipei',
'Asia/Tashkent',
'Asia/Tbilisi',
'Asia/Tehran',
'Asia/Tel_Aviv',
'Asia/Thimbu',
'Asia/Thimphu',
'Asia/Tokyo',
'Asia/Ujung_Pandang',
'Asia/Ulaanbaatar',
'Asia/Ulan_Bator',
'Asia/Urumqi',
'Asia/Vientiane',
'Asia/Vladivostok',
'Asia/Yakutsk',
'Asia/Yekaterinburg',
'Asia/Yerevan',
'Atlantic/Azores',
'Atlantic/Bermuda',
'Atlantic/Canary',
'Atlantic/Cape_Verde',
'Atlantic/Faeroe',
'Atlantic/Faroe',
'Atlantic/Jan_Mayen',
'Atlantic/Madeira',
'Atlantic/Reykjavik',
'Atlantic/South_Georgia',
'Atlantic/St_Helena',
'Atlantic/Stanley',
'Australia/ACT',
'Australia/Adelaide',
'Australia/Brisbane',
'Australia/Broken_Hill',
'Australia/Canberra',
'Australia/Currie',
'Australia/Darwin',
'Australia/Eucla',
'Australia/Hobart',
'Australia/LHI',
'Australia/Lindeman',
'Australia/Lord_Howe',
'Australia/Melbourne',
'Australia/North',
'Australia/NSW',
'Australia/Perth',
'Australia/Queensland',
'Australia/South',
'Australia/Sydney',
'Australia/Tasmania',
'Australia/Victoria',
'Australia/West',
'Australia/Yancowinna',
'Brazil/Acre',
'Brazil/DeNoronha',
'Brazil/East',
'Brazil/West',
'Canada/Atlantic',
'Canada/Central',
'Canada/East-Saskatchewan',
'Canada/Eastern',
'Canada/Mountain',
'Canada/Newfoundland',
'Canada/Pacific',
'Canada/Saskatchewan',
'Canada/Yukon',
'CET',
'Chile/Continental',
'Chile/EasterIsland',
'CST6CDT',
'Cuba',
'EET',
'Egypt',
'Eire',
'EST',
'EST5EDT',
'Etc/GMT',
'Etc/GMT+0',
'Etc/GMT+1',
'Etc/GMT+10',
'Etc/GMT+11',
'Etc/GMT+12',
'Etc/GMT+2',
'Etc/GMT+3',
'Etc/GMT+4',
'Etc/GMT+5',
'Etc/GMT+6',
'Etc/GMT+7',
'Etc/GMT+8',
'Etc/GMT+9',
'Etc/GMT-0',
'Etc/GMT-1',
'Etc/GMT-10',
'Etc/GMT-11',
'Etc/GMT-12',
'Etc/GMT-13',
'Etc/GMT-14',
'Etc/GMT-2',
'Etc/GMT-3',
'Etc/GMT-4',
'Etc/GMT-5',
'Etc/GMT-6',
'Etc/GMT-7',
'Etc/GMT-8',
'Etc/GMT-9',
'Etc/GMT0',
'Etc/Greenwich',
'Etc/UCT',
'Etc/Universal',
'Etc/UTC',
'Etc/Zulu',
'Europe/Amsterdam',
'Europe/Andorra',
'Europe/Athens',
'Europe/Belfast',
'Europe/Belgrade',
'Europe/Berlin',
'Europe/Bratislava',
'Europe/Brussels',
'Europe/Bucharest',
'Europe/Budapest',
'Europe/Chisinau',
'Europe/Copenhagen',
'Europe/Dublin',
'Europe/Gibraltar',
'Europe/Guernsey',
'Europe/Helsinki',
'Europe/Isle_of_Man',
'Europe/Istanbul',
'Europe/Jersey',
'Europe/Kaliningrad',
'Europe/Kiev',
'Europe/Lisbon',
'Europe/Ljubljana',
'Europe/London',
'Europe/Luxembourg',
'Europe/Madrid',
'Europe/Malta',
'Europe/Mariehamn',
'Europe/Minsk',
'Europe/Monaco',
'Europe/Moscow',
'Europe/Nicosia',
'Europe/Oslo',
'Europe/Paris',
'Europe/Podgorica',
'Europe/Prague',
'Europe/Riga',
'Europe/Rome',
'Europe/Samara',
'Europe/San_Marino',
'Europe/Sarajevo',
'Europe/Simferopol',
'Europe/Skopje',
'Europe/Sofia',
'Europe/Stockholm',
'Europe/Tallinn',
'Europe/Tirane',
'Europe/Tiraspol',
'Europe/Uzhgorod',
'Europe/Vaduz',
'Europe/Vatican',
'Europe/Vienna',
'Europe/Vilnius',
'Europe/Volgograd',
'Europe/Warsaw',
'Europe/Zagreb',
'Europe/Zaporozhye',
'Europe/Zurich',
'Factory',
'GB',
'GB-Eire',
'GMT',
'GMT+0',
'GMT-0',
'GMT0',
'Greenwich',
'Hongkong',
'HST',
'Iceland',
'Indian/Antananarivo',
'Indian/Chagos',
'Indian/Christmas',
'Indian/Cocos',
'Indian/Comoro',
'Indian/Kerguelen',
'Indian/Mahe',
'Indian/Maldives',
'Indian/Mauritius',
'Indian/Mayotte',
'Indian/Reunion',
'Iran',
'Israel',
'Jamaica',
'Japan',
'Kwajalein',
'Libya',
'MET',
'Mexico/BajaNorte',
'Mexico/BajaSur',
'Mexico/General',
'MST',
'MST7MDT',
'Navajo',
'NZ',
'NZ-CHAT',
'Pacific/Apia',
'Pacific/Auckland',
'Pacific/Chatham',
'Pacific/Easter',
'Pacific/Efate',
'Pacific/Enderbury',
'Pacific/Fakaofo',
'Pacific/Fiji',
'Pacific/Funafuti',
'Pacific/Galapagos',
'Pacific/Gambier',
'Pacific/Guadalcanal',
'Pacific/Guam',
'Pacific/Honolulu',
'Pacific/Johnston',
'Pacific/Kiritimati',
'Pacific/Kosrae',
'Pacific/Kwajalein',
'Pacific/Majuro',
'Pacific/Marquesas',
'Pacific/Midway',
'Pacific/Nauru',
'Pacific/Niue',
'Pacific/Norfolk',
'Pacific/Noumea',
'Pacific/Pago_Pago',
'Pacific/Palau',
'Pacific/Pitcairn',
'Pacific/Ponape',
'Pacific/Port_Moresby',
'Pacific/Rarotonga',
'Pacific/Saipan',
'Pacific/Samoa',
'Pacific/Tahiti',
'Pacific/Tarawa',
'Pacific/Tongatapu',
'Pacific/Truk',
'Pacific/Wake',
'Pacific/Wallis',
'Pacific/Yap',
'Poland',
'Portugal',
'PRC',
'PST8PDT',
'ROC',
'ROK',
'Singapore',
'Turkey',
'UCT',
'Universal',
'US/Alaska',
'US/Aleutian',
'US/Arizona',
'US/Central',
'US/East-Indiana',
'US/Eastern',
'US/Hawaii',
'US/Indiana-Starke',
'US/Michigan',
'US/Mountain',
'US/Pacific',
'US/Pacific-New',
'US/Samoa',
'UTC',
'W-SU',
'WET',
'Zulu'
];

    continents = [
        'AFRICA',
        'AMERICA',
        'ANTARCTICA',
        'ARCTIC',
        'ASIA',
        'ATLANTIC',
        'AUSTRALIA',
        'EUROPE',
        'INDIAN',
        'PACIFIC'
    ];
    codes = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
    if (!codes.indexOf) {
        codes.indexOf = indexOf;
    }
    if (!continents.indexOf) {
        continents.indexOf = indexOf;
    }

    if (what) {
        if (codes.indexOf(what) !== -1 || continents.indexOf(what) !== -1) {
            if (what && what === parseInt(what, 10)+'') {
                // what is an integer
                new_what = continents[codes.indexOf(what)];
            }
            if (what) {
                new_what = what[0]+what.slice(1).toLowerCase();
            }

            for (i=0; i < identifiers.length; i++) {
                if (identifiers[i].indexOf(new_what+'/') !== -1) {
                    returnArr.push(identifiers[i]);
                }
            }
            // Assumed implementation
            return returnArr;
        } else if (what === 'UTC' || what === 1024) {
            throw 'Unknown implementation';
        } else if (what === 'ALL_WITH_BC' || what === 4095) {
            // All with backwards-compatibility
            throw 'Unknown implementation';
        } else if (what === 'PER_COUNTRY' || what === 4096) {
            // Presumably use 'country' argument to limit choices, but where is the country list?
            throw 'Unknown implementation';
        } else if (what === 'ALL' || what === 2047) {
            return identifiers;
        }
    }

    return identifiers;
};

exports.trigger_error = function (error_msg, error_type) {
    // Generates a user-level error/warning/notice message
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/trigger_error
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Although this function should only allow the E_USER_ types, we'll allow the
    // %        note 1: others here in order to be able to simulate more types (though should not trigger
    // %        note 1: aggregates like E_STRICT or E_ALL).
    // %        note 1: See also our experimental at() function (to mimic the @ error suppressor)
    // -    depends on: echo
    // *     example 1: \php.trigger_error('This will just be a notice');
    // *     returns 1: true

    // Fix: get to work with set_error_handler()'s handler when that is added

    var type = 0;

    var i = 0;
    var that = this;
    var prepend = '';
    var append = '';
    if (!error_type) {
        error_type = 'E_USER_NOTICE';
    }
    var ini_on = ini => that.php_js.ini[ini] && that.php_js.ini[ini].local_value &&
        ((that.php_js.ini[ini].local_value.toString &&
            that.php_js.ini[ini].local_value.toString().toLowerCase &&
            (that.php_js.ini[ini].local_value.toString().toLowerCase() === 'on' ||
            that.php_js.ini[ini].local_value.toString().toLowerCase() === 'true')) ||
        parseInt(that.php_js.ini[ini].local_value, 10) === 1);
    var display_errors = type => that.php_js.ini.error_reporting &&
                (type & that.php_js.ini.error_reporting.local_value) && ini_on('display_errors');
    var TYPES = { // Including all types for completeness, but should not trigger aggregates like E_STRICT or E_ALL
        E_ERROR:1, // Fatal run-time errors. These indicate errors that can not be recovered from, such as a memory allocation problem. Execution of the script is halted.
        E_WARNING:2, // Run-time warnings (non-fatal errors). Execution of the script is not halted.
        E_PARSE:4, // Compile-time parse errors. Parse errors should only be generated by the parser.
        E_NOTICE:8, // Run-time notices. Indicate that the script encountered something that could indicate an error, but could also happen in the normal course of running a script.
        E_CORE_ERROR:16, // Fatal errors that occur during PHP's initial startup. This is like an E_ERROR, except it is generated by the core of PHP.
        E_CORE_WARNING:32, // Warnings (non-fatal errors) that occur during PHP's initial startup. This is like an E_WARNING, except it is generated by the core of PHP.
        E_COMPILE_ERROR:64, // Fatal compile-time errors. This is like an E_ERROR, except it is generated by the Zend Scripting Engine.
        E_COMPILE_WARNING:128, // Compile-time warnings (non-fatal errors). This is like an E_WARNING, except it is generated by the Zend Scripting Engine.
        E_USER_ERROR:256, // User-generated error message. This is like an E_ERROR, except it is generated in PHP code by using the PHP function trigger_error().
        E_USER_WARNING:512, // User-generated warning message. This is like an E_WARNING, except it is generated in PHP code by using the PHP function trigger_error().
        E_USER_NOTICE:1024, // User-generated notice message. This is like an E_NOTICE, except it is generated in PHP code by using the PHP function trigger_error().
        E_STRICT:2048, // Enable to have PHP suggest changes to your code which will ensure the best interoperability and forward compatibility of your code.
        E_RECOVERABLE_ERROR:4096, // Catchable fatal error. It indicates that a probably dangerous error occured, but did not leave the Engine in an unstable state. If the error is not caught by a user defined handle (see also set_error_handler()), the application aborts as it was an E_ERROR.
        E_DEPRECATED:8192, // Run-time notices. Enable this to receive warnings about code that will not work in future versions.
        E_USER_DEPRECATED:16384, // User-generated warning message. This is like an E_DEPRECATED, except it is generated in PHP code by using the PHP function trigger_error().
        E_ALL:30719 // All errors and warnings, as supported, except of level E_STRICT in PHP < 6.     in:32767, // PHP 6, in:30719, // PHP 5.3.x, in:6143, // PHP 5.2.x, previously:2047, //
    };
    if (typeof error_type === 'number') {
        type = error_type;
    }
    else { // Allow for a single string or an array of string flags
        error_type = [].concat(error_type);
        for (i=0; i < error_type.length; i++) {
            // Resolve string input to bitwise
            if (TYPES[error_type[i]]) {
                type = type | TYPES[error_type[i]];
            }
        }
    }
    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    // END REDUNDANT
    if (type & TYPES.E_USER_ERROR || 
        type & TYPES.E_ERROR ||
        type & TYPES.E_CORE_ERROR ||
        type & TYPES.E_COMPILE_ERROR ||
        type & TYPES.E_RECOVERABLE_ERROR ||
        type & TYPES.E_PARSE) {
        if (ini_on('track_errors')) {
            this.$php_errormsg = error_msg; // Can assign to this global, as in PHP (see http://php.net/manual/en/reserved.variables.phperrormsg.php )
        }
        if (display_errors(type)) {
            prepend = this.php_js.ini.error_prepend_string ? this.php_js.ini.error_prepend_string : '';
            append = this.php_js.ini.error_append_string ? this.php_js.ini.error_append_string : '';
            this.echo(prepend+'Error: '+error_msg+' '+append);
        }
        var e = new Error(error_msg); // Might, for Mozilla, allow to somehow pass in a fileName and lineNumber (2nd and 3rd arguments to Error)
        e.type = type;
        this.php_js.last_error = {message:e.message, file:e.fileName, line:e.lineNumber, type:e.type}; // fileName and lineNumber presently not working (see note just above)
        throw e;
    }

    if (display_errors(type)) {
        switch (type) {
            case TYPES.E_USER_WARNING:
            case TYPES.E_WARNING:
            case TYPES.E_CORE_WARNING:
            case TYPES.E_COMPILE_WARNING:
                this.echo('Warning: '+error_msg);
                break;
            case TYPES.E_USER_NOTICE:
            case TYPES.E_NOTICE:
                this.echo('Notice: '+error_msg);
                break;
            case TYPES.E_DEPRECATED:
            case TYPES.E_USER_DEPRECATED:
                this.echo('Deprecated: '+error_msg);
                break;
            default:
                throw 'Unrecognized error type';
        }
    }

    return true;
};

exports.trim = (str, charlist) => {
    // Strips whitespace from the beginning and end of a string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/trim
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: mdsjack (http://www.mdsjack.bo.it)
    // +   improved by: Alexander Ermolaev (http://snippets.dzone.com/user/AlexanderErmolaev)
    // +      input by: Erkekjetter
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: DxGx
    // +   improved by: Steven Levithan (http://blog.stevenlevithan.com)
    // +    tweaked by: Jack
    // +   bugfixed by: Onno Marsman
    // *     example 1: \php.trim('    Kevin van Zonneveld    ');
    // *     returns 1: 'Kevin van Zonneveld'
    // *     example 2: \php.trim('Hello World', 'Hdle');
    // *     returns 2: 'o Wor'
    // *     example 3: \php.trim(16, 1);
    // *     returns 3: 6
    var whitespace;

    var l = 0;
    var i = 0;
    str += '';

    if (!charlist) {
        // default list
        whitespace = " \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
    } else {
        // preg_quote custom list
        charlist += '';
        whitespace = charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
    }

    l = str.length;
    for (i = 0; i < l; i++) {
        if (whitespace.indexOf(str.charAt(i)) === -1) {
            str = str.substring(i);
            break;
        }
    }

    l = str.length;
    for (i = l - 1; i >= 0; i--) {
        if (whitespace.indexOf(str.charAt(i)) === -1) {
            str = str.substring(0, i + 1);
            break;
        }
    }

    return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
};

exports.uasort = function (inputArr, sorter) {
    // Sort an array with a user-defined comparison function and maintain index association
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/uasort
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: This function deviates from PHP in returning a copy of the array instead
    // %        note 1: of acting by reference and returning true; this was necessary because
    // %        note 1: IE does not allow deleting and re-adding of properties without caching
    // %        note 1: of property position; you can set the ini of "phpjs.strictForIn" to true to
    // %        note 1: get the PHP behavior, but use this only if you are in an environment
    // %        note 1: such as Firefox extensions where for-in iteration order is fixed and true
    // %        note 1: property deletion is supported. Note that we intend to implement the PHP
    // %        note 1: behavior by default if IE ever does allow it; only gives shallow copy since
    // %        note 1: is by reference in PHP anyways
    // *     example 1: \php.fruits = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
    // *     example 1: \php.fruits = uasort(fruits, function (a, b) { if (a > b) {return 1;}if (a < b) {return -1;} return 0;});
    // *     results 1: fruits == {c: 'apple', b: 'banana', d: 'lemon', a: 'orange'}
    var valArr = [];

    var keyArr=[];
    var tempKeyVal;
    var tempValue;
    var ret;
    var k = '';
    var i = 0;
    var strictForIn = false;
    var populateArr = {};

    if (typeof sorter === 'string') {
        sorter = this[sorter];
    } else if (sorter instanceof Array) {
        sorter = this[sorter[0]][sorter[1]];
    }

    var sorterNew = (keyArr, valArr) => {
        for (var i=valArr.length-2; i >=0; i--) {
            for (var j=0; j <= i; j++) {
                ret = sorter(valArr[j+1], valArr[j]);
                if (ret < 0) {
                    tempValue = valArr[j];
                    valArr[j] = valArr[j+1];
                    valArr[j+1] = tempValue;
                    tempKeyVal = keyArr[j];
                    keyArr[j] = keyArr[j+1];
                    keyArr[j+1] = tempKeyVal;
                }
            }
        }
    };

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    // END REDUNDANT

    strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value &&
                    this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;


    for (k in inputArr) { // Get key and value arrays
        if (inputArr.hasOwnProperty(k)) {
            valArr.push(inputArr[k]);
            keyArr.push(k);
            if (strictForIn) {
                delete inputArr[k];
            }
        }
    }
    try {
        sorterNew(keyArr, valArr); // Sort our new temporary arrays
    } catch (e) {
        return false;
    }
    for (i = 0; i < valArr.length; i++) { // Repopulate the old array
        populateArr[keyArr[i]] = valArr[i];
    }

    return strictForIn || populateArr;
};

exports.ucfirst = str => {
    // Makes a string's first character uppercase
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/ucfirst
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: \php.ucfirst('kevin van zonneveld');
    // *     returns 1: 'Kevin van zonneveld'
    str += '';
    var f = str.charAt(0).toUpperCase();
    return f + str.substr(1);
};

exports.ucwords = str => // Uppercase the first character of every word in a string
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/ucwords
// +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
// +   improved by: Waldo Malqui Silva
// +   bugfixed by: Onno Marsman
// +   improved by: Robin
// *     example 1: \php.ucwords('kevin van zonneveld');
// *     returns 1: 'Kevin Van Zonneveld'
// *     example 2: \php.ucwords('HELLO WORLD');
// *     returns 2: 'HELLO WORLD'
(str + '').replace(/^(.)|\s(.)/g, $1 => $1.toUpperCase());

exports.uksort = function (inputArr, sorter) {
    // Sort an array by keys using a user-defined comparison function
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/uksort
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: The examples are correct, this is a new way
    // %        note 2: This function deviates from PHP in returning a copy of the array instead
    // %        note 2: of acting by reference and returning true; this was necessary because
    // %        note 2: IE does not allow deleting and re-adding of properties without caching
    // %        note 2: of property position; you can set the ini of "phpjs.strictForIn" to true to
    // %        note 2: get the PHP behavior, but use this only if you are in an environment
    // %        note 2: such as Firefox extensions where for-in iteration order is fixed and true
    // %        note 2: property deletion is supported. Note that we intend to implement the PHP
    // %        note 2: behavior by default if IE ever does allow it; only gives shallow copy since
    // %        note 2: is by reference in PHP anyways
    // *     example 1: \php.data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
    // *     example 1: \php.data = uksort(data, function (key1, key2){ return (key1 == key2 ? 0 : (key1 > key2 ? 1 : -1)); });
    // *     results 1: data == {a: 'orange', b: 'banana', c: 'apple', d: 'lemon'}
    // *     returns 1: true
    var tmp_arr = {};

    var keys = [];
    var i = 0;
    var k = '';
    var strictForIn = false;
    var populateArr = {};

    if (typeof sorter === 'string') {
        sorter = this.window[sorter];
    }

    // Make a list of key names
    for (k in inputArr) {
        if (inputArr.hasOwnProperty(k)) {
            keys.push(k);
        }
    }

    // Sort key names
    try {
        if (sorter) {
            keys.sort(sorter);
        } else {
            keys.sort();
        }
    } catch (e) {
        return false;
    }

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    // END REDUNDANT

    strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value &&
                    this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;


    // Rebuild array with sorted key names
    for (i = 0; i < keys.length; i++) {
        k = keys[i];
        tmp_arr[k] = inputArr[k];
        if (strictForIn) {
            delete inputArr[k];
        }
    }
    for (i in tmp_arr) {
        if (tmp_arr.hasOwnProperty(i)) {
            populateArr[i] = tmp_arr[i];
        }
    }
    return strictForIn || populateArr;
};

exports.uniqid = function (prefix, more_entropy) {
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    revised by: Kankrelune (http://www.webfaktory.info/)
    // %        note 1: Uses an internal counter (in php_js global) to avoid collision
    // *     example 1: \php.uniqid();
    // *     returns 1: 'a30285b160c14'
    // *     example 2: \php.uniqid('foo');
    // *     returns 2: 'fooa30285b1cd361'
    // *     example 3: \php.uniqid('bar', true);
    // *     returns 3: 'bara20285b23dfd1.31879087'
    if (typeof prefix == 'undefined') {
        prefix = "";
    }

    var retId;
    var formatSeed = (seed, reqWidth) => {
        seed = parseInt(seed,10).toString(16); // to hex str
        if (reqWidth < seed.length) { // so long we split
            return seed.slice(seed.length - reqWidth);
        }
        if (reqWidth > seed.length) { // so short we pad
            return Array(1 + (reqWidth - seed.length)).join('0')+seed;
        }
        return seed;
    };

    // BEGIN REDUNDANT
    if (!this.php_js) {
        this.php_js = {};
    }
    // END REDUNDANT
    if (!this.php_js.uniqidSeed) { // init seed with big random int
        this.php_js.uniqidSeed = Math.floor(Math.random() * 0x75bcd15);
    }
    this.php_js.uniqidSeed++;

    retId  = prefix; // start with prefix, add current milliseconds hex string
    retId += formatSeed(parseInt(new Date().getTime()/1000,10),8);
    retId += formatSeed(this.php_js.uniqidSeed,5); // add seed hex string

    if (more_entropy) {
        // for more entropy we add a float lower to 10
        retId += (Math.random()*10).toFixed(8).toString();
    }

    return retId;
};

exports.unserialize = function (data) {
    // Takes a string representation of variable and recreates it
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/unserialize
    // +     original by: Arpad Ray (mailto:arpad@php.net)
    // +     improved by: Pedro Tainha (http://www.pedrotainha.com)
    // +     bugfixed by: dptr1988
    // +      revised by: d3x
    // +     improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +        input by: Brett Zamir (http://brett-zamir.me)
    // +     improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     improved by: Chris
    // +     improved by: James
    // +        input by: Martin (http://www.erlenwiese.de/)
    // +     bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     improved by: Le Torbi
    // +     input by: kilops
    // +     bugfixed by: Brett Zamir (http://brett-zamir.me)
    // -      depends on: utf8_decode
    // %            note: We feel the main purpose of this function should be to ease the transport of data between php & js
    // %            note: Aiming for PHP-compatibility, we have to translate objects to arrays
    // *       example 1: \php.unserialize('a:3:{i:0;s:5:"Kevin";i:1;s:3:"van";i:2;s:9:"Zonneveld";}');
    // *       returns 1: ['Kevin', 'van', 'Zonneveld']
    // *       example 2: \php.unserialize('a:3:{s:9:"firstName";s:5:"Kevin";s:7:"midName";s:3:"van";s:7:"surName";s:9:"Zonneveld";}');
    // *       returns 2: {firstName: 'Kevin', midName: 'van', surName: 'Zonneveld'}
    var that = this;
    var utf8Overhead = chr => {
        // http://phpjs.org/functions/unserialize:571#comment_95906
        var code = chr.charCodeAt(0);
        if (code < 0x0080) {
            return 0;
        }
        if (code < 0x0800) {
             return 1;
        }
        return 2;
    };


    var error = (type, msg, filename, line) => {throw new that.window[type](msg, filename, line);};
    var read_until = (data, offset, stopchr) => {
        var buf = [];
        var chr = data.slice(offset, offset + 1);
        var i = 2;
        while (chr != stopchr) {
            if ((i+offset) > data.length) {
                error('Error', 'Invalid');
            }
            buf.push(chr);
            chr = data.slice(offset + (i - 1),offset + i);
            i += 1;
        }
        return [buf.length, buf.join('')];
    };
    var read_chrs = (data, offset, length) => {
        var buf;

        buf = [];
        for (var i = 0;i < length;i++){
            var chr = data.slice(offset + (i - 1),offset + i);
            buf.push(chr);
            length -= utf8Overhead(chr);
        }
        return [buf.length, buf.join('')];
    };
    var _unserialize = (data, offset) => {
        var readdata;
        var readData;
        var chrs = 0;
        var ccount;
        var stringlength;
        var keyandchrs;
        var keys;

        if (!offset) {offset = 0;}
        var dtype = (data.slice(offset, offset + 1)).toLowerCase();

        var dataoffset = offset + 2;
        var typeconvert = x => x;

        switch (dtype){
            case 'i':
                typeconvert = x => parseInt(x, 10);
                readData = read_until(data, dataoffset, ';');
                chrs = readData[0];
                readdata = readData[1];
                dataoffset += chrs + 1;
            break;
            case 'b':
                typeconvert = x => parseInt(x, 10) !== 0;
                readData = read_until(data, dataoffset, ';');
                chrs = readData[0];
                readdata = readData[1];
                dataoffset += chrs + 1;
            break;
            case 'd':
                typeconvert = x => parseFloat(x);
                readData = read_until(data, dataoffset, ';');
                chrs = readData[0];
                readdata = readData[1];
                dataoffset += chrs + 1;
            break;
            case 'n':
                readdata = null;
            break;
            case 's':
                ccount = read_until(data, dataoffset, ':');
                chrs = ccount[0];
                stringlength = ccount[1];
                dataoffset += chrs + 2;

                readData = read_chrs(data, dataoffset+1, parseInt(stringlength, 10));
                chrs = readData[0];
                readdata = readData[1];
                dataoffset += chrs + 2;
                if (chrs != parseInt(stringlength, 10) && chrs != readdata.length){
                    error('SyntaxError', 'String length mismatch');
                }

                // Length was calculated on an utf-8 encoded string
                // so wait with decoding
                readdata = that.utf8_decode(readdata);
            break;
            case 'a':
                readdata = {};

                keyandchrs = read_until(data, dataoffset, ':');
                chrs = keyandchrs[0];
                keys = keyandchrs[1];
                dataoffset += chrs + 2;

                for (var i = 0; i < parseInt(keys, 10); i++){
                    var kprops = _unserialize(data, dataoffset);
                    var kchrs = kprops[1];
                    var key = kprops[2];
                    dataoffset += kchrs;

                    var vprops = _unserialize(data, dataoffset);
                    var vchrs = vprops[1];
                    var value = vprops[2];
                    dataoffset += vchrs;

                    readdata[key] = value;
                }

                dataoffset += 1;
            break;
            default:
                error('SyntaxError', 'Unknown / Unhandled data type(s): ' + dtype);
            break;
        }
        return [dtype, dataoffset - offset, typeconvert(readdata)];
    };

    return _unserialize((data+''), 0)[2];
};

exports.urldecode = str => // Decodes URL-encoded string
//
// version: 1008.1718
// discuss at: http://phpjs.org/functions/urldecode
// +   original by: Philip Peterson
// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
// +      input by: AJ
// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
// +   improved by: Brett Zamir (http://brett-zamir.me)
// +      input by: travc
// +      input by: Brett Zamir (http://brett-zamir.me)
// +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
// +   improved by: Lars Fischer
// +      input by: Ratheous
// +   improved by: Orlando
// +      reimplemented by: Brett Zamir (http://brett-zamir.me)
// +      bugfixed by: Rob
// %        note 1: info on what encoding functions to use from: http://xkr.us/articles/javascript/encode-compare/
// %        note 2: Please be aware that this function expects to decode from UTF-8 encoded strings, as found on
// %        note 2: pages served as UTF-8
// *     example 1: \php.urldecode('Kevin+van+Zonneveld%21');
// *     returns 1: 'Kevin van Zonneveld!'
// *     example 2: \php.urldecode('http%3A%2F%2Fkevin.vanzonneveld.net%2F');
// *     returns 2: 'http://kevin.vanzonneveld.net/'
// *     example 3: \php.urldecode('http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a');
// *     returns 3: 'http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a'

decodeURIComponent(str.replace(/\+/g, '%20'));

exports.urlencode = str => {
    // URL-encodes string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/urlencode
    // +   original by: Philip Peterson
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: AJ
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: travc
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Lars Fischer
    // +      input by: Ratheous
    // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Joris
    // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: This reflects PHP 5.3/6.0+ behavior
    // %        note 2: Please be aware that this function expects to encode into UTF-8 encoded strings, as found on
    // %        note 2: pages served as UTF-8
    // *     example 1: \php.urlencode('Kevin van Zonneveld!');
    // *     returns 1: 'Kevin+van+Zonneveld%21'
    // *     example 2: \php.urlencode('http://kevin.vanzonneveld.net/');
    // *     returns 2: 'http%3A%2F%2Fkevin.vanzonneveld.net%2F'
    // *     example 3: \php.urlencode('http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a');
    // *     returns 3: 'http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a'
    str = (str+'').toString();

    // Tilde should be allowed unescaped in future versions of PHP (as reflected below), but if you want to reflect current
    // PHP behavior, you would need to add ".replace(/~/g, '%7E');" to the following.
    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
                                                                    replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
};

exports.user_error = function (error_msg, error_type) {
    // !No description available for user_error. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/user_error
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: trigger_error
    // *     example 1: \php.user_error('Cannot divide by zero', 256);
    // *     returns 1: true
    return this.trigger_error(error_msg, error_type);
};

exports.usleep = microseconds => {
    // Delay for a given number of micro seconds
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/usleep
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: For study purposes. Current implementation could lock up the user's browser.
    // %        note 1: Consider using setTimeout() instead.
    // %        note 2: Note that this function's argument, contrary to the PHP name, does not
    // %        note 2: start being significant until 1,000 microseconds (1 millisecond)
    // *     example 1: \php.usleep(2000000); // delays for 2 seconds
    // *     returns 1: true
    var start = new Date().getTime();
    while (new Date() < (start + microseconds/1000)) {}
    return true;
};

exports.usort = function (inputArr, sorter) {
    // Sort an array by values using a user-defined comparison function
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/usort
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: This function deviates from PHP in returning a copy of the array instead
    // %        note 1: of acting by reference and returning true; this was necessary because
    // %        note 1: IE does not allow deleting and re-adding of properties without caching
    // %        note 1: of property position; you can set the ini of "phpjs.strictForIn" to true to
    // %        note 1: get the PHP behavior, but use this only if you are in an environment
    // %        note 1: such as Firefox extensions where for-in iteration order is fixed and true
    // %        note 1: property deletion is supported. Note that we intend to implement the PHP
    // %        note 1: behavior by default if IE ever does allow it; only gives shallow copy since
    // %        note 1: is by reference in PHP anyways
    // *     example 1: \php.stuff = {d: '3', a: '1', b: '11', c: '4'};
    // *     example 1: \php.stuff = usort(stuff, function (a, b) {return(a-b);});
    // *     results 1: stuff = {0: '1', 1: '3', 2: '4', 3: '11'};
    var valArr = [];

    var k = '';
    var i = 0;
    var strictForIn = false;
    var populateArr = {};

    if (typeof sorter === 'string') {
        sorter = this[sorter];
    } else if (sorter instanceof Array) {
        sorter = this[sorter[0]][sorter[1]];
    }

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    // END REDUNDANT

    strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value &&
                    this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;


    for (k in inputArr) { // Get key and value arrays
        if (inputArr.hasOwnProperty(k)) {
            valArr.push(inputArr[k]);
            if (strictForIn) {
                delete inputArr[k];
            }
        }
    }
    try {
        valArr.sort(sorter);
    } catch (e) {
        return false;
    }
    for (i = 0; i < valArr.length; i++) { // Repopulate the old array
        populateArr[i] = valArr[i];
    }

    return strictForIn || populateArr;
};

exports.utf8_decode = str_data => {
    // Converts a UTF-8 encoded string to ISO-8859-1
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/utf8_decode
    // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // +      input by: Aman Gupta
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Norman "zEh" Fuchs
    // +   bugfixed by: hitwork
    // +   bugfixed by: Onno Marsman
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: \php.utf8_decode('Kevin van Zonneveld');
    // *     returns 1: 'Kevin van Zonneveld'
    var tmp_arr = [];

    var i = 0;
    var ac = 0;
    var c1 = 0;
    var c2 = 0;
    var c3 = 0;

    str_data += '';

    while ( i < str_data.length ) {
        c1 = str_data.charCodeAt(i);
        if (c1 < 128) {
            tmp_arr[ac++] = String.fromCharCode(c1);
            i++;
        } else if ((c1 > 191) && (c1 < 224)) {
            c2 = str_data.charCodeAt(i+1);
            tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
            i += 2;
        } else {
            c2 = str_data.charCodeAt(i+1);
            c3 = str_data.charCodeAt(i+2);
            tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        }
    }

    return tmp_arr.join('');
};

exports.utf8_encode = argString => {
    // Encodes an ISO-8859-1 string to UTF-8
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/utf8_encode
    // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: sowberry
    // +    tweaked by: Jack
    // +   bugfixed by: Onno Marsman
    // +   improved by: Yves Sucaet
    // +   bugfixed by: Onno Marsman
    // +   bugfixed by: Ulrich
    // *     example 1: \php.utf8_encode('Kevin van Zonneveld');
    // *     returns 1: 'Kevin van Zonneveld'
    var string = (argString+''); // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");

    var utftext = "";
    var start;
    var end;
    var stringl = 0;

    start = end = 0;
    stringl = string.length;
    for (var n = 0; n < stringl; n++) {
        var c1 = string.charCodeAt(n);
        var enc = null;

        if (c1 < 128) {
            end++;
        } else if (c1 > 127 && c1 < 2048) {
            enc = String.fromCharCode((c1 >> 6) | 192) + String.fromCharCode((c1 & 63) | 128);
        } else {
            enc = String.fromCharCode((c1 >> 12) | 224) + String.fromCharCode(((c1 >> 6) & 63) | 128) + String.fromCharCode((c1 & 63) | 128);
        }
        if (enc !== null) {
            if (end > start) {
                utftext += string.substring(start, end);
            }
            utftext += enc;
            start = end = n+1;
        }
    }

    if (end > start) {
        utftext += string.substring(start, string.length);
    }

    return utftext;
};

exports.var_dump = function(...args) {
    // Dumps a string representation of variable to output
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/var_dump
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Zahlii
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: echo
    // %        note 1: For returning a string, use var_export() with the second argument set to true
    // *     example 1: \php.var_dump(1);
    // *     returns 1: 'int(1)'

    var output = '';

    var pad_char = ' ';
    var pad_val = 4;
    var lgth = 0;
    var i = 0;
    var d = this.window.document;
    var _getFuncName = fn => {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
        if (!name) {
            return '(Anonymous)';
        }
        return name[1];
    };

    var _repeat_char = (len, pad_char) => {
        var str = '';
        for (var i = 0; i < len; i++) {
            str += pad_char;
        }
        return str;
    };
    var _getInnerVal = (val, thick_pad) => {
        var ret = '';
        if (val === null) {
            ret = 'NULL';
        }
        else if (typeof val === 'boolean') {
            ret = 'bool(' + val + ')';
        }
        else if (typeof val === 'string') {
            ret = 'string(' + val.length+') "' + val + '"';
        }
        else if (typeof val === 'number') {
            if (parseFloat(val) == parseInt(val, 10)) {
                ret = 'int(' + val + ')';
            }
            else {
                ret = 'float('+val+')';
            }
        }
        // The remaining are not PHP behavior because these values only exist in this exact form in JavaScript
        else if (typeof val === 'undefined') {
            ret = 'undefined';
        }
        else if (typeof val === 'function') {
            var funcLines = val.toString().split('\n');
            ret = '';
            for (var i = 0, fll = funcLines.length; i < fll; i++) {
                ret += (i !== 0 ? '\n'+thick_pad : '') + funcLines[i];
            }
        }
        else if (val instanceof Date) {
            ret = 'Date('+val+')';
        }
        else if (val instanceof RegExp) {
            ret = 'RegExp('+val+')';
        }
        else if (val.nodeName) { // Different than PHP's DOMElement
            switch(val.nodeType) {
                case 1:
                    if (typeof val.namespaceURI === 'undefined' || val.namespaceURI === 'http://www.w3.org/1999/xhtml') { // Undefined namespace could be plain XML, but namespaceURI not widely supported
                        ret = 'HTMLElement("' + val.nodeName + '")';
                    }
                    else {
                        ret = 'XML Element("' + val.nodeName + '")';
                    }
                    break;
                case 2:
                    ret = 'ATTRIBUTE_NODE(' + val.nodeName + ')';
                    break;
                case 3:
                    ret = 'TEXT_NODE(' + val.nodeValue + ')';
                    break;
                case 4:
                    ret = 'CDATA_SECTION_NODE(' + val.nodeValue + ')';
                    break;
                case 5:
                    ret = 'ENTITY_REFERENCE_NODE';
                    break;
                case 6:
                    ret = 'ENTITY_NODE';
                    break;
                case 7:
                    ret = 'PROCESSING_INSTRUCTION_NODE(' + val.nodeName + ':' + val.nodeValue+')';
                    break;
                case 8:
                    ret = 'COMMENT_NODE(' + val.nodeValue + ')';
                    break;
                case 9:
                    ret = 'DOCUMENT_NODE';
                    break;
                case 10:
                    ret = 'DOCUMENT_TYPE_NODE';
                    break;
                case 11:
                    ret = 'DOCUMENT_FRAGMENT_NODE';
                    break;
                case 12:
                    ret = 'NOTATION_NODE';
                    break;
            }
        }
        return ret;
    };

    var _formatArray = (obj, cur_depth, pad_val, pad_char) => {
        var someProp = '';
        if (cur_depth > 0) {
            cur_depth++;
        }

        var base_pad = _repeat_char(pad_val * (cur_depth - 1), pad_char);
        var thick_pad = _repeat_char(pad_val * (cur_depth + 1), pad_char);
        var str = '';
        var val = '';

        if (typeof obj === 'object' && obj !== null) {
            if (obj.constructor && _getFuncName(obj.constructor) === 'PHPJS_Resource') {
                return obj.var_dump();
            }
            lgth = 0;
            for (someProp in obj) {
                lgth++;
            }
            str += 'array('+lgth+') {\n';
            for (var key in obj) {
                var objVal = obj[key];
                if (typeof objVal === 'object' && objVal !== null &&
                    !(objVal instanceof Date) && !(objVal instanceof RegExp) && !objVal.nodeName) {
                    str += thick_pad + '[' + key + '] =>\n' + thick_pad + _formatArray(objVal, cur_depth + 1, pad_val, pad_char);
                } else {
                    val = _getInnerVal(objVal, thick_pad);
                    str += thick_pad + '[' + key + '] =>\n' + thick_pad + val + '\n';
                }
            }
            str += base_pad + '}\n';
        } else {
            str = _getInnerVal(obj, thick_pad);
        }
        return str;
    };

    output = _formatArray(args[0], 0, pad_val, pad_char);
    for (i=1; i < args.length; i++) {
        output += '\n' + _formatArray(args[i], 0, pad_val, pad_char);
    }

    if (d.body) {
        this.echo(output);
    }
    else {
        try {
            d = XULDocument; // We're in XUL, so appending as plain text won't work
            this.echo('<pre xmlns="http://www.w3.org/1999/xhtml" style="white-space:pre;">'+output+'</pre>');
        }
        catch (e) {
            this.echo(output); // Outputting as plain text may work in some plain XML
        }
    }
};

exports.var_export = function (mixed_expression, bool_return) {
    // Outputs or returns a string representation of a variable
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/var_export
    // +   original by: Philip Peterson
    // +   improved by: johnrembo
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   input by: Brian Tafoya (http://www.premasolutions.com/)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: echo
    // *     example 1: \php.var_export(null);
    // *     returns 1: null
    // *     example 2: \php.var_export({0: 'Kevin', 1: 'van', 2: 'Zonneveld'}, true);
    // *     returns 2: "array (\n  0 => 'Kevin',\n  1 => 'van',\n  2 => 'Zonneveld'\n)"
    // *     example 3: \php.data = 'Kevin';
    // *     example 3: \php.var_export(data, true);
    // *     returns 3: "'Kevin'"
    var retstr = '';

    var iret = '';
    var cnt = 0;
    var x = [];
    var i = 0;
    var funcParts = [];

    var // We use the last argument (not part of PHP) to pass in our indentation level
    idtLevel = arguments[2] || 2;

    var innerIndent = '';
    var outerIndent = '';

    var getFuncName = fn => {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
        if (!name) {
            return '(Anonymous)';
        }
        return name[1];
    };

    var _makeIndent = idtLevel => (new Array(idtLevel+1)).join(' ');

    var __getType = inp => {
        var i = 0;
        var match;
        var type = typeof inp;
        if (type === 'object' && inp.constructor && getFuncName(inp.constructor) === 'PHPJS_Resource') {
            return 'resource';
        }
        if (type === 'function') {
            return 'function';
        }
        if (type === 'object' && !inp) {
            return 'null'; // Should this be just null?
        }
        if (type === "object") {
            if (!inp.constructor) {
                return 'object';
            }
            var cons = inp.constructor.toString();
            match = cons.match(/(\w+)\(/);
            if (match) {
                cons = match[1].toLowerCase();
            }
            var types = ["boolean", "number", "string", "array"];
            for (i=0; i < types.length; i++) {
                if (cons === types[i]) {
                    type = types[i];
                    break;
                }
            }
        }
        return type;
    };
    var type = __getType(mixed_expression);

    if (type === null) {
        retstr = "NULL";
    } else if (type === 'array' || type === 'object') {
        outerIndent = _makeIndent(idtLevel-2);
        innerIndent = _makeIndent(idtLevel);
        for (i in mixed_expression) {
            var value = this.var_export(mixed_expression[i], true, idtLevel+2);
            value = typeof value === 'string' ? value.replace(/</g, '&lt;').replace(/>/g, '&gt;') : value;
            x[cnt++] = innerIndent+i+' => '+(__getType(mixed_expression[i]) === 'array' ? '\n' : '')+value;
        }
        iret = x.join(',\n');
        retstr = outerIndent+"array (\n"+iret+'\n'+outerIndent+')';
    }
    else if (type === 'function') {
        funcParts = mixed_expression.toString().match(/function .*?\((.*?)\) \{([\s\S]*)\}/);

        // For lambda functions, var_export() outputs such as the following:  '\000lambda_1'
        // Since it will probably not be a common use to expect this (unhelpful) form, we'll use another PHP-exportable
        // construct, create_function() (though dollar signs must be on the variables in JavaScript); if using instead
        // in JavaScript and you are using the namespaced version, note that create_function() will not be available
        // as a global
        retstr = "create_function ('"+funcParts[1]+"', '"+funcParts[2].replace(new RegExp("'", 'g'), "\\'")+"')";
    }
    else if (type === 'resource') {
        retstr = 'NULL'; // Resources treated as null for var_export
    } else {
        retstr = (typeof ( mixed_expression ) !== 'string') ? mixed_expression : "'" + mixed_expression.replace(/(["'])/g, "\\$1").replace(/\0/g, "\\0") + "'";
    }

    if (bool_return !== true) {
        this.echo(retstr);
        return null;
    } else {
        return retstr;
    }
};

exports.version_compare = function (v1, v2, operator) {
    // Compares two "PHP-standardized" version number strings
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/version_compare
    // +      original by: Philippe Jausions (http://pear.php.net/user/jausions)
    // +      original by: Aidan Lister (http://aidanlister.com/)
    // + reimplemented by: Kankrelune (http://www.webfaktory.info/)
    // +      improved by: Brett Zamir (http://brett-zamir.me)
    // +      improved by: Scott Baker
    // +      improved by: Theriault
    // *        example 1: \php.version_compare('8.2.5rc', '8.2.5a');
    // *        returns 1: 1
    // *        example 2: \php.version_compare('8.2.50', '8.2.52', '<');
    // *        returns 2: true
    // *        example 3: \php.version_compare('5.3.0-dev', '5.3.0');
    // *        returns 3: -1
    // *        example 4: \php.version_compare('4.1.0.52','4.01.0.51');
    // *        returns 4: 1
    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ENV = this.php_js.ENV || {};

    // END REDUNDANT

    // Important: compare must be initialized at 0.
    var i = 0;

    var x = 0;
    var compare = 0;

    var // vm maps textual PHP versions to negatives so they're less than 0.
    // PHP currently defines these as CASE-SENSITIVE. It is important to
    // leave these as negatives so that they can come before numerical versions
    // and as if no letters were there to begin with.
    // (1alpha is < 1 and < 1.1 but > 1dev1)
    // If a non-numerical value can't be mapped to this table, it receives
    // -7 as its value.
    vm = {
        'dev': -6,
        'alpha': -5,
        'a': -5,
        'beta': -4,
        'b': -4,
        'RC': -3,
        'rc': -3,
        '#': -2,
        'p': -1,
        'pl': -1
    };

    var // This function will be called to prepare each version argument.
    // It replaces every _, -, and + with a dot.
    // It surrounds any nonsequence of numbers/dots with dots.
    // It replaces sequences of dots with a single dot.
    //    version_compare('4..0', '4.0') == 0
    // Important: A string of 0 length needs to be converted into a value
    // even less than an unexisting value in vm (-7), hence [-8].
    // It's also important to not strip spaces because of this.
    //   version_compare('', ' ') == 1
    prepVersion = v => {
        v = ('' + v).replace(/[_\-+]/g, '.');
        v = v.replace(/([^.\d]+)/g, '.$1.').replace(/\.{2,}/g, '.');
        return (!v.length ? [-8] : v.split('.'));
    };

    var // This converts a version component to a number.
    // Empty component becomes 0.
    // Non-numerical component becomes a negative number.
    // Numerical component becomes itself as an integer.
    numVersion = v => !v ? 0 : (isNaN(v) ? vm[v] || -7 : parseInt(v, 10));

    v1 = prepVersion(v1);
    v2 = prepVersion(v2);
    x = Math.max(v1.length, v2.length);
    for (i = 0; i < x; i++) {
        if (v1[i] == v2[i]) {
            continue;
        }
        v1[i] = numVersion(v1[i]);
        v2[i] = numVersion(v2[i]);
        if (v1[i] < v2[i]) {
            compare = -1;
            break;
        } else if (v1[i] > v2[i]) {
            compare = 1;
            break;
        }
    }
    if (!operator) {
        return compare;
    }

    // Important: operator is CASE-SENSITIVE.
    // "No operator" seems to be treated as "<."
    // Any other values seem to make the function return null.
    switch (operator) {
        case '>':
        case 'gt':
            return (compare > 0);
        case '>=':
        case 'ge':
            return (compare >= 0);
        case '<=':
        case 'le':
            return (compare <= 0);
        case '==':
        case '=':
        case 'eq':
            return (compare === 0);
        case '<>':
        case '!=':
        case 'ne':
            return (compare !== 0);
        case '':
        case '<':
        case 'lt':
            return (compare < 0);
        default:
            return null;
    }
};

exports.vprintf = function (format, args) {
    // Output a formatted string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/vprintf
    // +   original by: Ash Searle (http://hexmen.com/blog/)
    // +   improved by: Michael White (http://getsprink.com)
    // + reimplemented by: Brett Zamir (http://brett-zamir.me)
    // -    depends on: sprintf
    // *     example 1: \php.printf("%01.2f", 123.1);
    // *     returns 1: 6
    var body;

    var elmt;
    var ret = '';
    var d = this.window.document;

    // .shift() does not work to get first item in bodies

    var HTMLNS = 'http://www.w3.org/1999/xhtml';
    body = d.getElementsByTagNameNS ?
      (d.getElementsByTagNameNS(HTMLNS, 'body')[0] ?
        d.getElementsByTagNameNS(HTMLNS, 'body')[0] :
        d.documentElement.lastChild) :
      d.getElementsByTagName('body')[0];

    if (!body) {
        return false;
    }

    ret = this.sprintf(...[format].concat(args));

    elmt = d.createTextNode(ret);
    body.appendChild(elmt);

    return ret.length;
};

exports.vsprintf = function (format, args) {
    // Return a formatted string
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/vsprintf
    // +   original by: ejsanders
    // -    depends on: sprintf
    // *     example 1: \php.vsprintf('%04d-%02d-%02d', [1988, 8, 1]);
    // *     returns 1: '1988-08-01'
    return this.sprintf(...[format].concat(args));
};

exports.wordwrap = function (str, int_width, str_break, cut) {
    // Wraps buffer to selected number of characters using string break char
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/wordwrap
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Nick Callen
    // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Sakimori
    // +   bugfixed by: Michael Grier
    // *     example 1: \php.wordwrap('Kevin van Zonneveld', 6, '|', true);
    // *     returns 1: 'Kevin |van |Zonnev|eld'
    // *     example 2: \php.wordwrap('The quick brown fox jumped over the lazy dog.', 20, '<br />\n');
    // *     returns 2: 'The quick brown fox <br />\njumped over the lazy<br />\n dog.'
    // *     example 3: \php.wordwrap('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
    // *     returns 3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod \ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \nveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \ncommodo consequat.'
    // PHP Defaults
    var m = ((arguments.length >= 2) ? arguments[1] : 75   );
    var b = ((arguments.length >= 3) ? arguments[2] : "\n" );
    var c = ((arguments.length >= 4) ? arguments[3] : false);

    var i;
    var j;
    var l;
    var s;
    var r;

    str += '';

    if (m < 1) {
        return str;
    }

    for (i = -1, l = (r = str.split(/\r\n|\n|\r/)).length; ++i < l; r[i] += s) {
        for (s = r[i], r[i] = ""; s.length > m; r[i] += s.slice(0, j) + ((s = s.slice(j)).length ? b : "")){
            j = c == 2 || (j = s.slice(0, m + 1).match(/\S*(\s)?$/))[1] ? m : j.input.length - j[0].length || c == 1 && m || j.input.length + (j = s.slice(m).match(/^\S*/)).input.length;
        }
    }

    return r.join("\n");
};

exports.xdiff_string_diff = (old_data, new_data, context_lines, minimal) => {
    // !No description available for xdiff_string_diff. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/xdiff_string_diff
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   based on: Imgen Tata (http://www.myipdf.com/)
    // +   bugfixed by: Imgen Tata (http://www.myipdf.com/)
    // %        note 1: The minimal argument is not currently supported
    // *     example 1: \php.xdiff_string_diff('', 'Hello world!');
    // *     returns 1: '@@ -0,0 +1,1 @@\n+Hello world!'

    // (This code was done by Imgen Tata; I have only reformatted for use in php.js)

    // See http://en.wikipedia.org/wiki/Diff#Unified_format
    var i = 0;

    var j = 0;
    var k = 0;
    var ori_hunk_start;
    var new_hunk_start;
    var ori_hunk_end;
    var new_hunk_end;
    var ori_hunk_line_no;
    var new_hunk_line_no;
    var ori_hunk_size;
    var new_hunk_size;

    var // Potential configuration
    MAX_CONTEXT_LINES = Number.POSITIVE_INFINITY;

    var MIN_CONTEXT_LINES = 0;
    var DEFAULT_CONTEXT_LINES = 3;

    var //
    HEADER_PREFIX = '@@ ';

    var HEADER_SUFFIX = ' @@';
    var ORIGINAL_INDICATOR = '-';
    var NEW_INDICATOR = '+';
    var RANGE_SEPARATOR = ',';
    var CONTEXT_INDICATOR = ' ';
    var DELETION_INDICATOR = '-';
    var ADDITION_INDICATOR = '+';
    var ori_lines;
    var new_lines;
    var NEW_LINE = '\n';

    var /*
    *Trims string
    */
    trim = text => {
        if (typeof text != 'string') {
            throw Error('String parameter required');
        }

        return text.replace(/(^\s*)|(\s*$)/g, '');
    };

    var /*
    *Verifies type of arguments
    */
    verify_type = function(type) {
        var args = arguments,
                args_len = arguments.length,
                basic_types = ['number', 'boolean', 'string', 'function', 'object', 'undefined'],
                basic_type,
                i, j,
                type_of_type = typeof type;
        if (type_of_type != 'string' &&
            type_of_type != 'function') {
            throw new Error('Bad type parameter');
        }

        if (args_len < 2) {
            throw new Error('Too few arguments');
        }

        if (type_of_type == 'string') {
            type = trim(type);

            if (type == '') {
                throw new Error('Bad type parameter');
            }

            for (j = 0; j < basic_types.length; j++) {
                basic_type = basic_types[j];

                if (basic_type == type) {
                    for (i = 1; i < args_len; i++) {
                        if (typeof args[i] != type) {
                            throw new Error('Bad type');
                        }
                    }

                    return;
                }
            }

            throw new Error('Bad type parameter');
        }

        // Not basic type. we need to use instanceof operator
        for (i = 1; i < args_len; i++) {
            if (!(args[i] instanceof type)) {
                throw new Error('Bad type');
            }
        }
    };

    var /*
    *Checks if the specified array contains an element with specified value
    */
    has_value = (array, value) => {
        var i;
        verify_type(Array, array);

        for (i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true;
            }
        }

        return false;
    };

    var /*
    *Checks the type of arguments
    *@param {String | Function} type Specifies the desired type
    *@return {Boolean} Return true if all arguments after the type argument are of specified type. Else false
    */
    are_type_of = function(type) {
        var args = arguments,
            args_len = arguments.length,
            basic_types = ['number',
                            'boolean',
                            'string',
                            'function',
                            'object',
                            'undefined'],
            basic_type,
            i, j,
            type_of_type = typeof type;
        if (type_of_type != 'string' &&
            type_of_type != 'function') {
            throw new Error('Bad type parameter');
        }

        if (args_len < 2) {
            throw new Error('Too few arguments');
        }

        if (type_of_type == 'string') {
            type = trim(type);

            if (type == '') {
                return false;
            }

            for (j = 0; j < basic_types.length; j++) {
                basic_type = basic_types[j];

                if (basic_type == type) {
                    for (i = 1; i < args_len; i++) {
                        if (typeof args[i] != type) {
                            return false;
                        }
                    }

                    return true;
                }
            }

            throw new Error('Bad type parameter');
        }

        // Not basic type. we need to use instanceof operator
        for (i = 1; i < args_len; i++) {
            if (!(args[i] instanceof type)) {
                return false;
            }
        }

        return true;
    };

    var /*
    *Initialize and return an array with specified size and initial value
    */
    get_initialized_array = (array_size, init_value) => {
        var array = [],
            i;
        verify_type('number', array_size);

        for (i = 0; i < array_size; i++) {
            array.push(init_value);
        }

        return array;
    };

    var /*
    *Splits text into lines and return as a string array
    */
    split_into_lines = text => {
        verify_type('string', text);

        if (text == '') {
            return [];
        }
        return text.split('\n');
    };

    var is_empty_array = obj => are_type_of(Array, obj) && obj.length === 0;

    var /*
    * Finds longest common sequence between two sequences
    *See http://wordaligned.org/articles/longest-common-subsequence
    */
    find_longest_common_sequence = (seq1, seq2, seq1_is_in_lcs, seq2_is_in_lcs) => {
        if (!are_type_of(Array, seq1, seq2)) {
            throw new Error('Array parameters are required');
        }

        // Deal with edge case
        if (is_empty_array(seq1) ||
            is_empty_array(seq2)) {
            return [];
        }

        // Function to calculate lcs lengths
        var lcs_lens = (xs, ys) => {
            var curr = get_initialized_array(ys.length + 1, 0);
            var prev;
            var i, j;

            for (i = 0; i < xs.length; i++) {
                prev = curr.slice(0);
                for (j = 0; j < ys.length; j++) {
                    if (xs[i] === ys[j]) {
                        curr[j + 1] = prev[j] + 1;
                    }
                    else {
                        curr[j + 1] = Math.max(curr[j], prev[j + 1]);
                    }
                }
            }

            return curr;
        },
        // Function to find lcs and fill in the array to indicate the optimal longest common sequence
        find_lcs = (xs, xidx, xs_is_in, ys) => {
            var nx = xs.length;
            var ny = ys.length;
            var i;
            var xb, xe;
            var ll_b, ll_e;
            var pivot;
            var max;
            var yb, ye;

            if (nx === 0) {
                return [];
            }
            else if (nx === 1) {
                if (has_value(ys, xs[0])) {
                    xs_is_in[xidx] = true;
                    return [xs[0]];
                }
                else {
                    return [];
                }
            } else {
                i = Math.floor(nx / 2);
                xb = xs.slice(0, i);
                xe = xs.slice(i);
                ll_b = lcs_lens(xb, ys);
                ll_e = lcs_lens(xe.slice(0).reverse(),
                       ys.slice(0).reverse());

                pivot = 0; max = 0;
                for (j = 0; j <= ny; j++) {
                    if (ll_b[j] + ll_e[ny - j] > max) {
                        pivot = j;
                        max = ll_b[j] + ll_e[ny - j];
                    }
                }
                yb = ys.slice(0, pivot);
                ye = ys.slice(pivot);
                return find_lcs(xb, xidx, xs_is_in, yb).concat(find_lcs(xe, xidx + i, xs_is_in, ye));
            }
        };

        // Fill in seq1_is_in_lcs to find the optimal longest common subsequence of first sequence
        find_lcs(seq1, 0, seq1_is_in_lcs, seq2);
        // Fill in seq2_is_in_lcs to find the optimal longest common subsequence of second sequence and return the result
        return find_lcs(seq2, 0, seq2_is_in_lcs, seq1);
    };

    // First, check the parameters
    if (are_type_of('string', old_data, new_data) === false) {
        return false;
    }

    if (old_data == new_data) {
        return '';
    }

    if (typeof context_lines != 'number' ||
        context_lines > MAX_CONTEXT_LINES ||
        context_lines < MIN_CONTEXT_LINES) {
        context_lines = DEFAULT_CONTEXT_LINES;
    }

    ori_lines = split_into_lines(old_data);
    new_lines = split_into_lines(new_data);
    var ori_len = ori_lines.length;
    var new_len = new_lines.length;
    var ori_is_in_lcs = get_initialized_array(ori_len, false);
    var new_is_in_lcs = get_initialized_array(new_len, false);

    var lcs_len = find_longest_common_sequence(ori_lines, new_lines,
                            ori_is_in_lcs, new_is_in_lcs).length;

    var unidiff = '';

    if (lcs_len === 0) {// No common sequence
        unidiff = HEADER_PREFIX +
                    ORIGINAL_INDICATOR +
                    (ori_len > 0 ? '1' : '0') + RANGE_SEPARATOR + ori_len +
                    ' ' +
                    NEW_INDICATOR +
                    (new_len > 0 ? '1' : '0') + RANGE_SEPARATOR + new_len +
                    HEADER_SUFFIX;

        for (i = 0; i < ori_len; i++) {
            unidiff += NEW_LINE + DELETION_INDICATOR + ori_lines[i];
        }

        for (j = 0; j < new_len; j++) {
            unidiff += NEW_LINE + ADDITION_INDICATOR + new_lines[j];
        }

        return unidiff;
    }

    var leading_context = [];
    var trailing_context = [];
    var actual_leading_context = [];
    var actual_trailing_context = [];

    var // Regularize leading context by the context_lines parameter
    regularize_leading_context = context => {
        if (context.length === 0 ||
            context_lines === 0) {
            return [];
        }

        var context_start_pos = Math.max(context.length - context_lines, 0);

        return context.slice(context_start_pos);
    };

    var // Regularize trailing context by the context_lines parameter
    regularize_trailing_context = context => {
        if (context.length === 0 ||
            context_lines === 0) {
            return [];
        }

        return context.slice(0,
                Math.min(context_lines, context.length));
    };

    // Skip common lines in the beginning
    while (i < ori_len &&
        ori_is_in_lcs[i] === true &&
        new_is_in_lcs[i] === true) {
        leading_context.push(ori_lines[i]);
        i++;
    }

    j = i;
    k = i; // The index in the longest common sequence
    ori_hunk_start = i;
    new_hunk_start = j;
    ori_hunk_end = i;
    new_hunk_end = j;

    while (i < ori_len ||
            j < new_len) {
        while (i < ori_len &&
            ori_is_in_lcs[i] === false) {
            i++;
        }
        ori_hunk_end = i;

        while (j < new_len &&
            new_is_in_lcs[j] === false) {
            j++;
        }
        new_hunk_end = j;

        // Find the trailing context
        trailing_context = [];
        while (i < ori_len &&
            ori_is_in_lcs[i] === true &&
            j < new_len &&
            new_is_in_lcs[j] === true) {
            trailing_context.push(ori_lines[i]);
            k++;
            i++;
            j++;
        }

        if (k >= lcs_len || // No more in longest common lines
            trailing_context.length >= 2 * context_lines) {// Context break found
            if (trailing_context.length < 2 * context_lines) {// It must be last block of common lines but not a context break
                trailing_context = [];

                // Force break out
                i = ori_len;
                j = new_len;

                // Update hunk ends to force output to the end
                ori_hunk_end = ori_len;
                new_hunk_end = new_len;
            }

            // Output the diff hunk

            // Trim the leading and trailing context block
            actual_leading_context = regularize_leading_context(leading_context);
            actual_trailing_context = regularize_trailing_context(trailing_context);

            ori_hunk_start -= actual_leading_context.length;
            new_hunk_start -= actual_leading_context.length;
            ori_hunk_end += actual_trailing_context.length;
            new_hunk_end += actual_trailing_context.length;

            ori_hunk_line_no = ori_hunk_start + 1;
            new_hunk_line_no = new_hunk_start + 1;
            ori_hunk_size = ori_hunk_end - ori_hunk_start;
            new_hunk_size = new_hunk_end - new_hunk_start;

            // Build header
            unidiff += HEADER_PREFIX +
                        ORIGINAL_INDICATOR + ori_hunk_line_no +
                        RANGE_SEPARATOR + ori_hunk_size +
                         ' ' +
                        NEW_INDICATOR + new_hunk_line_no +
                        RANGE_SEPARATOR + new_hunk_size +
                        HEADER_SUFFIX +
                        NEW_LINE;

            // Build the diff hunk content
            while (ori_hunk_start < ori_hunk_end ||
                  new_hunk_start < new_hunk_end) {
                if (ori_hunk_start < ori_hunk_end &&
                    ori_is_in_lcs[ori_hunk_start] === true &&
                    new_is_in_lcs[new_hunk_start] === true) {// The context line
                    unidiff += CONTEXT_INDICATOR +
                               ori_lines[ori_hunk_start] +
                               NEW_LINE;
                    ori_hunk_start++;
                    new_hunk_start++;
                }
                else if (ori_hunk_start < ori_hunk_end &&
                    ori_is_in_lcs[ori_hunk_start] === false) {// The deletion line
                    unidiff += DELETION_INDICATOR +
                               ori_lines[ori_hunk_start] +
                               NEW_LINE;
                    ori_hunk_start++;
                }
                else if (new_hunk_start < new_hunk_end &&
                    new_is_in_lcs[new_hunk_start] === false) {// The additional line
                    unidiff += ADDITION_INDICATOR +
                               new_lines[new_hunk_start] +
                               NEW_LINE;
                    new_hunk_start++;
                }
            }

            // Update hunk position and leading context
            ori_hunk_start = i;
            new_hunk_start = j;
            leading_context = trailing_context;
        }
    }

    // Trim the trailing new line if it exists
    if( unidiff.length > 0 &&
        unidiff.charAt(unidiff.length) === NEW_LINE) {
        unidiff = unidiff.slice(0, -1);
    }

    return unidiff;
};

exports.xdiff_string_patch = function (originalStr, patch, flags, error) {
    // !No description available for xdiff_string_patch. @php.js developers: Please update the function summary text file.
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/xdiff_string_patch
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Steven Levithan (stevenlevithan.com)
    // %        note 1: The XDIFF_PATCH_IGNORESPACE flag and the error argument are not currently supported
    // %        note 2: This has not been widely tested
    // *     example 1: \php.xdiff_string_patch('', '@@ -0,0 +1,1 @@\n+Hello world!');
    // *     returns 1: 'Hello world!'

    // First two functions were adapted from Steven Levithan, also under an MIT license
    // Adapted from XRegExp 1.5.0
    // (c) 2007-2010 Steven Levithan
    // MIT License
    // <http://xregexp.com>
    var getNativeFlags = regex => (regex.global     ? "g" : "") +
           (regex.ignoreCase ? "i" : "") +
           (regex.multiline  ? "m" : "") +
           (regex.extended   ? "x" : "") + // Proposed for ES4; included in AS3
           (regex.sticky     ? "y" : "");

    var cbSplit = function (str, s /* separator */) {
        // If separator `s` is not a regex, use the native `split`
        if (!(s instanceof RegExp)) { // Had problems to get it to work here using prototype test
            return String.prototype.split.apply(str, arguments);
        }
        str = str + '';
        var output = [],
            lastLastIndex = 0,
            match, lastLength, limit = Infinity;

        // This is required if not `s.global`, and it avoids needing to set `s.lastIndex` to zero
        // and restore it to its original value when we're done using the regex
        var x = s._xregexp;
        s = new RegExp(s.source, getNativeFlags(s) + 'g'); // Brett paring down
        if (x) {
            s._xregexp = {
                source: x.source,
                captureNames: x.captureNames ? x.captureNames.slice(0) : null
            };
        }

        while ((match = s.exec(str))) { // Run the altered `exec` (required for `lastIndex` fix, etc.)
            if (s.lastIndex > lastLastIndex) {
                output.push(str.slice(lastLastIndex, match.index));

                if (match.length > 1 && match.index < str.length)
                    Array.prototype.push.apply(output, match.slice(1));

                lastLength = match[0].length;
                lastLastIndex = s.lastIndex;

                if (output.length >= limit)
                    break;
            }

            if (s.lastIndex === match.index)
                s.lastIndex++;
        }

        if (lastLastIndex === str.length) {
            if (!s.test("") || lastLength)
                output.push("");
        } else {
            output.push(str.slice(lastLastIndex));
        }

        return output.length > limit ? output.slice(0, limit) : output;
    };

    var i = 0;
    var ll = 0;
    var ranges = [];
    var lastLinePos = 0;
    var firstChar = '';
    var rangeExp = /^@@\s+-(\d+),(\d+)\s+\+(\d+),(\d+)\s+@@$/;
    var lineBreaks = /\r?\n/;
    var lines = cbSplit(patch.replace(/(\r?\n)+$/, ''), lineBreaks);
    var origLines = cbSplit(originalStr, lineBreaks);
    var newStrArr = [];
    var linePos = 0;
    var errors = '';

    var // Both string & integer (constant) input is allowed
    optTemp = 0;

    var OPTS = { // Unsure of actual PHP values, so better to rely on string
        'XDIFF_PATCH_NORMAL': 1,
        'XDIFF_PATCH_REVERSE': 2,
        'XDIFF_PATCH_IGNORESPACE': 4
    };

    // Input defaulting & sanitation
    if (typeof originalStr !== 'string' || !patch) {return false;}
    if (!flags) {flags = 'XDIFF_PATCH_NORMAL';}

    if (typeof flags !== 'number') { // Allow for a single string or an array of string flags
        flags = [].concat(flags);
        for (i=0; i < flags.length; i++) {
            // Resolve string input to bitwise e.g. 'XDIFF_PATCH_NORMAL' becomes 1
            if (OPTS[flags[i]]) {
                optTemp = optTemp | OPTS[flags[i]];
            }
        }
        flags = optTemp;
    }

    if (flags & OPTS.XDIFF_PATCH_NORMAL) {
        for (i=0, ll = lines.length; i < ll; i++) {
            ranges = lines[i].match(rangeExp);
            if (ranges) {
                lastLinePos = linePos;
                linePos = ranges[1] - 1;
                while (lastLinePos < linePos) {
                    newStrArr[newStrArr.length] = origLines[lastLinePos++];
                }
                while (lines[++i] && (rangeExp.exec(lines[i])) == null) {
                    firstChar = lines[i].charAt(0);
                    switch (firstChar) {
                        case '-':
                            ++linePos; // Skip including that line
                            break;
                        case '+':
                            newStrArr[newStrArr.length] = lines[i].slice(1);
                            break;
                        case ' ':
                            newStrArr[newStrArr.length] = origLines[linePos++];
                            break;
                        default:
                            throw 'Unrecognized initial character in unidiff line'; // Reconcile with returning errrors arg?
                    }
                }
                if (lines[i]) { i--; }
            }
        }
    }
    else if (flags & OPTS.XDIFF_PATCH_REVERSE) { // Only differs from above by a few lines
        for (i=0, ll = lines.length; i < ll; i++) {
            ranges = lines[i].match(rangeExp);
            if (ranges) {
                lastLinePos = linePos;
                linePos = ranges[3] - 1;
                while (lastLinePos < linePos) {
                    newStrArr[newStrArr.length] = origLines[lastLinePos++];
                }
                while (lines[++i] && (rangeExp.exec(lines[i])) == null) {
                    firstChar = lines[i].charAt(0);
                    switch (firstChar) {
                        case '-':
                            newStrArr[newStrArr.length] = lines[i].slice(1);
                            break;
                        case '+':
                            ++linePos; // Skip including that line
                            break;
                        case ' ':
                            newStrArr[newStrArr.length] = origLines[linePos++];
                            break;
                        default:
                            throw 'Unrecognized initial character in unidiff line'; // Reconcile with returning errrors arg?
                    }
                }
                if (lines[i]) { i--; }
            }
        }
    }
    if (typeof (error === 'string')) {
        this.window[error] = errors;
    }
    return newStrArr.join('\n');
};


