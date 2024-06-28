interface BrandIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string
}

export function BrandIcon({ color = "currentColor", ...props }: BrandIconProps) {
  return (
    <div className={color}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="1080"
        height="1080"
        viewBox="0 0 1080 1080"
        xmlSpace="preserve"
        {...props}
        fill="currentColor"
      >
        <g
          transform="matrix(2.68 0 0 2.68 540 540)"
          id="Camada_1"
        >
          <path
            fill="currentColor"
            transform=" translate(-540, -506.34)"
            d="M 421.31 559.1 C 416.08778802347194 570.8460187858511 413.3830807603719 583.5554177765644 413.37 596.4100000000001 C 413.37 626.22 427.85 653.22 451.25 672.7600000000001 C 474.65 692.3000000000002 507 704.3900000000001 542.72 704.3900000000001 C 578.44 704.3900000000001 610.72 692.3000000000001 634.1800000000001 672.7600000000001 C 657.6400000000001 653.2200000000001 672.07 626.2200000000001 672.07 596.4100000000001 C 672.07 566.6 657.59 539.6100000000001 634.1800000000001 520.07 C 618.36 506.86000000000007 598.45 497.07000000000005 576.1800000000001 492.07000000000005 C 575.5500000000001 488.01000000000005 574.72 483.77000000000004 573.58 479.30000000000007 C 569.8377205205524 465.0048943367488 564.3955755385987 451.2098457674412 557.37 438.21000000000004 C 550.75 426 543 415 534.9 407.9 L 526.67 400.59999999999997 L 528.6 411 C 532.9200000000001 434.4 533.91 450.29 529.4200000000001 464 C 526.35 473.42 520.6300000000001 482 511.5900000000001 491.56 C 490.2292288438561 495.8165303994829 470.1793222032129 505.0687518880723 453.08000000000015 518.56 C 457.3300000000001 502.92999999999995 468.3500000000001 491.71999999999997 480.2200000000001 479.7099999999999 C 490.99000000000007 468.80999999999995 502.4000000000001 457.25999999999993 510.5100000000001 441.1699999999999 C 521.0500000000001 420.2799999999999 524.1600000000001 398.8999999999999 520.9700000000001 378.1699999999999 C 517.6200000000001 356.3699999999999 507.34000000000015 335.3099999999999 491.45000000000016 316.2899999999999 L 484.78000000000014 308.2899999999999 L 484.72000000000014 318.4099999999999 C 484.41000000000014 368.5299999999999 472.84000000000015 382.00999999999993 455.72000000000014 401.9699999999999 C 446.32000000000016 412.9699999999999 435.3000000000001 425.7699999999999 423.48000000000013 447.2199999999999 C 415.6200000000001 461.4799999999999 410.0600000000001 476.5399999999999 408.42000000000013 493.2699999999999 C 406.78000000000014 509.99999999999994 409.0700000000001 528.27 416.90000000000015 549.04 C 418.2001854777845 552.4652399373933 419.6720497214382 555.8228259444584 421.31 559.1 Z M 453.91 670.5600000000001 C 447.3697132826521 665.1254089420088 441.47450332142785 658.9584220844503 436.34000000000003 652.1800000000001 L 464.86 652.1800000000001 C 468.5371433094929 659.4530855739454 473.025714821724 666.2865834591582 478.23999999999995 672.5500000000001 C 487.35306975026947 683.6494594710676 498.97655164020546 692.4210578657436 512.15 698.1400000000001 C 489.75 693.46 469.73 683.77 453.91 670.56 Z M 473 543.76 C 470.48 555.01 470.63 566.76 470.81 579.9 C 470.81 581.59 470.86 583.31 470.87 585.04 C 467.4178814356257 580.3177382002117 464.2906765390776 575.366330447344 461.51 570.2199999999999 C 460.76 568.81 460.05 567.3799999999999 459.34999999999997 565.93 C 461.2615974920134 558.2889405843999 463.9419328117907 550.8610613294671 467.34999999999997 543.76 Z M 469 540.64 C 472.4445398370706 534.0323115122454 476.5882661755439 527.8133694751355 481.36 522.09 C 482.86 520.3000000000001 484.42 518.58 486.02000000000004 516.9200000000001 C 480.3431225898472 523.8875416258805 476.1904273277837 531.9680938503388 473.83000000000004 540.6400000000001 Z M 457 560.54 C 454.7763736391343 555.1426008243983 453.15977509627726 549.514691374369 452.18 543.76 L 463.35 543.76 C 460.81675106855187 549.1866928880903 458.69412958309204 554.7957619473053 457 560.54 Z M 469.27 615 C 476.99 621.79 483.87 627.85 488.56 633.54 L 495.38 641.8 L 495.31 631.4 C 495.2161592815962 621.8667341014499 498.3531679960771 612.5825981981435 504.21 605.06 C 504.55573711611675 619.8300242990331 506.11768633633227 634.5464623481728 508.88 649.06 L 467.37 649.06 C 460.46574902813865 634.5976459994862 456.52829922440316 618.8988500203441 455.79 602.89 C 460.39 607.2 465 611.23 469.27 615 Z M 481.27 670.71 C 476.53350972764605 664.9866349050326 472.4202948863043 658.7749094763396 469 652.18 L 509.56 652.18 C 510.96260164059873 658.9168296859193 512.7725926553619 665.5623686515627 514.98 672.0799999999999 C 519.58 685.4 525.48 695.3199999999999 532.19 700.4499999999999 C 512.42 697.57 494.71 686.75 481.31 670.74 Z M 542.68 701.2 C 533.4699999999999 701.2 524.9 689.72 518.4899999999999 671.2 C 516.3789290779863 664.9753303949994 514.6392029500521 658.6308397173123 513.2799999999999 652.2 L 572.0799999999998 652.2 C 570.7207970499476 658.6308397173123 568.9810709220134 664.9753303949994 566.8699999999998 671.2 C 560.5 689.75 551.93 701.23 542.72 701.23 Z M 570.4699999999999 672.0500000000001 C 572.6785165597229 665.5335199836614 574.4852423464463 658.8877079400762 575.8799999999999 652.1500000000001 L 616.4499999999999 652.1500000000001 C 613.0031655993 658.7594439133175 608.8596219389199 664.9814641670922 604.0899999999999 670.71 C 590.6899999999999 686.71 572.9799999999999 697.5400000000001 553.2599999999999 700.4200000000001 C 560 695.32 565.9 685.4 570.51 672.08 Z M 629.84 598 C 629.71470634819 615.6886566625312 625.6926548374447 633.1323418649063 618.0600000000001 649.09 L 576.5600000000001 649.09 C 579.737454293293 632.2453765148514 581.3410296865665 615.1416882387898 581.3500000000001 598 Z M 576.5600000000001 543.79 L 618.0600000000001 543.79 C 625.6914097869898 559.7480934619779 629.7133963832416 577.1914971294232 629.84 594.88 L 581.35 594.88 C 581.3424277579838 577.7283114202941 579.7388483040921 560.6145365386782 576.56 543.7600000000001 Z M 631.5600000000001 670.5899999999999 C 615.74 683.8 595.72 693.4899999999999 573.32 698.17 C 586.4920888216083 692.4487271935126 598.1150618946567 683.6775127747774 607.23 672.5799999999999 C 612.444285178276 666.3165834591582 616.9328566905072 659.4830855739452 620.61 652.21 L 649.1 652.2099999999999 C 643.9637141481604 658.9779129146104 638.0685703104698 665.1347649021814 631.53 670.56 Z M 651.3900000000001 649.0899999999999 L 622.11 649.0899999999999 C 629.5441464912808 633.0758128665196 633.4620222795186 615.6550753538069 633.6 598 L 668.29 598 C 667.8767818533479 616.3295552284474 661.9797694423258 634.1146381408388 651.36 649.06 Z M 668.32 594.8799999999999 L 633.6 594.8799999999999 C 633.4620222795186 577.224924646193 629.5441464912808 559.8041871334801 622.11 543.7899999999997 L 651.36 543.7899999999998 C 661.979769442326 558.735361859161 667.876781853348 576.5204447715525 668.29 594.85 Z M 631.5600000000001 522.2899999999998 C 638.0979489543078 527.7270968253864 643.99288816184 533.8938004471532 649.1300000000001 540.6699999999998 L 620.58 540.6699999999998 C 616.9028566905072 533.3969144260545 612.414285178276 526.5634165408416 607.2 520.2999999999998 C 598.8800318002907 510.2176259792725 588.4971807692932 502.0340980730676 576.75 496.29999999999984 C 576.75 496.03999999999985 576.75 495.77999999999986 576.66 495.5099999999998 C 597.69 500.41 616.51 509.73 631.53 522.26 Z M 577.1700000000001 500.15999999999985 C 587.5391121243273 505.6314224540519 596.7170054856769 513.10970593367 604.1700000000001 522.1599999999999 C 608.9417338244562 527.8833694751353 613.0854601629294 534.1023115122451 616.53 540.7099999999997 L 575.92 540.7099999999998 C 575.26 537.5799999999998 574.53 534.5699999999998 573.77 531.6499999999999 C 576.77 522.66 578.12 512.34 577.14 500.13 Z M 571.45 537.5999999999999 C 571.6800000000001 538.5999999999999 571.9200000000001 539.5999999999999 572.1500000000001 540.67 L 569.9700000000001 540.67 C 570.46 539.64 571 538.62 571.42 537.57 Z M 531.1 580.7599999999999 C 544.89 570.2999999999998 559.26 559.3999999999999 568.28 543.7599999999999 L 572.79 543.7599999999999 C 575.9979560387914 560.6007833032571 577.6117567999845 577.7064017450319 577.61 594.8499999999999 L 513.61 594.8499999999999 C 518.92 590 524.93 585.4 531.07 580.73 Z M 510.39 598 L 577.5799999999999 598 C 577.5827661485173 615.1436456954139 575.9689564505071 632.2493588637423 572.76 649.0899999999998 L 512.68 649.09 C 509.6306868234069 633.1202977382047 508.03084679754875 616.9076929573328 507.8999999999999 600.6500000000001 C 508.7 599.72 509.53 598.84 510.39 598 Z M 451.94 524 C 452.6 523.42 453.24 522.82 453.94 522.25 C 468.63 509.99 486.94 500.81 507.46 495.81 C 506.65999999999997 496.59 505.84999999999997 497.38 505.01 498.18 C 494.78237851557645 503.7854559440296 485.70911191436767 511.27751752049517 478.27000000000004 520.26 C 473.055714821724 526.5234165408418 468.5671433094928 533.3569144260547 464.89 540.63 L 451.71 540.63 C 451.0074599480433 535.1032511345337 451.08488330493975 529.5052058076302 451.94 524 Z M 451.88 599.15 C 452.167185246503 616.4007701235323 456.0677462447734 633.399721548309 463.33 649.05 L 434.08 649.05 C 423.4635401902759 634.1060734935471 417.56362731306206 616.3262297874215 417.14 598 L 450.66999999999996 598 Z M 423.53 563.3 C 430.0666786885062 574.8504238500891 438.14032025148964 585.4605344707763 447.53000000000003 594.8399999999999 L 417.14 594.8399999999999 C 417.34345082657893 584.0298022982096 419.50858644113066 573.3464336085669 423.53 563.31 Z"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  )
}
