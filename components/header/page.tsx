import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Input } from "@/components/ui/input"


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { FaUserCircle } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

// Cards
import { Card, CardHeader } from "../ui/card";
// Dark mode
import { ModeToggle } from "../theme/page";
// Buttons
import { Button } from "../ui/button";

import '../style/header/style.css';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {


    return (
        <>


            <Card className="card">
                <Select defaultValue="pt">
                    <SelectTrigger id='select' className="w-[150px]">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="pt">
                            <div className="flex items-center">
                                <Avatar className="mr-2">
                                    <AvatarImage src='https://raw.githubusercontent.com/Ronald-Luiz/trips/main/assets/Images/BR.png' />
                                    <AvatarFallback>BR</AvatarFallback>
                                </Avatar>

                            </div>
                        </SelectItem>
                        <SelectItem value="en">
                            <div className="flex items-center">
                                <Avatar className="mr-2">
                                    <AvatarImage src='https://raw.githubusercontent.com/Ronald-Luiz/trips/main/assets/Images/EUA.png' />
                                    <AvatarFallback>EN</AvatarFallback>
                                </Avatar>

                            </div>
                        </SelectItem>
                    </SelectContent>
                </Select>

                <div className="flex justify-between items-center mx-4">
                    <ModeToggle />

                    <CardHeader>
                        <div className="flex ml-auto">
                            <div className="flex m-2">
                                <FaUserCircle className="m-2" size={'25px'} />


                                <Popover>
                                    <PopoverTrigger>Minhas Reservas</PopoverTrigger>
                                    <PopoverContent className="w-80 flex flex-wrap justify-center m-2">

                                        <strong>Insira seus dados de compra</strong>

                                        <Input className="m-3" type="email" placeholder="Email" />
                                        <Input className="m-3" type="documento" placeholder="Documento" />
                                        <Button className="bg-[#15803d]">Acessar</Button>

                                    </PopoverContent>
                                </Popover>



                            </div>

                            <Button variant="outline" className="m-2">
                                <GiShoppingCart size={'25px'} />

                            </Button>
                        </div>

                        <div className="menuMobile">
                            <Sheet>
                                <SheetTrigger>open</SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle className="flex justify-center"></SheetTitle>
                                        <SheetDescription className="flex flex-col items-center">
                                            <Button variant="outline" className="m-2">
                                                <FaUserCircle className="m-2" size={'25px'} />



                                                <Popover>
                                                    <PopoverTrigger>Minhas Reservas</PopoverTrigger>
                                                    <PopoverContent className="w-80 flex flex-wrap justify-center m-2">

                                                        <strong>Insira seus dados de compra</strong>

                                                        <Input className="m-3" type="email" placeholder="Email" />
                                                        <Input className="m-3" type="documento" placeholder="Documento" />
                                                        <Button className="bg-[#15803d]">Acessar</Button>

                                                    </PopoverContent>
                                                </Popover>




                                            </Button>


                                            <Button variant="outline" className="m-2">
                                                <GiShoppingCart className="m-2.5" size={'25px'} />
                                                <p>Carrinho</p>
                                            </Button>
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>

                            </Sheet>
                        </div>
                    </CardHeader>


                </div>

                <div>
                    <ul className="flex flex-wrap justify-center">
                        <li>
                            <Button variant="outline">Quem somos</Button>
                        </li>

                        <li>
                            <Button variant="outline">Nossos Produtos</Button>
                        </li>

                        {/* <li>
                            <Button variant="outline">Seguro Viagem</Button>
                        </li>

                        <li>
                            <Button variant="outline">Circuito das Trilhas</Button>
                        </li>

                        <li>
                            <Button variant="outline">Pontos de Embarque</Button>
                        </li>

                        <li>
                            <Button variant="outline">Temporada de Montanha</Button>
                        </li>

                        <li>
                            <Button variant="outline">Condições Gerais/Contrato</Button>
                        </li>

                        <li>
                            <Button variant="outline">Contato</Button>
                        </li> */}

                    </ul>
                </div>

            </Card>

        </>
    );
}

export default Header;
