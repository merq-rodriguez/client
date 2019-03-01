import React, { Component } from "react";
import { connect } from "react-redux";
import cafe from "../../assets/images/cafe.png";
import cafebar from "../../assets/images/cafe-bar.png";
import bar_pub from "../../assets/images/bar-pub.png";
import bar from "../../assets/images/barimage.png";

import "./styles.scss";

class Welcome extends Component {
  state = {};

  welcomePufy = e => {
    e.preventDefault();
  };

  render() {
    const { history } = this.props;
    return (
      <div className="container ">
        <div className="card px-5 py-3">
          <div className="row">
            <div className="col-12 text-center header-welcome">
              <h2>Bienvendio Puffy</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <label htmlFor="">Registra tu establecimiento</label>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <label htmlFor="">Nombre del establecimiento</label>
                  </div>
                  <div className="col-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>

                <label htmlFor="">Dias de atencion</label>
                <div className="row">
                  <div className="col">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="checkLunes"
                      />
                      <label class="custom-control-label" for="checkLunes">
                        {" "}
                        L{" "}
                      </label>
                    </div>
                  </div>

                  <div className="col">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="checkMartes"
                      />
                      <label class="custom-control-label" for="checkMartes">
                        {" "}
                        M{" "}
                      </label>
                    </div>
                  </div>

                  <div className="col">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="checkMiercoles"
                      />
                      <label class="custom-control-label" for="checkMiercoles">
                        {" "}
                        M{" "}
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="checkJueves"
                      />
                      <label class="custom-control-label" for="checkJueves">
                        {" "}
                        J{" "}
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="checkViernes"
                      />
                      <label class="custom-control-label" for="checkViernes">
                        {" "}
                        V{" "}
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="checkSabado"
                      />
                      <label class="custom-control-label" for="check">
                        {" "}
                        S{" "}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <label htmlFor="">Horario de atencion</label>
                  </div>
                  <div className="col-3">
                    <input type="time" />
                  </div>
                  <div className="col-3">
                    <input type="time" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <label htmlFor="">Dirección</label>
                  </div>
                  <div className="col-12">
                    <input type="text" name="" id="" />
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-12 overflow-hidden ">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/eda5/d672/5b18b80c124cd6049f4a3bb7d68537c4?Expires=1552262400&Signature=ODQNeZgbVqklPKZeD-4DzlepJ2ic2Wr6I3rgJ92NKpuCLTjxabkr-gkXVVWC2WuiBvwJKEvcawKNbZKkzoQPmeFJW16Cgcx8e~LgTvGNoEueFK63SH2PGY0E2JMPttJTw7Db~9NJHDc9Pf911rbc41Nc036eHQYq29WCk8P~0bqHI7Sno~vlhWSXWczEGlCEJaHwL9~ZDUlvAjgbvxN7GHFUli3Et~VgUwLDqsgHLRceKRASjkmZxrqHh0AcPtnpMQqFffobu3nYh~Slzq~1AlvjRbJ9DSCyeDG2rBiaDFD-yLPaDxQBrWPLH7OLPUhtZVqNlA7-j5AuboAXdjZpJQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="container">
                <div className="row">
                  <div className="col-12">Categoria</div>
                  <div className="col-4 category-item-cafe">
                    <img src={cafe} />
                    <label htmlFor="">Cafe</label>
                  </div>
                  <div className="col-4 category-item-cafebar">
                    <img src={cafebar} />
                    <label htmlFor="">Cafe/bar</label>
                  </div>
                  <div className="col-4 category-item-barpub">
                    <img src={bar_pub} />
                    <label htmlFor="">Bar Pub</label>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <label htmlFor="">Imagenes</label>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-3">
                        <div className="upload" />
                      </div>
                      <div className="col-3">
                        <div className="upload overflow-hidden">
                          <img src={bar} alt="" srcset="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">Color caracteristico</div>
                  <div className="row">
                    <div className="col">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="checkLunes"
                        />
                        <label class="custom-control-label" for="checkLunes">
                          
                        </label>
                      </div>
                    </div>

                    <div className="col">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="checkMartes"
                        />
                        <label class="custom-control-label" for="checkMartes">
                          
                        </label>
                      </div>
                    </div>

                    <div className="col">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="checkMiercoles"
                        />
                        <label
                          class="custom-control-label"
                          for="checkMiercoles"
                        >
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="checkJueves"
                        />
                        <label class="custom-control-label" for="checkJueves">
                          
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="checkViernes"
                        />
                        <label class="custom-control-label" for="checkViernes">
                         
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="checkSabado"
                        />
                        <label class="custom-control-label" for="check">
                         
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <label htmlFor="">Logo</label></div>
                    <div className="col-12">
                    <div className="row">
                      <div className="col-3">
                        <div className="upload" />
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
