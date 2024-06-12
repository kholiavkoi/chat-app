import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import Logout from "./Logout";
import { FaPeopleGroup } from "react-icons/fa6";

const Contacts = ({ contacts, currentUser, changeChat }) => {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    if (currentUser) {
      setCurrentUserImage(currentUser.avatarImage);
      setCurrentUserName(currentUser.username);
    }
  }, [currentUser]);

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <>
      {currentUserImage && currentUserName && (
        <Container>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h3>Chatty</h3>
          </div>
          <div className="contacts">
            <div
              onClick={() =>
                changeCurrentChat("general", {
                  username: "General",
                  avatarImage: "",
                  _id: "general",
                })
              }
              className={`contact ${
                currentSelected === "general" ? "selected" : ""
              }`}
            >
              <span>
                <FaPeopleGroup />
              </span>

              <div className="username">
                <h3>General</h3>
              </div>
            </div>
            {contacts.map((contact, index) => (
              <div
                onClick={() => changeCurrentChat(index, contact)}
                className={`contact ${
                  index === currentSelected ? "selected" : ""
                }`}
                key={index}
              >
                <div className="avatar">
                  <img
                    src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                    alt="avatar"
                  />
                </div>

                <div className="username">
                  <h3>{contact.username}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
              <h2>{currentUserName}</h2>
            </div>

            <Logout />
          </div>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color: #080420;
  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    img {
      height: 3rem;
    }
    h3 {
      color: #fff;
      text-transform: uppercase;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: #ffffff39;
      min-height: 5rem;
      width: 90%;
      cursor: pointer;
      border-radius: 0.2rem;
      padding: 0.4rem;
      gap: 1rem;
      align-items: center;
      display: flex;
      transition: 0.5s ease-in-out;
      span {
        color: #fff;
        padding: 0.5rem;
        svg {
          font-size: 2rem;
        }
      }
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: #fff;
        }
      }
    }
    .selected {
      background-color: #9186f3;
    }
  }
  .current-user {
    padding-inline: 20px;
    background-color: #0d0d30;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    .avatar {
      display: flex;
      align-items: center;
      gap: 1rem;
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
      h2 {
        color: #fff;
      }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;

export default Contacts;
