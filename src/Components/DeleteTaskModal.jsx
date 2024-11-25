/* eslint-disable react/prop-types */
import { Box, Modal } from "@mui/material";

const DeleteTaskModal = ({ 
    SureToDelete, 
    openDeleteMod, 
    setDeleteTaskId, 
    setOpenDeleteMod 
}) => {
    // Closing modal on "No" click
    const handleNoSureToDelete = () => {
        setDeleteTaskId(null);
        setOpenDeleteMod(false);
    };

    return (
        <Modal
            open={openDeleteMod}
            onClose={handleNoSureToDelete}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    width: { xs: "90%", sm: 300 }, // Responsive width
                    height: 200,
                    border: "3px solid red",
                    backgroundColor: "yellow",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "rgb(8, 180, 168)",
                    fontWeight: 900,
                    borderRadius: 2, // Adds rounded corners
                    boxShadow: 3, // Adds shadow for better visibility
                }}
            >
                <div
                    style={{
                        textAlign: "center",
                        fontSize: "1.2rem",
                        marginBottom: "20px",
                    }}
                >
                    Are you sure?
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        width: "100%",
                        gap: "10px", // Space between buttons
                    }}
                >
                    <button
                        onClick={SureToDelete}
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "green",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            fontSize: "1rem",
                            cursor: "pointer",
                            transition: "background-color 0.3s",
                        }}
                        onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = "yellow")
                        }
                        onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "green")
                        }
                    >
                        Yes
                    </button>
                    <button
                        onClick={handleNoSureToDelete}
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "red",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            fontSize: "1rem",
                            cursor: "pointer",
                            transition: "background-color 0.3s",
                        }}
                        onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = "darkred")
                        }
                        onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "red")
                        }
                    >
                        No
                    </button>
                </div>
            </Box>
        </Modal>
    );
};

export default DeleteTaskModal;
