import {type RouteConfig, index, route, layout} from "@react-router/dev/routes";
// import layout from "~/routes/admin/layout";

export default [
    layout("routes/admin/layout.tsx", [
        route('dashboard', 'routes/admin/dashboard.tsx', ),
        route('master-data-table', 'routes/inputs/master-data-table.tsx'),
        // route('master-data-table-test', 'routes/inputs/test/master-data-table-test.tsx'),
    ]),
    layout("routes/admin/auth-layout.tsx", [
        route('sign-in' , 'routes/auth/sign-in.tsx'),
        route('sign-up', 'routes/auth/sign-up.tsx'),
        // index('routes/auth/sign-in.tsx'),
    ]),
    // index("routes/home.tsx"),
    // index("routes/admin/dashboard.tsx"),
] satisfies RouteConfig;
