const { LocationConstants } = require(`../constants/LocationConstants`);

class LocationUtil {
  static getRegionPath(regionName) {
    return regionName && LocationConstants.regionPath[regionName];
  };

  static getRegionTitle(regionName) {
    return regionName && LocationConstants.regionTitle[regionName];
  }

  static getRegionCountries(regionName) {
    return regionName && LocationConstants.regionCountries[regionName]
  }

  // return the region name of a plant's location countries
  static getRegionByLocation(plantLocations=[]) {
    let region;
    Object.keys(LocationConstants.regionCountries).forEach(key=>{
      if(LocationConstants.regionCountries[key].some(item => plantLocations.includes(item))) {
        region = key;
      };
    });
    return region;
  }

  // return the 'path' portion of a url associated w/a plant's location countries
  static getRegionUrlPathByLocation(location) {
    const regionPath = location && this.getRegionPath(this.getRegionByLocation(location));
    return `/aloes-from-${regionPath}/`;
  }

  // return the region title associated w/a plant's location countries
  static getRegionTitleByLocation(location) {
    return location && this.getRegionTitle(this.getRegionByLocation(location));
  }
}

export default LocationUtil;
