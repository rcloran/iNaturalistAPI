const ObservationSoundsController = require( "../../../../lib/controllers/v2/observation_sounds_controller" );

module.exports = sendWrapper => {
  async function PUT( req, res ) {
    const results = await ObservationSoundsController.update( req );
    sendWrapper( req, res, null, results );
  }

  PUT.apiDoc = {
    tags: ["ObservationPhotos"],
    summary: "Update an observation sound",
    security: [{
      userJwtRequired: []
    }],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/ObservationSoundsUpdate"
          }
        }
      }
    },
    responses: {
      200: {
        description: "A list of observation sounds",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ResultsObservationSounds"
            }
          }
        }
      }
    }
  };

  async function DELETE( req, res ) {
    await ObservationSoundsController.delete( req );
    sendWrapper( req, res, null, null );
  }

  DELETE.apiDoc = {
    tags: ["ObservationSounds"],
    summary: "Delete an observation sound",
    security: [{
      userJwtRequired: []
    }],
    responses: {
      200: {
        description: "No response body; success implies deletion"
      }
    }
  };

  return {
    PUT,
    DELETE
  };
};
