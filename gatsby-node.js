 /**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// gatsby node is run through node (not babel) and supports the es6 module syntax  'require' vs 'import'
const { FunctionalUseConstants } = require(`./constants/FunctionalUseConstants`);
const { LocationConstants } = require(`./constants/LocationConstants`);

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const aloeResults = await graphql(`
    {
      allAloesJson {
        totalCount
        edges {
          node {
            slug
            category
          }
        }
      }
    }
  `)
  /*-- 1 search facet --*/
  const locations = await graphql(`
    {
      western:allAloesJson(filter:{location: { in: ["ghana","togo","burkina","benin","nigeria","cameroon","gabon","congo republic"] }}) {
        totalCount
        edges {
          node {
            slug
            title
            origin_history
          }
        }
      }
      eastern:allAloesJson(filter:{location: { in: ["tanzania","kenya","somalia","ethiopia","eritrea","south sudan","uganda"] }}) {
        totalCount
        edges {
          node {
            slug
            title
            origin_history
          }
        }
      }
      southern:allAloesJson(filter:{location: { in: ["south africa","lesotho","angola","zambia","malawi","zimbabwe","mozambique","nambia","swaziland","botswana"] }}) {
        totalCount
        edges {
          node {
            slug
            title
            origin_history
          }
        }
      }
      madagascan:allAloesJson(filter:{location: { in: ["madagascar","mauritius","réunion","comoros","seychelles"] }}) {
        totalCount
        edges {
          node {
            slug
            title
            origin_history
          }
        }
      }
      arabian:allAloesJson(filter:{location: { in: ["yemen","saudi arabia"] }}) {
        totalCount
        edges {
          node {
            slug
            title
            origin_history
          }
        }
      }
      hybrid:allAloesJson(filter:{location: { in: ["hybrid"] }}) {
        totalCount
        edges {
          node {
            slug
            title
            origin_history
          }
        }
      }
    }
  `)

  const flowerColors = await graphql(`
    {
      yellow:allAloesJson(filter:{flower_color: { in: ["yellow"] }}) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      red:allAloesJson(filter:{flower_color: { in: ["red"] }}) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      orange:allAloesJson(filter:{flower_color: { in: ["orange"] }}) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      green:allAloesJson(filter:{flower_color: { in: ["green"] }}) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      salmon:allAloesJson(filter:{flower_color: { in: ["salmon"] }}) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      white:allAloesJson(filter:{flower_color: { in: ["white"] }}) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      coral:allAloesJson(filter:{flower_color: { in: ["coral"] }}) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
    }
  `)
  const seasons = await graphql(`
    {
      winter:allAloesJson(filter:{bloom_time: { in: ["winter","early_winter","mid_winter","late_winter"] }}) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      spring:allAloesJson(filter:{bloom_time: { in: ["spring","early_spring","late_spring"] }}) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      summer:allAloesJson(filter:{bloom_time: { in: ["summer","early_summer","mid_summer"] }}) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      fall:allAloesJson(filter:{bloom_time: { in: ["fall","late_fall"] }}) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
    }
  `)
  const functionalUses = await graphql(`
    {
      accent:allAloesJson(filter:{function: { eq: "accent" }}) {
        totalCount
        edges {
          node {
            slug
            title
            use
          }
        }
      }
      barrier:allAloesJson(filter:{function: { eq: "barrier" }}) {
        totalCount
        edges {
          node {
            slug
            title
            use
          }
        }
      }
      borders:allAloesJson(filter:{function: { eq: "borders" }}) {
        totalCount
        edges {
          node {
            slug
            title
            use
          }
        }
      }
      ground_cover:allAloesJson(filter:{function: { eq: "ground_cover" }}) {
        totalCount
        edges {
          node {
            slug
            title
            use
          }
        }
      }
      specimen:allAloesJson(filter:{function: { eq: "specimen" }}) {
        totalCount
        edges {
          node {
            slug
            title
            use
          }
        }
      }
    }
  `)
  const categoryResults = await graphql(`
    {
      allCategoriesJson {
        edges {
          node {
            slug
            name
            title
            description
          }
        }
      }
    }
  `)
  /*-- 2 search facets --*/
  const categoryColorFacets = await graphql(`
    query {
      clumping_red:allAloesJson(filter:{
        flower_color: { in:["red"] },
        category: {eq: "clumping"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      tree_red:allAloesJson(filter:{
        flower_color: { in:["red"] },
        category: {eq: "tree"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      large_clumping_red:allAloesJson(filter:{
        flower_color: { in:["red"] },
        category: {eq: "large_clumping"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      red_red:allAloesJson(filter:{
        flower_color: { in:["red"] },
        category: {eq: "red"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      single_head_tree_red:allAloesJson(filter:{
        flower_color: { in:["red"] },
        category: {eq: "single_head_tree"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      single_head_stemless_red:allAloesJson(filter:{
        flower_color: { in:["red"] },
        category: {eq: "single_head_stemless"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      branching_red:allAloesJson(filter:{
        flower_color: { in:["red"] },
        category: {eq: "branching"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      grass_red:allAloesJson(filter:{
        flower_color: { in:["red"] },
        category: {eq: "grass"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      maculate_red:allAloesJson(filter:{
        flower_color: { in:["red"] },
        category: {eq: "maculate"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      mosaic_red:allAloesJson(filter:{
        flower_color: { in:["red"] },
        category: {eq: "mosaic"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }

      clumping_yellow:allAloesJson(filter:{
        flower_color: { in:["yellow"] },
        category: {eq: "clumping"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      tree_yellow:allAloesJson(filter:{
        flower_color: { in:["yellow"] },
        category: {eq: "tree"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      large_clumping_yellow:allAloesJson(filter:{
        flower_color: { in:["yellow"] },
        category: {eq: "large_clumping"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      red_yellow:allAloesJson(filter:{
        flower_color: { in:["yellow"] },
        category: {eq: "red"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      single_head_tree_yellow:allAloesJson(filter:{
        flower_color: { in:["yellow"] },
        category: {eq: "single_head_tree"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      single_head_stemless_yellow:allAloesJson(filter:{
        flower_color: { in:["yellow"] },
        category: {eq: "single_head_stemless"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      branching_yellow:allAloesJson(filter:{
        flower_color: { in:["yellow"] },
        category: {eq: "branching"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      grass_yellow:allAloesJson(filter:{
        flower_color: { in:["yellow"] },
        category: {eq: "grass"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      maculate_yellow:allAloesJson(filter:{
        flower_color: { in:["yellow"] },
        category: {eq: "maculate"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      mosaic_yellow:allAloesJson(filter:{
        flower_color: { in:["yellow"] },
        category: {eq: "mosaic"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }

      clumping_orange:allAloesJson(filter:{
        flower_color: { in:["orange"] },
        category: {eq: "clumping"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      tree_orange:allAloesJson(filter:{
        flower_color: { in:["orange"] },
        category: {eq: "tree"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      large_clumping_orange:allAloesJson(filter:{
        flower_color: { in:["orange"] },
        category: {eq: "large_clumping"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      red_orange:allAloesJson(filter:{
        flower_color: { in:["orange"] },
        category: {eq: "red"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      single_head_tree_orange:allAloesJson(filter:{
        flower_color: { in:["orange"] },
        category: {eq: "single_head_tree"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      single_head_stemless_orange:allAloesJson(filter:{
        flower_color: { in:["orange"] },
        category: {eq: "single_head_stemless"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      branching_orange:allAloesJson(filter:{
        flower_color: { in:["orange"] },
        category: {eq: "branching"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      grass_orange:allAloesJson(filter:{
        flower_color: { in:["orange"] },
        category: {eq: "grass"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      maculate_orange:allAloesJson(filter:{
        flower_color: { in:["orange"] },
        category: {eq: "maculate"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
      mosaic_orange:allAloesJson(filter:{
        flower_color: { in:["orange"] },
        category: {eq: "mosaic"}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            overview
          }
        }
      }
    }
  `)
  const seasonColorFacets = await graphql(`
    query {
      winter_yellow:allAloesJson(filter:{
        flower_color: { in:["yellow"] },
        bloom_time: {in:["winter","early_winter","mid_winter","late_winter"]}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      spring_yellow:allAloesJson(filter:{
        flower_color: { in:["yellow"] },
        bloom_time: {in:["spring","early_spring","late_spring"]}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      summer_yellow:allAloesJson(filter:{
        flower_color: { in:["yellow"] },
        bloom_time: {in:["summer","early_summer","late_summer"]}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      fall_yellow:allAloesJson(filter:{
        flower_color: { in:["yellow"] },
        bloom_time: {in:["fall","early_fall","late_fall"]}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      winter_red:allAloesJson(filter:{
        flower_color: { in:["red"] },
        bloom_time: {in:["winter","early_winter","mid_winter","late_winter"]}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      spring_red:allAloesJson(filter:{
        flower_color: { in:["red"] },
        bloom_time: {in:["spring","early_spring","mid_spring","late_spring"]}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      summer_red:allAloesJson(filter:{
        flower_color: { in:["red"] },
        bloom_time: {in:["summer","early_summer","late_summer"]}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      fall_red:allAloesJson(filter:{
        flower_color: { in:["red"] },
        bloom_time: {in:["fall","early_fall","late_fall"]}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      winter_salmon:allAloesJson(filter:{
        flower_color: { in:["salmon"] },
        bloom_time: {in:["winter","early_winter","mid_winter","late_winter"]}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      spring_salmon:allAloesJson(filter:{
        flower_color: { in:["salmon"] },
        bloom_time: {in:["spring","early_spring","mid_spring","late_spring"]}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      summer_salmon:allAloesJson(filter:{
        flower_color: { in:["salmon"] },
        bloom_time: {in:["summer","early_summer","mid_summer","late_summer"]}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      fall_salmon:allAloesJson(filter:{
        flower_color: { in:["salmon"] },
        bloom_time: {in:["fall","early_fall","mid_fall","late_fall"]}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      winter_orange:allAloesJson(filter:{
        flower_color: { in:["orange"] },
        bloom_time: {in:["winter","early_winter","mid_winter","late_winter"]}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      spring_orange:allAloesJson(filter:{
        flower_color: { in:["orange"] },
        bloom_time: {in:["spring","early_spring","late_spring"]}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      summer_orange:allAloesJson(filter:{
        flower_color: { in:["orange"] },
        bloom_time: {in:["summer","early_summer","mid_summer","late_summer"]}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      fall_orange:allAloesJson(filter:{
        flower_color: { in:["orange"] },
        bloom_time: {in:["fall","early_fall","late_fall"]}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }

      winter_white:allAloesJson(filter:{
        flower_color: { in:["white"] },
        bloom_time: {in:["winter","early_winter","mid_winter","late_winter"]}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      spring_white:allAloesJson(filter:{
        flower_color: { in:["white"] },
        bloom_time: {in:["spring","early_spring","late_spring"]}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      summer_white:allAloesJson(filter:{
        flower_color: { in:["white"] },
        bloom_time: {in:["summer","early_summer","mid_summer","late_summer"]}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
      fall_white:allAloesJson(filter:{
        flower_color: { in:["white"] },
        bloom_time: {in:["fall","early_fall","late_fall"]}
      }) {
        totalCount
        edges {
          node {
            slug
            title
            flowering
          }
        }
      }
    }
  `)

  // extra context 'regex' props created here so they can be used as filters in template queries.
  aloeResults.data.allAloesJson.edges.forEach(edge => {
    const aloe = edge.node
    createPage({
      path: `/${aloe.slug}/`,
      component: require.resolve("./src/templates/aloe-profile.js"),
      context: {
        slug: aloe.slug,
        category_name: aloe.category,
        image_regex: `/${aloe.slug}/`,
        image_hero_regex: `/${aloe.slug}-hero/`
      },
    })
  })

  // image_hero_regex: `/${aloe.slug}-hero/` // no 'aloe'
  categoryResults.data.allCategoriesJson.edges.forEach(edge => {
    const cat = edge.node
    createPage({
      path: `/${cat.slug}/`,
      component: require.resolve("./src/templates/aloes_by_a_category.js"),
      context: {
        category_name: cat.name,
        category_title: cat.title,
        category_description: cat.description,
        category_slug: cat.slug,
      },
    })
  })

  // create season specific pages
  const seasonNames = Object.keys(seasons.data)
  seasonNames.forEach(seasonName => {
    const season = seasons.data[seasonName];
    createPage({
      path: `/aloes-that-bloom-in-${seasonName}/`,
      component: require.resolve("./src/templates/aloes_by_a_season.js"),
      context: {
        season_name: seasonName,
        totalCount: season.totalCount,
        edges: season.edges,
        image_hero_regex: `/[a-z]*-hero/`
      },
    })
  });

  // create color specific pages
  const flowerColorNames = Object.keys(flowerColors.data)
  flowerColorNames.forEach(colorName => {
    const color = flowerColors.data[colorName];
    createPage({
      path: `/aloes-with-${colorName}-flowers/`,
      component: require.resolve("./src/templates/aloes_by_a_color.js"),
      context: {
        color_name: colorName,
        totalCount: color.totalCount,
        edges: color.edges,
        image_hero_regex: `/[a-z]*-hero/`
      },
    })
  });

  // create season/color specific pages
  const seasonColorFacetNames = Object.keys(seasonColorFacets.data)
  seasonColorFacetNames.forEach(facetComboName => {
    const facets = facetComboName.split('_');
    const facetCombo = seasonColorFacets.data[facetComboName];
    const seasonName = facets[0];
    const colorName = facets[1];
    createPage({
      path: `/${seasonName}-blooming-aloes-with-${colorName}-flowers/`,
      component: require.resolve("./src/templates/aloes_by_color_and_season.js"),
      context: {
        color_name: colorName,
        season_name: seasonName,
        totalCount: facetCombo.totalCount,
        edges: facetCombo.edges,
        image_hero_regex: `/[a-z]*-hero/`
      },
    })
  });

  // create category/color specific pages
  const categoryColorFacetNames = Object.keys(categoryColorFacets.data)
  categoryColorFacetNames.forEach(facetComboName => {
    const facets = facetComboName.split('_');
    const facetCombo = categoryColorFacets.data[facetComboName];
    const colorName = facets.pop();
    const categoryName = facets.join('-');

    createPage({
      path: `/${categoryName}-aloes-with-${colorName}-flowers/`,
      component: require.resolve("./src/templates/aloes_by_category_and_color.js"),
      context: {
        color_name: colorName,
        category_name: categoryName,
        totalCount: facetCombo.totalCount,
        edges: facetCombo.edges,
        image_hero_regex: `/[a-z]*-hero/`
      },
    })
  });

  // create location (region) specific pages
  const regionNames = Object.keys(locations.data)
  regionNames.forEach(regionName => {
    const region = locations.data[regionName];
    const regionPath = LocationConstants.regionPath[regionName];
    const regionTitle = LocationConstants.regionTitle[regionName];
    const regionCountries = LocationConstants.regionCountries[regionName];

    createPage({
      path: `/aloes-from-${regionPath}/`,
      component: require.resolve("./src/templates/aloes_from_a_region.js"),
      context: {
        regionName,
        regionTitle,
        regionCountries,
        totalCount: region.totalCount,
        edges: region.edges,
        image_hero_regex: `/[a-z]*-hero/`,
        image_map_regex: `/map-region-${regionName}/`
      },
    })
  });

  // create functional use pages
  const functionalUseNames = Object.keys(functionalUses.data);
  functionalUseNames.forEach(functionalUseName => {
    const functionalUse = functionalUses.data[functionalUseName];

    createPage({
      path: `${FunctionalUseConstants.pathNames[functionalUseName]}`,
      component: require.resolve("./src/templates/aloes_by_functional_use.js"),
      context: {
        useName: functionalUseName,
        totalCount: functionalUse.totalCount,
        edges: functionalUse.edges,
        image_hero_regex: `/[a-z]*-hero/`
      },
    })
  });
}
