import React from "react";
import { connect } from "react-redux";
import { Entity, BillboardGraphics, EllipseGraphics } from "resium";
import { Cartesian3, Color, VerticalOrigin } from "cesium";

const SearchMarker = props => {
	if (props.visible) {
		return (
			<React.Fragment>
				<Entity
					name={"Search point"}
					description={
						"This shows the point you last searched on the map, which is " +
						Math.abs(props.searchPoint.latitude) +
						"&deg;" +
						(props.searchPoint.latitude > 0 ? "N" : "S") +
						" by " +
						Math.abs(props.searchPoint.longitude) +
						"&deg;" +
						(props.searchPoint.longitude > 0 ? "E" : "W")
					}
					position={Cartesian3.fromDegrees(
						props.searchPoint.longitude,
						props.searchPoint.latitude,
					)}
				>
					<BillboardGraphics
						image={"navigation-5109671_1280.png"}
						scale={0.03}
						verticalOrigin={VerticalOrigin.BOTTOM}
					/>
				</Entity>
				<Entity
					name={"Search area (range: " + props.range + "km)"}
					description={
						"This shows the area around the search point within a range of " +
						props.range +
						"km."
					}
					position={Cartesian3.fromDegrees(
						props.searchPoint.longitude,
						props.searchPoint.latitude,
					)}
				>
					<EllipseGraphics
						material={Color.BLUE.withAlpha(0.3)}
						semiMinorAxis={props.range * 1000.0}
						semiMajorAxis={props.range * 1000.0}
						extrudedHeight={1000.0}
						outline
						outlineColor={Color.GREEN}
						outlineWidth={2.0}
					/>
				</Entity>
			</React.Fragment>
		);
	} else {
		return null;
	}
};

const mapStateToProps = state => {
	return {
		visible: state.map.searchMarkerVisible,
		searchPoint: {
			longitude: state.searchParameters.longitude,
			latitude: state.searchParameters.latitude,
		},
		range: state.searchParameters.range,
	};
};

export default connect(
	mapStateToProps,
	{},
)(SearchMarker);
