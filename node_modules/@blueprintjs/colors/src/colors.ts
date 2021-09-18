/*
 * Copyright 2021 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const grayScale = {
    BLACK: "#101318",

    DARK_GRAY1: "#1b2028",
    DARK_GRAY2: "#232a34",
    DARK_GRAY3: "#2e3642",
    DARK_GRAY4: "#353e4b",
    DARK_GRAY5: "#404a59",

    GRAY1: "#5f6d81",
    GRAY2: "#728197",
    GRAY3: "#8d99aa",
    GRAY4: "#aab3c0",
    GRAY5: "#c4cbd4",

    LIGHT_GRAY1: "#d3d8de",
    LIGHT_GRAY2: "#dce0e5",
    LIGHT_GRAY3: "#e5e7eb",
    LIGHT_GRAY4: "#edf0f3",
    LIGHT_GRAY5: "#f6f7f9",

    WHITE: "#FFFFFF",
};

const coreColors = {
    BLUE1: "#164e9c",
    BLUE2: "#125abe",
    BLUE3: "#0b62da",
    BLUE4: "#428efa",
    BLUE5: "#80b5ff",

    GREEN1: "#0b602e",
    GREEN2: "#0d7337",
    GREEN3: "#109347",
    GREEN4: "#21b65e",
    GREEN5: "#5bcd8a",

    ORANGE1: "#97570c",
    ORANGE2: "#b76e1a",
    ORANGE3: "#d48326",
    ORANGE4: "#f09f42",
    ORANGE5: "#fbae56",

    RED1: "#a52226",
    RED2: "#bc2025",
    RED3: "#da1b21",
    RED4: "#f3585d",
    RED5: "#ff8a8e",
};

// Extended colors are still using the "legacy" palette
const extendedColors = {
    COBALT1: "#1F4B99",
    COBALT2: "#2458B3",
    COBALT3: "#2965CC",
    COBALT4: "#4580E6",
    COBALT5: "#669EFF",

    FOREST1: "#1D7324",
    FOREST2: "#238C2C",
    FOREST3: "#29A634",
    FOREST4: "#43BF4D",
    FOREST5: "#62D96B",

    GOLD1: "#A67908",
    GOLD2: "#BF8C0A",
    GOLD3: "#D99E0B",
    GOLD4: "#F2B824",
    GOLD5: "#FFC940",

    INDIGO1: "#5642A6",
    INDIGO2: "#634DBF",
    INDIGO3: "#7157D9",
    INDIGO4: "#9179F2",
    INDIGO5: "#AD99FF",

    LIME1: "#728C23",
    LIME2: "#87A629",
    LIME3: "#9BBF30",
    LIME4: "#B6D94C",
    LIME5: "#D1F26D",

    ROSE1: "#A82255",
    ROSE2: "#C22762",
    ROSE3: "#DB2C6F",
    ROSE4: "#F5498B",
    ROSE5: "#FF66A1",

    SEPIA1: "#63411E",
    SEPIA2: "#7D5125",
    SEPIA3: "#96622D",
    SEPIA4: "#B07B46",
    SEPIA5: "#C99765",

    TURQUOISE1: "#008075",
    TURQUOISE2: "#00998C",
    TURQUOISE3: "#00B3A4",
    TURQUOISE4: "#14CCBD",
    TURQUOISE5: "#2EE6D6",

    VERMILION1: "#9E2B0E",
    VERMILION2: "#B83211",
    VERMILION3: "#D13913",
    VERMILION4: "#EB532D",
    VERMILION5: "#FF6E4A",

    VIOLET1: "#5C255C",
    VIOLET2: "#752F75",
    VIOLET3: "#8F398F",
    VIOLET4: "#A854A8",
    VIOLET5: "#C274C2",
};

/**
 * Blueprint 5.x "modernized" colors
 */
export const Colors = {
    ...grayScale,
    ...coreColors,
    ...extendedColors,
};
