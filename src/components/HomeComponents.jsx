import Card from "./subComponents/Card";

const HomeComp = () => {
    return ( <div className="tester  w-full md:h-[90%]   h-full overflow-y-auto">
        <div className="grid gap-[10px] grid-cols-[repeat(2,minmax(auto,2fr))] sm:grid-cols-[repeat(2,minmax(200px,1fr))] md:grid-cols-[repeat(3,minmax(200px,1fr))] lg:grid-cols-[repeat(4,minmax(190px,1fr))] px-0 sm:px-6 lg:max-w-[1230px] mx-auto">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div> );
}
 
export default HomeComp;